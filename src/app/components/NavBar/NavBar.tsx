'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
export default function NavBar() {
  const pathname = usePathname();
  return (
    <div className="
    flex justify-center items-center
    bg-white
    w-full min-h-[100px]
    px-[100px]
    fixed top-0 left-0 right-0 z-50
    ">
      <div className="
        flex justify-between items-center 
        max-w-[1280px] h-full 
        w-full mx-auto px-6
      ">
        <div className="flex-shrink-0">
          <Link href="/">
            <div className="
              flex justify-center items-center
              w-[50px] h-[50px]
              lg:w-[50px] lg:h-[50px]
              md:w-[40px] md:h-[40px]
              sm:w-[30px] sm:h-[30px]
            ">
              <Image 
                src="/icons/Logo.svg" 
                alt="Logo" 
                width={100} 
                height={100} 
                className="w-full h-full object-contain"
              />
            </div>
          </Link>
        </div>

        <nav className="
          flex items-center gap-[15px]
          lg:gap-[15px]
          md:gap-[10px]
          sm:gap-[5px]
        ">
          {[
            { href: '/', label: 'Landing' },
            { href: '/activities', label: 'Activities' },
            { href: '/peoples', label: 'Peoples' },
            { href: '/support', label: 'Support' }
          ].map(({ href, label }) => (
            <Link key={href} href={href}>
              <span className={`
                text-[16px] font-bold leading-[110%]
                ${pathname === href ? 'text-primary-black' : 'text-grayscale-gray5'}
                sm:text-[12px]
                hover:text-primary-black transition-colors
              `}>
                {label}
              </span>
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}
