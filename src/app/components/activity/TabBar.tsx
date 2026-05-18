'use client';

import { cn } from "@/utils/cn";

interface TabBarProps {
    tabs: string[];
    activeTab: string;
    onTabChange: (tab: string) => void;
}

const TEXT_COLORS = [
    'text-secondary-halftone-red',
    'text-secondary-halftone-blue',
    'text-secondary-halftone-yellow'
];

const BG_COLORS = [
    'bg-secondary-halftone-red',
    'bg-secondary-halftone-blue',
    'bg-secondary-halftone-yellow'
];

const TabBar = ({ tabs, activeTab, onTabChange }: TabBarProps) => {
    const activeIndex = tabs.indexOf(activeTab);

    return (
        <div className="w-full flex justify-between gap-4 max-sm:gap-2 border-b-0">
            {/* Note: The image shows gaps between the bottom borders of tabs, so we don't put a border on the container.
          Instead, we put border on individual items. */}
            {tabs.map((tab) => {
                const isActive = tab === activeTab;
                const activeTextColor = TEXT_COLORS[activeIndex] || TEXT_COLORS[0];
                const activeBgColor = BG_COLORS[activeIndex] || BG_COLORS[0];

                return (
                    <button
                        key={tab}
                        onClick={() => onTabChange(tab)}
                        className="flex-1 flex flex-col items-center gap-4 max-sm:gap-2 group"
                    >
                        <span
                            className={cn(
                                "text-[24px] max-md:text-[12px] max-sm:text-[7px] font-bold leading-[140%] whitespace-nowrap transition-colors",
                                isActive ? activeTextColor : "text-neutral-light-grey group-hover:text-neutral-grey"
                            )}
                        >
                            {tab}
                        </span>
                        <div
                            className={cn(
                                "w-full h-[4px] rounded-full transition-all",
                                isActive ? activeBgColor : "bg-neutral-light-grey group-hover:bg-neutral-grey"
                            )}
                        />
                    </button>
                );
            })}
        </div>
    );
};

export default TabBar;
