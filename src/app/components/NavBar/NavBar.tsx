'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function NavBar() {
  return (
    <div className="    
    w-full max-w-[1280px] m-auto
    pl-[101px] pr-[101px] pt-[20px] pb-[10px]
    lg:pl-[101px] lg:pr-[101px] lg:pt-[20px] lg:pb-[10px]
    md:pl-[101px] md:pr-[101px] md:pt-[20px] md:pb-[10px]
    sm:pl-[52px] sm:pr-[52px] sm:pt-[10px] sm:pb-[10px]
    ">
      <div className="flex justify-between items-center h-full px-4">
      <Link href="/">
            <Image src="/icons/Logo.svg" alt="Logo" width={100} height={100} />
          </Link>
        <div className="flex justify-between items-center space-x-[15px]">
          <Link href="/">
            <span className="text-primary-black text-[24px] font-normal leading-[110%]">Landing</span>
          </Link>
          <Link href="/activities">
            <span className="text-primary-black text-[24px] font-normal leading-[110%]">Activities</span>
          </Link>
          <Link href="/people">
            <span className="text-primary-black text-[24px] font-normal leading-[110%]">People</span>
          </Link>
          <Link href="/support">
            <span className="text-primary-black text-[24px] font-normal leading-[110%]">Support</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
