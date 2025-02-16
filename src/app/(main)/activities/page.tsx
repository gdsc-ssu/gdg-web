import TabContent from "@/app/components/TabBar";
import TabBarProvider from "@/app/components/TabBar/TabBarProvider";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Activities | GDSC Soongsil",
  description: "GDSC Soongsil의 다양한 활동들을 소개합니다.",
};

export default function ActivitiesPage() {
  return (
    <main className="w-full min-h-screen pt-24">
      <section className="max-w-[1280px] mx-auto px-[101px] sm:px-[52px]">
        <h1 className="text-[72px] font-extrabold text-center bg-gradient-to-b from-black to-primary-ssu-blue-light bg-clip-text text-transparent">
          Activities
        </h1>
        <TabBarProvider>
          <TabContent />
        </TabBarProvider>
      </section>
    </main>
  );
}
