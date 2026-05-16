import { ReactNode } from "react";

interface PageTitleProps {
    children: ReactNode;
    className?: string;
}

export default function PageTitle({ children, className = "" }: PageTitleProps) {
    return (
        <h1
            className={`
        text-[72px] font-extrabold text-center text-primary-black
        sm:text-[36px]
        md:text-[48px]
        lg:text-[60px]
        xl:text-[72px]
        ${className}
      `}
        >
            {children}
        </h1>
    );
}
