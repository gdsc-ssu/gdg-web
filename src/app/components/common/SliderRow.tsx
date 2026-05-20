'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

interface SliderRowProps {
    images: string[];
    reverse?: boolean;
    staggerOdd?: boolean;
    href?: string;
}

// 300x254 aspect ratio
const IMAGE_WIDTH = 300;
const IMAGE_HEIGHT = 254;

const SliderRow = ({ images, reverse = false, staggerOdd = false, href }: SliderRowProps) => {
    // Duplicate images enough times to cover screen width + buffer for seamless loop
    const list = [...images, ...images, ...images];

    return (
        <div className={`flex w-full overflow-hidden relative select-none ${href ? '' : 'pointer-events-none'}`}>
            <motion.div
                className="flex gap-6 pr-6" // Add padding right to match gap
                initial={{ x: reverse ? '-33.33%' : '0%' }}
                animate={{ x: reverse ? '0%' : '-33.33%' }}
                transition={{
                    duration: 30, // Adjust for speed
                    ease: "linear",
                    repeat: Infinity,
                }}
                style={{ width: "fit-content" }}
            >
                {list.map((src, idx) => {
                    const imageEl = (
                        <div
                            className="relative shrink-0 overflow-hidden rounded-[20px]"
                            style={{
                                width: IMAGE_WIDTH,
                                height: IMAGE_HEIGHT,
                                marginTop: staggerOdd && idx % 2 !== 0 ? '70px' : '0px'
                            }}
                        >
                            <Image
                                src={src}
                                alt={`Slider image ${idx}`}
                                fill
                                className="object-cover"
                            />
                        </div>
                    );

                    return href ? (
                        <Link key={idx} href={href} target="_blank" rel="noreferrer noopener">
                            {imageEl}
                        </Link>
                    ) : (
                        <div key={idx}>{imageEl}</div>
                    );
                })}
            </motion.div>
        </div>
    );
};

export default SliderRow;
