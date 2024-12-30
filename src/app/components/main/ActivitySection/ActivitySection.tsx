'use client';
import { useRef, useEffect, useState } from 'react';
import SectionWrapper from '../SectionWrapper';
import Image from 'next/image';
import { EventItem, SeminarItem, StudyItem } from './Slider';
import { SEMINARS, STUDIES, EVENTS } from './const';

interface SectionProps {
  title: string;
  description: string;
  isFirst?: boolean;
  childrenContainerClassName?: string;
  children: React.ReactNode;
  index: number;
  activeIndex: number;
}

const Section = ({
  title,
  description,
  isFirst,
  childrenContainerClassName,
  children,
  index,
  activeIndex,
}: SectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={sectionRef}
      className={`
        w-full h-screen flex flex-col justify-center items-center overflow-hidden
        sticky top-0 transition-opacity duration-500
        ${index === activeIndex ? 'opacity-100 z-50' : 'opacity-0 z-0'}
      `}
    >
      <SectionWrapper reverse className="gap-32 lg:gap-[53px] md:gap-10 sm:gap-5">
        <div 
          className="flex-shrink-0 relative flex flex-col pr-[101px] lg:pr-[76px] md:pr-[101px] sm:pr-[52px]"
          style={{
            opacity: isFirst ? 1 : 0
          }}
        >
          <span className="flex">
            <span className="relative whitespace-nowrap ">
              함께 한 경험
              <Image
                src="/icons/UnderScore_blue.svg"
                alt="UnderScore"
                width={100}
                height={2}
                className="absolute left-0 bottom-[-2px] w-full text-primary-blue"
              />
            </span>
            <span>은</span>
          </span>
          <span>배움의 가치를</span>
          <span>더합니다.</span>
          <Image
            src="/icons/Pencil.svg"
            alt="Pencil"
            width={101}
            height={101}
            className="absolute right-0 bottom-0 w-[101px] h-[101px] lg:w-20 lg:h-20 md:w-20 md:h-20 sm:w-[50px] sm:h-[50px]"
          />
        </div>
        <div className="md:px-[104px] sm:px-[52px]">
          <span className="text-primary-blue break-keep text-[40px] font-normal leading-[110%] block mb-3 lg:text-[32px] md:text-[32px] sm:text-[28px] hipi">
            {title}
          </span>
          {description}
        </div>
      </SectionWrapper>
      <div 
        className={`
          flex flex-row gap-6 mt-10 h-[280px] self-start
          sm:mt-6 sm:h-[180px]
          ${childrenContainerClassName}
        `}
      >
        {children}
      </div>
    </div>
  );
};

const SEMINARS_FOR_SLIDER = [...SEMINARS, ...SEMINARS];

const STUDIES_FOR_SLIDER = [...STUDIES, ...STUDIES];

const EVENTS_FOR_SLIDER = [...EVENTS, ...EVENTS];

const ActivitySection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const { top, height } = containerRef.current.getBoundingClientRect();
      const scrollPosition = -top;
      const sectionHeight = height / 3;
      
      if (scrollPosition < sectionHeight) {
        setActiveIndex(0);
      } else if (scrollPosition < sectionHeight * 2) {
        setActiveIndex(1);
      } else {
        setActiveIndex(2);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={containerRef} className="w-full flex flex-col h-[500vh] relative">
      <Section
        title="슈몰세미나"
        description={
          '슈몰세미나는 모든 멤버가 최소 한 번 직접 주제를 정하고 발표하는 내부 세미나 활동입니다. 꼭 프로그래밍이 아니어도 여행 경험이나 관심사 등 다양한 주제로 발표할 수 있습니다.'
        }
        isFirst
        childrenContainerClassName="animate-slide-90 w-[22824px] sm:w-[14244px]"
        index={0}
        activeIndex={activeIndex}
      >
        {SEMINARS_FOR_SLIDER.map((seminar, seminarIndex) => (
          <SeminarItem key={seminarIndex} youtubeVideoId={seminar} />
        ))}
      </Section>
      <Section
        title="스터디 & 프로젝트"
        description="내부에서 다양하고 재미있는 주제로 스터디와 프로젝트가 활발하게 개설됩니다. 함께 할 때 가치가 높아지는 것이라면 그 어떤 주제도 환영합니다."
        childrenContainerClassName="animate-slide-90 w-[7128px] sm:w-[4928px]"
        index={1}
        activeIndex={activeIndex}
      >
        {STUDIES_FOR_SLIDER.map((study, studyIndex) => (
          <StudyItem key={studyIndex} {...study} />
        ))}
      </Section>
      <Section
        title="커뮤니티 활동"
        description="개방적인 학생 개발자 커뮤니티로서, 정보를 공유하거나 견학, 체험 등의 활동을 함께 합니다. 세미나, 대회, MT, Code Jam 등 한계 없이 다양한 범위의 이벤트를 개최합니다."
        childrenContainerClassName="animate-slide-90 w-[4752px] sm:w-[3312px]"
        index={2}
        activeIndex={activeIndex}
      >
        {EVENTS_FOR_SLIDER.map((event, eventIndex) => (
          <EventItem key={eventIndex} {...event} />
        ))}
      </Section>
    </section>
  );
};

export default ActivitySection;
