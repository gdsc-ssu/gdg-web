'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const SECTION_CLASSNAMES = `
  w-full mt-[60px]
  flex flex-col justify-center items-center
  min-h-[calc(100vh-60px)]
  px-[48px]
  snap-start
  relative
`;

const CONTENT_WRAPPER = `
  flex w-full justify-between items-center
  max-lg:flex-col-reverse max-lg:gap-10
  z-10
`;

const TEXT_WRAPPER = `
  flex flex-col gap-6
  max-lg:items-center max-lg:text-center
`;

const HIGHLIGHT_CLASSNAMES = `
  relative inline-block z-0
  after:content-['']
  after:absolute after:bottom-0 after:left-[-5px] after:right-[-5px] after:h-full
  after:-z-10
  after:bg-[#F8D8D8]
`;

const HeroSection = () => {
  return (
    <section className={SECTION_CLASSNAMES}>
      <div className={CONTENT_WRAPPER}>
        <motion.div
          className={TEXT_WRAPPER}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1
            className="text-style-title text-black max-md:text-[40px]"
          >
            실력 너머의
            <br />
            <span className={HIGHLIGHT_CLASSNAMES}>유쾌함</span> 으로 세상을
            <br />
            바꿉니다
          </h1>

          <div
            className="text-style-subTitle32 text-neutral-grey max-md:text-[16px] flex flex-col pt-6"
          >
            <p>Google Developer Groups on Campus</p>
            <p>Soongsil University</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: [0, -15, 0]
          }}
          transition={{
            opacity: { duration: 0.8, delay: 0.2, ease: "easeOut" },
            scale: { duration: 0.8, delay: 0.2, ease: "easeOut" },
            y: {
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
          className="relative w-[600px] h-[400px] max-md:w-[300px] max-md:h-[200px]"
        >
          <Image
            src="/5th/logo_texture.svg"
            alt="GDG Logo Texture"
            fill
            className="object-contain"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
