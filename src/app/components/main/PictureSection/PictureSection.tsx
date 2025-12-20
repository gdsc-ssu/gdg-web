'use client';

import { motion } from 'framer-motion';
import SliderRow from '@/app/components/common/SliderRow';

// Using existing images as placeholders since I cannot extract from screenshot
const SLIDER_IMAGES = [
  '/mt.png',
  '/ideathon.jpeg',
  '/festival.jpg',
  '/3rd-mt.jpeg',
  '/event_solution-challenge.jpeg',
  '/event_devfest-campus.png',
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

const PictureSection = () => {
  return (
    <section id="picture-section" className={SECTION_CLASSNAMES}>
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
            소중한 인연과
            <br />
            <span className="relative inline-block">
              <span className="relative z-10 font-bold">건강한 커뮤니티</span>
              <motion.span
                initial={{ width: "0%" }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="absolute bottom-0 left-0 h-full bg-secondary-pastel-yellow -z-0"
              />
            </span> 를
            <br />
            만듭니다
          </h1>
        </motion.div>
      </div>

      {/* Slider Section */}
      <div className="flex flex-col gap-6 mt-[120px] mb-[400px] w-full max-w-[100vw]">
        {/* Row 1: Left to Right -> reverse=true */}
        <SliderRow images={SLIDER_IMAGES} reverse={true} staggerOdd={true} />
      </div>
    </section>
  );
};

export default PictureSection;
