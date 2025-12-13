import type { Metadata } from 'next';
import SupporterPortraitGroup from '@/app/components/support/SupporterPortraitGroup';
import SupporterList from '@/app/components/support/SupporterList';
import PageContainer from '@/app/components/common/PageContainer';
import PageTitle from '@/app/components/common/PageTitle';
import { supporters } from './supporters';

export const metadata: Metadata = {
  title: 'Support | GDSC Soongsil',
  description: 'GDSC Soongsil의 발전을 위해 도움 주신 분들입니다.',
};

export default function SupportPage() {
  return (
    <PageContainer>
      <PageTitle>Support</PageTitle>
      <h1 className="text-center text-primary-blue text-xl font-medium m-20">
        GDGoC Soongsil의 발전을 위해 도움 주신 분들입니다.
      </h1>
      <div className="flex flex-col gap-20">
        <SupporterPortraitGroup images={supporters.map((supporter) => supporter.profile)} names={supporters.map((supporter) => supporter.name)} />
        <SupporterList supporters={supporters} />
      </div>
      <div className="h-[200px]"> </div>
    </PageContainer>
  );
} 