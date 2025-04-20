"use client";

import Websites from "../Websites";
import Image from "next/image";
import { useEffect, useState } from "react";
import useGenerationStore from "../../../store/useGenerationStore";

type websitesType = "github" | "linkedin" | "instagram";

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
    <div className="grid grid-cols-[1fr_2fr] grid-rows-[1fr_0.5fr_2fr] border-2 border-gray-200 rounded-lg">
      <Image
        src={pictureUrl || "/icons/default_picture.svg"}
        alt="picture"
        width={160}
        height={160}
        className="row-span-3 m-auto rounded-lg"
        priority
      />
      <div className="flex items-center gap-2 mr-2 h-fit mr-2 mt-2">
        <div className="text-[24px] font-semibold">{name}</div>
        <Websites
          github={websites.github}
          linkedin={websites.linkedin}
          instagram={websites.instagram}
        />
      </div>
      <div className="text-[16px] mr-2 mb-4">{part}</div>
      <div className="row-span-2 text-[14px] bg-gray-200 rounded-md p-2 mr-2 mb-2">
        {comment}
      </div>
    </div>
  );
};

interface PersonInfo {
  id: string;
  cover?: {
    file?: { url: string };
    external?: { url: string };
  };
  properties: {
    name: { title: { plain_text: string }[] };
    github: { url: string };
    linkedin: { url: string };
    instagram: { url: string };
    part: { multi_select: { name: string }[] };
    comment: { rich_text: { plain_text: string }[] };
  };
}

const PeopleList = () => {
  const [peopleInfo, setPeopleInfo] = useState<PersonInfo[]>([]);
  const generation: string = useGenerationStore((state) => state.generation);
  const resetGeneration: () => void = useGenerationStore(
    (state) => state.resetGeneration
  );

  useEffect(() => {
    resetGeneration();
  }, [resetGeneration]);

  useEffect(() => {
    const fetchPeopleInfo = async () => {
      try {
        const res: Response = await fetch(`/api/notion/people/${generation}`);
        if (res.ok) {
          const data: PersonInfo[] = await res.json();
          console.log(data);
          setPeopleInfo(data);
        } else {
          console.error(`res is not ok : ${res.status}`);
        }
      } catch (err) {
        console.error(err);
      }
    };
    fetchPeopleInfo();
  }, [generation]);

  return (
    <div className="grid grid-cols-1 gap-2 lg:grid-cols-2">
      {peopleInfo.map(({ id, cover, properties }: PersonInfo) => (
        <PeopleCard
          key={id}
          pictureUrl={cover?.file?.url || cover?.external?.url}
          name={properties.name.title[0]?.plain_text || "나는영민"} // 나는영민 넣어둠
          websites={{
            github: properties.github.url,
            linkedin: properties.linkedin.url,
            instagram: properties.instagram.url,
          }}
          part={properties.part.multi_select
            .map((item) => item.name)
            .join(" / ") || "나는영민"}
          comment={properties.comment.rich_text[0]?.plain_text || "나는영민"}
        />
      ))}
    </div>
  );
};

export default PeopleList;
