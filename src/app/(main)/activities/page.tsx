import TabContent from "@/app/components/TabBar";
import TabBarProvider from "@/app/components/TabBar/TabBarProvider";
import PageContainer from "@/app/components/common/PageContainer";
import PageTitle from "@/app/components/common/PageTitle";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Activities | GDSC Soongsil",
  description: "GDSC Soongsil의 다양한 활동들을 소개합니다.",
};

export default function ActivitiesPage() {
  return (
    <PageContainer>
      <PageTitle>Activities</PageTitle>
      <TabBarProvider>
        <TabContent />
      </TabBarProvider>
    </PageContainer>
  );
}
