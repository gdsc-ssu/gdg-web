"use client";

import Websites from "../Websites";
import Image from "next/image";
import { useEffect, useState, useCallback, useMemo } from "react";
import useGenerationStore from "../../../store/useGenerationStore";
import React from "react";

type websitesType = "github" | "linkedin" | "instagram";

interface PeopleCardProps {
  pictureUrl: string | undefined;
  name: string;
  websites: Record<websitesType, string>;
  part: string;
  comment: string;
}

const MemoizedWebsites = React.memo(Websites);

const PeopleCard = React.memo(({
  pictureUrl,
  name,
  websites,
  part,
  comment,
}: PeopleCardProps) => {
  return (
    <div className="grid grid-cols-[1fr_2fr] grid-rows-[1fr_0.5fr_2fr] border-2 border-gray-200 rounded-lg gap-x-2">
      <div className="relative row-span-3 w-[160px] h-[160px] m-auto ml-2">
        <Image
          src={pictureUrl || "/icons/default_picture.svg"}
          alt={`${name}'s profile picture`}
          fill
          sizes="160px"
          className="rounded-lg object-fill"
          loading="lazy"
          onError={(e) => {
            e.currentTarget.src = "/icons/default_picture.svg";
          }}
        />
      </div>
      <div className="flex items-center gap-2 mr-2 h-fit mr-2 mt-2">
        <div className="text-[24px] font-semibold">{name}</div>
        <MemoizedWebsites
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
});

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
  const [isLoading, setIsLoading] = useState(true);
  const generation: string = useGenerationStore((state) => state.generation);
  const resetGeneration: () => void = useGenerationStore(
    (state) => state.resetGeneration
  );

  const transformedPeopleInfo = useMemo(() => 
    peopleInfo.map(({ id, cover, properties }: PersonInfo) => ({
      id,
      pictureUrl: cover?.file?.url || cover?.external?.url,
      name: properties.name.title[0]?.plain_text || "Unknown",
      websites: {
        github: properties.github.url,
        linkedin: properties.linkedin.url,
        instagram: properties.instagram.url,
      },
      part: properties.part.multi_select
        .map((item) => item.name)
        .join(" / ") || "",
      comment: properties.comment.rich_text[0]?.plain_text || "",
    })), [peopleInfo]);

  useEffect(() => {
    resetGeneration();
  }, [resetGeneration]);

  const fetchPeopleInfo = useCallback(async () => {
    try {
      const res: Response = await fetch(`/api/notion/people/${generation}`);
      if (res.ok) {
        const data: PersonInfo[] = await res.json();
        setPeopleInfo(data);
      } else {
        console.error(`res is not ok : ${res.status}`);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }, [generation]);

  useEffect(() => {
    setIsLoading(true);
    fetchPeopleInfo();
  }, [fetchPeopleInfo]);

  if (isLoading) {
    return (
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
    );
  }

  return (
    <div className="grid grid-cols-1 gap-2 lg:grid-cols-2">
      {transformedPeopleInfo.map((person) => (
        <PeopleCard
          key={person.id}
          {...person}
        />
      ))}
    </div>
  );
};

export default PeopleList;
