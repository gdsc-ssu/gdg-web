"use client";

import React, { useContext } from "react";
import { TabBarContext } from "./context";

const TabBar = () => {
  const { items, toggleActive } = useContext(TabBarContext);

  const activeIndex = items.findIndex((item) => item.isActive);
  const totalTabs = items.length;

  type TabPosition = "left" | "center" | "right";

  const getTabPosition = (index: number, totalTabs: number): TabPosition =>
    index === 0 ? "left" : index === totalTabs - 1 ? "right" : "center";

  const widthMap: Record<TabPosition, string> = {
    left: "33.33%",
    center: "35%",
    right: "33.33%",
  };

  const getUnderlineWidth = (index: number, totalTabs: number): string =>
    widthMap[getTabPosition(index, totalTabs)];

  return (
    <div className="relative w-full">
      <div className="flex justify-around">
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => toggleActive(item.id)}
            className={`relative 
              py-4 
              w-full 
              text-center 
              text-[12px]
              sm:text-[10px]
              md:text-[20px]
              lg:text-[24px]
              xl:text-[28px]
              font-semibold 
              flex 
              flex-col 
              items-center 
              ${item.isActive ? "text-black" : "text-gray-500"}
            `}
          >
            {item.label}
          </button>
        ))}
      </div>

      <div className="absolute bottom-0 left-0 w-full h-2 bg-grayscale-gray1" />
      <div
        className="absolute bottom-0 h-2 bg-primary-ssu-blue-light transition-all duration-300"
        style={{
          width: getUnderlineWidth(activeIndex, totalTabs),
          left: `${(activeIndex * 100) / totalTabs}%`,
        }}
      />
    </div>
  );
};

export default TabBar;
