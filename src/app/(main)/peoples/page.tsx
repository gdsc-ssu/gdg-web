import type { Metadata } from "next";
import GenerationBar from "@/app/components/GenerationBar";
import PageContainer from "@/app/components/common/PageContainer";
import PageTitle from "@/app/components/common/PageTitle";
import PeopleListSkeleton from "@/app/components/PeopleList/PeopleListSkeleton";
import dynamic from 'next/dynamic';

const PeopleList = dynamic(() => import("@/app/components/PeopleList"), {
  loading: () => <PeopleListSkeleton />,
});

export const metadata: Metadata = {
  title: "People | GDSC Soongsil",
  description: "GDSC Soongsil의 멤버들을 소개합니다.",
};

export default function PeoplePage() {
  return (
    <PageContainer>
      <PageTitle className="mb-10">People</PageTitle>
      <GenerationBar />
      <PeopleList />
    </PageContainer>
  );
}
