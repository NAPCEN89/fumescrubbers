'use client';

import React, { useState, useCallback, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaUserAlt } from 'react-icons/fa';
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react';

// 1. IMPORT DATA - No logo import here!
import { menuItems, NavItem, NavSubItem } from '../app/data/navData';

const useIsMobile = (breakpoint = 768) => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < breakpoint);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, [breakpoint]);
  return isMobile;
};

// 2. UPDATED LOGO COMPONENT
const Logo: React.FC = () => (
  <Link href="/" className="flex items-center">
    <Image
      src="/assets/images/Napcen-logo.webp" // String path is faster for static sites
      alt="Napcen Logo"
      width={120} // Slightly larger for clarity
      height={64}
      className="h-9 w-auto object-contain brightness-[1.8] saturate-[1.3] md:h-12 lg:h-[54px]"
      priority // This tells the browser: "Load this image first!"
    />
  </Link>
);

const ContactButton: React.FC = () => (
  <Link
    href="/contact"
    className="bg-[rgba(255,255,255,0.1)] backdrop-blur-sm text-white border border-[rgba(255,255,255,0.25)] rounded-full py-2 px-4 md:py-[9px] md:px-[18px] text-sm md:text-[14px] font-semibold flex items-center gap-2 transition-all duration-300 hover:bg-[rgba(76,175,80,0.2)] hover:border-[#4caf50] hover:text-[#4caf50] hover:-translate-y-px"
  >
    <FaUserAlt className="text-xs" />
    Contact Us
  </Link>
);

const Header: React.FC = () => {
  const isMobile = useIsMobile();
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileSubOpen, setMobileSubOpen] = useState<{ [key: string]: boolean }>({});

  const toggleMobile = useCallback(() => setMobileOpen(prev => !prev), []);
  const closeMobile = useCallback(() => {
    setMobileOpen(false);
    setMobileSubOpen({});
  }, []);

  const toggleDesktopDropdown = useCallback((label: string) => {
    setOpenDropdown(prev => (prev === label ? null : label));
  }, []);

  const toggleMobileSub = useCallback((label: string) => {
    setMobileSubOpen(prev => ({ ...prev, [label]: !prev[label] }));
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [mobileOpen]);

  useEffect(() => {
    if (!openDropdown) return;
    const handler = () => setOpenDropdown(null);
    document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  }, [openDropdown]);

  return (
    <header className="fixed top-0 left-0 right-0 z-[1300] bg-gradient-to-r from-[#424242] to-[#030303] shadow-lg">
      <div className="container mx-auto flex items-center justify-between h-16 md:h-20 px-4 md:px-8 lg:px-12">
        <Logo />

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8 justify-center flex-1">
          {menuItems.map((item: NavItem) => (
            <div key={item.label} className="relative">
              {item.dropdown ? (
                <button
                  onClick={(e) => { e.stopPropagation(); toggleDesktopDropdown(item.label); }}
                  className={`flex items-center gap-1 text-white font-medium text-[15px] px-4 py-2 rounded-lg transition-all hover:text-[#4caf50] ${openDropdown === item.label ? 'text-[#4caf50]' : ''}`}
                >
                  {item.label}
                  <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === item.label ? 'rotate-180' : ''}`} />
                </button>
              ) : (
                <Link
                  href={item.link}
                  className={`text-white font-medium text-[15px] px-4 py-2 rounded-lg transition-all hover:text-[#4caf50] ${pathname === item.link ? 'text-[#4caf50] font-bold' : ''}`}
                >
                  {item.label}
                </Link>
              )}
              {item.dropdown && openDropdown === item.label && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full mt-3 w-56 bg-[#111] border border-[#4caf50] rounded-xl shadow-2xl py-3 z-50">
                  {item.items.map((sub: NavSubItem) => (
                    <Link key={sub.path} href={sub.path} onClick={() => setOpenDropdown(null)} className="block px-6 py-3 text-sm text-gray-200 hover:bg-[#4caf50]/10 hover:text-[#4caf50] transition">
                      {sub.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden lg:block">
          <ContactButton />
        </div>

        {/* Mobile Nav Toggle */}
        <div className="lg:hidden">
          <button onClick={toggleMobile} className="text-white p-2">
            {mobileOpen ? <X size={28} /> : <Menu size={32} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`fixed top-0 right-0 h-full w-80 bg-black z-[1400] transition-transform duration-300 ${mobileOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex items-center justify-between p-5 border-b border-white/10">
          <Logo />
          <button onClick={closeMobile} className="text-white"><X size={28} /></button>
        </div>
        <nav className="mt-6 px-4">
          {menuItems.map((item: NavItem) => (
            <div key={item.label} className="py-2">
              {item.dropdown ? (
                <>
                  <button onClick={() => toggleMobileSub(item.label)} className="w-full flex justify-between text-white font-semibold py-2">
                    {item.label}
                    {mobileSubOpen[item.label] ? <ChevronDown size={20}/> : <ChevronRight size={20}/>}
                  </button>
                  {mobileSubOpen[item.label] && (
                    <div className="pl-4 border-l border-[#4caf50] mt-2">
                      {item.items.map((sub) => (
                        <Link key={sub.path} href={sub.path} onClick={closeMobile} className="block py-2 text-gray-400">{sub.name}</Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link href={item.link} onClick={closeMobile} className="block text-white font-semibold py-2">{item.label}</Link>
              )}
            </div>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;