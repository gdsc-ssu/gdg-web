'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function NavBar() {
  const pathname = usePathname();

  const NAV_LINKS = [
    { href: '/about', label: 'About' },
    { href: '/activity', label: 'Activity' },
    { href: '/member', label: 'Member' },
    { href: '/support', label: 'Support' },
  ];

  return (
    <div className="w-full fixed top-0 left-0 right-0 z-[9998] flex justify-center items-center h-[60px] bg-white border-b border-gray-200">
      <div className="w-full h-full flex max-w-[1280px] justify-between items-center px-5">
        <Link href="/" className="shrink-0 flex items-center">
          <Image src="/5th/logo.svg" alt="GDG Logo" width={42} height={42} priority />
        </Link>

        <nav className="flex items-center gap-[60px] max-md:gap-[30px] max-sm:gap-[20px] max-[600px]:hidden">
          {NAV_LINKS.map(({ href, label }) => (
            <Link key={href} href={href}>
              <span className={`
                text-[16px] font-semibold leading-[140%] tracking-[-0.025em]
                max-md:text-[14px]
                ${pathname === href ? 'text-primary-red' : 'text-neutral-black'}
                hover:text-black transition-colors
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
