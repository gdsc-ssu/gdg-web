"use client";

import Generation from "./Generation";
import { useMemberContext } from "../contexts/MemberContext";
import { useGenerationInfo } from "../hooks/useGenerationInfo";
import GenerationSkeleton from "./GenerationSkeleton";

export default function GenerationBar() {
  const { selectedGeneration, setSelectedGeneration } = useMemberContext();
  const { generationInfo, isLoading } = useGenerationInfo();

  const generationBarClasses = "w-full flex flex-row justify-center items-center gap-8";

  if (isLoading) {
    return (
      <div className={generationBarClasses}>
        {[...Array(5)].map((_, index) => (
          <GenerationSkeleton key={`generation-skeleton-${index}`} />
        ))}
      </div>
    );
  }

  return (
    <div className={generationBarClasses}>
      {generationInfo.map(({ id, title }) => (
        <Generation
          key={id}
          title={title}
          active={selectedGeneration === title ? title : ""}
          onClickGeneration={() => setSelectedGeneration(title)}
        />
      ))}
    </div>
  );
}
