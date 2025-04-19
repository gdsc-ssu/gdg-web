import type { Metadata } from "next";
import GenerationBar from "@/app/components/GenerationBar";
import PeopleList from "@/app/components/PeopleList";

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
