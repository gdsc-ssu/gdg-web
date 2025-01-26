import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'People | GDSC Soongsil',
  description: 'GDSC Soongsil의 멤버들을 소개합니다.',
};

export default function PeoplePage() {
  return (
    <main className="w-full min-h-screen pt-24">
      <section className="max-w-[1280px] mx-auto px-[101px] sm:px-[52px]">
        <h1 className="text-[64px] font-bold lg:text-[48px] sm:text-[36px]">
          People
        </h1>
        {/* People 컨텐츠 */}
      </section>
    </main>
  );
} 