'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function NavBar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const NAV_LINKS = [
    { href: '/about', label: 'About' },
    { href: '/activity', label: 'Activity' },
    { href: '/member', label: 'Member' },
    { href: '/support', label: 'Support' },
  ];

  const getActiveColorClass = (href: string) => {
    if (href === '/activity') return 'text-primary-blue';
    if (href === '/member') return 'text-primary-green';
    if (href === '/support') return 'text-primary-yellow';
    return 'text-primary-red';
  };

  return (
    <div className="w-full fixed top-0 left-0 right-0 z-[9998] flex justify-center items-center h-[60px] bg-white border-b border-gray-200">
      <div className="w-full h-full flex max-w-[1280px] justify-between items-center px-5">
        <Link href="/" className="shrink-0 flex items-center" onClick={() => setIsMenuOpen(false)}>
          <Image src="/5th/logo.svg" alt="GDG Logo" width={42} height={42} priority />
        </Link>

        {/* Desktop Nav */}
        <nav className="flex items-center gap-[60px] max-md:gap-[30px] max-sm:gap-[20px] max-[600px]:hidden">
          {NAV_LINKS.map(({ href, label }) => {
            const isActive = pathname === href;
            const activeColorClass = getActiveColorClass(href);

            return (
              <Link key={href} href={href}>
                <span className={`
                text-[16px] font-semibold leading-[140%] tracking-[-0.025em]
                max-md:text-[14px]
                ${isActive ? activeColorClass : 'text-neutral-black hover:text-black'}
                transition-colors
              `}>
                  {label}
                </span>
              </Link>
            )
          })}
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          className="hidden max-[600px]:flex items-center justify-center p-2 text-neutral-black"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="fixed inset-0 top-[60px] bg-white z-[9997] flex flex-col items-center pt-8 gap-8 min-[600px]:hidden">
            {NAV_LINKS.map(({ href, label }) => {
              const isActive = pathname === href;
              const activeColorClass = getActiveColorClass(href);

              return (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setIsMenuOpen(false)}
                  className="w-full text-center py-2"
                >
                  <span className={`
                    text-[20px] font-semibold
                    ${isActive ? activeColorClass : 'text-neutral-black'}
                  `}>
                    {label}
                  </span>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
