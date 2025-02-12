"use client";

import React, { useContext } from "react";
import { TabBarContext } from "./context";

const TabBar = () => {
  const { items, toggleActive } = useContext(TabBarContext);

  const activeIndex = items.findIndex((item) => item.isActive);
  const totalTabs = items.length;

  const getUnderlineWidth = (index: number) => {
    if (index === 0 || index === totalTabs - 1) return "33.33%"; // 왼쪽/오른쪽 탭
    if (index === 1) return "35%"; // 가운데 탭
  };

  return (
    <div className="relative w-full">
      <div className="flex justify-around">
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => toggleActive(item.id)}
            className={`relative py-4 w-full text-center text-lg font-semibold flex flex-col items-center ${
              item.isActive ? "text-black" : "text-gray-500"
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>

      <div className="absolute bottom-0 left-0 w-full h-2 bg-grayscale-gray1" />
      <div
        className="absolute bottom-0 h-2 bg-primary-ssu-blue-light transition-all duration-300"
        style={{
          width: getUnderlineWidth(activeIndex),
          left: `${(activeIndex * 100) / totalTabs}%`,
        }}
      />
    </div>
  );
};

export default TabBar;
