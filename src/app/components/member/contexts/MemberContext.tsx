"use client";

import React, { createContext, useContext, useState, useCallback, ReactNode } from "react";

interface MemberContextValue {
  selectedGeneration: string;
  setSelectedGeneration: (generation: string) => void;
}

const MemberContext = createContext<MemberContextValue | undefined>(undefined);

const DEFAULT_GENERATION = "1";

export function MemberProvider({ children }: { children: ReactNode }) {
  const [selectedGeneration, setSelectedGenerationState] = useState<string>(DEFAULT_GENERATION);

  const setSelectedGeneration = useCallback((generation: string) => {
    setSelectedGenerationState(generation);
  }, []);

  return (
    <MemberContext.Provider value={{ selectedGeneration, setSelectedGeneration }}>
      {children}
    </MemberContext.Provider>
  );
}

export function useMemberContext() {
  const context = useContext(MemberContext);
  if (context === undefined) {
    throw new Error("useMemberContext must be used within a MemberProvider");
  }
  return context;
}

