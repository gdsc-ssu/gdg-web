'use client';

import SSUMallSeminarSection from "./SSUMallSeminarSection";
import SolutionChallengeSection from "./SolutionChallengeSection";
import CommunitySection from "./CommunitySection";

interface TabContentProps {
    activeTab: string;
}

const TabContent = ({ activeTab }: TabContentProps) => {
    switch (activeTab) {
        case 'SSUmall Seminar':
            return <SSUMallSeminarSection />;
        case 'Solution Challenge':
            return <SolutionChallengeSection />;
        case 'Community':
            return <CommunitySection />;
        default:
            return null;
    }
};

export default TabContent;
