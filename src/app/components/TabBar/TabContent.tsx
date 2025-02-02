"use client";
import { useContext } from "react";
import { TabBarContext } from "./context";
import TabBar from "./TabBar";
import Seminar from "../Seminar";
import Challenge from "../Challenge/Challenge";
const TabContent = () => {
  const { items } = useContext(TabBarContext);
  const activeTab = items.find((item) => item.isActive);
  console.log(activeTab?.label);
  const renderContent = () => {
    switch (activeTab?.id) {
      case "seminar":
        return <Seminar />;
      case "challenge":
        return <Challenge />;
      case "community":
        return <div>Community Content</div>;
      default:
        return <div>Select a tab to see the content.</div>;
    }
  };

  return (
    <div className="p-4">
      <TabBar />
      {renderContent()}
    </div>
  );
};
export default TabContent;
