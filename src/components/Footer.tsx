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
  MapPin
} from 'lucide-react';

// ----------------------------------------------------------------------
// CONFIGURATION
// ----------------------------------------------------------------------
// Using a string path for public assets is much faster for static sites
const LOGO_PATH = '/assets/images/Napcen-logo.png'; 

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link 
    href={href}
    className="text-gray-300 hover:text-[#00E5FF] transition-colors duration-300 py-1.5 block text-sm md:text-base"
  >
    {children}
  </Link>
);

const SocialIcon = ({ href, Icon }: { href: string; Icon: React.ElementType }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white transition-all duration-300 hover:bg-[#00E5FF] hover:text-black hover:shadow-lg hover:shadow-[#00E5FF]/30"
    aria-label="Social Link"
  >
    <Icon size={20} />
  </a>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const companyLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  const productLinks = [
    { name: 'Wet Scrubber', href: '/products/scrubbers/wet-scrubber' },
    { name: 'Dry Scrubber', href: '/products/scrubbers/dry-scrubber' },
    { name: 'Dust Collector', href: '/products/dust-collectors' },
    { name: 'Fume Extractor', href: '/products/fume-extractors' },
    { name: 'Downdraft Table', href: '/products/downdraft-tables' },
  ];

  return (
    <footer className="bg-[#0f1515] text-white pt-12 pb-8 border-t border-[#00E5FF]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          <div className="text-center md:text-left">
            {/* FIXED: Using string path and unoptimized prop for Metanet speed */}
            <Image
              src={LOGO_PATH}
              alt="NAPCEN Logo"
              width={160}
              height={50}
              className="brightness-0 invert mx-auto md:mx-0 mb-4"
              // Footer images should NOT be priority, they load after the fold
              loading="lazy" 
            />
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs mx-auto md:mx-0">
              Engineering the future of clean air. India's trusted leader in industrial air pollution control systems.
            </p>
          </div>

          <div className="flex justify-center items-center">
            <div className="flex gap-3">
              <SocialIcon href="https://youtube.com" Icon={Youtube} />
              <SocialIcon href="https://linkedin.com" Icon={Linkedin} />
              <SocialIcon href="https://facebook.com" Icon={Facebook} />
              <SocialIcon href="https://instagram.com" Icon={Instagram} />
            </div>
          </div>

          <div className="text-center md:text-right space-y-3 flex flex-col justify-center">
            <div className="flex items-center justify-center md:justify-end gap-3 text-sm">
              <Phone size={18} className="text-[#00E5FF]" />
              <a href="tel:+917904469219" className="hover:text-[#00E5FF] transition">+91 79044 69219</a>
            </div>
            <div className="flex items-center justify-center md:justify-end gap-3 text-sm">
              <Mail size={18} className="text-[#00E5FF]" />
              <a href="mailto:sales@napcen.com" className="hover:text-[#00E5FF] transition">sales@napcen.com</a>
            </div>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-10 border-y border-white/10">
          <div>
            <h4 className="text-[#00E5FF] font-bold uppercase tracking-wider text-sm mb-5">Company</h4>
            <nav className="space-y-2">
              {companyLinks.map(link => (
                <FooterLink key={link.href} href={link.href}>
                  {link.name}
                </FooterLink>
              ))}
            </nav>
          </div>

          <div>
            <h4 className="text-[#00E5FF] font-bold uppercase tracking-wider text-sm mb-5">Solutions</h4>
            <nav className="space-y-2">
              {productLinks.map(link => (
                <FooterLink key={link.href} href={link.href}>
                  {link.name}
                </FooterLink>
              ))}
            </nav>
          </div>

          <div className="col-span-2 md:col-span-2">
            <h4 className="text-[#00E5FF] font-bold uppercase tracking-wider text-sm mb-5">Location</h4>
            <div className="flex items-start gap-3 text-sm text-gray-400">
              <MapPin size={20} className="text-[#00E5FF] shrink-0 mt-0.5" />
              <p>
                Villianur, Puducherry<br />
                India - 605110
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs md:text-sm text-gray-500">
          <p>© {currentYear} NAPCEN POLLUTION CONTROL. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-[#00E5FF] transition">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-[#00E5FF] transition">Terms of Service</Link>
            <Link href="/sitemap" className="hover:text-[#00E5FF] transition">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}