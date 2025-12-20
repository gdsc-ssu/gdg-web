import { ReactNode } from "react";

interface PageContainerProps {
    children: ReactNode;
    className?: string;
}

export default function PageContainer({ children, className = "" }: PageContainerProps) {
    return (
        <main className={`w-full min-h-screen pt-[120px] ${className}`}>
            <section className="max-w-[1440px] mx-auto px-5 sm:px-[10px] lg:px-[101px] flex flex-col items-center">
                {children}
            </section>
        </main>
    );
}
