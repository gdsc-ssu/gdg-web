import type { Metadata } from 'next';
import PageContainer from '@/app/components/common/PageContainer';
import SupportButton from '@/app/components/support/SupportButton';
import SupporterSection from '@/app/components/support/SupporterSection';

export const metadata: Metadata = {
  title: 'Support | GDGoC Soongsil',
  description: 'GDGoC Soongsil의 발전을 위해 도움 주신 분들입니다.',
};



export default function SupportPage() {
  return (
    <PageContainer>
      <h2 className="text-style-subTitle text-neutral-black">Support</h2>
      <div className="flex flex-col items-center text-center">
        <div className="w-full h-[60px]" />
        <p className="text-style-body14 text-neutral-grey max-w-[800px]">
          GDGoC Soongsil은 기술을 사랑하고 성장을 꿈꾸는 학생들이 모여 서로의 지식을 나누는 공간입니다.
          <br />
          우리는 혼자만의 성장이 아닌, '함께'의 가치를 믿으며 더 넓은 세상으로 나아가기 위해 치열하게 고민하고 도전합니다.
        </p>

        <div className="w-full h-[20px]" />

        <p className="text-style-body14 text-neutral-grey max-w-[800px]">
          여러분의 소중한 후원은 더 양질의 세미나와 해커톤, 그리고 지속 가능한 커뮤니티를 만드는 단단한 기반이 됩니다.
          <br />
          열정 있는 예비 개발자들이 마음껏 꿈을 펼칠 수 있도록, GDGoC Soongsil의 든든한 러닝메이트가 되어주세요.
        </p>
      </div>

      <div className="w-full h-[120px]" />
      <SupportButton />
      <div className="w-full h-[200px]" />

      <h2 className="text-style-subTitle text-neutral-black">Hall of Fame</h2>
      <div className="flex flex-col items-center text-center">
        <div className="w-full h-[60px]" />
        <p className="text-style-body14 text-neutral-grey max-w-[800px]">
          GDGoC Soongsil은 기술을 사랑하고 성장을 꿈꾸는 학생들이 모여 서로의 지식을 나누는 공간입니다.
          <br />
          우리는 혼자만의 성장이 아닌, '함께'의 가치를 믿으며 더 넓은 세상으로 나아가기 위해 치열하게 고민하고 도전합니다.
        </p>
      </div>

      <SupporterSection />
    </PageContainer>
  );
} 