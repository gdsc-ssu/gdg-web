"use client";

import React from "react";

  export default function GenerationSkeleton() {
    return (
      <div className="w-6 flex flex-col items-center justify-center gap-1">
        <div className="w-full h-6 bg-neutral-off-white rounded-md animate-pulse" />
        <div
          className="w-full h-1 bg-neutral-light-grey"
        />
      </div>
    );
  }