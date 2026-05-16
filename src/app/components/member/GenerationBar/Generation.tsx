"use client";

import React from "react";

interface GenerationProps {
    title: string;
    active: string;
    onClickGeneration: () => void;
  }
  
  export default function Generation({ title, active, onClickGeneration }: GenerationProps) {
    return (
      <div className="w-6 flex flex-col items-center justify-center gap-1 cursor-pointer"
      onClick={onClickGeneration}
      >
        <p
          className={`text-style-navList text-center ${
              active
                ? "text-primary-green"
                : "text-neutral-light-grey"
            }`}
        >
          {title}기
        </p>
        <div
          className={`w-full h-1 ${
            active
              ? "bg-primary-green"
              : "bg-neutral-light-grey"
          }`}
        />
      </div>
    );
  }