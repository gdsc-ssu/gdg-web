import ActivitySection from '@/app/components/main/ActivitySection';
import BrandSection from '@/app/components/main/BrandSection';
import HeroSection from '@/app/components/main/HeroSection';
import PictureSection from '@/app/components/main/PictureSection';
import NavBar from '@/app/components/NavBar';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'GDSC Soongsil University',
  description: 'GDSC Soongsil University는 서로의 실력과 무관하게 시너지를 발휘하는 학생 개발자 커뮤니티입니다.',
  openGraph: {
    title: 'GDSC Soongsil University',
    description: 'GDSC Soongsil University는 서로의 실력과 무관하게 시너지를 발휘하는 학생 개발자 커뮤니티입니다.',
    url: 'https://gdscsoongsil.pages.dev',
    images: [
      {
        url: 'https://gdscsoongsil.pages.dev/opengraph.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'ko_KR',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'GDSC Soongsil University',
    description: 'GDSC Soongsil University는 서로의 실력과 무관하게 시너지를 발휘하는 학생 개발자 커뮤니티입니다.',
    images: ['https://gdscsoongsil.pages.dev/opengraph.png'],
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
  },
};

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center w-full min-h-screen pt-24">
      <NavBar />
      <HeroSection />
      <BrandSection />
      {/* <ActivitySection /> */}
      {/* <PictureSection /> */}
    </main>
  );
} 