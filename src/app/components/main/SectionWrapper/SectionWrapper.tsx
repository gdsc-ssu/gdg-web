import { type ReactNode } from 'react';

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  reverse?: boolean;
}

const SectionWrapper = ({ children, className, reverse }: SectionWrapperProps) => (
  <div
    className={`
      flex flex-row items-center justify-center w-full max-w-[1280px] px-[51px]
      lg:px-12 
      md:flex-col md:items-start md:p-0 
      sm:flex-col sm:items-start sm:p-0
      ${reverse ? 'flex-row-reverse md:items-end sm:items-end' : ''}
      ${className ?? ''}
    `}
  >
    {children}
  </div>
);

export default SectionWrapper;
