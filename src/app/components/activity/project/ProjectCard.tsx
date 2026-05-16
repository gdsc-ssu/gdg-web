'use client';

import Image from "next/image";
import { cn } from "@/utils/cn";

interface ProjectCardProps {
    projectName: string;
    memberNames: string[];
    teamName?: string;
    imageUrl?: string;
    description?: string;
    year?: string;
}

const ProjectCard = ({
    projectName,
    memberNames,
    teamName = "Team. Name",
    imageUrl = "/placeholder-project.png", // Default or passed image
    description = "숭실대 학생들을 위한, 분실물 찾기 앱",
    year = "2023"
}: ProjectCardProps) => {
    return (
        <div className="relative w-full aspect-square rounded-[30px] overflow-hidden group cursor-pointer">
            {/* Background Image / Placeholder */}
            <div className="absolute inset-0 bg-[#007AFF] flex flex-col items-center justify-center text-white">
                {/* Temporary Fallback Visual if no image */}
                <div className="flex flex-col items-center gap-2">
                    <span className="text-sm font-medium opacity-80">{description}</span>
                    <h3 className="text-4xl font-bold text-center leading-tight">
                        {teamName}
                    </h3>
                </div>
            </div>

            {/* Actual Image if provided - overlaying the solid color */}
            {imageUrl && imageUrl !== "/placeholder-project.png" && (
                <Image
                    src={imageUrl}
                    alt={projectName}
                    fill
                    className="object-cover"
                />
            )}

            {/* Overlay Layout */}
            <div className="absolute bottom-0 left-0 w-full h-[30%] bg-black/20 backdrop-blur-sm border-t border-white/20 flex flex-col justify-center px-6">
                <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                        <h4 className="text-xl font-bold text-white">{projectName}</h4>
                        {/* Github Icon Placeholder */}
                        <div className="w-6 h-6 bg-white/20 rounded-md flex items-center justify-center">
                            <span className="text-xs">git</span>
                        </div>
                    </div>
                    <div className="flex flex-col items-end text-[10px] text-white/80 leading-tight">
                        <span>{year}</span>
                        <span>{year}</span>
                    </div>
                </div>

                <div className="flex flex-wrap gap-2 text-sm text-white/90">
                    {memberNames.map((name, index) => (
                        <span key={index} className="relative">
                            {name}
                        </span>
                    ))}
                    <span className="ml-auto text-xs text-white/60">User Interface</span>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
