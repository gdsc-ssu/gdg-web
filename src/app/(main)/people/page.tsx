import type { Metadata } from "next";
import ClassBar from "@/app/components/ClassBar";
import PeopleList from "@/app/components/PeopleList";

export const metadata: Metadata = {
  title: "People | GDSC Soongsil",
  description: "GDSC Soongsil의 멤버들을 소개합니다.",
};

const MOCK_PEOPLE = [
  {
    pictureUrl: "",
    name: "장환곤",
    websites: [true, false, true],
    part: "back",
    comment: "hello",
  },
  {
    pictureUrl: "",
    name: "성나영",
    websites: [true, true, true],
    part: "front",
    comment: "hello",
  },
  {
    pictureUrl: "",
    name: "윤영민",
    websites: [true, true, false],
    part: "front",
    comment: "hello",
  },
  {
    pictureUrl: "",
    name: "이정민",
    websites: [false, false, true],
    part: "front",
    comment: "hello",
  },
  {
    pictureUrl: "",
    name: "장환곤",
    websites: [true, false, true],
    part: "back",
    comment: "hello",
  },
  {
    pictureUrl: "",
    name: "성나영",
    websites: [true, true, true],
    part: "front",
    comment: "hello",
  },
  {
    pictureUrl: "",
    name: "윤영민",
    websites: [true, true, false],
    part: "front",
    comment: "hello",
  },
  {
    pictureUrl: "",
    name: "이정민",
    websites: [false, false, true],
    part: "front",
    comment: "hello",
  },
  {
    pictureUrl: "",
    name: "김숭실",
    websites: [false, false, true],
    part: "front",
    comment: "hello",
  },
];

export default function PeoplePage() {
  return (
    <main className="w-full min-h-screen pt-24">
      <section className="max-w-[1280px] mx-auto px-[101px] sm:px-[52px]">
        <h1 className="text-[64px] font-bold lg:text-[48px] sm:text-[36px]">
          People
        </h1>
        <ClassBar />
        <PeopleList people={MOCK_PEOPLE} />
      </section>
    </main>
  );
}
