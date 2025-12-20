import type { Metadata } from "next";
import PageContainer from "@/app/components/common/PageContainer";
import YoutubeVideoPlayer from "@/app/components/common/YoutubeVideoPlayer";

export const metadata: Metadata = {
  title: "About | GDSC Soongsil",
  description: "GDSC Soongsil의 다양한 활동들을 소개합니다.",
};

export default function AboutPage() {
  return (
    <PageContainer>
      <p className="text-style-subTitle font-normal max-md:text-[32px]">Google Developer Groups on Campus</p>
      <p className="text-style-body14 text-center max-w-[800px] mt-4">
        Google Developer Groups on Campus는 Google이 지원하는 대학교 기반 동아리로, Google 기술에 관심 있는 학생들을 위한 개발자 커뮤니티입니다.
        <br />
        전세계 111개국에 1,863개 가량의 GDGoC Chapter가 있으며, 우리나라에서는 35개 대학 Chapter가 운영됩니다.
        <br />
        GDGoC Soongsil(전 GDSC Soongsil)는 2021년부터 지금까지 성공적으로 운영되고 있는 GDGoC Chapter 입니다.
        <br />
        이번 5기는 누구나 자유롭게 자신의 지식과 경험을 나누고, 서로에게 배우는 커뮤니티를 지향합니다.
      </p>
      <YoutubeVideoPlayer videoId="UGE13GR9_CU" />
    </PageContainer>
  );
}
