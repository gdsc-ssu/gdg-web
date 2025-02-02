"use client";
import { useContext } from "react";
import { TabBarContext } from "./context";
import TabBar from "./TabBar";
import Seminar from "../Seminar";
import Challenge from "../Challenge";
import Community from "../Community";
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
        return <Community />;
      default:
        return <Seminar />;
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
