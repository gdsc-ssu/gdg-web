'use client';

import { motion } from 'framer-motion';

const SECTION_CLASSNAMES = `
  w-full max-w-[1280px] m-auto
  p-[50px] mt-[101px]
  lg:p-[101px]
  md:p-[101px]
  sm:p-[52px]
`;

const TEXT_CLASSNAMES = `
  text-[120px] leading-[90%] font-black m-0
  lg:text-[96px]
  md:text-[80px]
  sm:text-[12vw]
  max-sm:text-[12vw]
  select-none
`;

const HeroSection = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.8,
        ease: "easeOut"
      }
    })
  };

  return (
    <section className={SECTION_CLASSNAMES}>
      <p className={TEXT_CLASSNAMES}>
        <motion.span 
          className="text-grayscale-gray5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.span custom={0} variants={textVariants}>
            Google
            <br />
          </motion.span>
          <motion.span custom={1} variants={textVariants}>
            Developer
            <br />
          </motion.span>
          <motion.span custom={2} variants={textVariants}>
            Group on
            <br />
          </motion.span>
          <motion.span custom={3} variants={textVariants}>
            Campus
            <br />
          </motion.span>
        </motion.span>
        <motion.span 
          custom={4} 
          variants={textVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Soongsil
          <br />
          University
        </motion.span>
      </p>
    </section>
  );
};

export default HeroSection;
