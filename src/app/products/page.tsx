// app/products/page.tsx
// Server Component — no 'use client' needed here
import { productData } from '@/lib/products-data';
import Link from 'next/link';
import Image from 'next/image';
import { LayoutGrid, ArrowUpRight, MapPin, Phone, ShieldCheck } from 'lucide-react';
import { Metadata } from 'next';

// ─────────────────────────────────────────────────────────────
// PAGE METADATA — SEO for /products hub
// ─────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: 'Industrial Air Pollution Control Equipment | Wet Scrubbers, Dust Collectors & More | NAPCEN',
  description:
    'NAPCEN manufactures complete industrial air pollution control equipment in Puducherry, India — Wet Scrubbers, Dry Scrubbers, PP FRP Scrubbers, Dust Collectors, Fume Extractors, Downdraft Tables, Industrial Blowers, Fume Hoods & Heat Exchangers. CPCB/TNPCB compliant. Serving Chennai, Tamil Nadu & all India.',
  keywords: [
    'air pollution control equipment manufacturer India',
    'wet scrubber manufacturer India',
    'dust collector manufacturer India',
    'fume extractor manufacturer India',
    'downdraft table manufacturer India',
    'PP FRP scrubber manufacturer India',
    'industrial air filtration manufacturer Puducherry',
    'CPCB compliant pollution control equipment',
    'TNPCB compliant scrubber India',
    'air pollution control equipment Chennai',
    'industrial dust collector Tamil Nadu',
    'fume extraction system manufacturer India',
    'packed bed scrubber manufacturer India',
    'venturi scrubber manufacturer India',
    'pulse jet dust collector India',
    'welding fume extractor manufacturer India',
    'industrial blower manufacturer Puducherry',
    'heat exchanger manufacturer India',
    'oil mist collector manufacturer India',
    'fume hood manufacturer India',
  ],
  alternates: {
    canonical: 'https://fumescrubbers.com/products',
  },
  openGraph: {
    title: 'Air Pollution Control Equipment Manufacturer | NAPCEN — Puducherry, India',
    description:
      'Complete range of CPCB/TNPCB compliant air pollution control equipment — Wet Scrubbers, Dust Collectors, Fume Extractors, Downdraft Tables & more. Manufacturer in Puducherry, India.',
    url: 'https://fumescrubbers.com/products',
    siteName: 'NAPCEN Industrial Air Solutions',
    locale: 'en_IN',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'NAPCEN Air Pollution Control Equipment Manufacturer India' }],
  },
};

// ─────────────────────────────────────────────────────────────
// STRUCTURED DATA — ProductCollection + BreadcrumbList
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
          { '@type': 'ListItem', position: 2, name: 'Products', item: 'https://fumescrubbers.com/products' },
        ],
      }),
    }} />

    {/* ItemList — all product categories */}
    <script type="application/ld+json" dangerouslySetInnerHTML={{
      __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: 'NAPCEN Industrial Air Pollution Control Equipment Catalog',
        description: 'Complete catalog of air pollution control equipment manufactured by NAPCEN in Puducherry, India.',
        url: 'https://fumescrubbers.com/products',
        numberOfItems: Object.values(productData).reduce((acc: number, cat: any) => acc + cat.items.length, 0),
        itemListElement: Object.entries(productData).map(([slug, cat]: [string, any], i) => ({
          '@type': 'ListItem',
          position: i + 1,
          name: cat.title,
          url: `https://fumescrubbers.com/products/${slug}`,
        })),
      }),
    }} />
  </>
);

// ─────────────────────────────────────────────────────────────
// CATEGORY SEO METADATA — keyword-rich subtitle per category
// ─────────────────────────────────────────────────────────────
const CATEGORY_META: Record<string, { subtitle: string; keywords: string }> = {
  'wet-scrubbers': {
    subtitle: 'Packed Bed · Venturi · Ammonia · HCL · PP FRP · Dry · Multi-Stage',
    keywords: 'Wet scrubber manufacturer India — CPCB/TNPCB compliant',
  },
  'dust-collectors': {
    subtitle: 'Pulse Jet · Cyclone · Cartridge · Baghouse · Portable · Two-Stage',
    keywords: 'Dust collector manufacturer India — industrial bag filter',
  },
  'fume-extractors': {
    subtitle: 'Welding · Laser · Soldering · Gold · Laboratory · Printing',
    keywords: 'Fume extractor manufacturer India — HEPA filtration',
  },
  'downdraft-tables': {
    subtitle: 'Welding · Grinding · Polishing · Woodworking · Portable',
    keywords: 'Downdraft table manufacturer India — source capture workbench',
  },
};

// All products listed as SEO keywords strip
const ALL_PRODUCTS_KEYWORDS = [
  'Packed Bed Scrubber', 'Venturi Scrubber', 'Ammonia Scrubber', 'HCL Scrubber',
  'Chlorine Scrubber', 'Boiler Flue Gas Scrubber', 'Chromic Acid Scrubber',
  'NOx Scrubber', 'Sulfuric Acid Scrubber', 'CO2 Scrubber', 'Foundry Exhaust Scrubber',
  'VOC Scrubber', 'Hospital Waste Scrubber', 'Vent Gas Scrubber', 'PP FRP Scrubber',
  'Dry Scrubber', 'Pulse Jet Baghouse', 'Cartridge Dust Collector', 'Cyclone Separator',
  'Portable Dust Collector', 'Two Stage Dust Collector', 'Welding Fume Extractor',
  'Laser Fume Extractor', 'Soldering Fume Extractor', 'Gold Fume Extractor',
  'Lab Fume Extractor', 'Printing Fume Extractor', 'Welding Downdraft Table',
  'Grinding Downdraft Table', 'Polishing Downdraft Table', 'Woodworking Downdraft Table',
  'Portable Downdraft Table', 'Industrial Blower', 'Fume Hood', 'Heat Exchanger',
  'Oil Mist Collector', 'Grossing Station',
];

const TRUST_BADGES = [
  { icon: <ShieldCheck className="w-4 h-4" />, text: 'CPCB / TNPCB Compliant' },
  { icon: <ShieldCheck className="w-4 h-4" />, text: '15+ Years Experience' },
  { icon: <ShieldCheck className="w-4 h-4" />, text: '500+ Installations' },
  { icon: <ShieldCheck className="w-4 h-4" />, text: 'Performance Certificate' },
  { icon: <ShieldCheck className="w-4 h-4" />, text: 'Factory-Direct Pricing' },
  { icon: <ShieldCheck className="w-4 h-4" />, text: 'Design to AMC Turnkey' },
];

// ─────────────────────────────────────────────────────────────
// PAGE COMPONENT
// ─────────────────────────────────────────────────────────────
export default function ProductsHubPage() {
  const totalProducts = Object.values(productData).reduce(
    (acc: number, cat: any) => acc + cat.items.length, 0
  );

  return (
    <>
      <PageSchemas />

      <main className="min-h-screen bg-[#0A1F22] selection:bg-cyan-500/30">

        {/* ══════════════════════════════════════════════════
            HERO HEADER
        ══════════════════════════════════════════════════ */}
        <header className="max-w-7xl mx-auto px-6 pt-32 pb-16">

          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-xs text-white/40">
              <li><Link href="/" className="hover:text-cyan-400 transition-colors">Home</Link></li>
              <li><span className="text-white/20">/</span></li>
              <li><span className="text-white/70">Products</span></li>
            </ol>
          </nav>

          {/* H1 */}
          <h1 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter mb-6">
            Industrial <span className="text-cyan-500">Air Pollution</span><br className="hidden md:block" /> Control Equipment
          </h1>

          {/* SEO subtitle paragraph */}
          <p className="text-gray-300 mt-4 max-w-3xl text-base md:text-lg border-l-2 border-cyan-500 pl-6 leading-relaxed">
            <strong className="text-white">NAPCEN</strong> — Leading manufacturer of{' '}
            <strong className="text-white">Wet Scrubbers, Dry Scrubbers, PP FRP Scrubbers, Dust Collectors,
            Fume Extractors, Downdraft Tables, Industrial Blowers, Fume Hoods &amp; Heat Exchangers</strong>{' '}
            in <strong className="text-white">Puducherry, India</strong>. CPCB / TNPCB compliant systems with
            design, installation &amp; AMC. Serving Chennai, Tamil Nadu &amp; all India.
          </p>

          {/* Trust badges */}
          <div className="mt-8 flex flex-wrap gap-2">
            {TRUST_BADGES.map((b) => (
              <span key={b.text} className="flex items-center gap-1.5 text-xs text-white/70 border border-white/10 rounded-full px-3 py-1.5 bg-white/5">
                <span className="text-cyan-400">{b.icon}</span>
                {b.text}
              </span>
            ))}
          </div>
        </header>

        {/* ══════════════════════════════════════════════════
            PRODUCT CATEGORY GRID
        ══════════════════════════════════════════════════ */}
        <section className="max-w-7xl mx-auto px-6 pb-20" aria-labelledby="catalog-heading">
          <h2 id="catalog-heading" className="sr-only">NAPCEN Product Categories — Air Pollution Control Equipment</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {/* Master "View All" Card */}
            <Link
              href="/products/all"
              className="group relative h-[450px] rounded-[3rem] overflow-hidden border border-cyan-500/30 bg-cyan-950/20 p-10 flex flex-col justify-between hover:border-cyan-400/60 hover:bg-cyan-900/20 transition-all duration-500"
              aria-label="View all NAPCEN air pollution control products"
            >
              <LayoutGrid className="w-12 h-12 text-cyan-500 group-hover:rotate-90 transition-transform duration-500" aria-hidden="true" />
              <div>
                <h2 className="text-4xl font-black text-white uppercase leading-none">
                  View All<br />Systems
                </h2>
                <p className="text-cyan-300 text-sm mt-3 leading-relaxed">
                  {totalProducts}+ products: Wet Scrubbers, Dust Collectors, Fume Extractors &amp; Downdraft Tables
                </p>
                <p className="text-cyan-400 mt-4 font-bold tracking-widest text-xs uppercase flex items-center gap-2">
                  Explore Full Catalog <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                </p>
              </div>
            </Link>

            {/* Dynamic Category Cards */}
            {Object.entries(productData).map(([slug, category]: [string, any]) => {
              const meta = CATEGORY_META[slug];
              return (
                <Link
                  key={slug}
                  href={`/products/${slug}`}
                  className="group relative h-[450px] rounded-[3rem] overflow-hidden border border-white/5 bg-white/[0.02] hover:border-cyan-500/40 transition-all duration-500"
                  aria-label={`${category.title} — ${category.items.length} products`}
                  itemScope
                  itemType="https://schema.org/Product"
                >
                  {/* Background image */}
                  <Image
                    src={category.items[0].image.src}
                    alt={`${category.title} manufacturer India — NAPCEN Puducherry`}
                    fill
                    className="object-cover opacity-20 grayscale group-hover:grayscale-0 group-hover:opacity-40 group-hover:scale-110 transition-all duration-700"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
                  />

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1F22] via-[#0A1F22]/50 to-transparent" aria-hidden="true" />

                  {/* Content */}
                  <div className="relative h-full flex flex-col justify-end p-10">
                    {/* Product count badge */}
                    <span className="inline-block mb-3 text-[10px] font-black text-cyan-400/70 border border-cyan-500/20 rounded-full px-3 py-1 w-fit uppercase tracking-widest">
                      {category.items.length} Products
                    </span>

                    {/* Category H2 */}
                    <h2
                      className="text-2xl font-black text-white uppercase tracking-tight group-hover:text-cyan-400 transition-colors"
                      itemProp="name"
                    >
                      {category.title}
                    </h2>

                    {/* SEO subtitle — product sub-types */}
                    {meta && (
                      <p className="text-white/40 text-[10px] mt-2 leading-relaxed font-medium">
                        {meta.subtitle}
                      </p>
                    )}

                    {/* SEO description */}
                    <p className="text-gray-400 text-xs mt-2 leading-relaxed line-clamp-2" itemProp="description">
                      {category.seoDescription || `NAPCEN manufactures CPCB/TNPCB compliant ${category.title.toLowerCase()} in Puducherry, India. Serving Chennai, Tamil Nadu & all India.`}
                    </p>

                    {/* CTA arrow */}
                    <p className="text-cyan-400/60 mt-4 text-[10px] font-black uppercase tracking-widest flex items-center gap-1 group-hover:text-cyan-400 transition-colors">
                      View {category.items.length} Products
                      <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" aria-hidden="true" />
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* ══════════════════════════════════════════════════
            ALL PRODUCTS KEYWORD STRIP — crawlable by Google
        ══════════════════════════════════════════════════ */}
        <section className="max-w-7xl mx-auto px-6 pb-16" aria-label="Complete product list">
          <div className="border-t border-white/5 pt-12">
            <p className="text-white/30 text-[10px] font-black uppercase tracking-widest mb-4 text-center">
              Our Complete Product Range — {totalProducts}+ Systems
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {ALL_PRODUCTS_KEYWORDS.map((kw, i) => (
                <span key={i} className="text-xs text-white/50 border border-white/10 rounded-full px-3 py-1 bg-white/[0.02] hover:text-white/70 hover:border-white/20 transition-all">
                  {kw}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════
            SEO CONTENT BLOCK — manufacturer info + keywords
        ══════════════════════════════════════════════════ */}
        <section className="max-w-7xl mx-auto px-6 pb-16">
          <div className="grid md:grid-cols-2 gap-10 bg-white/[0.02] border border-white/5 rounded-3xl p-8 md:p-12">
            <div>
              <h2 className="text-xl md:text-2xl font-black uppercase tracking-widest text-white mb-4">
                Air Pollution Control Equipment Manufacturer in Puducherry, India
              </h2>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                <strong className="text-white">NAPCEN</strong> is a trusted industrial air pollution control
                equipment manufacturer based in <strong className="text-white">Puducherry (Pondicherry), India</strong>.
                Since 2010, we have designed, manufactured, installed, and maintained air filtration systems for
                500+ industrial plants across <strong className="text-white">Chennai, Tamil Nadu</strong>, and all of India.
              </p>
              <p className="text-gray-400 text-sm leading-relaxed">
                Our complete product range covers{' '}
                <strong className="text-white">Wet Scrubbers</strong> (Packed Bed, Venturi, Ammonia, HCL, Chlorine,
                NOx, SO2, PP FRP, Multi-Stage),{' '}
                <strong className="text-white">Dust Collectors</strong> (Pulse Jet, Cyclone, Cartridge, Baghouse),{' '}
                <strong className="text-white">Fume Extractors</strong> (Welding, Laser, Soldering, Gold, Laboratory),
                and <strong className="text-white">Downdraft Tables</strong> (Welding, Grinding, Polishing, Woodworking).
                We also supply <strong className="text-white">Industrial Blowers, Fume Hoods, Heat Exchangers,
                Oil Mist Collectors, Grossing Stations</strong>, and complete{' '}
                <strong className="text-white">Ducting &amp; Ventilation Systems</strong>.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-black uppercase tracking-widest text-white mb-4">
                Why Choose NAPCEN?
              </h3>
              <ul className="space-y-3">
                {[
                  'All systems CPCB & TNPCB compliant — performance certificate included',
                  'Complete turnkey service: design → fabrication → installation → AMC',
                  'Factory-direct pricing from our Puducherry manufacturing facility',
                  'Custom systems for any gas, fume, dust, or odour control application',
                  'Fast delivery: 3–4 weeks standard, 10 days fast-track',
                  'Export supply to UAE, Saudi Arabia, Malaysia & Sri Lanka',
                  '15+ years experience — trusted by 200+ industrial clients across India',
                ].map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-gray-400 text-sm leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>

              {/* Contact CTA */}
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <a
                  href="tel:+917904469219"
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-xs uppercase tracking-widest rounded-full transition-all"
                  aria-label="Call NAPCEN"
                >
                  <Phone className="w-4 h-4" aria-hidden="true" />
                  +91-7904469219
                </a>
                <a
                  href="/contact"
                  className="flex items-center justify-center gap-2 px-6 py-3 border border-white/20 hover:bg-white/10 text-white font-bold text-xs uppercase tracking-widest rounded-full transition-all"
                >
                  Get Free Quote
                  <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════
            LOCATION STRIP — Local SEO
        ══════════════════════════════════════════════════ */}
        <section className="max-w-7xl mx-auto px-6 pb-20">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left border-t border-white/5 pt-8">
            <div className="flex items-center gap-2 text-white/40 text-xs">
              <MapPin className="w-3.5 h-3.5 text-cyan-400/60 shrink-0" aria-hidden="true" />
              <span>No.1, North Street, SMV Puram, Villianur, <strong className="text-white/60">Puducherry – 605110</strong></span>
            </div>
            <p className="text-white/30 text-xs">
              Supplying Chennai · Coimbatore · Madurai · Bengaluru · Hyderabad · Mumbai · Delhi · Pan-India
            </p>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════
            sr-only SEO BLOCK
        ══════════════════════════════════════════════════ */}
        <div className="sr-only">
          <h2>Industrial Air Pollution Control Equipment Manufacturer in Puducherry India — NAPCEN</h2>
          <p>
            NAPCEN manufactures and supplies industrial air pollution control equipment in Puducherry, India.
            Products: wet scrubbers, packed bed scrubbers, venturi scrubbers, ammonia scrubbers, HCL scrubbers,
            chlorine scrubbers, boiler flue gas scrubbers, chromic acid scrubbers, NOx scrubbers, sulfuric acid scrubbers,
            CO2 scrubbers, foundry exhaust scrubbers, VOC scrubbers, plastic fume scrubbers, hospital waste scrubbers,
            vent gas scrubbers, dry scrubbers, PP FRP scrubbers, pulse jet baghouse dust collectors, cartridge dust collectors,
            cyclone dust collectors, portable dust collectors, two stage dust collectors, welding fume extractors,
            laser fume extractors, soldering fume extractors, gold fume extractors, laboratory fume extractors,
            printing fume extractors, welding downdraft tables, grinding downdraft tables, polishing downdraft tables,
            woodworking downdraft tables, portable downdraft tables, industrial blowers, FRP blowers,
            fume hoods, heat exchangers, oil mist collectors, grossing stations, ducting systems,
            FRP lining services, industrial ventilation systems.
            CPCB compliant, TNPCB compliant. Factory in Puducherry Pondicherry India.
            Serving Chennai, Coimbatore, Madurai, Salem, Trichy, Tamil Nadu, Bengaluru, Hyderabad,
            Mumbai, Delhi, Ahmedabad, Pune, Kolkata, Kochi, and all India.
            Export to UAE, Saudi Arabia, Malaysia, Sri Lanka.
            Air pollution control equipment price India. Wet scrubber price India.
            Dust collector price India. Fume extractor price India. AMC service India.
          </p>
        </div>
      </main>
    </>
  );
}