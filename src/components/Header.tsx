'use client';

import React, { useState, useCallback, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaUserAlt } from 'react-icons/fa';
import { Menu, X, ChevronDown, ChevronRight } from 'lucide-react';

// Correct paths
import logo from '../assets/images/Napcen-logo.png';
import { menuItems, NavItem, NavSubItem } from '../app/data/navData';

// Mobile detection hook
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

// Logo Component
const Logo: React.FC = () => (
  <Link href="/" className="flex items-center">
    <Image
      src={logo}
      alt="Napcen Logo"
      width={100}
      height={54}
      className="h-9 w-auto object-contain brightness-[1.8] saturate-[1.3] md:h-12 lg:h-[54px]"
      priority
    />
  </Link>
);

// Contact Button
const ContactButton: React.FC = () => (
  <Link
    href="/contact"
    className={`
      bg-[rgba(255,255,255,0.1)] backdrop-blur-sm text-white border border-[rgba(255,255,255,0.25)]
      rounded-full py-2 px-4 md:py-[9px] md:px-[18px] text-sm md:text-[14px] font-semibold flex items-center gap-2
      transition-all duration-300 whitespace-nowrap
      hover:bg-[rgba(76,175,80,0.2)] hover:border-[#4caf50] hover:text-[#4caf50] hover:-translate-y-px
    `}
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

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [mobileOpen]);

  // Close desktop dropdown on click outside
  useEffect(() => {
    if (!openDropdown) return;
    const handler = () => setOpenDropdown(null);
    document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  }, [openDropdown]);

  // Desktop Navigation (centered)
  const DesktopNav = (
    <nav className="hidden lg:flex items-center gap-8">
      {menuItems.map((item: NavItem) => (
        <div key={item.label} className="relative">
          {item.dropdown ? (
            <button
              onClick={() => toggleDesktopDropdown(item.label)}
              className={`
                flex items-center gap-1 text-white font-medium text-[15px] px-4 py-2 rounded-lg
                transition-all duration-300 hover:text-[#4caf50] hover:bg-[rgba(76,175,80,0.1)]
                ${openDropdown === item.label ? 'text-[#4caf50]' : ''}
              `}
            >
              {item.label}
              <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === item.label ? 'rotate-180' : ''}`} />
            </button>
          ) : (
            <Link
              href={item.link}
              className={`
                text-white font-medium text-[15px] px-4 py-2 rounded-lg transition-all duration-300
                hover:text-[#4caf50] hover:bg-[rgba(76,175,80,0.1)]
                ${pathname === item.link ? 'text-[#4caf50] font-bold' : ''}
              `}
            >
              {item.label}
            </Link>
          )}

          {/* Desktop Dropdown */}
          {item.dropdown && openDropdown === item.label && (
            <div className="absolute left-1/2 -translate-x-1/2 top-full mt-3 w-56 bg-[#111] border border-[#4caf50] rounded-xl shadow-2xl py-3 z-50">
              {item.items.map((sub: NavSubItem) => (
                <Link
                  key={sub.path}
                  href={sub.path}
                  onClick={() => setOpenDropdown(null)}
                  className="block px-6 py-3 text-sm text-gray-200 hover:bg-[#4caf50]/10 hover:text-[#4caf50] transition"
                >
                  {sub.name}
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </nav>
  );

  // Mobile Navigation Drawer
  const MobileNav = (
    <>
      {/* Hamburger */}
      <button onClick={toggleMobile} className="lg:hidden text-white p-2">
        {mobileOpen ? <X size={28} /> : <Menu size={32} />}
      </button>

      {/* Overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/70 z-[1299] lg:hidden"
          onClick={closeMobile}
        />
      )}

      {/* Drawer */}
      <div
        className={`
          fixed top-0 right-0 h-full w-80 bg-gradient-to-br from-[#1a1a1a] to-[#000] z-[1300]
          shadow-2xl transition-transform duration-300 lg:hidden
          ${mobileOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        <div className="flex items-center justify-between p-5 border-b border-white/10">
          <Logo />
          <button onClick={closeMobile} className="text-white p-2">
            <X size={28} />
          </button>
        </div>

        <nav className="mt-6 px-4 space-y-1">
          {menuItems.map((item: NavItem) => (
            <div key={item.label}>
              {item.dropdown ? (
                <>
                  <button
                    onClick={() => toggleMobileSub(item.label)}
                    className="w-full flex items-center justify-between py-4 px-4 text-left font-semibold text-white hover:bg-white/5 rounded-lg transition"
                  >
                    {item.label}
                    {mobileSubOpen[item.label] ? (
                      <ChevronDown size={20} />
                    ) : (
                      <ChevronRight size={20} />
                    )}
                  </button>

                  {/* Mobile Submenu */}
                  <div
                    className={`
                      overflow-hidden transition-all duration-300
                      ${mobileSubOpen[item.label] ? 'max-h-96' : 'max-h-0'}
                    `}
                  >
                    <div className="pl-8 py-2 border-l-2 border-[#4caf50]/50">
                      {item.items.map((sub: NavSubItem) => (
                        <Link
                          key={sub.path}
                          href={sub.path}
                          onClick={closeMobile}
                          className="block py-3 text-gray-300 hover:text-[#4caf50] transition"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <Link
                  href={item.link}
                  onClick={closeMobile}
                  className={`
                    block py-4 px-4 rounded-lg font-medium text-white transition
                    hover:bg-white/5
                    ${pathname === item.link ? 'text-[#4caf50] font-bold bg-white/5' : ''}
                  `}
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </nav>

        {/* Contact Button in Mobile Drawer */}
        <div className="absolute bottom-8 left-4 right-4">
          <ContactButton />
        </div>
      </div>
    </>
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-[1300] bg-gradient-to-r from-[#424242] to-[#030303]">
      <div className="container mx-auto flex items-center justify-between h-16 md:h-20 px-4 md:px-8 lg:px-12">
        {/* Logo - Left */}
        <Logo />

        {/* Desktop: Centered Nav + Right Contact */}
        <div className="hidden lg:flex items-center justify-center flex-1">
          {DesktopNav}
        </div>
        <div className="hidden lg:block">
          <ContactButton />
        </div>

        {/* Mobile: Only Hamburger */}
        <div className="lg:hidden">
          {MobileNav}
        </div>
      </div>
    </header>
  );
};

export default Header;