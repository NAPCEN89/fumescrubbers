// app/case-studies/page.tsx
// ⚠️ IMPORTANT: Removed 'use client' — this must be a Server Component
// so that the metadata export and JSON-LD schemas work for SEO.
// There is no client-side interactivity needed here.

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Calendar, MapPin, ShieldCheck, ChevronRight } from 'lucide-react';
import { caseStudies } from '@/lib/case-studies-data';
import { Metadata } from 'next';

// ─────────────────────────────────────────────────────────────
// PAGE METADATA
// ─────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: 'Case Studies — Industrial Air Pollution Control Projects | NAPCEN, Puducherry India',
  description:
    'NAPCEN case studies: real air pollution control projects across India — wet scrubber installations, dust collector projects, fume extractor systems for pharma, chemical, foundry, and automotive industries in Chennai, Tamil Nadu & all India. CPCB/TNPCB compliant solutions.',
  keywords: [
    'air pollution control case studies India',
    'wet scrubber installation case study India',
    'dust collector project India',
    'fume extractor case study Chennai',
    'NAPCEN project case studies',
    'industrial air pollution control success stories India',
    'CPCB compliant scrubber installation case study',
    'air pollution control pharma industry India',
    'air pollution control chemical industry India',
    'wet scrubber project Tamil Nadu',
    'industrial ventilation case study India',
    'NAPCEN Puducherry air pollution control',
  ],
  alternates: {
    canonical: 'https://fumescrubbers.com/case-studies',
  },
  openGraph: {
    title: 'Case Studies — NAPCEN Air Pollution Control Projects | India',
    description:
      'Real-world air pollution control project case studies by NAPCEN — wet scrubbers, dust collectors, fume extractors for pharma, chemical, foundry industries across India. CPCB/TNPCB compliant.',
    url: 'https://fumescrubbers.com/case-studies',
    siteName: 'NAPCEN Industrial Air Solutions',
    locale: 'en_IN',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'NAPCEN Air Pollution Control Case Studies India' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NAPCEN Case Studies — Air Pollution Control Projects India',
    description: 'Real industrial air pollution control project case studies — wet scrubbers, dust collectors & fume extractors across India.',
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
          { '@type': 'ListItem', position: 2, name: 'Case Studies', item: 'https://fumescrubbers.com/case-studies' },
        ],
      }),
    }} />

    {/* ItemList of all case studies */}
    <script type="application/ld+json" dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: 'NAPCEN Industrial Air Pollution Control Case Studies',
        description: 'Real-world air pollution control projects by NAPCEN across India — wet scrubbers, dust collectors, fume extractors for pharmaceutical, chemical, foundry, and automotive industries.',
        url: 'https://fumescrubbers.com/case-studies',
        numberOfItems: caseStudies.length,
        itemListElement: caseStudies.map((study, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          name: study.title,
          url: `https://fumescrubbers.com/case-studies/${study.slug}`,
          image: `https://fumescrubbers.com${study.thumbnail || study.image}`,
        })),
      }),
    }} />
  </>
);

// ─────────────────────────────────────────────────────────────
// INDUSTRY FILTER TAGS — keyword chips visible on page
// ─────────────────────────────────────────────────────────────
const INDUSTRIES = [
  'Pharmaceutical', 'Chemical Processing', 'Metal Foundry',
  'Automotive', 'Food Processing', 'Textile', 'Electronics',
  'Semiconductor', 'Electroplating', 'Cement', 'Hospital',
];

// ─────────────────────────────────────────────────────────────
// PAGE COMPONENT
// ─────────────────────────────────────────────────────────────
export default function CaseStudiesListPage() {
  return (
    <>
      <PageSchemas />

      <main
        className="bg-white text-text-main min-h-screen py-16 md:py-28"
        itemScope
        itemType="https://schema.org/CollectionPage"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8">

          {/* ── BREADCRUMB ── */}
          <nav className="mb-10" aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-2 text-xs text-text-muted">
              <li><Link href="/" className="hover:text-primary-blue transition-colors">Home</Link></li>
              <li><span className="text-text-muted/50">/</span></li>
              <li><span className="text-text-muted/80">Case Studies</span></li>
            </ol>
          </nav>

          {/* ── HEADER ── */}
          <header className="text-center mb-16 md:mb-20" itemProp="name">

            <span className="text-primary-blue font-black uppercase tracking-[0.3em] text-sm">
              Real Results · Proven Projects
            </span>

            {/* H1 — location + keyword optimized */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mt-4 leading-tight">
              Air Pollution Control
              <br />
              <span className="text-primary-blue">Case Studies — India</span>
            </h1>

            {/* SEO description paragraph */}
            <p
              className="mt-8 max-w-3xl mx-auto text-base md:text-xl text-text-muted leading-relaxed"
              itemProp="description"
            >
              Proven industrial air pollution control solutions — wet scrubbers, dust collectors,
              fume extractors, and downdraft tables — delivering CPCB/TNPCB compliance,
              efficiency, and worker safety for clients across{' '}
              <strong className="text-text-main">Chennai, Tamil Nadu</strong>, and all India.
            </p>

            {/* Trust badges */}
            <div className="mt-8 flex flex-wrap justify-center gap-2">
              {[
                `${caseStudies.length}+ Completed Projects`,
                'CPCB / TNPCB Compliant',
                'Pan-India Installations',
                'Pharma · Chemical · Foundry · Automotive',
                'Manufactured in Puducherry, India',
              ].map((b) => (
                <span key={b} className="flex items-center gap-1.5 text-xs text-text-main/60 border border-white/10 rounded-full px-3 py-1.5 bg-white/5">
                  <ShieldCheck className="w-3 h-3 text-primary-blue" aria-hidden="true" />
                  {b}
                </span>
              ))}
            </div>

            {/* Industry keyword chips */}
            <div className="mt-6 flex flex-wrap justify-center gap-2" aria-label="Industries served">
              {INDUSTRIES.map((ind) => (
                <span key={ind} className="text-[10px] font-bold text-text-muted border border-white/10 rounded-full px-3 py-1 bg-white/[0.03] uppercase tracking-wider">
                  {ind}
                </span>
              ))}
            </div>
          </header>

          {/* ── CASE STUDIES GRID ── */}
          <section aria-labelledby="case-studies-grid-heading">
            <h2 id="case-studies-grid-heading" className="sr-only">
              NAPCEN Air Pollution Control Project Case Studies
            </h2>

            <div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              itemScope
              itemType="https://schema.org/ItemList"
            >
              {caseStudies.map((study, index) => (
                <Link
                  href={`/case-studies/${study.slug}`}
                  key={study.id}
                  className="group block"
                  aria-label={`Read case study: ${study.title}`}
                  itemProp="itemListElement"
                  itemScope
                  itemType="https://schema.org/Article"
                >
                  <article className="h-full bg-white rounded-3xl overflow-hidden border border-primary-blue/10 transition-all duration-500 hover:border-primary-blue/30 shadow-sm hover:shadow-lg flex flex-col">

                    {/* Thumbnail */}
                    <div className="relative h-64 overflow-hidden flex-shrink-0">
                      <Image
                        src={study.thumbnail || study.image}
                        alt={`${study.title} — NAPCEN ${study.industry || ''} air pollution control case study ${study.location || 'India'}`}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
                        priority={index < 3}
                        itemProp="image"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-white/90 to-transparent opacity-90" aria-hidden="true" />

                      {/* Industry badge on image */}
                      {study.industry && (
                        <div className="absolute top-4 left-4">
                          <span className="text-[9px] font-black text-primary-blue bg-white/90 border border-primary-blue/30 rounded-full px-3 py-1.5 uppercase tracking-widest backdrop-blur-sm">
                            {study.industry}
                          </span>
                        </div>
                      )}

                      {/* CPCB badge */}
                      <div className="absolute top-4 right-4">
                        <span className="text-[8px] font-bold text-text-main/50 bg-[#0A1F22]/80 border border-white/10 rounded-full px-2.5 py-1 uppercase tracking-wider backdrop-blur-sm">
                          CPCB Compliant
                        </span>
                      </div>
                    </div>

                    {/* Card content */}
                    <div className="p-8 flex flex-col flex-1">

                      {/* Meta row */}
                      <div className="flex items-center flex-wrap gap-3 mb-4">
                        {study.date && (
                          <span className="flex items-center gap-1.5 text-primary-blue/70 text-xs font-bold">
                            <Calendar className="w-3.5 h-3.5" aria-hidden="true" />
                            {study.date}
                          </span>
                        )}
                        {study.location && (
                          <span className="flex items-center gap-1 text-text-main/30 text-[10px] font-bold uppercase tracking-widest">
                            <MapPin className="w-3 h-3 text-primary-blue/40" aria-hidden="true" />
                            {study.location}
                          </span>
                        )}
                      </div>

                      {/* Article H3 */}
                      <h3
                        className="text-xl md:text-2xl font-black mb-4 group-hover:text-primary-blue transition-colors leading-snug"
                        itemProp="headline"
                      >
                        {study.title}
                      </h3>

                      {/* Product used — keyword signal */}
                      {study.products?.[0] && (
                        <p className="text-[10px] font-bold text-primary-blue/60 uppercase tracking-widest mb-3">
                          {study.products?.[0]}
                        </p>
                      )}

                      {/* Challenge excerpt */}
                      <p className="text-text-muted text-sm mb-6 line-clamp-3 leading-relaxed flex-1" itemProp="description">
                        {study.challenge}
                      </p>

                      {/* CTA */}
                      <div className="flex items-center justify-between text-primary-blue font-bold text-sm mt-auto pt-4 border-t border-primary-blue/10">
                        <span>View Full Case Study</span>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" aria-hidden="true" />
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </section>

          {/* ── SEO CONTENT BLOCK ── */}
          <section className="mt-24 grid md:grid-cols-2 gap-10 bg-bg-light border border-primary-blue/10 rounded-3xl p-8 md:p-12"
            aria-labelledby="about-casestudies-heading">
            <div>
              <h2 id="about-casestudies-heading" className="text-xl md:text-2xl font-black uppercase tracking-widest text-text-main mb-4">
                NAPCEN — Air Pollution Control Project Experience
              </h2>
              <p className="text-text-muted text-sm leading-relaxed mb-4">
                <strong className="text-text-main">NAPCEN</strong> is a leading{' '}
                <strong className="text-text-main">industrial air pollution control equipment manufacturer</strong> based in{' '}
                <strong className="text-text-main">Puducherry (Pondicherry), India</strong>. Since 2010, we have successfully
                completed 500+ industrial air pollution control projects across India — including wet scrubber
                installations, dust collector systems, fume extraction systems, and downdraft table installations for
                pharma, chemical, foundry, automotive, textile, and electronics industries.
              </p>
              <p className="text-text-muted text-sm leading-relaxed">
                Every NAPCEN project delivers full{' '}
                <strong className="text-text-main">CPCB and TNPCB compliance</strong> with stack emission test reports
                and performance guarantee certificates. Our turnkey service covers site survey, custom engineering,
                fabrication, installation, commissioning, and{' '}
                <strong className="text-text-main">Annual Maintenance Contracts (AMC)</strong>.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-black uppercase tracking-widest text-text-main mb-4">
                Industries We Have Served
              </h3>
              <div className="flex flex-wrap gap-2 mb-8">
                {[
                  'Pharmaceutical Manufacturing', 'Chemical Processing', 'Metal Foundries',
                  'Automotive Plants', 'Food & Beverage', 'Textile Mills',
                  'Electronics Manufacturing', 'Semiconductor Fabs', 'Electroplating',
                  'Plastic Processing', 'Hospital & Pathology Labs', 'Cement Plants',
                  'Fertilizer Plants', 'Paper Mills', 'Printing Industry',
                ].map((ind) => (
                  <span key={ind} className="text-[10px] text-text-main/50 border border-white/10 rounded-full px-3 py-1 bg-white/5">
                    {ind}
                  </span>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <a href="tel:+917904469219"
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-primary-blue hover:bg-primary-blue/90 text-white font-bold text-xs uppercase tracking-widest rounded-full transition-all">
                  <span>+91-7904469219</span>
                </a>
                <Link href="/contact"
                  className="flex items-center justify-center gap-2 px-6 py-3 border border-primary-blue/20 hover:bg-bg-light text-primary-blue hover:text-primary-blue font-bold text-xs uppercase tracking-widest rounded-full transition-all">
                  Get Free Quote
                  <ChevronRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </section>

          {/* ── LOCATION STRIP ── */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-primary-blue/10 pt-8 text-center sm:text-left">
            <div className="flex items-center gap-2 text-text-muted text-xs">
              <MapPin className="w-3.5 h-3.5 text-primary-blue/60 shrink-0" aria-hidden="true" />
              <span>
                No.1, North Street, SMV Puram, Villianur,{' '}
                <strong className="text-text-main/60">Puducherry – 605110, India</strong>
              </span>
            </div>
            <p className="text-text-main/30 text-xs">
              Chennai · Coimbatore · Madurai · Bengaluru · Hyderabad · Mumbai · Delhi · Pan-India
            </p>
          </div>

          {/* ── sr-only SEO BLOCK ── */}
          <div className="sr-only">
            <h2>NAPCEN Industrial Air Pollution Control Case Studies India</h2>
            <p>
              NAPCEN case studies — real industrial air pollution control projects completed across India.
              Wet scrubber installation case studies for pharmaceutical, chemical, and foundry industries.
              Dust collector project case studies for cement, steel, and woodworking plants.
              Fume extractor installation case studies for automotive, electronics, and jewelry manufacturing.
              Downdraft table installation case studies for welding, grinding, and polishing operations.
              All projects are CPCB compliant and TNPCB compliant with performance guarantee.
              NAPCEN is an air pollution control equipment manufacturer in Puducherry Pondicherry India.
              Serving Chennai, Coimbatore, Madurai, Salem, Trichy, Tamil Nadu, Bengaluru, Hyderabad,
              Mumbai, Delhi, and all India. Contact: +91-7904469219. sales@napcen.com.
              Case studies: {caseStudies.map((s) => s.title).join(', ')}.
            </p>
          </div>

        </div>
      </main>
    </>
  );
}