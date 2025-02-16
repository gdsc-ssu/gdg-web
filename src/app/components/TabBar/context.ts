import { createContext } from "react";

export interface TabBarItemType {
  id: string;
  label: string;
  isActive: boolean;
}

export interface TabBarContextType {
  items: TabBarItemType[];
  toggleActive: (id: string) => void;
}

const defaultContext: TabBarContextType = {
  items: [],
  toggleActive: () => {},
};

export const TabBarContext = createContext<TabBarContextType>(defaultContext);
