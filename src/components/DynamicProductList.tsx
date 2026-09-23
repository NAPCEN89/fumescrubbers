'use client';
import { CheckCircle, Factory, Package } from 'lucide-react';
import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight, ShieldCheck, Activity, Settings2, ShieldAlert,
  Cpu, MapPin, Phone, Award, Zap, Globe2, Wrench,
} from 'lucide-react';

// ─────────────────────────────────────────────────────────────
// TYPES
// ─────────────────────────────────────────────────────────────
interface Product {
  label: string;
  slug: string;
  description: string;
  seoDescription?: string;
  image: any;
  parentCategory?: string;
  applications?: string[];
  specs?: Record<string, string>;
  seoKeywords?: string[];
}

interface DynamicProductListProps {
  title: string;
  products: Product[];
  categorySlug: string;
  seoTitle?: string;
  seoDescription?: string;
}
const getBadges = (productsCount: number) => [
  { icon: MapPin, text: 'Manufacturer — Puducherry, India' },
  { icon: CheckCircle, text: 'CPCB / TNPCB Compliant' },
  { icon: Factory, text: 'Factory-Direct Pricing' },
  { icon: Package, text: `${productsCount} Products` },
  { icon: Wrench, text: 'Design + Install + AMC' },
];

// ─────────────────────────────────────────────────────────────
// CATEGORY SEO CONTENT
// H1, description, and keyword data per category
// ─────────────────────────────────────────────────────────────
const CATEGORY_SEO: Record<string, {
  h1: string;
  subtitle: string;
  description: string;
  keywords: string[];
  aboutTitle: string;
  aboutText: string;
}> = {
  'wet-scrubbers': {
    h1: 'Industrial Wet Scrubber Manufacturer & Supplier across India',
    subtitle: 'Packed Bed · Venturi · Ammonia · HCL · Chlorine · NOx · PP FRP · Multi-Stage',
    description: 'NAPCEN manufactures CPCB/TNPCB compliant industrial wet scrubbers in Puducherry, India. High-efficiency packed bed, venturi, ammonia, HCL, chlorine, NOx, and PP FRP wet scrubbers for pharma, chemical, foundry, and automotive industries.',
    keywords: ['wet scrubber manufacturer India', 'wet scrubber manufacturer Puducherry', 'PP FRP wet scrubber India', 'packed bed scrubber India', 'venturi scrubber manufacturer', 'CPCB compliant wet scrubber'],
    aboutTitle: 'Wet Scrubber Manufacturer — India',
    aboutText: 'NAPCEN is a leading wet scrubber manufacturer in India, supplying high-efficiency packed bed scrubbers, venturi scrubbers, ammonia scrubbers, HCL scrubbers, chlorine scrubbers, and PP FRP scrubbers to industries across Chennai, Tamil Nadu, and all India. All systems are CPCB/TNPCB compliant with performance certificates.',
  },
  'dust-collectors': {
    h1: 'Industrial Dust Collector Manufacturer & Supplier across India',
    subtitle: 'Pulse Jet Baghouse · Cyclone · Cartridge · Portable · Single Stage · Two Stage',
    description: 'NAPCEN manufactures CPCB/TNPCB compliant industrial dust collectors in Puducherry — pulse jet baghouse, cyclone separators, cartridge dust collectors for steel, cement, pharma, and woodworking industries across Chennai, Tamil Nadu & India.',
    keywords: ['dust collector manufacturer India', 'pulse jet dust collector India', 'cyclone dust collector manufacturer', 'cartridge dust collector India', 'baghouse dust collector manufacturer', 'industrial dust collector Chennai'],
    aboutTitle: 'Dust Collector Manufacturer — India',
    aboutText: 'NAPCEN manufactures and supplies industrial dust collectors in India — pulse jet baghouse, cyclone separators, cartridge dust collectors, portable dust collectors, and two-stage systems for steel, cement, pharma, woodworking, and chemical industries across Chennai, Tamil Nadu, and all India.',
  },
  'fume-extractors': {
    h1: 'Industrial Fume Extractor Manufacturer & Supplier across India',
    subtitle: 'Welding · Laser CNC · Soldering · Gold Refining · Laboratory · Printing',
    description: 'NAPCEN manufactures portable and centralized industrial fume extractors in Puducherry — welding fume extractors, laser fume extractors, soldering fume extractors, and laboratory fume extractors for automotive, electronics, pharma & jewelry industries.',
    keywords: ['fume extractor manufacturer India', 'welding fume extractor manufacturer India', 'laser fume extractor India', 'soldering fume extractor Chennai', 'laboratory fume extractor India', 'portable fume extractor manufacturer'],
    aboutTitle: 'Fume Extractor Manufacturer — India',
    aboutText: 'NAPCEN manufactures portable and centralized fume extraction systems in India — welding fume extractors with flexible arms, laser cutting fume extractors, soldering fume extractors for PCB assembly, gold refining fume extractors, and ductless laboratory fume extractors for chemical labs across India.',
  },
  'downdraft-tables': {
    h1: 'Industrial Downdraft Table Manufacturer & Supplier across India',
    subtitle: 'Welding · Grinding · Polishing · Woodworking · Portable',
    description: 'NAPCEN manufactures industrial downdraft tables in Puducherry — welding downdraft tables, grinding downdraft tables, polishing downdraft tables, and woodworking downdraft tables for source capture of dust and fumes at bench level.',
    keywords: ['downdraft table manufacturer India', 'welding downdraft table manufacturer', 'grinding downdraft table India', 'polishing downdraft table manufacturer', 'woodworking downdraft table India', 'source capture workbench India'],
    aboutTitle: 'Downdraft Table Manufacturer — India',
    aboutText: 'NAPCEN manufactures industrial downdraft tables in India — welding downdraft tables, grinding downdraft tables with spark arrestors, polishing downdraft tables, woodworking downdraft tables, and portable downdraft workstations for source capture of dust and fumes at bench level. Serving Chennai, Tamil Nadu & all India.',
  },
  'all': {
    h1: 'Complete Air Pollution Control Equipment — NAPCEN, India',
    subtitle: 'Wet Scrubbers · Dry Scrubbers · Dust Collectors · Fume Extractors · Downdraft Tables',
    description: 'NAPCEN\'s complete catalog of industrial air pollution control equipment manufactured in Puducherry, India — wet scrubbers, dust collectors, fume extractors, downdraft tables, industrial blowers, fume hoods, heat exchangers, and oil mist collectors. CPCB/TNPCB compliant.',
    keywords: ['air pollution control equipment India', 'industrial air filtration equipment manufacturer India', 'CPCB compliant pollution control equipment', 'wet scrubber dust collector manufacturer India', 'industrial air pollution control Puducherry'],
    aboutTitle: 'Complete Air Pollution Control Equipment Manufacturer',
    aboutText: 'NAPCEN manufactures a complete range of industrial air pollution control equipment in India — including wet scrubbers (packed bed, venturi, ammonia, HCL, PP FRP), dust collectors (pulse jet, cyclone, cartridge), fume extractors (welding, laser, soldering), downdraft tables, industrial blowers, fume hoods, and heat exchangers. All systems CPCB/TNPCB compliant.',
  },
};

// ─────────────────────────────────────────────────────────────
// TECHNICAL AUTHORITY CARDS — shown below marquee
// ─────────────────────────────────────────────────────────────
const TECH_CARDS = [
  {
    icon: <Activity className="w-8 h-8 text-primary-blue" />,
    title: 'Up to 99.9% Efficiency',
    desc: 'High-efficiency filtration of particulate, toxic gases, acid fumes, and odours using advanced media and packed bed technology. Performance guaranteed and certified.',
    color: 'hover:border-primary-blue/30 hover:shadow-md',
  },
  {
    icon: <Settings2 className="w-8 h-8 text-emerald-500" />,
    title: 'Premium MOC — PP-FRP / SS316',
    desc: 'Constructed from certified PP-FRP, PVDF, SS304, and SS316L materials ensuring operational longevity in corrosive chemical environments for 10+ years.',
    color: 'hover:border-emerald-500/30 hover:shadow-md',
  },
  {
    icon: <ShieldAlert className="w-8 h-8 text-orange-500" />,
    title: 'CPCB / TNPCB Compliant',
    desc: 'All systems engineered to meet CPCB and TNPCB emission norms. We provide CFD analysis reports, stack emission test certificates, and performance guarantees.',
    color: 'hover:border-orange-500/30 hover:shadow-md',
  },
  {
    icon: <Wrench className="w-8 h-8 text-purple-500" />,
    title: 'Turnkey — Design to AMC',
    desc: 'Complete end-to-end service: site survey → custom engineering → fabrication → installation → commissioning → Annual Maintenance Contract (AMC). Pan India.',
    color: 'hover:border-purple-500/30 hover:shadow-md',
  },
  {
    icon: <Zap className="w-8 h-8 text-yellow-500" />,
    title: 'Fast Delivery — 10 to 28 Days',
    desc: 'Standard manufacturing: 3–4 weeks. Fast-track orders: 10 business days from our Puducherry factory. Pan-India delivery and on-site installation.',
    color: 'hover:border-yellow-500/30 hover:shadow-md',
  },
  {
    icon: <Globe2 className="w-8 h-8 text-sky-500" />,
    title: 'Export — UAE, Malaysia & More',
    desc: 'Supplying air pollution control equipment to UAE, Saudi Arabia, Malaysia, and Sri Lanka since 2010. International quality standards with factory-direct pricing.',
    color: 'hover:border-sky-500/30 hover:shadow-md',
  },
];

// ─────────────────────────────────────────────────────────────
// MAIN COMPONENT
// ─────────────────────────────────────────────────────────────
export default function DynamicProductList({
  title,
  products,
  categorySlug,
  seoTitle,
  seoDescription,
}: DynamicProductListProps) {

  // Pre-cache all product images during browser idle time
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const warmUpCache = () => {
      const uniqueImages = Array.from(new Set(products.map(p => p.image?.src))).filter(Boolean);
      uniqueImages.forEach((src) => {
        const img = new window.Image();
        img.src = src as string;
      });
    };
    if ('requestIdleCallback' in window) {
      (window as any).requestIdleCallback(warmUpCache);
    } else {
      setTimeout(warmUpCache, 2000);
    }
  }, [products]);

  if (products.length === 0) return null;

  const seo = CATEGORY_SEO[categorySlug] || CATEGORY_SEO['all'];
  const marqueeItems = products.length < 5
    ? [...products, ...products, ...products, ...products]
    : [...products, ...products];

  return (
    <section
      className="relative bg-white pt-20 pb-20 md:pt-24 md:pb-32 overflow-hidden selection:bg-primary-blue/20"
      itemScope
      itemType="https://schema.org/ItemList"
      aria-labelledby="product-list-heading"
    >
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-blue/5 rounded-full blur-[120px] -z-10" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-primary-green/5 rounded-full blur-[100px] -z-10" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-6">

        {/* ── BREADCRUMB ── */}
        <nav className="mb-10" aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-2 text-xs text-text-muted/60">
            <li><Link href="/" className="hover:text-primary-blue transition-colors">Home</Link></li>
            <li><span className="text-primary-blue/20">/</span></li>
            <li><Link href="/products" className="hover:text-primary-blue transition-colors">Products</Link></li>
            {categorySlug !== 'all' && (
              <>
                <li><span className="text-primary-blue/20">/</span></li>
                <li><span className="text-text-main">{title}</span></li>
              </>
            )}
          </ol>
        </nav>

        {/* ── HEADER ── */}
        <header className="relative z-10 mb-16 max-w-7xl">
          <div className="flex items-center space-x-3 mb-4">
            <Cpu className="w-5 h-5 text-primary-blue animate-pulse" aria-hidden="true" />
            <p className="text-primary-blue font-black uppercase tracking-[0.3em] text-[10px] md:text-xs">
              NAPCEN Industrial — {categorySlug === 'all' ? 'Complete Catalog' : 'Product Series'} — India
            </p>
          </div>

          {/* H2 — keyword-rich, location-specific */}
          <h2
            id="product-list-heading"
            className="text-4xl md:text-7xl font-black text-text-main leading-none uppercase tracking-tighter mb-4"
          >
            {seoTitle || seo.h1.split(',')[0]}
          </h2>

          {/* Sub-types strip — crawlable keyword text */}
          <p className="text-primary-blue/70 text-xs font-bold tracking-widest uppercase mb-4">
            {seo.subtitle}
          </p>

          {/* SEO description paragraph */}
          <p className="text-sm md:text-lg text-text-muted border-l-2 border-primary-blue pl-6 py-1 leading-relaxed max-w-3xl">
            {seoDescription || seo.description}
          </p>

          {/* Location + compliance badge row */}
         <div className="mt-6 flex flex-wrap gap-2">
      {getBadges(products.length).map(({ icon: Icon, text }) => (
        <span
          key={text}
          className="inline-flex items-center gap-1.5 text-[10px] font-bold text-text-muted border border-primary-blue/10 shadow-sm rounded-full px-3 py-1 bg-white"
        >
          <Icon className="w-3 h-3 text-primary-blue shrink-0" />
          <span>{text}</span>
        </span>
      ))}
    </div>
        </header>

        {/* ── KEYWORD META (hidden, crawlable) ── */}
        <div className="sr-only">
          <p>{seo.keywords.join('. ')}. NAPCEN Puducherry India. CPCB TNPCB compliant. Chennai Tamil Nadu.</p>
          <p>Products: {products.map(p => p.label).join(', ')}</p>
        </div>

        {/* ── PRODUCT COUNT STRIP ── */}
        <div className="flex items-center gap-3 mb-10 mt-12">
          <div className="h-[1px] flex-1 bg-primary-blue/10" />
          <span className="text-text-muted/60 text-xs font-bold uppercase tracking-widest px-3">
            {products.length} Products — {title}
          </span>
          <div className="h-[1px] flex-1 bg-primary-blue/10" />
        </div>

        {/* ── MARQUEE ── */}
        <div className="relative group/marquee mb-8" aria-label="Product showcase carousel">
          {/* Edge fade */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-20" aria-hidden="true" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-20" aria-hidden="true" />

          <div className="flex overflow-hidden select-none">
            <div className="flex flex-nowrap shrink-0 gap-6 py-10 animate-marquee group-hover/marquee:[animation-play-state:paused]">
              {marqueeItems.map((product, index) => (
                <div key={`${product.slug}-${index}`} className="flex-shrink-0 w-[280px] sm:w-[320px] md:w-[380px]">
                  <ProductCard product={product} categorySlug={categorySlug} priority={index < 5} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── STATIC PRODUCT GRID (SEO — all products rendered as crawlable text) ── */}
        {/* This is critical: the marquee is CSS-animated and Google may not index all cards.
            This hidden grid ensures every product name, description, and link is crawlable. */}
        <div className="sr-only" aria-hidden="false" role="list" aria-label="All products list">
          {products.map((product) => {
            const cat = product.parentCategory || categorySlug;
            return (
              <div key={product.slug} role="listitem" itemProp="itemListElement" itemScope itemType="https://schema.org/Product">
                <Link href={`/products/${cat}/${product.slug}`} itemProp="url">
                  <span itemProp="name">{product.label}</span>
                </Link>
                <span itemProp="description">{product.seoDescription || product.description}</span>
                {product.applications && <span>Applications: {product.applications.join(', ')}</span>}
                {product.seoKeywords && <span>{product.seoKeywords.join(', ')}</span>}
                <span>Manufacturer: NAPCEN, Puducherry, India. CPCB/TNPCB compliant.</span>
              </div>
            );
          })}
        </div>

        {/* ── VISIBLE PRODUCT GRID (below marquee, for non-JS / SEO) ── */}
        <div className="mt-4 mb-24">
          <p className="text-text-muted/60 text-[10px] font-black uppercase tracking-widest text-center mb-6">
            All {title} — Click to View Full Specifications
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {products.map((product) => {
              const cat = product.parentCategory || categorySlug;
              return (
                <Link
                  key={product.slug}
                  href={`/products/${cat}/${product.slug}`}
                  className="text-xs text-text-muted border border-primary-blue/10 rounded-full px-4 py-1.5 bg-white shadow-sm hover:text-primary-blue hover:border-primary-blue/40 transition-all"
                  itemProp="itemListElement"
                  itemScope
                  itemType="https://schema.org/Product"
                >
                  <span itemProp="name">{product.label}</span>
                </Link>
              );
            })}
          </div>
        </div>

        {/* ── TECHNICAL AUTHORITY CARDS ── */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 border-t border-primary-blue/10 pt-16" aria-label="NAPCEN technical capabilities">
          {TECH_CARDS.map((card, i) => (
            <div key={i} className={`group bg-white shadow-sm p-8 rounded-3xl border border-primary-blue/10 transition-all duration-300 ${card.color}`}>
              <div className="mb-4" aria-hidden="true">{card.icon}</div>
              <h3 className="text-text-main font-bold text-lg mb-3 uppercase tracking-tight">{card.title}</h3>
              <p className="text-text-muted text-sm leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>

        {/* ── SEO CONTENT SECTION — about this category ── */}
        <div className="mt-20 grid md:grid-cols-2 gap-10 bg-bg-light border border-primary-blue/10 shadow-sm rounded-3xl p-8 md:p-12">
          <div>
            <h2 className="text-xl md:text-2xl font-black uppercase tracking-widest text-text-main mb-4">
              {seo.aboutTitle}
            </h2>
            <p className="text-text-muted text-sm leading-relaxed mb-4">
              {seo.aboutText}
            </p>
            <p className="text-text-muted text-sm leading-relaxed">
              We offer complete turnkey service — from initial{' '}
              <strong className="text-text-main">site assessment and custom engineering design</strong>,
              through factory fabrication in our Puducherry facility, to on-site{' '}
              <strong className="text-text-main">installation, commissioning</strong>, and long-term{' '}
              <strong className="text-text-main">Annual Maintenance Contracts (AMC)</strong>.
              All systems are <strong className="text-text-main">CPCB and TNPCB compliant</strong>{' '}
              with performance certificates and emission test reports.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-black uppercase tracking-widest text-text-main mb-4">
              Why Choose NAPCEN?
            </h3>
            <ul className="space-y-3 mb-8">
              {[
                'CPCB & TNPCB compliant — performance certificate with every system',
                '15+ years experience — 500+ industrial installations across India',
                'Factory-direct pricing from our Puducherry manufacturing facility',
                'Custom fabrication in PP-FRP, PVDF, MS, SS304, SS316',
                'Design → Fabrication → Installation → AMC — one partner',
                'Export supply to UAE, Saudi Arabia, Malaysia & Sri Lanka',
              ].map((pt, i) => (
                <li key={i} className="flex items-start gap-3">
                  <ShieldCheck className="w-4 h-4 text-primary-blue shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="text-text-muted text-sm">{pt}</span>
                </li>
              ))}
            </ul>

            {/* Contact strip */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a href="tel:+917904469219"
                className="flex items-center justify-center gap-2 px-6 py-3 bg-primary-blue hover:bg-primary-blue/90 text-white font-bold text-xs uppercase tracking-widest rounded-full transition-all"
                aria-label="Call NAPCEN for inquiry">
                <Phone className="w-4 h-4" aria-hidden="true" />
                +91-7904469219
              </a>
              <Link href="/contact"
                className="flex items-center justify-center gap-2 px-6 py-3 border border-primary-blue/20 hover:bg-primary-blue hover:text-white text-primary-blue bg-white shadow-sm font-bold text-xs uppercase tracking-widest rounded-full transition-all">
                Get Free Quote
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>

        {/* ── LOCATION STRIP ── */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-primary-blue/10 pt-8 text-center sm:text-left">
          <div className="flex items-center gap-2 text-text-muted text-xs">
            <MapPin className="w-3.5 h-3.5 text-primary-blue/80 shrink-0" aria-hidden="true" />
            <span>
              No.1, North Street, SMV Puram, Villianur,{' '}
              <strong className="text-text-main">Puducherry – 605110, India</strong>
            </span>
          </div>
          <p className="text-text-muted/70 text-xs">
            Chennai · Coimbatore · Madurai · Bengaluru · Hyderabad · Mumbai · Delhi · Pan-India
          </p>
        </div>

        {/* ── sr-only full SEO block ── */}
        <div className="sr-only">
          <p>
            NAPCEN — {seo.h1}. {seo.description}
            Products: {products.map(p => p.label).join(', ')}.
            Manufacturer in Puducherry Pondicherry India.
            Serving Chennai, Coimbatore, Madurai, Salem, Trichy, Tamil Nadu, Bengaluru,
            Hyderabad, Mumbai, Delhi, Pune, Ahmedabad, Kolkata, and all India.
            CPCB compliant. TNPCB compliant. Installation and AMC pan India.
            Contact: +91-7904469219. sales@napcen.com.
          </p>
        </div>
      </div>

      <style jsx global>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 60s linear infinite;
        }
      `}</style>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────
// PRODUCT CARD
// ─────────────────────────────────────────────────────────────
function ProductCard({
  product,
  categorySlug,
  priority,
}: {
  product: Product;
  categorySlug: string;
  priority: boolean;
}) {
  const currentCategory = product.parentCategory || categorySlug;

  // Keyword-rich alt text
  const imageAlt = `${product.label} manufacturer Puducherry India — NAPCEN ${currentCategory.replace(/-/g, ' ')}`;

  return (
    <Link
      href={`/products/${currentCategory}/${product.slug}`}
      itemProp="itemListElement"
      itemScope
      itemType="https://schema.org/Product"
      className="group block h-full bg-white rounded-[2.5rem] border border-primary-blue/10 p-4 transition-all duration-500 hover:border-primary-blue/50 hover:shadow-md shadow-sm hover:-translate-y-2"
      aria-label={`${product.label} — NAPCEN manufacturer India`}
    >
      {/* Product image */}
      <div className="relative h-60 md:h-72 bg-white rounded-[2rem] flex items-center justify-center overflow-hidden shadow-inner">
        <Image
          src={product.image?.src || '/images/placeholder.jpg'}
          alt={imageAlt}
          itemProp="image"
          fill
          className="object-contain p-10 transition-transform duration-700 group-hover:scale-105"
          priority={priority}
          sizes="(max-width: 768px) 280px, 380px"
          quality={85}
        />
        {/* CPCB badge */}
        <div className="absolute bottom-4 left-4 bg-white shadow-sm text-primary-blue text-[9px] font-black px-3 py-1.5 rounded-full border border-primary-blue/20 uppercase tracking-widest">
          CPCB / TNPCB Compliant
        </div>
        {/* Location badge */}
        <div className="absolute top-4 right-4 bg-white shadow-sm text-text-muted text-[8px] font-bold px-2.5 py-1 rounded-full border border-primary-blue/10 uppercase tracking-wider">
          Puducherry, India
        </div>
      </div>

      {/* Card content */}
      <div className="pt-6 pb-4 px-4 text-center">
        {/* H3 — product name */}
        <h3
          itemProp="name"
          className="text-text-main font-black text-lg md:text-xl mb-2 uppercase tracking-tight group-hover:text-primary-blue transition-colors line-clamp-1"
        >
          {product.label}
        </h3>

        {/* Location keyword line */}
        <p className="text-text-muted/60 text-[9px] font-bold uppercase tracking-widest mb-2">
          Manufacturer — Puducherry, India
        </p>

        {/* Description */}
        <p
          itemProp="description"
          className="text-text-muted/80 text-xs md:text-sm leading-relaxed mb-4 line-clamp-2"
        >
          {product.seoDescription || product.description}
        </p>

        {/* Applications chips (first 2) */}
        {product.applications && product.applications.length > 0 && (
          <div className="flex flex-wrap justify-center gap-1 mb-5">
            {product.applications.slice(0, 2).map((app) => (
              <span key={app} className="text-[9px] text-text-muted border border-primary-blue/10 rounded-full px-2 py-0.5 uppercase tracking-wider">
                {app}
              </span>
            ))}
          </div>
        )}

        {/* CTA link */}
        <div className="inline-flex items-center space-x-3 text-[10px] font-black uppercase tracking-[0.2em] text-primary-blue">
          <span>View Specifications</span>
          <div className="w-8 h-[1px] bg-primary-blue/30 transition-all group-hover:w-12 group-hover:bg-primary-blue" aria-hidden="true" />
          <ArrowRight className="w-4 h-4" aria-hidden="true" />
        </div>
      </div>

      {/* Hidden schema fields */}
      <span className="sr-only" itemProp="brand">NAPCEN</span>
      <span className="sr-only" itemProp="manufacturer">NAPCEN, Puducherry, India</span>
    </Link>
  );
}