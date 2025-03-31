'use client';
import { useRef, useEffect, useState } from 'react';
import SectionWrapper from '../SectionWrapper';
import Image from 'next/image';
import { EventItem, SeminarItem, StudyItem } from './Slider';
import { SEMINARS, STUDIES, EVENTS } from './const';


type ActivityData = {
  title: string;
  description: string;
  items: any[];
  ItemComponent: React.ComponentType<any>;
  containerWidth: string;
  smContainerWidth: string;
  renderItem: (item: any, index: number) => React.ReactNode;
};

interface SectionProps {
  title: string;
  description: string;
  childrenContainerClassName?: string;
  children: React.ReactNode;
  index: number;
  activeIndex: number;
}


const TITLE_STYLES = `
  text-[40px] font-normal leading-[110%] block mb-3 
  lg:text-[48px] 
  md:text-[32px] 
  sm:text-[28px]
`;

const SECTION_STYLES = `
  w-full h-screen 
  flex flex-col 
  justify-center
  items-center
  overflow-hidden
  sticky top-0 transition-opacity duration-500
`;

const Section = ({
  title,
  description,
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
        ${SECTION_STYLES}
        ${index === activeIndex ? 'opacity-100 z-50' : 'opacity-0 z-0'}
      `}
    >
      <div className="
      flex flex-col
      px-[104px]
      lg:flex-row
      md:flex-row
      sm:flex-row
      ">
        <SectionWrapper reverse className="">
        <div 
          className="
          flex-shrink-0 
          relative 
          flex flex-col 
          font-bold
          text-[32px]
          lg:text-[48px]
          lg:pr-[250px]
          md:text-[32px]
          md:pr-[200px]
          sm:text-[28px]
          sm:pr-[100px]"
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
            className="
            absolute 
            left-[130px] bottom-[0px] w-[100px] h-[100px]
            lg:w-[100px] lg:h-[100px] lg:left-[200px]
            md:w-20 md:h-20 md:left-[150px]
            sm:w-[60px] sm:h-[60px] sm:left-[120px]"
          />
        </div>
        </SectionWrapper>
        <SectionWrapper>
          <div>
            <span className={`text-primary-blue break-keep pt-[100px] md:pt-[0px] sm:pt-[0px] ${TITLE_STYLES} hipi`}>
              {title}
            </span>
            {description}
          </div>
        </SectionWrapper>
      </div>

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


const ACTIVITIES_DATA: ActivityData[] = [
  {
    title: "슈몰세미나",
    description: 
      '슈몰세미나는 모든 멤버가 최소 한 번 직접 주제를 정하고 발표하는 내부 세미나 활동입니다. 꼭 프로그래밍이 아니어도 여행 경험이나 관심사 등 다양한 주제로 발표할 수 있습니다.',
    items: [...SEMINARS, ...SEMINARS],
    ItemComponent: SeminarItem,
    containerWidth: "w-[22824px]",
    smContainerWidth: "sm:w-[14244px]",
    renderItem: (item: any, index: number) => <SeminarItem key={index} youtubeVideoId={item} />
  },
  {
    title: "스터디 & 프로젝트",
    description: 
      "내부에서 다양하고 재미있는 주제로 스터디와 프로젝트가 활발하게 개설됩니다. 함께 할 때 가치가 높아지는 것이라면 그 어떤 주제도 환영합니다.",
    items: [...STUDIES, ...STUDIES],
    ItemComponent: StudyItem,
    containerWidth: "w-[7128px]",
    smContainerWidth: "sm:w-[4928px]",
    renderItem: (item: any, index: number) => <StudyItem key={index} {...item} />
  },
  {
    title: "커뮤니티 활동",
    description: 
      "개방적인 학생 개발자 커뮤니티로서, 정보를 공유하거나 견학, 체험 등의 활동을 함께 합니다. 세미나, 대회, MT, Code Jam 등 한계 없이 다양한 범위의 이벤트를 개최합니다.",
    items: [...EVENTS, ...EVENTS],
    ItemComponent: EventItem,
    containerWidth: "w-[4752px]",
    smContainerWidth: "sm:w-[3312px]",
    renderItem: (item: any, index: number) => <EventItem key={index} {...item} />
  }
];

const ActivitySection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const { top, height } = containerRef.current.getBoundingClientRect();
      const scrollPosition = -top;
      const sectionHeight = height / ACTIVITIES_DATA.length;
      
      // 스크롤 위치에 따라 활성 섹션 인덱스 계산
      const newIndex = Math.min(
        Math.floor(scrollPosition / sectionHeight),
        ACTIVITIES_DATA.length - 1
      );
      
      if (newIndex >= 0 && newIndex !== activeIndex) {
        setActiveIndex(newIndex);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeIndex]);

  return (
    <section 
      ref={containerRef} 
      className="w-full flex flex-col h-[500vh] relative"
    >
      {ACTIVITIES_DATA.map((activity, index) => {
        const { title, description, items, renderItem, containerWidth, smContainerWidth } = activity;
        
        return (
          <Section
            key={title}
            title={title}
            description={description}
            childrenContainerClassName={`animate-slide-90 ${containerWidth} ${smContainerWidth}`}
            index={index}
            activeIndex={activeIndex}
          >
            {items.map((item, itemIndex) => renderItem(item, itemIndex))}
          </Section>
        );
      })}
    </section>
  );
};

export default ActivitySection;
