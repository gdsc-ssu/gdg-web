'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface PictureItemProps {
  image: string;
  text: string;
  degree: string;
  index: number;
  isLargeScreen: boolean;
}

const PICTURES = [
  {
    image: '/mt.png',
    text: '☆ 2기 MT',
    degree: '-15deg',
  },
  {
    image: '/ideathon.jpeg',
    text: '☆ 2기 아이디어톤',
    degree: '0deg',
  },
  {
    image: '/festival.jpg',
    text: '☆ 1기 Festival',
    degree: '16deg',
  },
  {
    image: '/3rd-mt.jpeg',
    text: '☆ 3기 MT',
    degree: '-2deg',
  },
];

const STYLES = {
  pictureContainer: `
    relative flex items-center
    gap-[32px]
    lg:gap-[24px]
    md:gap-[20px]
    sm:gap-[16px]
  `,
  heading: `
    text-[32px] font-bold leading-[120%] text-center mb-[128px]
    lg:text-[48px] lg:mb-[53px]
    md:text-[40px] md:mb-[30px]
    sm:text-[32px] sm:mb-[15px]
  `,
  pictureItem: (index: number) => `
    relative w-[300px] h-[400px]
    lg:w-[240px] lg:h-[320px]
    md:w-[200px] md:h-[267px]
    sm:w-[160px] sm:h-[213px]
    ${index === 0 ? 'z-40' : 'z-30'}
  `,
  imageContainer: `
    relative w-full h-[85%] rounded-[10px] overflow-hidden 
    shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)]
  `,
  textContainer: `
    absolute bottom-0 w-full h-[15%] bg-grayscale-white
    flex items-center justify-center rounded-[10px]
    shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)]
  `,
  text: `
    text-primary-yellow text-[24px] font-normal leading-[110%] hipi
    lg:text-[20px]
    md:text-[16px]
    sm:text-[14px]
  `,
  decoration: `
    absolute -rotate-[30deg] w-[80px] h-[30px] bg-[#FFE4E4]
    -right-5 top-10
    lg:w-[64px] lg:h-[24px] lg:top-8
    md:w-[53px] md:h-[20px] md:top-7
    sm:w-[43px] sm:h-[16px] sm:top-5
  `,
  characterImage: `
    absolute -right-[101px] bottom-0
    w-[101px] h-[101px] text-primary-yellow
    lg:w-[100px] lg:h-[100px] lg:-right-[150px]
    md:w-[80px] md:h-[80px] md:-right-[120px]
    sm:w-[60px] sm:h-[60px] sm:-right-[90px]
  `
};

const PictureItem = ({ image, text, degree, index, isLargeScreen }: PictureItemProps) => (
  <div
    className={STYLES.pictureItem(index)}
    style={{ transform: `rotate(${isLargeScreen ? degree : '0deg'})` }}
  >
    <div className={STYLES.imageContainer}>
      <Image
        className="object-cover"
        src={image}
        alt="activity picture"
        fill
      />
    </div>
    <div className={STYLES.textContainer}>
      <span className={STYLES.text}>{text}</span>
    </div>
    <div className={STYLES.decoration} />
  </div>
);

const HeadingSection = () => (
  <span className={STYLES.heading}>
    <span className="relative inline-block">
      <span className="whitespace-nowrap">
        소중한 인연
        <Image
          src="/icons/UnderScore.svg"
          alt="under score"
          width={100}
          height={100}
          className="absolute left-0 bottom-[-2px] w-full text-primary-yellow"
        />
        <Image
          src="/icons/Character.svg"
          alt="character"
          width={100}
          height={100}
          className={STYLES.characterImage}
        />
      </span>
    </span>
    과
    <br />
    건강한 커뮤니티를
    <br />
    만듭니다.
  </span>
);

const PictureSection = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(true);
  
  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center py-10">
      <HeadingSection />
      <div className={`
        ${STYLES.pictureContainer}
        ${isLargeScreen ? 'flex-row flex-nowrap' : 'flex-wrap justify-center max-w-[450px]'}
      `}>
        {PICTURES.map((picture, index) => (
          <PictureItem 
            key={index} 
            {...picture} 
            index={index} 
            isLargeScreen={isLargeScreen}
          />
        ))}
      </div>
    </section>
  );
};

export default PictureSection;
