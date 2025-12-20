import type { Metadata } from "next";
import PageContainer from "@/app/components/common/PageContainer";
import MemberList from "@/app/components/member/MemberList";
import GenerationBar from "@/app/components/member/GenerationBar";
import { MemberProvider } from "@/app/components/member/contexts/MemberContext";

export const metadata: Metadata = {
  title: "Member | GDSC Soongsil",
  description: "GDSC Soongsil의 다양한 활동들을 소개합니다.",
};

export default function MemberPage() {
  return (
    <PageContainer>
      <MemberProvider>
        <div className="w-full flex flex-col items-center justify-start gap-10 mb-44">
          <div className="w-full flex flex-col items-center gap-8">
            <p className="text-style-subTitle">Member</p>
            <p className="text-style-body14 text-neutral-grey text-center max-w-[1440px]">GDGoC Soongsil의 멤버들을 만나보세요.</p>
          </div>
          <GenerationBar />
          <MemberList />
        </div>
      </MemberProvider>
    </PageContainer>
  );
}
