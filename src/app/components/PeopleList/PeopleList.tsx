"use client";

import Websites from "../Websites";
import Image from "next/image";
import { useEffect, useState } from "react";
import useGenerationStore from "../../../store/useGenerationStore";

type websitesType = "github" | "linkedin" | "ig";

interface PeopleCardProps {
  pictureUrl: string | undefined;
  name: string;
  websites: Record<websitesType, string>;
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
        width={160}
        height={160}
        className="row-span-3 m-auto"
        priority
      />
      <div className="flex items-center gap-2 mr-2 h-fit mr-2 mt-2">
        <div className="text-[24px] font-semibold">{name}</div>
        <Websites
          github={websites.github}
          linkedin={websites.linkedin}
          ig={websites.ig}
        />
      </div>
      <div className="text-[16px] mr-2 mb-4">{part}</div>
      <div className="row-span-2 text-[14px] bg-gray-200 rounded-md p-2 mr-2 mb-2">
        {comment}
      </div>
    </div>
  );
};

interface personInfo {
  id: string;
  cover?: {
    file?: { url: string };
    external?: { url: string };
  };
  properties: {
    name: { title: { plain_text: string }[] };
    github: { url: string };
    linkedin: { url: string };
    ig: { url: string };
    part: { multi_select: { name: string }[] };
    comment: { rich_text: { plain_text: string }[] };
  };
}

const PeopleList = () => {
  const [peopleInfo, setPeopleInfo] = useState<personInfo[]>([]);
  const generation = useGenerationStore((state) => state.generation);
  const resetGeneration = useGenerationStore((state) => state.resetGeneration);

  useEffect(() => {
    resetGeneration();
    console.log("after reset", generation);
  }, []);

  useEffect(() => {
    const fetchPeopleInfo = async () => {
      try {
        const res = await fetch(`/api/notion/people/${generation}`);
        if (res.ok) {
          const data = await res.json();

          setPeopleInfo(data);
        } else {
          console.error(`res is not ok : ${res.status}`);
        }
      } catch (err) {
        console.error(err);
      }
    };
    fetchPeopleInfo();
    console.log("people data", peopleInfo);
  }, [generation]);

  return (
    <div className="grid grid-cols-1 gap-2 lg:grid-cols-2">
      {peopleInfo.map((person) => (
        <PeopleCard
          key={person.id}
          pictureUrl={person.cover?.file?.url || person.cover?.external?.url}
          name={person.properties.name.title[0].plain_text}
          websites={{
            github: person.properties.github.url,
            linkedin: person.properties.linkedin.url,
            ig: person.properties.ig.url,
          }}
          part={person.properties.part.multi_select
            .map((item) => item.name)
            .join(" / ")}
          comment={person.properties.comment.rich_text[0]?.plain_text}
        />
      ))}
    </div>
  );
};

export default PeopleList;
