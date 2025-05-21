import type { Metadata } from "next";
import GenerationBar from "@/app/components/GenerationBar";
import dynamic from 'next/dynamic';

const PeopleList = dynamic(() => import("@/app/components/PeopleList"), {
  loading: () => (
    <div className="grid grid-cols-1 gap-2 lg:grid-cols-2">
      {[...Array(4)].map((_, index) => (
        <div
          key={index}
          className="grid grid-cols-[1fr_2fr] grid-rows-[1fr_0.5fr_2fr] border-2 border-gray-200 rounded-lg animate-pulse"
        >
          <div className="row-span-3 w-[160px] h-[160px] m-auto bg-gray-200 rounded-lg" />
          <div className="flex items-center gap-2 mr-2 h-fit mr-2 mt-2">
            <div className="h-6 w-32 bg-gray-200 rounded" />
          </div>
          <div className="h-4 w-24 bg-gray-200 rounded mr-2 mb-4" />
          <div className="row-span-2 bg-gray-200 rounded-md p-2 mr-2 mb-2" />
        </div>
      ))}
    </div>
  ),
});

export const metadata: Metadata = {
  title: "People | GDSC Soongsil",
  description: "GDSC Soongsil의 멤버들을 소개합니다.",
};

export default function PeoplePage() {
  return (
    <main className="w-full min-h-screen pt-24">
      <section className="max-w-[1280px] mx-auto mb-10 px-[101px] sm:px-[52px]">
        <h1 className="
        text-[72px] font-extrabold text-center text-primary-black
        sm:text-[36px]
        md:text-[48px]
        lg:text-[60px]
        xl:text-[72px]
        ">
          People
        </h1>
        <GenerationBar />
        <PeopleList />
      </section>
    </main>
  );
}
