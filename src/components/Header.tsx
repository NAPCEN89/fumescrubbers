'use client';

import React, { useState, useCallback, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown, ChevronRight, Phone, Mail, FileText } from 'lucide-react';

// IMPORT DATA
import { menuItems, NavItem, NavSubItem } from '../app/data/navData';

const useIsMobile = (breakpoint = 1024) => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < breakpoint);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, [breakpoint]);
  return isMobile;
};

const Logo: React.FC<{ isTransparent?: boolean; isHomePage?: boolean }> = ({ isTransparent, isHomePage }) => (
  <div className="flex-none ml-4 md:ml-8"> {/* Keeps logo from stretching */}
    <Link href="/" className="flex items-center">
      <Image
        src="/assets/images/Napcen-logo.webp"
        alt="Napcen Logo"
        width={130}
        height={55}
        className={`h-8 w-auto object-contain md:h-10 lg:h-12 transition-all duration-300 ${(isTransparent && !isHomePage) ? 'brightness-100' : 'brightness-[1.8]'}`}
        priority
      />
    </Link>
  </div>
);

const Header: React.FC = () => {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileSubOpen, setMobileSubOpen] = useState<{ [key: string]: boolean }>({});

  const toggleDesktopDropdown = useCallback((label: string) => {
    setOpenDropdown(prev => (prev === label ? null : label));
  }, []);

  useEffect(() => {
    if (!openDropdown) return;
    const handler = () => setOpenDropdown(null);
    window.addEventListener('click', handler);
    return () => window.removeEventListener('click', handler);
  }, [openDropdown]);

  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    handleScroll(); // Check on mount
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHomePage = pathname === '/';
  const isTransparent = !scrolled;

  // Colors based on transparency state
  const textColor = (isTransparent && isHomePage) ? 'text-white' : isTransparent ? 'text-gray-900' : 'text-gray-300';
  const textHover = (isTransparent && isHomePage) ? 'hover:text-[#00E5FF]' : isTransparent ? 'hover:text-[#0099AA]' : 'hover:text-[#00E5FF]';
  const activeTextColor = (isTransparent && isHomePage) ? 'text-[#00E5FF]' : isTransparent ? 'text-[#0099AA]' : 'text-[#00E5FF]';
  const pillBg = (isTransparent && isHomePage) ? 'bg-white/5 border-white/10' : isTransparent ? 'bg-black/5 border-black/10' : 'bg-white/5 border-white/10';
  const pillHoverBg = (isTransparent && isHomePage) ? 'hover:bg-white/10' : isTransparent ? 'hover:bg-black/10' : 'hover:bg-white/5';
  const iconColor = (isTransparent && isHomePage) ? 'text-[#00E5FF]' : isTransparent ? 'text-[#0099AA]' : 'text-[#00E5FF]';
  
  return (
    <header className={`fixed top-0 left-0 right-0 z-[1300] transition-all duration-300 ${isTransparent ? 'bg-transparent' : 'bg-[#0A1111]/95 backdrop-blur-lg shadow-lg border-b border-white/5'}`}>
      
      {/* 1. TOP UTILITY BAR */}
      <div className={`hidden lg:block border-b py-1.5 transition-colors duration-300 ${(isTransparent && isHomePage) ? 'bg-black/20 backdrop-blur-md border-white/10' : isTransparent ? 'bg-white/20 backdrop-blur-md border-black/10' : 'bg-black/40 border-white/5'}`}>
        <div className="container mx-auto px-6 flex justify-end gap-8">
          <a href="tel:+917904469219" className={`flex items-center gap-2 text-[10px] font-bold transition-all ${textColor} ${textHover}`}>
            <Phone size={11} className={iconColor} /> 
            <span>+91 79044 69219</span>
          </a>
          <a href="mailto:info@napcen.com" className={`flex items-center gap-2 text-[10px] font-bold transition-all ${textColor} ${textHover}`}>
            <Mail size={11} className={iconColor} /> 
            <span className="lowercase">info@napcen.com</span>
          </a>
        </div>
      </div>

      {/* 2. MAIN NAVIGATION BAR */}
      <div className={`transition-colors duration-300`}>
        <div className="container mx-auto flex items-center justify-between h-16 md:h-20 px-4 lg:px-6">
          
          <Logo isTransparent={isTransparent} isHomePage={isHomePage} />

          {/* DESKTOP NAV: Centered with Glass pill background */}
          <nav className={`hidden lg:flex items-center gap-1 border px-2 py-1.5 rounded-full backdrop-blur-md shadow-inner transition-colors duration-300 ${pillBg}`}>
            {menuItems.map((item: NavItem) => {
              const isActive = pathname === item.link;
              const isDropdownOpen = openDropdown === item.label;
              return (
                <div key={item.label} className="relative">
                  {item.dropdown ? (
                    <button
                      onClick={(e) => { e.stopPropagation(); toggleDesktopDropdown(item.label); }}
                      className={`flex items-center gap-1 font-black text-[10px] uppercase tracking-[0.1em] px-4 py-2 rounded-full transition-all ${pillHoverBg} ${textHover} ${isDropdownOpen ? `${activeTextColor} ${isTransparent ? 'bg-black/10' : 'bg-white/5'}` : textColor}`}
                    >
                      {item.label}
                      <ChevronDown className={`w-3 h-3 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                    </button>
                  ) : (
                    <Link
                      href={item.link || '#'}
                      className={`font-black text-[10px] uppercase tracking-[0.1em] px-4 py-2 rounded-full transition-all ${pillHoverBg} ${textHover} ${isActive ? `${activeTextColor} ${isTransparent ? 'bg-black/10 shadow-sm' : 'bg-white/10 shadow-sm'}` : textColor}`}
                    >
                      {item.label}
                    </Link>
                  )}

                  {/* Dropdown Menu */}
                  {item.dropdown && isDropdownOpen && (
                    <div className="absolute left-1/2 -translate-x-1/2 top-full mt-4 w-60 bg-[#0A1111] border border-[#00E5FF]/30 rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.6)] py-3 animate-in fade-in zoom-in-95 duration-200">
                      <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#0A1111] border-l border-t border-[#00E5FF]/30 rotate-45"></div>
                      {item.items?.map((sub: NavSubItem) => (
                        <Link 
                          key={sub.name} 
                          href={sub.path} 
                          onClick={() => setOpenDropdown(null)} 
                          className="block px-6 py-3 text-[10px] font-bold uppercase tracking-wider text-gray-400 hover:text-[#00E5FF] hover:translate-x-1 transition-all"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* ACTION BUTTON */}
          <div className="flex items-center gap-4 flex-none">
            <Link
              href="/contact"
              className={`hidden md:flex rounded-full py-2.5 px-6 text-[10px] font-black uppercase tracking-widest items-center gap-2 transition-all active:scale-95 ${
                isTransparent 
                  ? 'bg-primary-blue text-white hover:bg-black hover:shadow-lg' 
                  : 'bg-[#00E5FF] text-black hover:bg-white hover:shadow-[0_0_20px_rgba(0,229,255,0.4)]'
              }`}
            >
              <FileText size={14} />
              Quote
            </Link>

            <div className="lg:hidden">
              <button onClick={() => setMobileOpen(!mobileOpen)} className={`p-1 transition-colors ${isTransparent ? 'text-gray-900' : 'text-white'}`}>
                {mobileOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 3. MOBILE DRAWER */}
      <div className={`fixed inset-0 bg-black/80 backdrop-blur-sm z-[1400] transition-opacity duration-300 ${mobileOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={() => setMobileOpen(false)} />
      
      <div className={`fixed top-0 right-0 h-full w-[85%] max-w-sm bg-[#050505] z-[1500] border-l border-white/10 transition-transform duration-500 ease-out ${mobileOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex items-center justify-between p-6 border-b border-white/10 bg-[#0A1111]">
          <Logo />
          <button onClick={() => setMobileOpen(false)} className="text-white"><X size={24} /></button>
        </div>
        
        <nav className="p-6 space-y-2">
          {menuItems.map((item: NavItem) => (
            <div key={item.label} className="border-b border-white/5 last:border-0 pb-2">
              {item.dropdown ? (
                <>
                  <button 
                    onClick={() => setMobileSubOpen(prev => ({ ...prev, [item.label]: !prev[item.label] }))} 
                    className={`w-full flex justify-between items-center font-black uppercase tracking-widest text-[12px] py-4 transition-colors ${mobileSubOpen[item.label] ? 'text-[#00E5FF]' : 'text-white'}`}
                  >
                    {item.label}
                    <ChevronDown size={18} className={`transition-transform duration-300 ${mobileSubOpen[item.label] ? 'rotate-180' : ''}`}/>
                  </button>
                  {mobileSubOpen[item.label] && (
                    <div className="pl-4 space-y-1 mb-4 border-l-2 border-[#00E5FF]/30">
                      {item.items?.map((sub: NavSubItem) => (
                        <Link key={sub.name} href={sub.path} onClick={() => setMobileOpen(false)} className="block py-3 text-[11px] font-bold text-gray-400 uppercase tracking-tighter hover:text-[#00E5FF]">
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link href={item.link || '#'} onClick={() => setMobileOpen(false)} className="block text-white font-black uppercase tracking-widest text-[12px] py-4 hover:text-[#00E5FF]">
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;