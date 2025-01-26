'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
export default function NavBar() {
  const pathname = usePathname();
  return (
    <div className="    
    w-full max-w-[1280px] m-auto
    pl-[101px] pr-[101px] pt-[20px] pb-[10px]
    lg:pl-[101px] lg:pr-[101px] lg:pt-[20px] lg:pb-[10px]
    md:pl-[101px] md:pr-[101px] md:pt-[20px] md:pb-[10px]
    sm:pl-[3rem] sm:pr-[3rem] sm:pt-[10px] sm:pb-[10px]
    ">
      <div className="flex justify-between items-center h-full px-4">
      <Link href="/">
          <div className="
            flex justify-center items-center
            w-[50px] h-[50px]
            lg:w-[50px] lg:h-[50px]
            md:w-[40px] md:h-[40px]
            sm:w-[30px] sm:h-[30px]">
            <Image src="/icons/Logo.svg" alt="Logo" width={100} height={100} />
          </div>
          </Link>
        <div className="
        flex justify-between items-center space-x-[15px]
        lg:space-x-[15px]
        md:space-x-[10px]
        sm:space-x-[5px]">
          <Link href="/">
            <span className={`
            text-[16px] font-bold leading-[110%]
            ${pathname === '/' ? 'text-primary-black' : 'text-grayscale-gray5'}
            sm:text-[12px]
            `}>Landing</span>
          </Link>
          <Link href="/activities">
            <span className={`
            text-[16px] font-bold leading-[110%]
            ${pathname === '/activities' ? 'text-primary-black' : 'text-grayscale-gray5'}
            sm:text-[12px]
            `}>Activities</span>
          </Link>
          <Link href="/people">
            <span className={`
            text-[16px] font-bold leading-[110%]
            ${pathname === '/people' ? 'text-primary-black' : 'text-grayscale-gray5'}
            sm:text-[12px]
            `}>People</span>
          </Link>
          <Link href="/support">
            <span className={`
            text-[16px] font-bold leading-[110%]
            ${pathname === '/support' ? 'text-primary-black' : 'text-grayscale-gray5'}
            sm:text-[12px]
            `}>Support</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
