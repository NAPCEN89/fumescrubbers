// app/services/page.tsx
// ⚠️ Removed 'use client' — Server Component so metadata export works for SEO.
// No client-side state or events used on this page.

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight, Settings, PenTool, Factory,
  ShieldCheck, ChevronDown, MapPin, Phone,
  Wrench, CheckCircle2, Globe2, Zap, Award,
} from 'lucide-react';
import { Metadata } from 'next';

// ─────────────────────────────────────────────────────────────
// PAGE METADATA
// ─────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: 'Industrial Air Pollution Control Services — Design, Manufacturing, Installation & AMC | NAPCEN India',
  description:
    'NAPCEN provides complete industrial air pollution control services in Puducherry, India — consulting & design, wet scrubber manufacturing, dust collector fabrication, on-site installation, commissioning, and Annual Maintenance Contracts (AMC). CPCB/TNPCB compliant. Serving Chennai, Tamil Nadu & all India.',
  keywords: [
    'air pollution control services India',
    'wet scrubber design consulting India',
    'industrial dust collector manufacturing India',
    'air pollution control installation India',
    'wet scrubber installation Chennai',
    'dust collector installation Tamil Nadu',
    'air pollution control AMC India',
    'annual maintenance contract scrubber India',
    'CPCB compliant air pollution control services',
    'TNPCB compliant scrubber installation India',
    'turnkey air pollution control project India',
    'industrial air filtration services Puducherry',
    'wet scrubber commissioning India',
    'fume extractor installation India',
    'downdraft table installation India',
  ],
  alternates: {
    canonical: 'https://fumescrubbers.com/services',
  },
  openGraph: {
    title: 'Air Pollution Control Services — Design, Manufacturing, Installation & AMC | NAPCEN',
    description:
      'Complete air pollution control services: consulting, wet scrubber manufacturing, dust collector installation, and AMC by NAPCEN, Puducherry, India. CPCB/TNPCB compliant. Pan-India.',
    url: 'https://fumescrubbers.com/services',
    siteName: 'NAPCEN Industrial Air Solutions',
    locale: 'en_IN',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'NAPCEN Air Pollution Control Services India' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NAPCEN — Industrial Air Pollution Control Services India',
    description: 'Design, manufacturing, installation & AMC for wet scrubbers, dust collectors, fume extractors. Puducherry, India.',
    images: ['/og-image.jpg'],
  },
};

const trustChips = [
  {
    label: 'CPCB / TNPCB Compliant',
    icon: (
      // Shield with checkmark - compliance/certification
     <svg
        className="w-4 h-4 text-primary-blue flex-shrink-0"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    label: 'Manufacturing in Puducherry',
    icon: (
      // Factory building
      <svg className="w-3.5 h-3.5 text-primary-blue flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5M4.5 3h6.75v18M4.5 3v18M11.25 3l6-1.5V21M11.25 8.25h6M11.25 12h6M11.25 15.75h6M6.75 6.75h.008v.008H6.75V6.75zm0 3.75h.008v.008H6.75v-.008zm0 3.75h.008v.008H6.75v-.008z" />
      </svg>
    ),
  },
  {
    label: 'Turnkey Design to AMC',
    icon: (
      // Repeat/lifecycle arrows - full process cycle
      <svg className="w-3.5 h-3.5 text-primary-blue flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
      </svg>
    ),
  },
  {
    label: 'Pan-India Installation',
    icon: (
      // Map pin with India-wide reach
      <svg className="w-3.5 h-3.5 text-amber-500 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
  },
  {
    label: 'Performance Certificate',
    icon: (
      // Document with checkmark - certificate
      <svg className="w-3.5 h-3.5 text-primary-blue flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75M3.75 4.5h16.5c.621 0 1.125.504 1.125 1.125v13.5c0 .621-.504 1.125-1.125 1.125H3.75A1.125 1.125 0 012.625 19.125V5.625c0-.621.504-1.125 1.125-1.125z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9l1.5 1.5 3-3" />
      </svg>
    ),
  },
  {
    label: 'Export: UAE · Malaysia · Saudi Arabia',
    icon: (
      // Globe - international/export
      <svg className="w-3.5 h-3.5 text-primary-blue flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 100-18 9 9 0 000 18z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.6 9h16.8M3.6 15h16.8M11.5 3a17 17 0 000 18M12.5 3a17 17 0 010 18" />
      </svg>
    ),
  },
];

// ─────────────────────────────────────────────────────────────
// STRUCTURED DATA
// ─────────────────────────────────────────────────────────────
const PageSchemas = () => (
  <>
    {/* BreadcrumbList */}
    <script type="application/ld+json" dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://fumescrubbers.com' },
          { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://fumescrubbers.com/services' },
        ],
      }),
    }} />

    {/* Service schema for each service */}
    <script type="application/ld+json" dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: 'NAPCEN Industrial Air Pollution Control Services',
        url: 'https://fumescrubbers.com/services',
        itemListElement: [
          {
            '@type': 'ListItem', position: 1,
            item: {
              '@type': 'Service',
              name: 'Consulting & Design',
              description: 'Site assessment, engineering design, and custom air pollution control system blueprints for wet scrubbers, dust collectors, and fume extractors. CPCB/TNPCB compliance engineering.',
              url: 'https://fumescrubbers.com/services/consulting-design',
              provider: { '@type': 'Organization', name: 'NAPCEN', url: 'https://fumescrubbers.com' },
              areaServed: 'India',
            },
          },
          {
            '@type': 'ListItem', position: 2,
            item: {
              '@type': 'Service',
              name: 'Manufacturing & Supply',
              description: 'Factory manufacturing and direct supply of wet scrubbers, dry scrubbers, PP FRP scrubbers, dust collectors, fume extractors, downdraft tables, and industrial blowers from Puducherry, India.',
              url: 'https://fumescrubbers.com/services/manufacturing',
              provider: { '@type': 'Organization', name: 'NAPCEN', url: 'https://fumescrubbers.com' },
              areaServed: 'India',
            },
          },
          {
            '@type': 'ListItem', position: 3,
            item: {
              '@type': 'Service',
              name: 'Turnkey Installation & Commissioning',
              description: 'Complete on-site installation, ducting fabrication, electrical connection, and commissioning of all air pollution control equipment across India. CPCB/TNPCB compliance documentation provided.',
              url: 'https://fumescrubbers.com/services/installation',
              provider: { '@type': 'Organization', name: 'NAPCEN', url: 'https://fumescrubbers.com' },
              areaServed: 'India',
            },
          },
          {
            '@type': 'ListItem', position: 4,
            item: {
              '@type': 'Service',
              name: 'Annual Maintenance Contract (AMC)',
              description: 'Preventive maintenance, breakdown service, spare parts supply, and CPCB compliance support through Annual Maintenance Contracts for wet scrubbers, dust collectors, and fume extractors. Pan-India.',
              url: 'https://fumescrubbers.com/services/maintenance',
              provider: { '@type': 'Organization', name: 'NAPCEN', url: 'https://fumescrubbers.com' },
              areaServed: 'India',
            },
          },
        ],
      }),
    }} />
  </>
);

// ─────────────────────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────────────────────
const services = [
  {
    title: 'Consulting & Design',
    shortTitle: 'Design',
    tagline: 'Engineering the Right Solution for Your Process',
    description:
      'Expert site assessment, pollutant load analysis, and custom engineering design for CPCB/TNPCB compliant wet scrubbers, dust collectors, fume extractors, and complete ventilation systems. We provide P&ID drawings, CFD analysis reports, and equipment sizing calculations.',
    bullets: [
      'On-site process assessment and stack sampling',
      'Custom P&ID and equipment layout drawings',
      'CFD (Computational Fluid Dynamics) flow simulation',
      'Material selection: PP-FRP, PVDF, MS, SS304/316',
      'CPCB / TNPCB compliance engineering documentation',
    ],
    link: '/services/consulting-design',
    Icon: PenTool,
    image: '/assets/images/design-consulting.webp',
    imageAlt: 'NAPCEN air pollution control consulting and design service — Puducherry India',
    seoKeywords: 'wet scrubber design India, air pollution control engineering, CPCB compliance design',
  },
  {
    title: 'Manufacturing & Supply',
    shortTitle: 'Manufacturing',
    tagline: 'Factory-Direct from Our Puducherry Facility',
    description:
      'Precision fabrication of wet scrubbers, dry scrubbers, PP FRP scrubbers, dust collectors, fume extractors, downdraft tables, industrial blowers, heat exchangers, and fume hoods — manufactured and quality-tested at our Puducherry, India factory. Factory-direct pricing with guaranteed performance.',
    bullets: [
      'Wet scrubbers: packed bed, venturi, ammonia, HCL, PP FRP',
      'Dust collectors: pulse jet, cyclone, cartridge, baghouse',
      'Fume extractors: welding, laser, soldering, laboratory',
      'Downdraft tables, industrial blowers, heat exchangers',
      'All materials: PP-FRP, PVDF, MS, SS304, SS316',
    ],
    link: '/services/manufacturing',
    Icon: Factory,
    image: '/assets/images/manufacturing.webp',
    imageAlt: 'NAPCEN wet scrubber and dust collector manufacturing facility — Puducherry India',
    seoKeywords: 'wet scrubber manufacturer India, dust collector manufacturer Puducherry, PP FRP scrubber manufacturer',
  },
  {
    title: 'Installation & Commissioning',
    shortTitle: 'Installation',
    tagline: 'Certified Turnkey Installation Across India',
    description:
      'Complete on-site installation and commissioning of all air pollution control equipment — ducting fabrication, equipment erection, electrical connections, control panel wiring, and full system testing. Our certified engineers serve Chennai, Tamil Nadu, and all India with turnkey project execution.',
    bullets: [
      'Full ducting design, fabrication, and installation',
      'Equipment erection, alignment, and mechanical fit-out',
      'Electrical, instrumentation, and control panel wiring',
      'System performance testing and emission measurement',
      'CPCB / TNPCB compliance documentation and handover',
    ],
    link: '/services/installation',
    Icon: Wrench,
    image: '/assets/images/installation.webp',
    imageAlt: 'NAPCEN wet scrubber installation service India — on-site commissioning',
    seoKeywords: 'wet scrubber installation India, dust collector installation Chennai, air pollution control installation Tamil Nadu',
  },
  {
    title: 'Maintenance & AMC',
    shortTitle: 'AMC',
    tagline: 'Annual Maintenance Contracts — Pan India',
    description:
      'NAPCEN Annual Maintenance Contracts (AMC) provide scheduled preventive maintenance, emergency breakdown service, spare parts supply, and CPCB/TNPCB compliance documentation for all air pollution control systems — wet scrubbers, dust collectors, fume extractors, and blowers — pan India.',
    bullets: [
      'Scheduled preventive maintenance visits (monthly/quarterly)',
      'Emergency breakdown callout — 24-hour support',
      'Genuine spare parts: bags, cartridges, nozzles, pumps',
      'pH sensor calibration and dosing system servicing',
      'Annual CPCB/TNPCB stack emission testing support',
    ],
    link: '/services/maintenance',
    Icon: Settings,
    image: '/assets/images/maintenance.webp',
    imageAlt: 'NAPCEN air pollution control AMC maintenance service India',
    seoKeywords: 'wet scrubber AMC India, dust collector maintenance contract India, air pollution control AMC service',
  },
] as const;

const products = [
  {
    title: 'Wet Scrubbers',
    description: 'Packed Bed, Venturi, Ammonia, HCL, Chlorine, PP FRP, and Multi-Stage wet scrubbers for industrial gas and fume control. CPCB/TNPCB compliant.',
    link: '/products/wet-scrubbers',
    image: '/assets/images/products/wet-scrubber/Packed-Bed-Scrubbers.webp',
    imageAlt: 'Wet scrubber manufacturer India — NAPCEN packed bed wet scrubber Puducherry',
    Icon: ShieldCheck,
  },
  {
    title: 'Dust Collectors',
    description: 'Pulse Jet Baghouse, Cyclone Separator, Cartridge, and Portable dust collectors for industrial particulate control across India.',
    link: '/products/dust-collectors',
    image: '/assets/images/products/dust-collector/Baghouse-duct-collector-chennai.webp',
    imageAlt: 'Dust collector manufacturer India — NAPCEN pulse jet baghouse dust collector Chennai',
    Icon: ShieldCheck,
  },
  {
    title: 'Fume Extractors',
    description: 'Welding, Laser, Soldering, Gold, and Laboratory fume extractors with HEPA and carbon filtration for automotive, electronics, and pharma industries.',
    link: '/products/fume-extractors',
    image: '/assets/images/products/fume-extractor/Welding-fume-extractor.webp',
    imageAlt: 'Fume extractor manufacturer India — NAPCEN welding fume extractor Puducherry',
    Icon: ShieldCheck,
  },
  {
    title: 'Downdraft Tables',
    description: 'Welding, Grinding, Polishing, and Woodworking downdraft tables for source capture of dust and fumes at bench level. Manufacturer in India.',
    link: '/products/downdraft-tables',
    image: '/assets/images/products/downdraft-table/welding-downdraft-table.webp',
    imageAlt: 'Downdraft table manufacturer India — NAPCEN welding downdraft table Puducherry',
    Icon: ShieldCheck,
  },
] as const;

// Why NAPCEN trust cards
const WHY_CARDS = [
  { icon: <Award className="w-6 h-6" />, title: '15+ Years Experience', desc: 'Trusted air pollution control services since 2010. 500+ projects completed across India.' },
  { icon: <ShieldCheck className="w-6 h-6" />, title: 'CPCB / TNPCB Compliant', desc: 'All services include compliance documentation, CFD reports, and emission test certificates.' },
  { icon: <Zap className="w-6 h-6" />, title: 'Fast Execution', desc: 'Standard installation: 3–4 weeks. Fast-track projects: 10 business days. Pan-India service.' },
  { icon: <Globe2 className="w-6 h-6" />, title: 'Pan-India + Export', desc: 'Service network across Tamil Nadu, Karnataka, Telangana, Maharashtra, Delhi & export countries.' },
];

// ─────────────────────────────────────────────────────────────
// ACTION CARD COMPONENT
// ─────────────────────────────────────────────────────────────
interface ActionItem {
  title: string;
  description: string;
  link: string;
  image: string;
  imageAlt?: string;
  Icon?: any;
  shortTitle?: string;
  tagline?: string;
  bullets?: readonly string[] | string[];
  seoKeywords?: string;
}

function ActionCard({ item, type }: { item: ActionItem; type: 'service' | 'product' }) {
  return (
    <div
      className="group relative flex flex-col bg-white backdrop-blur-xl rounded-[2.5rem] border border-primary-blue/10 overflow-hidden transition-all duration-500 hover:border-primary-blue/50 hover:shadow-md hover:-translate-y-2 w-full max-w-[380px]"
      itemScope
      itemType={type === 'service' ? 'https://schema.org/Service' : 'https://schema.org/Product'}
    >
      {/* Image */}
      <div className="relative h-56 w-full bg-bg-light overflow-hidden flex items-center justify-center p-8">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle,rgba(13,89,170,0.1)_1px,transparent_1px)] bg-[size:20px_20px]" aria-hidden="true" />
        <div className="relative w-full h-full">
          <Image
            src={item.image}
            alt={item.imageAlt || item.title}
            fill
            className="object-contain transition-transform duration-700 group-hover:scale-110"
            sizes="380px"
            itemProp="image"
          />
        </div>
        {/* Location badge */}
        <div className="absolute bottom-3 right-3 bg-white text-text-muted text-[8px] font-bold px-2.5 py-1 rounded-full border border-primary-blue/10 uppercase tracking-wider backdrop-blur-sm shadow-sm">
          Puducherry, India
        </div>
      </div>

      {/* Content */}
      <div className="p-8 flex flex-col items-center text-center flex-1">
        <div className="p-3 rounded-2xl bg-primary-blue/10 mb-4 border border-primary-blue/20" aria-hidden="true">
          {'Icon' in item && item.Icon ? <item.Icon className="w-6 h-6 text-primary-blue" /> : <ShieldCheck className="w-6 h-6 text-primary-blue" />}
        </div>

        {/* Title */}
        <h3
          className="text-xl font-black text-text-main mb-3 uppercase tracking-tighter"
          itemProp="name"
        >
          {item.title}
        </h3>

        {/* Description — keyword-rich */}
        <p
          className="text-text-muted text-sm leading-relaxed mb-6"
          itemProp="description"
        >
          {item.description}
        </p>

        {/* Bullets for services */}
        {'bullets' in item && item.bullets && (
          <ul className="w-full text-left space-y-2 mb-6">
            {item.bullets.map((b) => (
              <li key={b} className="flex items-start gap-2 text-xs text-text-muted">
                <CheckCircle2 className="w-3.5 h-3.5 text-primary-blue shrink-0 mt-0.5" aria-hidden="true" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        )}

        {/* NAPCEN + CPCB tag */}
        <p className="text-[9px] font-bold text-text-muted/60 uppercase tracking-widest mb-6">
          NAPCEN · Puducherry, India · CPCB/TNPCB Compliant
        </p>

        {/* CTA */}
        <Link href={item.link} className="w-full mt-auto" aria-label={`${type === 'service' ? 'Learn about' : 'View'} ${item.title}`}>
          <div className="flex items-center justify-center gap-2 w-full py-4 rounded-2xl border border-primary-blue/20 bg-white text-primary-blue font-black text-[10px] uppercase tracking-[0.2em] transition-all hover:bg-primary-blue hover:text-white hover:border-primary-blue shadow-sm cursor-pointer">
            {type === 'service' ? 'Service Details' : 'View Products'}
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </div>
        </Link>

        {/* Hidden schema fields */}
        <span className="sr-only" itemProp={type === 'service' ? 'provider' : 'brand'}>NAPCEN, Puducherry, India</span>
        {'seoKeywords' in item && <span className="sr-only">{item.seoKeywords}</span>}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// PAGE COMPONENT
// ─────────────────────────────────────────────────────────────
export default function ServicesPage() {
  return (
    <>
      <PageSchemas />

      <div className="min-h-screen bg-white text-text-main selection:bg-primary-blue/20">
        <main className="max-w-7xl mx-auto px-6 py-24">

          {/* ── BREADCRUMB ── */}
          <nav className="mb-12" aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-2 text-xs text-text-muted/60">
              <li><Link href="/" className="hover:text-primary-blue transition-colors">Home</Link></li>
              <li><span className="text-primary-blue/20">/</span></li>
              <li><span className="text-text-main">Services</span></li>
            </ol>
          </nav>

          {/* ── HERO ── */}
          <header className="text-center mb-24">
            <div className="inline-block px-4 py-1.5 rounded-full border border-primary-blue/20 bg-primary-blue/5 mb-6">
              <span className="text-[10px] font-black tracking-[0.4em] text-primary-blue uppercase">
                NAPCEN · Puducherry, India · Since 2010
              </span>
            </div>

            {/* H1 — keyword optimized */}
            <h1 className="text-5xl md:text-8xl font-black text-text-main mb-6 leading-[0.9] uppercase tracking-tighter">
              Air Pollution<br />
              Control <span className="text-primary-blue">Services</span>
            </h1>

            {/* SEO subtitle */}
            <p className="max-w-3xl mx-auto text-text-muted text-base md:text-xl font-medium leading-relaxed">
              Complete industrial air pollution control services in{' '}
              <strong className="text-text-main">Puducherry, India</strong> —
              consulting &amp; design, wet scrubber manufacturing, dust collector fabrication,
              on-site installation &amp; commissioning, and Annual Maintenance Contracts (AMC).
              Serving <strong className="text-text-main">Chennai, Tamil Nadu &amp; all India</strong>.
            </p>

            {/* Trust chips */}
          <div className="mt-8 flex flex-wrap justify-center gap-2.5 max-w-4xl mx-auto px-2">
        {trustChips.map((chip) => (
          <span
            key={chip.label}
            className="inline-flex items-center gap-2 text-xs font-semibold text-text-main border border-primary-blue/15 rounded-full px-3.5 py-1.5 bg-white shadow-xs hover:border-primary-blue/30 transition-colors"
          >
            {chip.icon}
            <span>{chip.label}</span>
          </span>
        ))}
      </div>
          </header>

          {/* ── SERVICE WORKFLOW ── */}
          <section aria-labelledby="services-heading">
            <h2 id="services-heading" className="sr-only">
              NAPCEN Air Pollution Control Services — Design, Manufacturing, Installation, AMC
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start mb-32">
              {/* Left column */}
              <div className="space-y-12 flex flex-col items-center">
                <ActionCard item={services[0]} type="service" />
                <ActionCard item={services[1]} type="service" />
              </div>

              {/* Centre process diagram */}
              <div className="hidden lg:flex flex-col items-center py-20 sticky top-24">
                <div className="text-[10px] font-black text-primary-blue uppercase tracking-[0.5em] mb-8 px-6 py-2.5 rounded-full border border-primary-blue/20 bg-bg-light text-center">
                  Our Process
                </div>
                {services.map((s, i) => (
                  <React.Fragment key={i}>
                    <div className="w-44 py-3 rounded-xl border border-primary-blue/10 bg-white text-center text-[10px] font-black uppercase tracking-widest text-text-muted hover:text-primary-blue hover:border-primary-blue/30 shadow-sm transition-all">
                      {s.shortTitle}
                    </div>
                    {i !== services.length - 1 && (
                      <ChevronDown className="w-5 h-5 text-primary-blue/30 my-2" aria-hidden="true" />
                    )}
                  </React.Fragment>
                ))}
                {/* Timeline labels */}
                <div className="mt-8 text-center space-y-1">
                  <p className="text-text-muted/50 text-[9px] uppercase tracking-widest">Lead Time</p>
                  <p className="text-primary-blue/80 text-xs font-bold">3–4 Weeks Standard</p>
                  <p className="text-primary-blue/60 text-[10px]">10 Days Fast-Track</p>
                </div>
              </div>

              {/* Right column */}
              <div className="space-y-12 flex flex-col items-center">
                <ActionCard item={services[2]} type="service" />
                <ActionCard item={services[3]} type="service" />
              </div>
            </div>
          </section>

          {/* ── WHY NAPCEN ── */}
          <section className="mb-32 border-t border-primary-blue/10 pt-20" aria-labelledby="why-heading">
            <h2 id="why-heading" className="text-center text-2xl md:text-3xl font-black uppercase tracking-widest text-text-main mb-3">
              Why Choose NAPCEN Services?
            </h2>
            <p className="text-center text-text-muted text-sm mb-10">
              Trusted air pollution control service provider in Puducherry, India since 2010
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {WHY_CARDS.map((card, i) => (
                <div key={i} className="flex items-start gap-4 p-6 bg-white border border-primary-blue/10 rounded-2xl hover:border-primary-blue/30 hover:bg-bg-light shadow-sm transition-all">
                  <div className="text-primary-blue shrink-0 mt-0.5" aria-hidden="true">{card.icon}</div>
                  <div>
                    <p className="font-bold text-text-main text-sm mb-1">{card.title}</p>
                    <p className="text-text-muted text-xs leading-relaxed">{card.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── PRODUCTS MINI-GRID ── */}
          <section className="border-t border-primary-blue/10 pt-20" aria-labelledby="products-heading">
            <div className="text-center mb-16">
              <h2
                id="products-heading"
                className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4"
              >
                Equipment We <span className="text-primary-blue">Manufacture</span>
              </h2>
              {/* SEO subtitle */}
              <p className="text-text-muted text-sm md:text-base max-w-2xl mx-auto">
                Wet Scrubbers · Dust Collectors · Fume Extractors · Downdraft Tables —
                factory-direct from our <strong className="text-text-main">Puducherry, India</strong> facility.
                CPCB / TNPCB compliant.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
              {products.map((p, idx) => (
                <ActionCard key={idx} item={p} type="product" />
              ))}
            </div>

            {/* View all products CTA */}
            <div className="text-center mt-12">
              <Link
                href="/products"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary-blue hover:bg-primary-blue/90 text-white font-bold text-xs uppercase tracking-widest rounded-full transition-all shadow-lg hover:-translate-y-1"
                aria-label="View all NAPCEN air pollution control products"
              >
                View All Products
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
          </section>

          {/* ── SEO CONTENT BLOCK ── */}
          <section className="mt-24 grid md:grid-cols-2 gap-10 bg-bg-light border border-primary-blue/10 shadow-sm rounded-3xl p-8 md:p-12"
            aria-labelledby="about-services-heading">
            <div>
              <h2 id="about-services-heading" className="text-xl md:text-2xl font-black uppercase tracking-widest text-text-main mb-4">
                Air Pollution Control Services in Puducherry, India
              </h2>
              <p className="text-text-muted text-sm leading-relaxed mb-4">
                <strong className="text-text-main">NAPCEN</strong> provides complete industrial air pollution control
                services from our facility in <strong className="text-text-main">Puducherry (Pondicherry), India</strong>.
                Our services cover the full project lifecycle — from initial site survey and engineering design
                through manufacturing, supply, on-site installation, commissioning, and long-term{' '}
                <strong className="text-text-main">Annual Maintenance Contracts (AMC)</strong>.
              </p>
              <p className="text-text-muted text-sm leading-relaxed">
                We install and commission wet scrubbers, dry scrubbers, PP FRP scrubbers, dust collectors,
                fume extractors, downdraft tables, industrial blowers, heat exchangers, and fume hoods for
                industries across <strong className="text-text-main">Chennai, Coimbatore, Madurai, Tamil Nadu,
                Bengaluru, Hyderabad, Mumbai, Delhi</strong>, and all India. All systems are{' '}
                <strong className="text-text-main">CPCB and TNPCB compliant</strong> with performance certificates.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-black uppercase tracking-widest text-text-main mb-4">Contact NAPCEN</h3>
              <ul className="space-y-3 mb-8">
                {[
                  'CPCB / TNPCB compliant — performance certificate with every project',
                  '500+ installations across India — zero-rejection record',
                  'Custom fabrication: PP-FRP, PVDF, MS, SS304/316',
                  'Turnkey: survey → design → fabricate → install → commission → AMC',
                  'Fast-track delivery: 10 business days from order',
                  'Export services: UAE, Saudi Arabia, Malaysia, Sri Lanka',
                ].map((pt, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-primary-blue shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-text-muted text-sm">{pt}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href="tel:+917904469219"
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-primary-blue hover:bg-primary-blue/90 text-white font-bold text-xs uppercase tracking-widest rounded-full transition-all">
                  <Phone className="w-4 h-4" aria-hidden="true" />+91-7904469219
                </a>
                <Link href="/contact"
                  className="flex items-center justify-center gap-2 px-6 py-3 border border-primary-blue/20 hover:bg-primary-blue hover:text-white text-primary-blue bg-white shadow-sm font-bold text-xs uppercase tracking-widest rounded-full transition-all">
                  Get Free Quote <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </section>

          {/* ── LOCATION STRIP ── */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-primary-blue/10 pt-8">
            <div className="flex items-center gap-2 text-text-muted text-xs">
              <MapPin className="w-3.5 h-3.5 text-primary-blue/80 shrink-0" aria-hidden="true" />
              <span>No.1, North Street, SMV Puram, Villianur, <strong className="text-text-main">Puducherry – 605110, India</strong></span>
            </div>
            <p className="text-text-muted/70 text-xs text-center sm:text-right">
              Chennai · Coimbatore · Madurai · Bengaluru · Hyderabad · Mumbai · Delhi · Pan-India
            </p>
          </div>

          {/* ── sr-only SEO ── */}
          <div className="sr-only">
            <p>
              NAPCEN industrial air pollution control services in Puducherry Pondicherry India.
              Services: wet scrubber consulting and design India, wet scrubber manufacturing India,
              dust collector manufacturing Puducherry, fume extractor manufacturing India,
              wet scrubber installation Chennai, dust collector installation Tamil Nadu,
              fume extractor installation India, downdraft table installation India,
              air pollution control commissioning India, wet scrubber AMC India,
              dust collector annual maintenance contract India, air pollution control service contract India.
              CPCB compliant services. TNPCB compliant installation. Serving Chennai, Coimbatore, Madurai,
              Salem, Trichy, Tamil Nadu, Bengaluru, Hyderabad, Mumbai, Delhi, and all India.
              Contact: +91-7904469219. sales@napcen.com.
            </p>
          </div>

        </main>
      </div>
    </>
  );
}