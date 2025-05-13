'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function NavBar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    
    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);

  useEffect(() => {
    if (typeof document !== 'undefined') {
      if (isMenuOpen) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }

      return () => {
        document.body.style.overflow = '';
      };
    }
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  return (
    <div className="w-full fixed top-0 left-0 right-0 z-[9998] flex justify-center items-center
    max-h-[50px] max-w-[1280px] p-[20px] mx-auto
    lg:backdrop-blur-md
    lg:bg-white/80
    md:backdrop-blur-md
    md:bg-whtie/80
    sm:bg-white
    ">
      <div className="w-full h-full flex justify-between items-center">
        <div className="shrink-0">
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

        {isMobile ? (
          <div className="cursor-pointer" onClick={toggleMenu}>
            <Image 
              src="/icons/Menu.svg" 
              alt="Menu" 
              width={24} 
              height={24} 
            />
          </div>
        ) : (
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
        )}
        
        {/* 모바일 메뉴 사이드바 */}
        {isMobile && (
          <div className={`
            fixed top-0 right-0 bottom-0
            w-[250px] bg-white shadow-lg
            transform transition-transform duration-300 ease-in-out z-[10000]
            ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
            flex flex-col p-6 pt-[100px]
          `}>
            <div 
              className="absolute top-6 right-6 cursor-pointer" 
              onClick={toggleMenu}
            >
              <Image 
                src="/icons/Close.svg" 
                alt="Close" 
                width={20} 
                height={20} 
              />
            </div>
            
            <div className="flex flex-col gap-6">
              {[
                { href: '/', label: 'Landing' },
                { href: '/activities', label: 'Activities' },
                { href: '/peoples', label: 'Peoples' },
                { href: '/support', label: 'Support' }
              ].map(({ href, label }) => (
                <Link key={href} href={href} onClick={() => setIsMenuOpen(false)}>
                  <span className={`
                    text-[16px] font-bold leading-[110%]
                    ${pathname === href ? 'text-primary-black' : 'text-grayscale-gray5'}
                    hover:text-primary-black transition-colors
                  `}>
                    {label}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}
        
        {/* 배경 오버레이 */}
        {isMenuOpen && isMobile && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-[9000]"
            onClick={toggleMenu}
          />
        )}
      </div>
    </div>
  );
}
