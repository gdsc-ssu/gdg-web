import { ReactNode } from "react";

interface PageContainerProps {
    children: ReactNode;
    className?: string;
}

export default function PageContainer({ children, className = "" }: PageContainerProps) {
    return (
        <main className={`w-full min-h-screen pt-[120px] ${className}`}>
            <section className="max-w-[1440px] mx-auto px-[101px] sm:px-[52px] flex flex-col items-center">
                {children}
            </section>
        </main>
    );
}
