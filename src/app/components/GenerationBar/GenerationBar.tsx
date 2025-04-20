"use client";

import { useEffect, useState } from "react";
import useGenerationStore from "../../../store/useGenerationStore";

interface GenerationProps {
  title: string;
  active: string;
  onClickGeneration: () => void;
}

const Generation = ({ title, active, onClickGeneration }: GenerationProps) => {
  return (
    <div
      onClick={onClickGeneration}
      className={`w-[110px] px-[14px] py-[6px] text-[14px]  font-medium
        lg:px-[16px] lg:py-[6px] lg:text-[20px]
        md:px-[14px] md:py-[6px] md:text-[16px]
        sm:w-[86px] sm:px-[12px] sm:py-[6px] sm:text-[12px]
        text-center border-2 rounded-full ${
          active === title
            ? "border-sky-300 bg-sky-300 text-white"
            : "border-sky-300 text-sky-400"
        }`}
    >
      {title}기
    </div>
  );
};

interface Option {
  id: string;
  name: string;
}

interface ResData {
  properties: {
    generation: {
      multi_select: {
        options: Option[];
      };
    };
  };
}

interface GenerationInfo {
  id: string;
  name: string;
}

const GenerationBar = () => {
  const selectedGeneration: string = useGenerationStore(
    (state) => state.generation
  );
  const updateSelectedGeneration: (newGeneration: string) => void =
    useGenerationStore((state) => state.updateGeneration);

  const [generationInfo, setGenerationInfo] = useState<GenerationInfo[]>([]);

  const handleActivateGeneration = (newSelectedGeneration: string) => {
    updateSelectedGeneration(newSelectedGeneration);
  };

  useEffect(() => {
    const fetchGenerationInfo = async () => {
      try {
        const res: Response = await fetch("/api/notion/generation");
        if (res.ok) {
          const data: ResData[] = await res.json();
          setGenerationInfo(data[0].properties.generation.multi_select.options);
        } else console.error("Failed to fetch generation info", res.status);
      } catch (err) {
        console.error(err);
      }
    };

    fetchGenerationInfo();
  }, []);
  return (
    <div
      className="w-full max-w-[1280px] m-auto flex flex-row justify-start items-center 
      gap-2 mt-6 mb-4
      lg:gap-4 lg:mt-20 lg:mb-10
      md:gap-3 md:mt-16 md:mb-8
      sm:gap-2 sm:mt-14 sm:mb-6"
    >
      {generationInfo.map(({ id, name }: GenerationInfo) => (
        <Generation
          key={id}
          title={name}
          active={selectedGeneration}
          onClickGeneration={() => handleActivateGeneration(name)}
        />
      ))}
    </div>
  );
};

export default GenerationBar;
