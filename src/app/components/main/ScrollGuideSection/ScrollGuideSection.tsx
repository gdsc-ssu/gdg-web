'use client';

import Image from 'next/image';
import { AnimatedText } from '@/app/components/Animated/AnimatedText';
import { motion } from 'framer-motion';

const ScrollGuideSection = () => {
    return (
        <div className="flex flex-col items-center justify-center w-full mt-[100px]">
            <span className="text-grayscale-gray5
            lg:text-[32px]
            md:text-[24px]
            sm:text-[16px]
            ">
            <AnimatedText delay={0.5} text="GDGoC Soongsil의 이야기를 알아볼까요?" />
            </span>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3.2 }}
            >
                <motion.div
                    animate={{
                        y: [0, 20, 0],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                >
                    <Image 
                        src="/icons/GuideArrow.svg" 
                        alt="scroll-guide" 
                        width={50} 
                        height={50}
                        className="[filter:brightness(0)_opacity(0.3)] mt-[30px]" 
                    />
                </motion.div>
            </motion.div>
        </div>
    );
}

export default ScrollGuideSection;
