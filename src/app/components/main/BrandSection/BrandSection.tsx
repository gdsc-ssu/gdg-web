import Image from 'next/image';
import SectionWrapper from '../SectionWrapper';

const left = ( ) => {
  return (
  <div className="
  flex-shrink-0 relative 
  flex flex-col
  text-[32px] font-bold leading-[120%]

  lg:pl-[76px]
  md:pl-[101px]
  lg:text-[48px]
  md:text-[42px]
  sm:text-[56px]
">
  <span className="
  ">실력 너머의</span>
  <span className="flex">
    <span className="relative whitespace-nowrap">
      유쾌함으로
      <Image 
        src="/icons/UnderScore_red.svg"
        alt="UnderScore"
        width={100}
        height={2}
        className="absolute left-0 bottom-[-2px] w-full"
      />
    </span>
    <div className="flex h-full">
      <Image 
        src="/icons/SmileFace.svg"
        alt="SmileFace"
        width={32}
        height={24}
        className="w-[47px] h-[35px] 
        lg:w-[37px] lg:h-[28px] 
        md:w-[37px] md:h-[28px] 
        sm:w-[32px] sm:h-[24px]"
      />
    </div>
  </span>
  <span className="
  ">세상을 바꿉니다.</span>
  <Image 
    src="/icons/PaperAirplane.svg"
    alt="PaperAirplane"
    width={182}
    height={124}
    className="
    absolute 
    left-0 bottom-[-69px] w-[114] h-[78px] 
    lg:bottom-[-83px] lg:w-[160px] lg:h-[110px] 
    md:bottom-[-83px] md:left-[25px] md:w-[160px] md:h-[110px] 
    sm:bottom-[-83px] sm:left-[9px] sm:w-[114px] sm:h-[78px]
    "
  />
</div>
  );
}


const right = () =>{
  return (        
  <div className="
    flex flex-col
    pt-[200px]
    lg:text-[24px]
    md:text-[16px] md:pr-[76px] md:pt-[0px]
    sm:text-[24px] sm:pt-[100px]
    ">
    <div className="">
    GDSC Soongsil University는 서로의 실력과 무관하게 시너지를 발휘하는
    학생 개발자 커뮤니티입니다. 그 시너지의 배경에는, 서로 마음을 맞추어
    어떤 것도 함께라면 즐거운{' '}
    <span className="inline-block">
      <div className="flex items-center">
        <span className="
          text-primary-red break-keep
          font-normal leading-[110%] 
          text-[16px] 
          lg:text-[24px]
          md:text-[20px]
          sm:text-[16px]
        "> 놀이</span>
        <span className="mx-1">
          <Image 
            src="/icons/Star.svg"
            alt="Star"
            width={34}
            height={33}
            className="align-middle w-[34px] h-[33px] text-primary-red"
          />
        </span>
      </div>
    </span>
    로 만드는 선한 친화력이 있습니다. 그리고 우리는 그 즐거움을 전염시켜{' '}
    <span className="inline-block">
      <div className="flex items-center">
        <span className="
          text-primary-red break-keep  font-normal leading-[110%]
          hipi
          text-[20px]
          lg:text-[24px]
          md:text-[24px]
          sm:text-[20px]
        ">세상</span>
        <span className="mx-1">
          <Image 
            src="/icons/WorldWithFlag.svg"
            alt="WorldWithFlag"
            width={24}
            height={35}
            className="align-middle w-[24px] h-[35px] 
            lg:w-[18px] h-[26px]
            md:w-[18px] h-[26px]
            sm:w-[14px] h-[20px]
            "
          />
        </span>
      </div>
    </span>
    을 더 좋은 곳으로 만들 수 있다고 믿습니다.
  </div>

  </div>
  );
}


const BrandSection = () => {
  ///////////////////////////////////////////////////////////////
  //    lg는 tailwind.config.ts 참고                              //
  //    추가로 lg의 의미는 지정된 width 이상일 때 적용되는 것을 의미        //
  //    예를 들어 lg:flex-row는 1280px 이상일 때 flex-row가 적용됨     //
  //    추가로 md, sm도 마찬가지                                    //
  ///////////////////////////////////////////////////////////////
  return (
    <section className="
    flex flex-col
    w-full h-screen
    justify-center
    items-center
    max-w-[1280px]
    lg:flex-row
    md:flex-row
    sm:flex-col
    ">
      <SectionWrapper className="">
        {left()}
      </SectionWrapper>
      <SectionWrapper className="">
        {right()}
      </SectionWrapper>
    </section>
  );
};

export default BrandSection;
