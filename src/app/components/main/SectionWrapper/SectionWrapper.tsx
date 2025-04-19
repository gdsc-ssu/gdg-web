import { type ReactNode } from 'react';

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  reverse?: boolean;
}

const SectionWrapper = ({ children, className, reverse }: SectionWrapperProps) => (
  <div
    className={`
      flex 
      flex-row 
      w-full max-w-[768px] 
      px-[51px]
      items-center
      justify-center
      md:flex-col md:items-start md:p-0 max-w-[480px] 
      sm:flex-col sm:items-start sm:p-0 
      ${reverse ? 'flex-row-reverse md:items-end sm:items-end' : ''}
      ${className ?? ''}
    `}
  >
    {children}
  </div>
);

export default SectionWrapper;
