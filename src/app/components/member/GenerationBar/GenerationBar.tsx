import Generation from "./Generation";
import { GenerationInfo } from "@/types/member";

interface GenerationBarProps {
  generationInfo: GenerationInfo[];
  selectedGeneration: string;
}

export default function GenerationBar({
  generationInfo,
  selectedGeneration,
}: GenerationBarProps) {
  const generationBarClasses = "w-full flex flex-row justify-center items-center gap-8";

  return (
    <div className={generationBarClasses}>
      {generationInfo.map(({ id, title }) => (
        <Generation
          key={id}
          title={title}
          active={selectedGeneration === title}
        />
      ))}
    </div>
  );
}
