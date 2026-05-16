'use client';

import { useState } from 'react';
import PageContainer from "@/app/components/common/PageContainer";
import TabBar from "@/app/components/activity/TabBar";
import TabContent from "@/app/components/activity/TabContent";

const TABS = ['SSUmall Seminar', 'Solution Challenge', 'Community'];

export default function ActivityPage() {
  const [activeTab, setActiveTab] = useState(TABS[0]);

  return (
    <PageContainer>
      <div className="w-full">
        <TabBar tabs={TABS} activeTab={activeTab} onTabChange={setActiveTab} />
        <TabContent activeTab={activeTab} />
      </div>
    </PageContainer>
  );
}
