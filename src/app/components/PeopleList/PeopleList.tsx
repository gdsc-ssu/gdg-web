"use client";

import Websites from "../Websites";
import Image from "next/image";

interface PeopleCardProps {
  pictureUrl: string;
  name: string;
  websites: boolean[];
  part: string;
  comment: string;
}

const PeopleCard = ({
  pictureUrl,
  name,
  websites,
  part,
  comment,
}: PeopleCardProps) => {
  return (
    <div className="grid grid-cols-[1fr_2fr] grid-rows-[1fr_0.5fr_2fr] border-2 border-gray-200">
      <Image
        src={pictureUrl || "/icons/default_picture.svg"}
        alt="picture"
        width={180}
        height={180}
        className="row-span-3 m-auto"
      />
      <div className="flex items-center gap-2 mr-2 h-fit mr-2 mt-2">
        <div className="text-[24px] font-semibold">{name}</div>
        <Websites
          github={websites[0]}
          linkedin={websites[1]}
          ig={websites[2]}
        />
      </div>
      <div className="text-[16px] mr-2 mb-4">{part}</div>
      <div className="row-span-2 text-[14px] bg-gray-200 rounded-md p-2 mr-2 mb-2">
        {comment}
      </div>
    </div>
  );
};

const PeopleList = ({ people }: { people: PeopleCardProps[] }) => {
  return (
    <div className="grid grid-cols-1 gap-2 lg:grid-cols-2">
      {people.map((person, idx) => (
        <PeopleCard
          key={idx}
          pictureUrl={person.pictureUrl}
          name={person.name}
          websites={person.websites}
          part={person.part}
          comment={person.comment}
        />
      ))}
    </div>
  );
};

export default PeopleList;
