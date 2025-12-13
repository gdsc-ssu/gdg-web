import { useEffect, useRef } from 'react';

export const useHybridScroll = () => {
    const stepsRef = useRef<Record<number, number>>({});
    const lastScrollTime = useRef(0);

    useEffect(() => {
        const handleWheel = (e: WheelEvent) => {
            const main = document.querySelector('main');
            if (!main) return;

            const sections = Array.from(main.children) as HTMLElement[];
            const currentScroll = window.scrollY;
            const threshold = 5;
            const viewportHeight = window.innerHeight;

            const currentSectionIndex = sections.findIndex(section => {
                const { offsetTop, offsetHeight } = section;
                return currentScroll >= offsetTop - 2 && currentScroll < offsetTop + offsetHeight - 2;
            });

            if (currentSectionIndex === -1) return;

            const currentSection = sections[currentSectionIndex];
            const isStatic = currentSection.offsetHeight <= viewportHeight + 10;

            const stepsAttr = currentSection.getAttribute('data-steps');
            const maxSteps = stepsAttr ? parseInt(stepsAttr, 10) : 1;
            const isStepped = maxSteps > 1;

            if (stepsRef.current[currentSectionIndex] === undefined) {
                stepsRef.current[currentSectionIndex] = 0;
            }

            const currentStep = stepsRef.current[currentSectionIndex];

            const dispatchStep = (step: number) => {
                window.dispatchEvent(new CustomEvent('hybrid-scroll-step', {
                    detail: {
                        sectionId: currentSection.id,
                        step
                    }
                }));
            };

            if (e.deltaY < -threshold) {
                if (isStepped && currentStep > 0) {
                    e.preventDefault();
                    if (Date.now() - lastScrollTime.current > 500) {
                        stepsRef.current[currentSectionIndex] = currentStep - 1;
                        dispatchStep(currentStep - 1);
                        lastScrollTime.current = Date.now();
                    }
                    return;
                }

                const atTopBoundary = Math.abs(currentScroll - currentSection.offsetTop) < 10;
                if (atTopBoundary) {
                    const prevSection = sections[currentSectionIndex - 1];
                    if (prevSection && (prevSection.offsetHeight <= viewportHeight + 10)) {
                        e.preventDefault();

                        if (Date.now() - lastScrollTime.current < 500) {
                            return;
                        }

                        const prevStepsAttr = prevSection.getAttribute('data-steps');
                        if (prevStepsAttr) {
                            const prevMax = parseInt(prevStepsAttr, 10);
                            stepsRef.current[currentSectionIndex - 1] = prevMax - 1;

                            window.dispatchEvent(new CustomEvent('hybrid-scroll-step', {
                                detail: {
                                    sectionId: prevSection.id,
                                    step: prevMax - 1
                                }
                            }));
                        }

                        lastScrollTime.current = Date.now();
                        window.scrollTo({ top: prevSection.offsetTop, behavior: "smooth" });
                    }
                }
            }

            // Rule 2: Forward Scroll
            else if (e.deltaY > threshold) {
                // If stepped and not at end, increment step
                if (isStepped && currentStep < maxSteps - 1) {
                    e.preventDefault();
                    if (Date.now() - lastScrollTime.current > 500) {
                        stepsRef.current[currentSectionIndex] = currentStep + 1;
                        dispatchStep(currentStep + 1);
                        lastScrollTime.current = Date.now();
                    }
                    return;
                }

                // Snap to Next Section
                // If we are at the last step (isStepped is true here means we fell through the above block)
                // OR if the section is static, we should snap to next.
                // We use (isStatic || isStepped) because if isStepped is true, we know we are at the last step
                // and should behave like a static section transition effectively.
                if (isStatic || isStepped) {
                    const nextSection = sections[currentSectionIndex + 1];
                    if (nextSection) {
                        e.preventDefault();

                        // Check throttle to prevent immediate section change after step change
                        if (Date.now() - lastScrollTime.current < 500) {
                            return;
                        }

                        // Reset next section step to 0 ONLY if we are actually moving to it
                        // (This logic was already here but just reaffirming context)


                        // Reset next section step to 0
                        stepsRef.current[currentSectionIndex + 1] = 0;
                        // Dispatch reset for next section just in case
                        window.dispatchEvent(new CustomEvent('hybrid-scroll-step', {
                            detail: {
                                sectionId: nextSection.id,
                                step: 0
                            }
                        }));

                        // Reset throttle to prevent immediate step change from inertia
                        lastScrollTime.current = Date.now();
                        window.scrollTo({ top: nextSection.offsetTop, behavior: "smooth" });
                    }
                }
            }
        };

        window.addEventListener("wheel", handleWheel, { passive: false });

        return () => {
            window.removeEventListener("wheel", handleWheel);
        };
    }, []);
};

