import Image from 'next/image';

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
`;

const HeroSection = () => (
  <section className={SECTION_CLASSNAMES}>
    <p className={TEXT_CLASSNAMES}>
      <span className="text-grayscale-gray5">
        Google
        <br />
        Developer
        <br />
        Student
        <br />
        Clubs
        <br />
      </span>
      Soongsil
      <br />
      University
    </p>
  </section>
);

export default HeroSection;
