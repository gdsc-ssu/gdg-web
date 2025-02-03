"use client";

interface ClassProps {
  title: number;
  active: boolean;
}

const Class = ({ title, active }: ClassProps) => {
  return (
    <div
      className={`w-[110px] px-[14px] py-[6px] text-[14px]  font-medium
        lg:px-[16px] lg:py-[6px] lg:text-[20px]
        md:px-[14px] md:py-[6px] md:text-[16px]
        sm:w-[86px] sm:px-[12px] sm:py-[6px] sm:text-[12px]
        text-center border-2 rounded-full ${
          active
            ? "border-sky-300 bg-sky-300 text-white"
            : "border-sky-300 text-sky-400"
        }`}
    >
      {title}기
    </div>
  );
};

interface ClassBarProps {
  onClassChange: (title: number) => void;
}

const ClassBar = ({}) => {
  return (
    <div
      className="w-full max-w-[1280px] m-auto flex flex-row justify-start items-center 
      gap-2 mt-6 mb-4
      lg:gap-4 lg:mt-20 lg:mb-10
      md:gap-3 md:mt-16 md:mb-8
      sm:gap-2 sm:mt-14 sm:mb-6"
    >
      <Class title={1} active={false} />
      <Class title={2} active={false} />
      <Class title={3} active={false} />
      <Class title={4} active={true} />
    </div>
  );
};

export default ClassBar;
