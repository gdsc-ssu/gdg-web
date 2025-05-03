import SupportPortrait from "../SupporterPortrait/SuporterPortrait";
import { SupporterPortraitGroupProps } from "@/types/supporter";

const SupporterGrid = ({ images, names, width, height }: SupporterPortraitGroupProps) => {
  return (
    <div className="flex flex-col gap-4 w-fit">
    <div className="flex gap-4">
      {images.filter((_, index) => index % 2 === 0).map((image, index) => (
        <div key={index} className={`w-[${width}px] h-[${height}px] rounded-xl overflow-hidden flex-shrink-0`}>
          <SupportPortrait image={image} name={names[index]} width={width} height={height} />
        </div>
      ))}
    </div>
    <div className="flex gap-4">
      {images.filter((_, index) => index % 2 === 1).map((image, index) => (
        <div key={index} className={`w-[${width}px] h-[${height}px] rounded-xl overflow-hidden flex-shrink-0`}>
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
  const charactorWidth = width * 1.5;
  const charactorHeight = height * 2 + 4;
  return (
    <div className="overflow-x-auto flex flex-row gap-4">
      <SupportPortrait image={images[0]} name={names[0]} width={charactorWidth} height={charactorHeight} />
      <SupporterGrid images={images} names={names} width={width} height={height} />
    </div>
  );
};

export default SupporterPortraitGroup;