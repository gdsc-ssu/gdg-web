'use client';

import { useState } from "react";
import ProjectCard from "./ProjectCard";
import { cn } from "@/utils/cn";

const GENERATIONS = ['1기', '2기', '3기', '4기', '5기'];

const MOCK_PROJECTS = [
    {
        projectName: "아나바다",
        memberNames: ["이재빈", "장환곤", "오채린", "지선의"],
        teamName: "찾아가 SSU",
        description: "숭실대 학생들을 위한, 분실물 찾기 앱",
        year: "2022.18"
    },
    {
        projectName: "아나바다",
        memberNames: ["이재빈", "장환곤", "오채린", "지선의"],
        teamName: "찾아가 SSU",
        description: "숭실대 학생들을 위한, 분실물 찾기 앱",
        year: "2022.18"
    },
    {
        projectName: "아나바다",
        memberNames: ["이재빈", "장환곤", "오채린", "지선의"],
        teamName: "찾아가 SSU",
        description: "숭실대 학생들을 위한, 분실물 찾기 앱",
        year: "2022.18"
    },
    {
        projectName: "아나바다",
        memberNames: ["이재빈", "장환곤", "오채린", "지선의"],
        teamName: "찾아가 SSU",
        description: "숭실대 학생들을 위한, 분실물 찾기 앱",
        year: "2022.18"
    },
    {
        projectName: "아나바다",
        memberNames: ["이재빈", "장환곤", "오채린", "지선의"],
        teamName: "찾아가 SSU",
        description: "숭실대 학생들을 위한, 분실물 찾기 앱",
        year: "2022.18"
    },
    {
        projectName: "아나바다",
        memberNames: ["이재빈", "장환곤", "오채린", "지선의"],
        teamName: "찾아가 SSU",
        description: "숭실대 학생들을 위한, 분실물 찾기 앱",
        year: "2022.18"
    },
];

const ProjectSection = () => {
    const [activeTab, setActiveTab] = useState('5기');

    return (
        <section className="flex flex-col items-center py-20 w-full">
            <h2 className="text-4xl font-bold mb-4">Projects</h2>
            <div className="text-center mb-10 text-gray-500">
                <p>사회에 선한 영향력을 주는 개발자,</p>
                <p>Google Developer Groups on Campus 에서 소셜 임팩트를 실현하세요.</p>
            </div>

            {/* Generation Tabs */}
            <div className="flex gap-8 mb-16 border-b border-gray-200 w-full max-w-sm justify-center">
                {GENERATIONS.map((gen) => (
                    <button
                        key={gen}
                        onClick={() => setActiveTab(gen)}
                        className={cn(
                            "pb-2 px-2 text-lg font-medium transition-colors relative",
                            activeTab === gen
                                ? "text-blue-500"
                                : "text-gray-300 hover:text-gray-400"
                        )}
                    >
                        {gen}
                        {activeTab === gen && (
                            <div className="absolute bottom-[-1px] left-0 w-full h-[2px] bg-blue-500" />
                        )}
                    </button>
                ))}
            </div>

            {/* Project Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl px-4">
                {MOCK_PROJECTS.map((project, index) => (
                    <ProjectCard
                        key={index}
                        projectName={project.projectName}
                        memberNames={project.memberNames}
                        teamName={project.teamName}
                        description={project.description}
                        year={project.year}
                    />
                ))}
            </div>
        </section>
    );
};

export default ProjectSection;
