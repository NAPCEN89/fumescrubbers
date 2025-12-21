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

const Logo: React.FC = () => (
  <div className="flex-none"> {/* Keeps logo from stretching */}
    <Link href="/" className="flex items-center">
      <Image
        src="/assets/images/Napcen-logo.webp"
        alt="Napcen Logo"
        width={130}
        height={55}
        className="h-8 w-auto object-contain brightness-[1.8] md:h-10 lg:h-12"
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

  return (
    <header className="fixed top-0 left-0 right-0 z-[1300] transition-all duration-300">
      
      {/* 1. TOP UTILITY BAR */}
      <div className="hidden lg:block bg-black/40 backdrop-blur-md border-b border-white/5 py-1.5">
        <div className="container mx-auto px-6 flex justify-end gap-8">
          <a href="tel:+917904469219" className="flex items-center gap-2 text-[10px] font-bold text-gray-400 hover:text-[#00E5FF] transition-all">
            <Phone size={11} className="text-[#00E5FF]" /> 
            <span>+91 79044 69219</span>
          </a>
          <a href="mailto:info@napcen.com" className="flex items-center gap-2 text-[10px] font-bold text-gray-400 hover:text-[#00E5FF] transition-all">
            <Mail size={11} className="text-[#00E5FF]" /> 
            <span className="lowercase">info@napcen.com</span>
          </a>
        </div>
      </div>

      {/* 2. MAIN NAVIGATION BAR */}
      <div className="bg-[#0A1111]/90 backdrop-blur-xl border-b border-white/5">
        <div className="container mx-auto flex items-center justify-between h-16 md:h-20 px-4 lg:px-6">
          
          <Logo />

          {/* DESKTOP NAV: Centered with Glass pill background */}
          <nav className="hidden lg:flex items-center gap-1 bg-white/5 border border-white/10 px-2 py-1.5 rounded-full backdrop-blur-md shadow-inner">
            {menuItems.map((item: NavItem) => (
              <div key={item.label} className="relative">
                {item.dropdown ? (
                  <button
                    onClick={(e) => { e.stopPropagation(); toggleDesktopDropdown(item.label); }}
                    className={`flex items-center gap-1 font-black text-[10px] uppercase tracking-[0.1em] px-4 py-2 rounded-full transition-all hover:bg-white/5 hover:text-[#00E5FF] ${openDropdown === item.label ? 'text-[#00E5FF] bg-white/5' : 'text-gray-300'}`}
                  >
                    {item.label}
                    <ChevronDown className={`w-3 h-3 transition-transform ${openDropdown === item.label ? 'rotate-180' : ''}`} />
                  </button>
                ) : (
                  <Link
                    href={item.link}
                    className={`font-black text-[10px] uppercase tracking-[0.1em] px-4 py-2 rounded-full transition-all hover:bg-white/5 hover:text-[#00E5FF] ${pathname === item.link ? 'text-[#00E5FF] bg-white/10 shadow-sm' : 'text-gray-300'}`}
                  >
                    {item.label}
                  </Link>
                )}

                {/* Dropdown Menu */}
                {item.dropdown && openDropdown === item.label && (
                  <div className="absolute left-1/2 -translate-x-1/2 top-full mt-4 w-60 bg-[#0A1111] border border-[#00E5FF]/30 rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.6)] py-3 animate-in fade-in zoom-in-95 duration-200">
                    <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#0A1111] border-l border-t border-[#00E5FF]/30 rotate-45"></div>
                    {item.items.map((sub: NavSubItem) => (
                      <Link 
                        key={sub.path} 
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
            ))}
          </nav>

          {/* ACTION BUTTON */}
          <div className="flex items-center gap-4 flex-none">
            <Link
              href="/contact"
              className="hidden md:flex bg-[#00E5FF] text-black rounded-full py-2.5 px-6 text-[10px] font-black uppercase tracking-widest items-center gap-2 transition-all hover:bg-white hover:shadow-[0_0_20px_rgba(0,229,255,0.4)] active:scale-95"
            >
              <FileText size={14} />
              Quote
            </Link>

            <div className="lg:hidden">
              <button onClick={() => setMobileOpen(!mobileOpen)} className="text-white p-1">
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
                      {item.items.map((sub) => (
                        <Link key={sub.path} href={sub.path} onClick={() => setMobileOpen(false)} className="block py-3 text-[11px] font-bold text-gray-400 uppercase tracking-tighter hover:text-[#00E5FF]">
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link href={item.link} onClick={() => setMobileOpen(false)} className="block text-white font-black uppercase tracking-widest text-[12px] py-4 hover:text-[#00E5FF]">
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