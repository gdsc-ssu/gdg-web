import { useEffect, useRef, useCallback } from 'react';

const SCROLL_THRESHOLD = 5;
const SCROLL_THROTTLE_MS = 500;

interface ScrollEventDetail {
    sectionId: string;
    step: number;
}

export const useHybridScroll = () => {
    const stepsRef = useRef<Record<number, number>>({});
    const lastScrollTime = useRef(0);

    const getMainSections = useCallback((): HTMLElement[] => {
        const main = document.querySelector('main');
        return main ? (Array.from(main.children) as HTMLElement[]) : [];
    }, []);

    const getCurrentSectionIndex = useCallback((sections: HTMLElement[]): number => {
        const currentScroll = window.scrollY;
        return sections.findIndex(section => {
            const { offsetTop, offsetHeight } = section;
            return currentScroll >= offsetTop - 2 && currentScroll < offsetTop + offsetHeight - 2;
        });
    }, []);

    const dispatchStepEvent = useCallback((sectionId: string, step: number) => {
        window.dispatchEvent(new CustomEvent<ScrollEventDetail>('hybrid-scroll-step', {
            detail: { sectionId, step }
        }));
    }, []);

    const handleUpwardScroll = useCallback((
        currentSectionIndex: number,
        sections: HTMLElement[],
        preventDefault: () => void
    ) => {
        const currentSection = sections[currentSectionIndex];
        const stepsAttr = currentSection.getAttribute('data-steps');
        const maxSteps = stepsAttr ? parseInt(stepsAttr, 10) : 1;
        const isStepped = maxSteps > 1;
        const currentStep = stepsRef.current[currentSectionIndex] || 0;

        if (isStepped && currentStep > 0) {
            preventDefault();
            if (Date.now() - lastScrollTime.current > SCROLL_THROTTLE_MS) {
                const prevStep = currentStep - 1;
                stepsRef.current[currentSectionIndex] = prevStep;
                dispatchStepEvent(currentSection.id, prevStep);
                lastScrollTime.current = Date.now();
            }
            return;
        }

        const currentScroll = window.scrollY;
        const atTopBoundary = Math.abs(currentScroll - currentSection.offsetTop) < 10;

        if (atTopBoundary) {
            const prevSectionIndex = currentSectionIndex - 1;
            const prevSection = sections[prevSectionIndex];
            const viewportHeight = window.innerHeight;

            if (prevSection && (prevSection.offsetHeight <= viewportHeight + 10)) {
                preventDefault();
                if (Date.now() - lastScrollTime.current < SCROLL_THROTTLE_MS) return;

                const prevStepsAttr = prevSection.getAttribute('data-steps');
                if (prevStepsAttr) {
                    const prevMax = parseInt(prevStepsAttr, 10);
                    const lastStep = prevMax - 1;
                    stepsRef.current[prevSectionIndex] = lastStep;
                    dispatchStepEvent(prevSection.id, lastStep);
                }

                lastScrollTime.current = Date.now();
                window.scrollTo({ top: prevSection.offsetTop, behavior: "smooth" });
            }
        }
    }, [dispatchStepEvent]);

    const handleDownwardScroll = useCallback((
        currentSectionIndex: number,
        sections: HTMLElement[],
        preventDefault: () => void
    ) => {
        const currentSection = sections[currentSectionIndex];
        const stepsAttr = currentSection.getAttribute('data-steps');
        const maxSteps = stepsAttr ? parseInt(stepsAttr, 10) : 1;
        const isStepped = maxSteps > 1;
        const currentStep = stepsRef.current[currentSectionIndex] || 0;
        const viewportHeight = window.innerHeight;
        const isStatic = currentSection.offsetHeight <= viewportHeight + 10;

        if (isStepped && currentStep < maxSteps - 1) {
            preventDefault();
            if (Date.now() - lastScrollTime.current > SCROLL_THROTTLE_MS) {
                const nextStep = currentStep + 1;
                stepsRef.current[currentSectionIndex] = nextStep;
                dispatchStepEvent(currentSection.id, nextStep);
                lastScrollTime.current = Date.now();
            }
            return;
        }

        if (isStatic || isStepped) {
            const nextSectionIndex = currentSectionIndex + 1;
            const nextSection = sections[nextSectionIndex];

            if (nextSection) {
                preventDefault();
                if (Date.now() - lastScrollTime.current < SCROLL_THROTTLE_MS) return;

                stepsRef.current[nextSectionIndex] = 0;
                dispatchStepEvent(nextSection.id, 0);

                lastScrollTime.current = Date.now();
                window.scrollTo({ top: nextSection.offsetTop, behavior: "smooth" });
            }
        }
    }, [dispatchStepEvent]);

    const handleScrollLogic = useCallback((deltaY: number, preventDefault: () => void) => {
        const sections = getMainSections();
        if (sections.length === 0) return;

        const currentSectionIndex = getCurrentSectionIndex(sections);
        if (currentSectionIndex === -1) return;

        if (stepsRef.current[currentSectionIndex] === undefined) {
            stepsRef.current[currentSectionIndex] = 0;
        }

        if (deltaY < -SCROLL_THRESHOLD) {
            handleUpwardScroll(currentSectionIndex, sections, preventDefault);
        } else if (deltaY > SCROLL_THRESHOLD) {
            handleDownwardScroll(currentSectionIndex, sections, preventDefault);
        }
    }, [getMainSections, getCurrentSectionIndex, handleUpwardScroll, handleDownwardScroll]);

    useEffect(() => {
        let touchStartY = 0;

        const handleWheel = (e: WheelEvent) => {
            handleScrollLogic(e.deltaY, () => e.preventDefault());
        };

        const handleTouchStart = (e: TouchEvent) => {
            touchStartY = e.touches[0].clientY;
        };

        const handleTouchMove = (e: TouchEvent) => {
            const currentY = e.touches[0].clientY;
            const deltaY = touchStartY - currentY;

            handleScrollLogic(deltaY, () => {
                if (e.cancelable) e.preventDefault();
            });

            touchStartY = currentY;
        };

        const handleKeyDown = (e: KeyboardEvent) => {
            if (['ArrowUp', 'ArrowLeft'].includes(e.key)) {
                handleScrollLogic(-100, () => e.preventDefault());
            } else if (['ArrowDown', 'ArrowRight'].includes(e.key)) {
                handleScrollLogic(100, () => e.preventDefault());
            }
        };

        window.addEventListener("wheel", handleWheel, { passive: false });
        window.addEventListener("touchstart", handleTouchStart, { passive: false });
        window.addEventListener("touchmove", handleTouchMove, { passive: false });
        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("wheel", handleWheel);
            window.removeEventListener("touchstart", handleTouchStart);
            window.removeEventListener("touchmove", handleTouchMove);
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [handleScrollLogic]);
};

