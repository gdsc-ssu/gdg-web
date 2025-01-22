import ActivitySection from '@/app/components/main/ActivitySection';
import BrandSection from '@/app/components/main/BrandSection';
import HeroSection from '@/app/components/main/HeroSection';
import PictureSection from '@/app/components/main/PictureSection';

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <BrandSection />
      <ActivitySection />
      <PictureSection />
    </main>
  );
} 