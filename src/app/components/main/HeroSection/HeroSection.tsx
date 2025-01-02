import Image from 'next/image';

const HeroSection = () => (
  <section className="
    w-full max-w-[1280px] m-auto
    p-[101px] 
    lg:p-[101px]
    md:p-[101px]
    sm:p-[52px]
  ">
    <Image 
      src="/icons/Logo.svg"
      alt="Logo"
      width={200}
      height={103}
      className="
        w-[200px] h-[103px] mb-[56px]
        lg:w-[160px] lg:h-[82px] lg:mb-[40px]
        md:w-[120px] md:h-[62px] md:mb-[32px]
        sm:w-[20vw] sm:h-[calc(20vw*103/200)] sm:mb-[5vw]
      "
    />
    <p className="
      text-[120px] leading-[90%] font-black m-0
      lg:text-[96px]
      md:text-[80px]
      sm:text-[12vw]
      max-sm:text-[12vw]
    ">
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
