import type { Metadata } from "next";
import PageContainer from "@/app/components/common/PageContainer";

export const metadata: Metadata = {
  title: "Activity | GDSC Soongsil",
  description: "GDSC Soongsil의 다양한 활동들을 소개합니다.",
};

export default function ActivityPage() {
  return (
    <PageContainer>
      <div className="w-full h-[100px]"></div>
    </PageContainer>
  );
}
