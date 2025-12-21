'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Youtube, 
  Linkedin, 
  Facebook, 
  Instagram, 
  Mail, 
  Phone, 
  MapPin,
  ArrowUpRight
} from 'lucide-react';

const LOGO_PATH = '/assets/images/Napcen-logo.webp'; 

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link 
    href={href}
    className="group flex items-center text-gray-400 hover:text-[#00E5FF] transition-colors duration-300 py-1.5 text-sm"
  >
    <span className="relative">
      {children}
      <span className="absolute -bottom-0.5 left-0 w-0 h-[1px] bg-[#00E5FF] transition-all duration-300 group-hover:w-full" />
    </span>
  </Link>
);

const SocialIcon = ({ href, Icon }: { href: string; Icon: React.ElementType }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 text-gray-400 transition-all duration-300 hover:bg-[#00E5FF] hover:text-black hover:-translate-y-1"
    aria-label="Social Link"
  >
    <Icon size={18} />
  </a>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const companyLinks = [
    { name: 'About NAPCEN', href: '/about' },
    { name: 'Technical Blog', href: '/blog' },
    { name: 'Career', href: '/careers' },
    { name: 'Client Portal', href: '/clients' },
    { name: 'Contact Support', href: '/contact' },
  ];

  const productLinks = [
    { name: 'Wet Scrubbers', href: '/products/scrubbers/wet-scrubber' },
    { name: 'Dust Collectors', href: '/products/dust-collectors' },
    { name: 'Fume Extractors', href: '/products/fume-extractors' },
    { name: 'Dry Scrubbers', href: '/products/scrubbers/dry-scrubber' },
    { name: 'Downdraft Tables', href: '/products/downdraft-tables' },
  ];

  const industryLinks = [
    { name: 'Pharmaceuticals', href: '/industries/pharma' },
    { name: 'Chemical Processing', href: '/industries/chemical' },
    { name: 'Metal & Mining', href: '/industries/metal' },
    { name: 'Textile Industry', href: '/industries/textile' },
    { name: 'Food Processing', href: '/industries/food' },
  ];

  return (
    <footer className="bg-[#0A1111] text-white pt-16 pb-8 border-t border-[#00E5FF]/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* BRAND & CONTACT STRIP */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-16 pb-12 border-b border-white/5">
          <div className="max-w-sm">
            <Image
              src={LOGO_PATH}
              alt="NAPCEN"
              width={140}
              height={44}
              className="brightness-0 invert mb-6"
              loading="lazy" 
            />
            <p className="text-gray-400 text-sm leading-relaxed">
              India's premier manufacturer of high-efficiency air pollution control systems, ensuring CPCB/SPCB compliance through advanced engineering.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-12 w-full lg:w-auto">
            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-[#00E5FF] group-hover:bg-[#00E5FF] group-hover:text-black transition-all">
                <Phone size={20} />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Sales Inquiry</p>
                <a href="tel:+917904469219" className="text-sm font-bold hover:text-[#00E5FF] transition">+91 79044 69219</a>
              </div>
            </div>
            
            <div className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-[#00E5FF] group-hover:bg-[#00E5FF] group-hover:text-black transition-all">
                <Mail size={20} />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">General Support</p>
                <a href="mailto:info@napcen.com" className="text-sm font-bold hover:text-[#00E5FF] transition">info@napcen.com</a>
              </div>
            </div>
          </div>
        </div>

        {/* MAIN NAVIGATION GRID */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8 mb-16">
          {/* Company */}
          <div>
            <h4 className="text-white font-black uppercase tracking-[0.2em] text-[11px] mb-6 flex items-center gap-2">
              <div className="w-2 h-2 bg-cyan-500 rounded-full" /> Company
            </h4>
            <nav className="flex flex-col">
              {companyLinks.map(link => (
                <FooterLink key={link.href} href={link.href}>{link.name}</FooterLink>
              ))}
            </nav>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="text-white font-black uppercase tracking-[0.2em] text-[11px] mb-6 flex items-center gap-2">
              <div className="w-2 h-2 bg-emerald-500 rounded-full" /> Solutions
            </h4>
            <nav className="flex flex-col">
              {productLinks.map(link => (
                <FooterLink key={link.href} href={link.href}>{link.name}</FooterLink>
              ))}
            </nav>
          </div>

          {/* NEW: Industries Section */}
          <div>
            <h4 className="text-white font-black uppercase tracking-[0.2em] text-[11px] mb-6 flex items-center gap-2">
              <div className="w-2 h-2 bg-orange-500 rounded-full" /> Industries
            </h4>
            <nav className="flex flex-col">
              {industryLinks.map(link => (
                <FooterLink key={link.href} href={link.href}>{link.name}</FooterLink>
              ))}
            </nav>
          </div>

          {/* Headquarters */}
          <div>
            <h4 className="text-white font-black uppercase tracking-[0.2em] text-[11px] mb-6 flex items-center gap-2">
              <div className="w-2 h-2 bg-[#00E5FF] rounded-full" /> Global HQ
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3 text-sm text-gray-400 leading-relaxed">
                <MapPin size={18} className="text-[#00E5FF] shrink-0 mt-0.5" />
                <p>
                  No. 42, Main Road, Villianur, <br />
                  Puducherry, India - 605110
                </p>
              </div>
              <div className="flex gap-2 pt-2">
                <SocialIcon href="https://www.youtube.com/@napcenair6285" Icon={Youtube} />

              <SocialIcon href="https://in.linkedin.com/company/napcen" Icon={Linkedin} />

              <SocialIcon href="https://www.facebook.com/NAPCEN" Icon={Facebook} />

              <SocialIcon href="https://instagram.com/napcenpondy" Icon={Instagram} />
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] md:text-xs text-gray-500 font-bold uppercase tracking-widest">
            © {currentYear} NAPCEN POLLUTION CONTROL INDIA.
          </p>
          
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2">
            {['Privacy', 'Terms', 'Sitemap'].map((item) => (
              <Link 
                key={item}
                href={`/${item.toLowerCase()}`} 
                className="text-[10px] uppercase font-bold text-gray-500 hover:text-[#00E5FF] transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}