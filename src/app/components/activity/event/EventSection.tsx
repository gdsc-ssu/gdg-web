'use client';

import EventCard from "./EventCard";
import { motion } from "framer-motion";

const MOCK_EVENTS = [
    {
        title: "MT",
        date: "2024. 10. 12.",
        location: "가평 산여울 캠프",
        imageUrl: "/mt.png"
    },
    {
        title: "MT",
        date: "2024. 10. 12.",
        location: "가평 산여울 캠프",
        imageUrl: "/mt.png"
    },
    {
        title: "MT",
        date: "2024. 10. 12.",
        location: "가평 산여울 캠프",
        imageUrl: "/mt.png"
    },
    {
        title: "MT",
        date: "2024. 10. 12.",
        location: "가평 산여울 캠프",
        imageUrl: "/mt.png"
    },
    {
        title: "MT",
        date: "2024. 10. 12.",
        location: "가평 산여울 캠프",
        imageUrl: "/mt.png"
    },
    {
        title: "MT",
        date: "2024. 10. 12.",
        location: "가평 산여울 캠프",
        imageUrl: "/mt.png"
    },
];

const EventSection = () => {
    return (
        <section className="flex flex-col items-center py-20 w-full">
            {/* Event Grid */}
            <div className="w-full max-w-6xl px-4">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {MOCK_EVENTS.map((event, index) => (
                        <EventCard
                            key={index}
                            title={event.title}
                            date={event.date}
                            location={event.location}
                            imageUrl={event.imageUrl}
                        />
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default EventSection;
