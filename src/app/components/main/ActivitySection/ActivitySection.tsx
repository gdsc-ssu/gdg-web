'use client';

import { motion } from 'framer-motion';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/utils/cn';
import SliderRow from '@/app/components/common/SliderRow';

const SLIDER_IMAGES = [
  '/seminar_ssumall2.png',
  '/seminar_ssumall3.png',
  '/seminar_sumall1.png',
  '/event_devcon-2024.jpeg',
  '/event_devfest-campus.png',
  '/event_ideathon.jpeg',
  '/event_solution-challenge.jpeg',
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
  images?: string[];
  href?: string;
}

const ActivitySection = ({ activityName, description, variant, images, href }: ActivitySectionProps) => {
  const sliderImages = images ?? SLIDER_IMAGES;
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
        <SliderRow images={sliderImages} reverse={true} href={href} />

        {/* Row 2: Right to Left -> reverse=false */}
        <SliderRow images={[...sliderImages].reverse()} reverse={false} href={href} />
      </div>
    </section>
  );
};

export default ActivitySection;
