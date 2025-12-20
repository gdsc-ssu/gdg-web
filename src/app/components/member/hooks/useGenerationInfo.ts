import { useState, useEffect } from "react";
import { GenerationInfo } from "@/types/member";

export function useGenerationInfo() {
  const [generationInfo, setGenerationInfo] = useState<GenerationInfo[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchGenerationInfo = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const res = await fetch("/api/spreadsheet/generation");
        
        if (!res.ok) {
          throw new Error(`Failed to fetch generation info: ${res.status}`);
        }
        
        const data: GenerationInfo[] = await res.json();
        setGenerationInfo(data);
      } catch (err) {
        setError(err instanceof Error ? err : new Error("Unknown error"));
        console.error("Failed to fetch generation info", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchGenerationInfo();
  }, []);

  return { generationInfo, isLoading, error };
}

