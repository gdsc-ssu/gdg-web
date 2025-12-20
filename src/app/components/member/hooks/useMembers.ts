import { useState, useEffect } from "react";
import { Member } from "@/types/member";

export function useMembers(generation: string) {
  const [members, setMembers] = useState<Member[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchMembers = async () => {
      if (!generation) {
        setIsLoading(false);
        return;
      }

      try {
        setIsLoading(true);
        setError(null);
        const res = await fetch(`/api/spreadsheet/people/${generation}`);
        
        if (!res.ok) {
          throw new Error(`Failed to fetch members: ${res.status}`);
        }
        
        const data: Member[] = await res.json();
        setMembers(data);
      } catch (err) {
        setError(err instanceof Error ? err : new Error("Unknown error"));
        console.error("Failed to fetch members", err);
        setMembers([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMembers();
  }, [generation]);

  return { members, isLoading, error };
}

