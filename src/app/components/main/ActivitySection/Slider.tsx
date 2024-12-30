import { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface SeminarItemProps {
  youtubeVideoId: string;
}

export const SeminarItem = ({ youtubeVideoId }: SeminarItemProps) => {
  const thumbnailUrl = `https://img.youtube.com/vi/${youtubeVideoId}/0.jpg`;
  const youtubeUrl = `https://www.youtube.com/watch?v=${youtubeVideoId}`;

  return (
    <Link href={youtubeUrl} target="_blank" rel="noreferrer noopener">
      <div className="w-[400px] aspect-[1280/720] rounded-[10px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)] relative overflow-hidden sm:w-[240px]">
        <Image
          src={thumbnailUrl}
          alt="seminar youtube thumbnail"
          fill
          className="object-cover object-center"
        />
      </div>
    </Link>
  );
};

interface StudyItemProps {
  title: string;
  description: string;
  thumbnail: string;
  tags?: string[];
  url?: string;
}

export const StudyItem = ({
  title,
  description,
  thumbnail,
  tags,
  url,
}: StudyItemProps) => {
  const innerJSX = (
    <div className="w-[300px] h-[280px] rounded-[10px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)] overflow-hidden sm:w-[200px] sm:h-[180px]">
      <div className="w-full h-[170px] relative sm:h-[100px]">
        <Image
          src={thumbnail}
          alt="study or project thumbnail"
          fill
          className="object-cover object-center"
        />
        <div className="w-full h-full bg-black/30 absolute" />
        {tags && tags.length > 0 && (
          <div className="flex flex-row gap-2 absolute left-6 bottom-[14px]">
            {tags.map((tag, index) => (
              <div key={index} className="px-[13px] py-[6px] rounded bg-white/50 sm:px-2 sm:py-[2px]">
                <span className="text-grayscale-gray8 text-[14px] font-semibold leading-normal sm:text-[10px] sm:font-normal">
                  {tag}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="p-6 pt-6 bg-grayscale-white flex flex-col gap-[10px] sm:p-4 sm:pt-4">
        <span className="block whitespace-nowrap overflow-hidden text-ellipsis text-[22px] font-bold leading-normal sm:text-base">
          {title}
        </span>
        <span className="block whitespace-nowrap overflow-hidden text-ellipsis text-grayscale-gray7 text-base font-normal leading-normal sm:text-xs">
          {description}
        </span>
      </div>
    </div>
  );

  return url ? (
    <Link href={url} target="_blank" rel="noreferrer noopener">
      {innerJSX}
    </Link>
  ) : (
    innerJSX
  );
};

interface EventItemProps {
  image: string;
  url: string;
  imageAlign?: 'center' | 'bottom' | 'top';
}

export const EventItem = ({ image, url, imageAlign }: EventItemProps) => (
  <Link href={url} target="_blank" rel="noreferrer noopener">
    <div className="w-[240px] h-[240px] rounded-[10px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)] relative overflow-hidden sm:w-[160px] sm:h-[160px]">
      <Image
        src={image}
        alt="event thumbnail"
        className="object-cover"
        style={{ objectPosition: imageAlign ?? 'center' }}
        fill
      />
    </div>
  </Link>
);
