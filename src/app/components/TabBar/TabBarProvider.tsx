"use client";
import React, { useState, ReactNode } from "react";
import { TabBarContext, TabBarItemType } from "./context";

const initialItems: TabBarItemType[] = [
  {
    id: "seminar",
    label: "SSUmall Seminar",
    isActive: true,
  },
  {
    id: "challenge",
    label: "Solution Challenge",
    isActive: false,
  },
  {
    id: "community",
    label: "Community",
    isActive: false,
  },
];

const TabBarProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<TabBarItemType[]>(initialItems);

  const toggleActive = (id: string) => {
    setItems((prevItems) =>
      prevItems.map((item) => ({
        ...item,
        isActive: item.id === id,
      }))
    );
  };

  return (
    <TabBarContext.Provider value={{ items, toggleActive }}>
      {children}
    </TabBarContext.Provider>
  );
};
export default TabBarProvider;
