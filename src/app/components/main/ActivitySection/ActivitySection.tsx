'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/utils/cn';

const SLIDER_IMAGES = [
  '/seminar_ssumall2.png',
  '/seminar_ssumall3.png',
  '/seminar_sumall1.png',
  '/event_devcon-2024.jpeg',
  '/event_devfest-campus.png',
  '/event_ideathon.jpeg',
  '/event_solution-challenge.jpeg',
  '/event_job-fair.jpeg',
  '/event_senior-seminar.jpeg',
];

const SECTION_CLASSNAMES = `
  w-full
  flex flex-col items-center justify-center
  min-h-screen
  overflow-hidden
  bg-white
  py-20
  snap-start
`;

const TEXT_CONTAINER = `
  flex flex-col items-center text-center gap-6 mb-16 z-10 px-4
`;

// 300x254 aspect ratio
const IMAGE_WIDTH = 300;
const IMAGE_HEIGHT = 254;

const SliderRow = ({ images, reverse = false }: { images: string[], reverse?: boolean }) => {
  // Duplicate images enough times to cover screen width + buffer for seamless loop
  const list = [...images, ...images, ...images];

  return (
    <div className="flex w-full overflow-hidden relative select-none pointer-events-none">
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
        {list.map((src, idx) => (
          <div
            key={idx}
            className="relative shrink-0 overflow-hidden rounded-[20px]"
            style={{ width: IMAGE_WIDTH, height: IMAGE_HEIGHT }}
          >
            <Image
              src={src}
              alt={`Slider image ${idx}`}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const activityVariants = cva(
  "absolute bottom-0 left-0 h-full -z-0",
  {
    variants: {
      variant: {
        seminar: "bg-secondary-pastel-red",
        study: "bg-secondary-pastel-blue",
        community: "bg-secondary-pastel-green",
      },
    },
    defaultVariants: {
      variant: "seminar",
    },
  }
);

const textVariants = cva(
  "",
  {
    variants: {
      variant: {
        seminar: "text-primary-red",
        study: "text-primary-blue",
        community: "text-primary-green",
      },
    },
    defaultVariants: {
      variant: "seminar",
    },
  }
);

interface ActivitySectionProps extends VariantProps<typeof activityVariants> {
  activityName: string;
  description: React.ReactNode;
}

const ActivitySection = ({ activityName, description, variant }: ActivitySectionProps) => {
  return (
    <section id="activity-section" className={SECTION_CLASSNAMES}>
      {/* Text Section */}
      <div className={TEXT_CONTAINER}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center"
        >
          <h1 className="text-style-subTitle font-normal max-md:text-[32px]">
            함께한 경험은
            <br />
            <span className="relative inline-block">
              <span className="relative z-10">배움의 가치</span>
              <motion.span
                initial={{ width: "0%" }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className={cn(activityVariants({ variant }))}
              />
            </span> 를 더합니다
          </h1>

          <div className="flex flex-col items-center gap-4 mt-8">
            <span className={`text-style-subTitle32 ${cn(textVariants({ variant }))}`}>{activityName}</span>
            <div className="text-neutral-500 text-[16px] text-center leading-relaxed max-md:text-[14px]">
              {description}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Slider Section */}
      <div className="flex flex-col gap-6 w-full max-w-[100vw] mt-[120px]">
        {/* Row 1: Left to Right -> reverse=true */}
        <SliderRow images={SLIDER_IMAGES} reverse={true} />

        {/* Row 2: Right to Left -> reverse=false */}
        <SliderRow images={[...SLIDER_IMAGES].reverse()} reverse={false} />
      </div>
    </section>
  );
};

export default ActivitySection;
