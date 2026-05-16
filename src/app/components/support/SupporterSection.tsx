'use client';

import SupporterCard from "./SupporterCard";
import { motion } from "framer-motion";

const MOCK_EVENTS: { name: string; position: string; description: string; imageUrl: string }[] = [];

const SupporterSection = () => {
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
                        <SupporterCard
                            key={index}
                            name={event.name}
                            position={event.position}
                            description={event.description}
                            imageUrl={event.imageUrl}
                        />
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default SupporterSection;
