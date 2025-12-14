'use client';

import ActivitySection from '@/app/components/main/ActivitySection';
import BrandSection from '@/app/components/main/BrandSection';
import HeroSection from '@/app/components/main/HeroSection';
import PictureSection from '@/app/components/main/PictureSection';
import { useHybridScroll } from '@/hooks/useHybridScroll';
import { useEffect } from 'react';

const LandingPage = () => {
    useHybridScroll();

    useEffect(() => {
        window.history.scrollRestoration = 'manual';
        window.scrollTo(0, 0);
    }, []);

    return (
        <main className="flex flex-col justify-center items-center w-full min-h-screen">
            <BrandSection />
            <ActivitySection />
            <PictureSection />
        </main>
    );
};

export default LandingPage;
