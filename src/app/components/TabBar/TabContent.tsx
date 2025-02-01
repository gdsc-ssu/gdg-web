"use client";
import { useContext } from "react";
import { TabBarContext } from "./context";
import TabBar from "./TabBar";
import Seminar from "../Seminar";
const TabContent = () => {
  const { items } = useContext(TabBarContext);
  const activeTab = items.find((item) => item.isActive);

  const renderContent = () => {
    switch (activeTab?.id) {
      case "seminar":
        return <Seminar />;
      case "challenge":
        return <div>Solution Challenge Content</div>;
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
