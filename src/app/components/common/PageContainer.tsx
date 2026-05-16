import { ReactNode } from "react";

interface PageContainerProps {
    children: ReactNode;
    className?: string;
}

export default function PageContainer({ children, className = "" }: PageContainerProps) {
    return (
        <main className={`w-full min-h-screen pt-[120px] ${className}`}>
            <section className="w-full px-[5%] flex flex-col items-center">
                {children}
            </section>
        </main>
    );
}
