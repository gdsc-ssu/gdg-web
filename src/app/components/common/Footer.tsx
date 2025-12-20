import Image from 'next/image';
import Link from 'next/link';

const SOCIAL_LINKS = [
    { name: 'Github', href: 'https://github.com/gdgoc-ssu', icon: '/5th/footer/Github.svg' },
    { name: 'Instagram', href: 'https://www.instagram.com/gdgoc_ssu', icon: '/5th/footer/Instagram.svg' },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/company/gdgoc-ssu', icon: '/5th/footer/LinkedIn.svg' },
    { name: 'YouTube', href: 'https://www.youtube.com/@gdgoc_ssu', icon: '/5th/footer/YouTube.svg' },
];

const Footer = () => {
    return (
        <footer className="w-full flex justify-center items-center py-10 px-[48px] bg-white text-neutral-grey text-[12px] font-medium border-t border-neutral-light-grey">
            <div className="w-full max-w-[1280px] flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">

                {/* Left: Organization Name */}
                <div className="text-style-body14 text-color-neutral-grey font-semibold">
                    GDGoC Soongsil
                </div>

                {/* Center: Copyright */}
                <div className="text-center text-style-body14">
                    Copyright © 2025 Google Developer Groups on Campus Soongsil All Rights Reserved.
                </div>

                {/* Right: Social Icons */}
                <div className="flex gap-4">
                    {SOCIAL_LINKS.map((social) => (
                        <Link
                            key={social.name}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative w-6 h-6 opacity-60 hover:opacity-100 transition-opacity"
                        >
                            <Image
                                src={social.icon}
                                alt={social.name}
                                fill
                                className="object-contain"
                            />
                        </Link>
                    ))}
                </div>

            </div>
        </footer>
    );
};

export default Footer;
