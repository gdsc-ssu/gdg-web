import Image from 'next/image';

interface PictureItemProps {
  image: string;
  text: string;
  degree: string;
  index: number;
}

const PictureItem = ({ image, text, degree, index }: PictureItemProps) => (
  <div
    className={`
      relative w-[300px] h-[400px]
      lg:w-[240px] lg:h-[320px]
      md:w-[200px] md:h-[267px]
      sm:w-[160px] sm:h-[213px]
      ${index === 0 ? 'z-40' : 'z-30'}
    `}
    style={{ transform: `rotate(${degree})` }}
  >
    <div className="relative w-full h-[85%] rounded-[10px] overflow-hidden shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)]">
      <Image
        className="object-cover"
        src={image}
        alt="activity picture"
        fill
      />
    </div>
    <div className="
      absolute bottom-0 w-full h-[15%] bg-grayscale-white
      flex items-center justify-center rounded-[10px]
      shadow-[0px_2px_4px_0px_rgba(0,0,0,0.25)]
    ">
      <span className="text-primary-yellow text-[24px] font-normal leading-[110%] hipi
        lg:text-[20px]
        md:text-[16px]
        sm:text-[14px]
      ">{text}</span>
    </div>
    <div className="
      absolute -rotate-[30deg] w-[80px] h-[30px] bg-[#FFE4E4]
      -right-5 top-10
      lg:w-[64px] lg:h-[24px] lg:top-8
      md:w-[53px] md:h-[20px] md:top-7
      sm:w-[43px] sm:h-[16px] sm:top-5
    " />
  </div>
);

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

const PictureSection = () => (
  <section className="w-full h-screen flex flex-col items-center justify-center">
    <span className="
      text-[64px] font-bold leading-[120%] text-center mb-[128px]
      lg:text-[48px] lg:mb-[53px]
      md:text-[48px] md:mb-[40px]
      sm:text-[36px] sm:mb-[20px]
    ">
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
            className="
              absolute -right-[101px] bottom-0
              w-[101px] h-[101px] text-primary-yellow
              lg:w-20 lg:h-20 lg:-right-20
              md:w-20 md:h-20 md:-right-20
              sm:w-[50px] sm:h-[50px] sm:-right-[50px]
            "
          />
        </span>
      </span>
      과
      <br />
      건강한 커뮤니티를
      <br />
      만듭니다.
    </span>
    <div className="
      relative flex justify-center items-center gap-[32px]
      lg:gap-[24px]
      md:gap-[20px]
      sm:gap-[16px]
    ">
      {PICTURES.map((picture, index) => (
        <PictureItem key={index} {...picture} index={index} />
      ))}
    </div>
  </section>
);

export default PictureSection;
