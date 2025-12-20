'use client';

import Image from "next/image";
import { cn } from "@/utils/cn";

interface EventCardProps {
    title: string;
    date: string;
    location: string;
    imageUrl?: string;
}

const EventCard = ({
    title,
    date,
    location,
    imageUrl = "/placeholder-event.png"
}: EventCardProps) => {
    return (
        <div className="flex flex-col w-full bg-white rounded-[20px] overflow-hidden border border-gray-200 cursor-pointer hover:shadow-lg transition-shadow duration-300">
            {/* Image Section */}
            <div className="relative w-full aspect-[4/3] bg-gray-100">
                {imageUrl && (
                    <Image
                        src={imageUrl}
                        alt={title}
                        fill
                        className="object-cover"
                    />
                )}
            </div>

            {/* Content Section */}
            <div className="flex flex-col p-6 gap-3">
                <h3 className="text-2xl font-bold text-black">{title}</h3>
                <div className="flex flex-col gap-1 text-sm text-gray-500">
                    <span>{date}</span>
                    <span>{location}</span>
                </div>
            </div>
        </div>
    );
};

export default EventCard;
