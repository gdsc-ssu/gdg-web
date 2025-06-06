'use client';

import Image from 'next/image';
import SectionWrapper from '../SectionWrapper';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { AnimatedText } from '@/app/components/Animated/AnimatedText';
import { AnimatedImage } from '@/app/components/Animated/AnimatedImage';

const SECTION_CLASSNAMES = `
  w-full h-screen
  flex flex-col
  justify-center
  items-center
  max-w-[1280px]
  px-[16px]
  lg:flex-row
  md:flex-row
  sm:flex-col sm:px-[52px]
  sticky top-0
`;

const LeftSection = () => {
  return (
    <div className="
      relative 
      flex-shrink-0 
      flex flex-col
      text-[32px] font-bold leading-[120%]
      items-start
      lg:text-[48px] lg:pl-[76px]
      md:text-[42px] md:pt-[0px] md:pl-[48px]
      sm:text-[32px] sm:pt-[200px]
    ">
      <AnimatedText text="실력 너머의" delay={0} />
      <span className="flex">
        <span className="relative whitespace-nowrap">
          <AnimatedText text="유쾌함으로" delay={0.8} />
          <AnimatedImage 
            src="/icons/UnderScore_red.svg"
            alt="UnderScore"
            width={100}
            height={2}
            className="absolute left-0 bottom-[-2px] w-full"
            delay={1.2}
            animationType="drawLine"
          />
        </span>
        <div className="flex h-full">
          <AnimatedImage 
            src="/icons/SmileFace.svg"
            alt="SmileFace"
            width={32}
            height={24}
            className="w-[47px] h-[35px] lg:w-[37px] lg:h-[28px] md:w-[37px] md:h-[28px] sm:w-[32px] sm:h-[24px]"
            delay={1.5}
            animationType="fadeUp"
          />
        </div>
      </span>
      <AnimatedText text="세상을 바꿉니다." delay={1.8} />
      <AnimatedImage 
        src="/icons/PaperAirplane.svg"
        alt="PaperAirplane"
        width={182}
        height={124}
        className="absolute left-0 bottom-[-69px] w-[114px] h-[78px] lg:bottom-[-83px] lg:w-[160px] lg:h-[110px] md:bottom-[-83px] md:left-[25px] md:w-[160px] md:h-[110px] sm:bottom-[-83px] sm:left-[9px] sm:w-[114px] sm:h-[78px]"
        delay={2.1}
        animationType="fadeDown"
      />
    </div>
  );
}

interface TextWithIconProps {
  text: string;
  iconSrc: string;
  iconAlt: string;
  iconClassName: string;
  textClassName: string;
}

const TextWithIcon = ({ text, iconSrc, iconAlt, iconClassName, textClassName }: TextWithIconProps) => (
  <span className="inline-block">
    <div className="flex items-center">
      <span className={textClassName}>{text}</span>
      <span className="mx-1">
        <Image 
          src={iconSrc}
          alt={iconAlt}
          width={24}
          height={35}
          className={iconClassName}
        />
      </span>
    </div>
  </span>
);

const RightSection = () => {
  return (        
    <div className="
      flex flex-col
      pt-[200px]
      lg:text-[24px]
      md:text-[16px] md:px-[52px] md:pt-[0px]
      sm:text-[12px] sm:pt-[100px]
    ">
      <div className="">
        GDGoC Soongsil University는 서로의 실력과 무관하게 시너지를 발휘하는
        학생 개발자 커뮤니티입니다. 그 시너지의 배경에는, 서로 마음을 맞추어
        어떤 것도 함께라면 즐거운{' '}
        
        <TextWithIcon 
          text="놀이"
          iconSrc="/icons/Star.svg"
          iconAlt="Star"
          textClassName="text-primary-red break-keep font-normal leading-[110%] text-[16px] lg:text-[24px] md:text-[20px] sm:text-[16px]"
          iconClassName="align-middle w-[34px] h-[33px] text-primary-red"
        />
        
        로 만드는 선한 친화력이 있습니다. 그리고 우리는 그 즐거움을 전염시켜{' '}
        
        <TextWithIcon 
          text="세상"
          iconSrc="/icons/WorldWithFlag.svg"
          iconAlt="WorldWithFlag"
          textClassName="text-primary-red break-keep font-normal leading-[110%] hipi text-[20px] lg:text-[24px] md:text-[24px] sm:text-[20px]"
          iconClassName="align-middle w-[24px] h-[35px] lg:w-[18px] lg:h-[26px] md:w-[18px] md:h-[26px] sm:w-[14px] sm:h-[20px]"
        />
        
        을 더 좋은 곳으로 만들 수 있다고 믿습니다.
      </div>
    </div>
  );
}

const BrandSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.1, 1]);
  const y = useTransform(scrollYProgress, [0, 0.5, 1], [0, -50, 0]);

  return (
    <div className="relative h-[300vh]" ref={ref}>
      <section className={SECTION_CLASSNAMES}>
        <motion.div
          style={{
            scale,
            y,
          }}
          className="w-full flex flex-col lg:flex-row md:flex-row sm:flex-col"
        >
          <SectionWrapper>
            <LeftSection />
          </SectionWrapper>
          <SectionWrapper>
            <RightSection />
          </SectionWrapper>
        </motion.div>
      </section>
    </div>
  );
};

export default BrandSection;
