'use client';
import { useRef, useEffect, useState } from 'react';
import SectionWrapper from '../SectionWrapper';
import { EventItem, SeminarItem, StudyItem } from './Slider';
import { SEMINARS, STUDIES, EVENTS } from './const';
import { AnimatedImage } from '@/app/components/Animated/AnimatedImage';
import { AnimatedText } from '@/app/components/Animated/AnimatedText';

// Types
type SeminarType = string;

interface StudyType {
  title: string;
  description: string;
  thumbnail: string;
  tags?: string[];
  url?: string;
}

interface EventType {
  image: string;
  url: string;
  imageAlign?: 'center' | 'bottom' | 'top';
}

type ActivityDataBase = {
  title: string;
  description: string;
  containerWidth: string;
  smContainerWidth: string;
};

interface SeminarActivityData extends ActivityDataBase {
  items: SeminarType[];
  ItemComponent: typeof SeminarItem;
  renderItem: (item: SeminarType, index: number) => React.ReactNode;
}

interface StudyActivityData extends ActivityDataBase {
  items: StudyType[];
  ItemComponent: typeof StudyItem;
  renderItem: (item: StudyType, index: number) => React.ReactNode;
}

interface EventActivityData extends ActivityDataBase {
  items: EventType[];
  ItemComponent: typeof EventItem;
  renderItem: (item: EventType, index: number) => React.ReactNode;
}

type ActivityData = SeminarActivityData | StudyActivityData | EventActivityData;

// Constants
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

const HEADER_STYLES = `
  flex flex-col
  px-[104px]
  lg:flex-row
  md:flex-row
  sm:flex-col sm:px-[52px]
`;

const TITLE_CONTAINER_STYLES = `
  flex-shrink-0 
  relative 
  flex flex-col 
  font-bold
  text-[32px]
  lg:text-[48px] lg:pl-[76px]
  md:text-[42px] md:pl-[52px]
  sm:text-[32px]
`;

const PENCIL_STYLES = `
  absolute 
  left-[120px] bottom-[0px] w-[100px] h-[100px]
  lg:w-[100px] lg:h-[100px] lg:left-[250px]
  md:w-[80px] md:h-[80px] md:left-[200px]
  sm:w-[60px] sm:h-[60px] sm:left-[150px]
`;

// Components
const Section = ({
  title,
  description,
  childrenContainerClassName,
  children,
  index,
  activeIndex,
}: {
  title: string;
  description: string;
  childrenContainerClassName?: string;
  children: React.ReactNode;
  index: number;
  activeIndex: number;
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={sectionRef}
      className={`
        ${SECTION_STYLES}
        ${index === activeIndex ? 'opacity-100 z-50' : 'opacity-0 z-0'}
      `}
    >
      <div className={HEADER_STYLES}>
        <SectionWrapper>
          <div className={TITLE_CONTAINER_STYLES}>
            <span className="flex">
              <span className="relative whitespace-nowrap">
                <AnimatedText text="함께 한 경험" delay={0} />
                <AnimatedImage
                  src="/icons/UnderScore_blue.svg"
                  alt="UnderScore"
                  width={100}
                  height={2}
                  className="absolute left-0 bottom-[-2px] w-full"
                  delay={0.8}
                  animationType="drawLine"
                />
              </span>
              <AnimatedText text="은" delay={0.8} />
            </span>
            <AnimatedText text="배움의 가치를" delay={1.2} />
            <AnimatedText text="더합니다." delay={1.8} />
            <AnimatedImage
              src="/icons/Pencil.svg"
              alt="Pencil"
              width={101}
              height={101}
              className={PENCIL_STYLES}
              delay={2.5}
              animationType="fadeUp"
            />
          </div>
        </SectionWrapper>
        <SectionWrapper>
          <div className="md:pt-[0px] sm:pt-[50px]">
            <span className={`text-primary-blue break-keep pt-[100px] md:pt-[0px] sm:pt-[0px] ${TITLE_STYLES} hipi`}>
              {title}
            </span>
            {description}
          </div>
        </SectionWrapper>
      </div>

      <div 
        className={`
          flex flex-row gap-6 mt-10 h-[280px] self-start pt-[80px]
          sm:mt-6 sm:h-[180px]
          ${childrenContainerClassName}
        `}
      >
        {children}
      </div>
    </div>
  );
};

// Data
const ACTIVITIES_DATA: ActivityData[] = [
  {
    title: "슈몰세미나",
    description: 
      '슈몰세미나는 모든 멤버가 최소 한 번 직접 주제를 정하고 발표하는 내부 세미나 활동입니다. 꼭 프로그래밍이 아니어도 여행 경험이나 관심사 등 다양한 주제로 발표할 수 있습니다.',
    items: [...SEMINARS, ...SEMINARS] as SeminarType[],
    ItemComponent: SeminarItem,
    containerWidth: "w-[22824px]",
    smContainerWidth: "sm:w-[14244px]",
    renderItem: (item: SeminarType, index: number) => <SeminarItem key={index} youtubeVideoId={item} />
  } as SeminarActivityData,
  {
    title: "스터디 & 프로젝트",
    description: 
      "내부에서 다양하고 재미있는 주제로 스터디와 프로젝트가 활발하게 개설됩니다. 함께 할 때 가치가 높아지는 것이라면 그 어떤 주제도 환영합니다.",
    items: [...STUDIES, ...STUDIES] as StudyType[],
    ItemComponent: StudyItem,
    containerWidth: "w-[7128px]",
    smContainerWidth: "sm:w-[4928px]",
    renderItem: (item: StudyType, index: number) => <StudyItem key={index} {...item} />
  } as StudyActivityData,
  {
    title: "커뮤니티 활동",
    description: 
      "개방적인 학생 개발자 커뮤니티로서, 정보를 공유하거나 견학, 체험 등의 활동을 함께 합니다. 세미나, 대회, MT, Code Jam 등 한계 없이 다양한 범위의 이벤트를 개최합니다.",
    items: [...EVENTS, ...EVENTS] as EventType[],
    ItemComponent: EventItem,
    containerWidth: "w-[4752px]",
    smContainerWidth: "sm:w-[3312px]",
    renderItem: (item: EventType, index: number) => <EventItem key={index} {...item} />
  } as EventActivityData
];

// Hooks
const useScrollSection = (totalSections: number) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const { top, height } = containerRef.current.getBoundingClientRect();
      const scrollPosition = -top;
      const sectionHeight = height / totalSections;
      
      const newIndex = Math.min(
        Math.floor(scrollPosition / sectionHeight),
        totalSections - 1
      );
      
      if (newIndex >= 0 && newIndex !== activeIndex) {
        setActiveIndex(newIndex);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeIndex, totalSections]);

  return { activeIndex, containerRef };
};

// Main Component
const ActivitySection = () => {
  const { activeIndex, containerRef } = useScrollSection(ACTIVITIES_DATA.length);

  const renderActivityItems = (activity: ActivityData) => {
    if (!('items' in activity && 'renderItem' in activity)) return null;
    
    if (activity.title === "슈몰세미나") {
      return (activity as SeminarActivityData).items.map((item, index) => 
        (activity as SeminarActivityData).renderItem(item, index)
      );
    } else if (activity.title === "스터디 & 프로젝트") {
      return (activity as StudyActivityData).items.map((item, index) => 
        (activity as StudyActivityData).renderItem(item, index)
      );
    } else {
      return (activity as EventActivityData).items.map((item, index) => 
        (activity as EventActivityData).renderItem(item, index)
      );
    }
  };

  return (
    <section 
      ref={containerRef} 
      className="w-full flex flex-col h-[500vh] relative"
    >
      {ACTIVITIES_DATA.map((activity, index) => (
        <Section
          key={activity.title}
          title={activity.title}
          description={activity.description}
          childrenContainerClassName={`animate-slide-90 ${activity.containerWidth} ${activity.smContainerWidth}`}
          index={index}
          activeIndex={activeIndex}
        >
          {renderActivityItems(activity)}
        </Section>
      ))}
    </section>
  );
};

export default ActivitySection;
