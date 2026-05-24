import type { Metadata } from "next";
import PageContainer from "@/app/components/common/PageContainer";
import MemberSection from "@/app/components/member/MemberList";
import GenerationBar from "@/app/components/member/GenerationBar";
import { memberService } from "@/app/services/memberService";

export const metadata: Metadata = {
  title: "Member | GDGoC Soongsil",
  description: "GDGoC Soongsil의 다양한 활동들을 소개합니다.",
};

export const dynamic = "force-dynamic";

interface MemberPageProps {
  searchParams?: Promise<{
    generation?: string | string[];
  }>;
}

export default async function MemberPage({ searchParams }: MemberPageProps) {
  const generations = await memberService.getGenerations();
  const params = await searchParams;
  const generationParam = Array.isArray(params?.generation)
    ? params?.generation[0]
    : params?.generation;
  const defaultGeneration = generations[0]?.title || "1";
  const selectedGeneration = generations.some(
    ({ title }) => title === generationParam
  )
    ? generationParam || defaultGeneration
    : defaultGeneration;
  const members = await memberService.getMembersByGeneration(selectedGeneration);

  return (
    <PageContainer>
      <div className="w-full flex flex-col items-center justify-start gap-10 mb-44">
        <div className="w-full flex flex-col items-center gap-8">
          <p className="text-style-subTitle">Member</p>
          <p className="text-style-body14 text-neutral-grey text-center max-w-[1440px]">
            GDGoC Soongsil의 멤버들을 만나보세요.
          </p>
        </div>
        <GenerationBar
          generationInfo={generations}
          selectedGeneration={selectedGeneration}
        />
        <MemberSection
          members={members}
          selectedGeneration={selectedGeneration}
        />
      </div>
    </PageContainer>
  );
}
