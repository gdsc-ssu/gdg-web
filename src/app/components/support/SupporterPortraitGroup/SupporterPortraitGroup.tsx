'use client';

import SupportPortrait from "../SupporterPortrait/SuporterPortrait";
import { SupporterPortraitGroupProps } from "@/types/supporter";
import character from '@public/supporter/gdg_charactor_wink.png';
const SupporterGrid = ({ images, names, width, height }: SupporterPortraitGroupProps) => {
  return (
    <div className="flex flex-col gap-4 w-fit">
    <div className="flex gap-4">
      {images.filter((_, index) => index % 2 === 0).map((image, index) => (
        <div key={index} className={`w-[${width}px] h-[${height}px] rounded-xl overflow-hidden flex-shrink-0 select-none`}>
          <SupportPortrait image={image} name={names[index]} width={width} height={height} />
        </div>
      ))}
    </div>
    <div className="flex gap-4">
      {images.filter((_, index) => index % 2 === 1).map((image, index) => (
        <div key={index} className={`w-[${width}px] h-[${height}px] rounded-xl overflow-hidden flex-shrink-0 select-none`}>
          <SupportPortrait image={image} name={names[index]} width={width} height={height} />
        </div>
      ))}
    </div>
  </div>
  );
}

const SupporterPortraitGroup = ({ images, names }: SupporterPortraitGroupProps) => {
  const width = 200;
  const height = 200;
  const charactorWidth = width * 1.3;
  const charactorHeight = height * 0.8 + 4;
  return (
    <div className="overflow-x-auto flex flex-row gap-4 scrollbar-hide select-none">
    <style jsx global>{`
      .scrollbar-hide::-webkit-scrollbar {
        display: none;
      }
      .scrollbar-hide {
        -ms-overflow-style: none;
        scrollbar-width: none;
      }
    `}</style>
      <SupportPortrait image={character.src} width={charactorWidth} height={charactorHeight} />
      <SupporterGrid images={images} names={names} width={width} height={height} />
    </div>
  );
};

export default SupporterPortraitGroup;