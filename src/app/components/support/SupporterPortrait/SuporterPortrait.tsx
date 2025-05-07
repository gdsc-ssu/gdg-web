import Image from "next/image";
import { SupportPortraitProps } from "@/types/supporter";

const SupporterPortrait = ({ image, name, width, height }: SupportPortraitProps) => {
  return (
    <div className={`relative w-[${width}px] h-[${height}px]`}>
      <Image
        src={image}
        alt={`후원자 ${name}`}
        width={width || 200}
        height={height || 200}
        className="w-full h-full object-cover rounded-xl"
      />
      <div className="absolute bottom-0 left-0 bg-black/0 text-white text-xl font-medium px-3 py-1 rounded-br-xl">
        {name}
      </div>
    </div>
  );
};

export default SupporterPortrait;
