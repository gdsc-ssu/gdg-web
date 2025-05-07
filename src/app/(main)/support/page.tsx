import type { Metadata } from 'next';
import SupporterPortraitGroup from '@/app/components/support/SupporterPortraitGroup';
import SupporterCard from '@/app/components/support/SupporterCard';
import { SupporterInfo } from '@/types/supporter';
import { supporters } from './supporters';  

export const metadata: Metadata = {
  title: 'Support | GDSC Soongsil',
  description: 'GDSC Soongsil의 발전을 위해 도움 주신 분들입니다.',
};

const SupporterCardFactory = ({ supporters }: { supporters: Array<SupporterInfo> }) => {
  return (
    <div className="flex flex-col gap-10">
      {supporters.map((supporter, index) => (
        <SupporterCard key={index} supporterInfo={supporter} reverse={index % 2 !== 0} />
      ))}
    </div>
  );
};

export default function SupportPage() {
  return (
    <main className="w-full pt-24">
      <section className="max-w-[1280px] mx-auto px-[101px] sm:px-[52px]">
        <h1 className="
        text-[72px] font-extrabold text-center text-primary-black
        sm:text-[36px]
        md:text-[48px]
        lg:text-[60px]
        xl:text-[72px]
        ">
          Support
        </h1>
        <h1 className="text-center text-primary-blue text-xl font-medium m-20">
        GDGoC Soongsil의 발전을 위해 도움 주신 분들입니다.
        </h1>
        <div className="flex flex-col gap-20">
        <SupporterPortraitGroup images={supporters.map((supporter) => supporter.profile)} names={supporters.map((supporter) => supporter.name)} />
        <SupporterCardFactory supporters={supporters} />
        </div>
        <div className="h-[200px]"> </div>
      </section>
    </main>
  );
} 