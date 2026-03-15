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
function ActionCard({ item, type }: { item: typeof services[number] | typeof products[number]; type: 'service' | 'product' }) {
  return (
    <div
      className="group relative flex flex-col bg-white/[0.03] backdrop-blur-xl rounded-[2.5rem] border border-white/10 overflow-hidden transition-all duration-500 hover:border-cyan-500/50 hover:bg-white/[0.07] hover:-translate-y-2 w-full max-w-[380px]"
      itemScope
      itemType={type === 'service' ? 'https://schema.org/Service' : 'https://schema.org/Product'}
    >
      {/* Image */}
      <div className="relative h-56 w-full bg-white/5 overflow-hidden flex items-center justify-center p-8">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle,rgba(0,229,255,0.2)_1px,transparent_1px)] bg-[size:20px_20px]" aria-hidden="true" />
        <div className="relative w-full h-full">
          <Image
            src={item.image}
            alt={'imageAlt' in item ? item.imageAlt : item.title}
            fill
            className="object-contain transition-transform duration-700 group-hover:scale-110"
            sizes="380px"
            itemProp="image"
          />
        </div>
        {/* Location badge */}
        <div className="absolute bottom-3 right-3 bg-[#0A1F22]/90 text-white/40 text-[8px] font-bold px-2.5 py-1 rounded-full border border-white/10 uppercase tracking-wider backdrop-blur-sm">
          Puducherry, India
        </div>
      </div>

      {/* Content */}
      <div className="p-8 flex flex-col items-center text-center flex-1">
        <div className="p-3 rounded-2xl bg-cyan-500/10 mb-4 border border-cyan-500/20" aria-hidden="true">
          {'Icon' in item && item.Icon ? <item.Icon className="w-6 h-6 text-cyan-400" /> : <ShieldCheck className="w-6 h-6 text-cyan-400" />}
        </div>

        {/* Title */}
        <h3
          className="text-xl font-black text-white mb-3 uppercase tracking-tighter"
          itemProp="name"
        >
          {item.title}
        </h3>

        {/* Description — keyword-rich */}
        <p
          className="text-gray-400 text-sm leading-relaxed mb-6"
          itemProp="description"
        >
          {item.description}
        </p>

        {/* Bullets for services */}
        {'bullets' in item && item.bullets && (
          <ul className="w-full text-left space-y-2 mb-6">
            {item.bullets.map((b) => (
              <li key={b} className="flex items-start gap-2 text-xs text-gray-400">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-500 shrink-0 mt-0.5" aria-hidden="true" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        )}

        {/* NAPCEN + CPCB tag */}
        <p className="text-[9px] font-bold text-white/30 uppercase tracking-widest mb-6">
          NAPCEN · Puducherry, India · CPCB/TNPCB Compliant
        </p>

        {/* CTA */}
        <Link href={item.link} className="w-full mt-auto" aria-label={`${type === 'service' ? 'Learn about' : 'View'} ${item.title}`}>
          <div className="flex items-center justify-center gap-2 w-full py-4 rounded-2xl border border-white/10 bg-white/5 text-white font-black text-[10px] uppercase tracking-[0.2em] transition-all hover:bg-cyan-500 hover:text-black hover:border-cyan-500 cursor-pointer">
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

      <div className="min-h-screen bg-[#0A1F22] text-white selection:bg-cyan-500/30">
        <main className="max-w-7xl mx-auto px-6 py-24">

          {/* ── BREADCRUMB ── */}
          <nav className="mb-12" aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-2 text-xs text-white/40">
              <li><Link href="/" className="hover:text-cyan-400 transition-colors">Home</Link></li>
              <li><span className="text-white/20">/</span></li>
              <li><span className="text-white/70">Services</span></li>
            </ol>
          </nav>

          {/* ── HERO ── */}
          <header className="text-center mb-24">
            <div className="inline-block px-4 py-1.5 rounded-full border border-cyan-500/20 bg-cyan-500/5 mb-6">
              <span className="text-[10px] font-black tracking-[0.4em] text-cyan-400 uppercase">
                NAPCEN · Puducherry, India · Since 2010
              </span>
            </div>

            {/* H1 — keyword optimized */}
            <h1 className="text-5xl md:text-8xl font-black mb-6 leading-[0.9] uppercase tracking-tighter">
              Air Pollution<br />
              Control <span className="text-cyan-400">Services</span>
            </h1>

            {/* SEO subtitle */}
            <p className="max-w-3xl mx-auto text-gray-300 text-base md:text-xl font-medium leading-relaxed">
              Complete industrial air pollution control services in{' '}
              <strong className="text-white">Puducherry, India</strong> —
              consulting &amp; design, wet scrubber manufacturing, dust collector fabrication,
              on-site installation &amp; commissioning, and Annual Maintenance Contracts (AMC).
              Serving <strong className="text-white">Chennai, Tamil Nadu &amp; all India</strong>.
            </p>

            {/* Trust chips */}
            <div className="mt-8 flex flex-wrap justify-center gap-2">
              {[
                '✅ CPCB / TNPCB Compliant',
                '🏭 Manufacturing in Puducherry',
                '🔧 Turnkey Design to AMC',
                '⚡ Pan-India Installation',
                '📋 Performance Certificate',
                '🌏 Export: UAE · Malaysia · Saudi Arabia',
              ].map((chip) => (
                <span key={chip} className="text-xs text-white/60 border border-white/10 rounded-full px-3 py-1.5 bg-white/5">
                  {chip}
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
                <div className="text-[10px] font-black text-cyan-500 uppercase tracking-[0.5em] mb-8 px-6 py-2.5 rounded-full border border-cyan-500/20 bg-black text-center">
                  Our Process
                </div>
                {services.map((s, i) => (
                  <React.Fragment key={i}>
                    <div className="w-44 py-3 rounded-xl border border-white/5 bg-white/[0.02] text-center text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-cyan-400 hover:border-cyan-500/20 transition-all">
                      {s.shortTitle}
                    </div>
                    {i !== services.length - 1 && (
                      <ChevronDown className="w-5 h-5 text-cyan-500/30 my-2" aria-hidden="true" />
                    )}
                  </React.Fragment>
                ))}
                {/* Timeline labels */}
                <div className="mt-8 text-center space-y-1">
                  <p className="text-white/20 text-[9px] uppercase tracking-widest">Lead Time</p>
                  <p className="text-cyan-400/60 text-xs font-bold">3–4 Weeks Standard</p>
                  <p className="text-cyan-400/40 text-[10px]">10 Days Fast-Track</p>
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
          <section className="mb-32 border-t border-white/5 pt-20" aria-labelledby="why-heading">
            <h2 id="why-heading" className="text-center text-2xl md:text-3xl font-black uppercase tracking-widest text-white mb-3">
              Why Choose NAPCEN Services?
            </h2>
            <p className="text-center text-white/40 text-sm mb-10">
              Trusted air pollution control service provider in Puducherry, India since 2010
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {WHY_CARDS.map((card, i) => (
                <div key={i} className="flex items-start gap-4 p-6 bg-white/5 border border-white/10 rounded-2xl hover:border-cyan-500/30 hover:bg-white/[0.07] transition-all">
                  <div className="text-cyan-400 shrink-0 mt-0.5" aria-hidden="true">{card.icon}</div>
                  <div>
                    <p className="font-bold text-white text-sm mb-1">{card.title}</p>
                    <p className="text-gray-400 text-xs leading-relaxed">{card.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ── PRODUCTS MINI-GRID ── */}
          <section className="border-t border-white/5 pt-20" aria-labelledby="products-heading">
            <div className="text-center mb-16">
              <h2
                id="products-heading"
                className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4"
              >
                Equipment We <span className="text-cyan-400">Manufacture</span>
              </h2>
              {/* SEO subtitle */}
              <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto">
                Wet Scrubbers · Dust Collectors · Fume Extractors · Downdraft Tables —
                factory-direct from our <strong className="text-white">Puducherry, India</strong> facility.
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
                className="inline-flex items-center gap-2 px-8 py-4 bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs uppercase tracking-widest rounded-full transition-all shadow-lg hover:-translate-y-1"
                aria-label="View all NAPCEN air pollution control products"
              >
                View All Products
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
          </section>

          {/* ── SEO CONTENT BLOCK ── */}
          <section className="mt-24 grid md:grid-cols-2 gap-10 bg-white/[0.02] border border-white/5 rounded-3xl p-8 md:p-12"
            aria-labelledby="about-services-heading">
            <div>
              <h2 id="about-services-heading" className="text-xl md:text-2xl font-black uppercase tracking-widest text-white mb-4">
                Air Pollution Control Services in Puducherry, India
              </h2>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                <strong className="text-white">NAPCEN</strong> provides complete industrial air pollution control
                services from our facility in <strong className="text-white">Puducherry (Pondicherry), India</strong>.
                Our services cover the full project lifecycle — from initial site survey and engineering design
                through manufacturing, supply, on-site installation, commissioning, and long-term{' '}
                <strong className="text-white">Annual Maintenance Contracts (AMC)</strong>.
              </p>
              <p className="text-gray-400 text-sm leading-relaxed">
                We install and commission wet scrubbers, dry scrubbers, PP FRP scrubbers, dust collectors,
                fume extractors, downdraft tables, industrial blowers, heat exchangers, and fume hoods for
                industries across <strong className="text-white">Chennai, Coimbatore, Madurai, Tamil Nadu,
                Bengaluru, Hyderabad, Mumbai, Delhi</strong>, and all India. All systems are{' '}
                <strong className="text-white">CPCB and TNPCB compliant</strong> with performance certificates.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-black uppercase tracking-widest text-white mb-4">Contact NAPCEN</h3>
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
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-gray-400 text-sm">{pt}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href="tel:+917904469219"
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs uppercase tracking-widest rounded-full transition-all">
                  <Phone className="w-4 h-4" aria-hidden="true" />+91-7904469219
                </a>
                <Link href="/contact"
                  className="flex items-center justify-center gap-2 px-6 py-3 border border-white/20 hover:bg-white/10 text-white font-bold text-xs uppercase tracking-widest rounded-full transition-all">
                  Get Free Quote <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </section>

          {/* ── LOCATION STRIP ── */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/5 pt-8">
            <div className="flex items-center gap-2 text-white/40 text-xs">
              <MapPin className="w-3.5 h-3.5 text-cyan-400/60 shrink-0" aria-hidden="true" />
              <span>No.1, North Street, SMV Puram, Villianur, <strong className="text-white/60">Puducherry – 605110, India</strong></span>
            </div>
            <p className="text-white/30 text-xs text-center sm:text-right">
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