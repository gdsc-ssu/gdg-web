import type { Metadata } from "next";
import PageContainer from "@/app/components/common/PageContainer";
import YoutubeVideoPlayer from "@/app/components/common/YoutubeVideoPlayer";
import InfoSection from "@/app/components/about/InfoSection";

export const metadata: Metadata = {
  title: "About | GDGoC Soongsil",
  description: "GDGoC Soongsil의 다양한 활동들을 소개합니다.",
};

export default function AboutPage() {
  return (
    <PageContainer>
      <p className="text-style-subTitle max-md:text-[32px]">Google Developer Groups on Campus</p>
      <div className="w-full h-[50px]"></div>
      <p className="text-style-body14 text-neutral-grey text-center max-w-[1440px]">
        Google Developer Groups on Campus는 Google이 지원하는 대학교 기반 동아리로, Google 기술에 관심 있는 학생들을 위한 개발자 커뮤니티입니다.
        <br />
        전세계 111개국에 1,863개 가량의 GDGoC Chapter가 있으며, 우리나라에서는 35개 대학 Chapter가 운영됩니다.
        <br />
        GDGoC Soongsil(전 GDGoC Soongsil)는 2021년부터 지금까지 성공적으로 운영되고 있는 GDGoC Chapter 입니다.
        <br />
        이번 5기는 누구나 자유롭게 자신의 지식과 경험을 나누고, 서로에게 배우는 커뮤니티를 지향합니다.
      </p>
      <YoutubeVideoPlayer videoId="UGE13GR9_CU" />
      <div className="w-full h-[210px]"></div>
      <p className="text-style-subTitle max-md:text-[32px]">GDGoC Soongsil</p>
      <div className="w-full h-[40px]"></div>
      <p className="text-style-body14 text-neutral-grey text-center max-w-[1440px]">
        GDGoC Soongsil은 단순한 기술 학습을 넘어, 즐거움이 동력이 되는 지속 가능한 성장의 장(場)을 만들기 위해 존재합니다.
        <br />
        GDG on Campus Soongsil University는 ‘실력 너머의 유쾌함으로 세상을 바꾼다’는 이념 아래
        <br />
        서로의 지식과 경험을 공유하고 집단 지성의 힘을 발휘하며,
        <br />
        숭실대학교에 개방적이고 즐거운 개발 문화가 정착할 수 있도록 기여하는 학생 개발자 커뮤니티입니다.
      </p>
      <div className="w-full h-[80px]"></div>
      <p className="text-style-subTitle max-md:text-[32px]">우리가 함께 만들어갈, GDGoC Soongsil의 모습</p>
      <div className="w-full h-[40px]"></div>
      <InfoSection />
      <div className="w-full h-[100px]"></div>
    </PageContainer>
  );
}
