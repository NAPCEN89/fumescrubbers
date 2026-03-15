'use client';

import React, { useMemo } from 'react';
import Image from 'next/image';
import CountUp from 'react-countup';

// ─────────────────────────────────────────────────────────────
// SEO KEYWORD TARGETS:
// client testimonials, trusted manufacturer, CPCB compliant,
// industrial installations, wet scrubber reviews India,
// dust collector clients India, pharma chemical foundry automotive
// ─────────────────────────────────────────────────────────────

const PARTNER_LOGOS = [
  { src: '/assets/images/clients/C1.webp',  alt: 'NAPCEN client - industrial air pollution control customer India' },
  { src: '/assets/images/clients/C2.webp',  alt: 'NAPCEN client - wet scrubber installation client Tamil Nadu' },
  { src: '/assets/images/clients/C10.webp', alt: 'NAPCEN client - dust collector supply customer Chennai' },
  { src: '/assets/images/clients/C4.webp',  alt: 'NAPCEN client - fume extractor customer India' },
  { src: '/assets/images/clients/C5.webp',  alt: 'NAPCEN client - industrial air filtration system customer' },
];

// ── Stats counters ──
const STATS = [
  { end: 500,  suffix: '+', label: 'Projects Completed',     sublabel: 'Wet Scrubbers, Dust Collectors & More' },
  { end: 200,  suffix: '+', label: 'Happy Clients',          sublabel: 'Across India & Exports' },
  { end: 15,   suffix: '+', label: 'Years of Experience',    sublabel: 'Since 2010, Puducherry India' },
  { end: 10,   suffix: '+', label: 'Countries Served',       sublabel: 'India, UAE, Malaysia, Sri Lanka & More' },
] as const;

// ── Client testimonials with schema-ready fields ──
const REVIEWS = [
  {
    quote:
      'Best wet scrubber we have installed — zero downtime since commissioning! The build quality is exceptional, and our air quality compliance reports speak for themselves. Highly recommended for heavy industry.',
    name: 'Deborah W. Way',
    title: 'Plant Operations Manager',
    industry: 'Chemical Manufacturing',
    product: 'Industrial Wet Scrubber',
    rating: 5,
  },
  {
    quote:
      'Reliable dry scrubbers for the toughest operating conditions. We run 24/7, and NAPCEN\'s units handle the heat, corrosive fumes, and dust flawlessly with minimal maintenance. The after-sales AMC team is always responsive.',
    name: 'Francis J. Casella',
    title: 'Environmental Compliance Officer',
    industry: 'Pharmaceutical Industry',
    product: 'Industrial Dry Scrubber',
    rating: 5,
  },
] as const;

// ── Industries served — adds keyword-rich visible text ──
const INDUSTRIES = [
  'Pharmaceuticals', 'Chemical Processing', 'Metal Foundries',
  'Automotive', 'Food Processing', 'Textiles', 'Electronics',
  'Semiconductor', 'Electroplating', 'Plastic Processing',
  'Hospital Pathology Labs', 'Cement Plants',
] as const;

export default function PartnerSection() {
  const infiniteLogos = useMemo(
    () => [...PARTNER_LOGOS, ...PARTNER_LOGOS, ...PARTNER_LOGOS],
    []
  );

  return (
    <section
      className="py-20 bg-gradient-to-l from-[#334746] to-[#151d1d] overflow-hidden text-white"
      aria-labelledby="partners-heading"
      itemScope
      itemType="https://schema.org/Organization"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Section Header ── */}
        <div className="text-center mb-16">
          <p className="text-sm font-black uppercase tracking-[0.3em] mb-3 text-cyan-400">
            Trusted Across Industries
          </p>
          <h2
            id="partners-heading"
            className="font-black mb-4 text-4xl sm:text-5xl lg:text-6xl text-white leading-tight"
          >
            Partnering for{' '}
            <span className="text-cyan-400 drop-shadow-[0_0_15px_rgba(0,229,255,0.4)]">
              Cleaner Air
            </span>
          </h2>
          {/* SEO subtitle with keywords */}
          <p className="max-w-2xl mx-auto text-gray-300 text-lg leading-relaxed">
            Trusted by leading manufacturers across India for{' '}
            <strong className="text-white">CPCB &amp; TNPCB compliant</strong> wet scrubbers,
            dust collectors, fume extractors, and complete air pollution control systems.
          </p>
        </div>

        {/* ── Stats Grid ── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="text-center bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all"
              itemScope
              itemType="https://schema.org/QuantitativeValue"
            >
              <div className="font-black text-5xl md:text-6xl text-cyan-400 leading-none" itemProp="value">
                <CountUp end={stat.end} duration={3} suffix={stat.suffix} enableScrollSpy scrollSpyOnce />
              </div>
              <p className="font-bold text-white text-sm uppercase tracking-wide mt-2" itemProp="name">
                {stat.label}
              </p>
              <p className="text-white/40 text-xs mt-1">{stat.sublabel}</p>
            </div>
          ))}
        </div>

        {/* ── Client Logo Marquee ── */}
        <div className="mb-10">
          <p className="text-center text-white/40 text-xs font-semibold tracking-widest uppercase mb-6">
            Our Clients &amp; Partners
          </p>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#151d1d] to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#334746] to-transparent z-10" />

            <div className="flex overflow-hidden group">
              <div className="flex animate-marquee whitespace-nowrap py-10 items-center">
                {infiniteLogos.map((logo, i) => (
                  <div key={i} className="mx-12 w-32 md:w-44 transition-all duration-500 hover:scale-110">
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={176}
                      height={80}
                      className="grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all object-contain"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
              {/* Duplicate for seamless loop */}
              <div className="flex animate-marquee whitespace-nowrap py-10 items-center" aria-hidden="true">
                {infiniteLogos.map((logo, i) => (
                  <div key={`dup-${i}`} className="mx-12 w-32 md:w-44 transition-all duration-500 hover:scale-110">
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={176}
                      height={80}
                      className="grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all object-contain"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── Industries Served — SEO keyword strip ── */}
        <div className="text-center mb-20">
          <p className="text-white/30 text-xs font-semibold tracking-widest uppercase mb-3">
            Industries We Serve
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {INDUSTRIES.map((industry) => (
              <span
                key={industry}
                className="text-xs sm:text-sm text-white/60 border border-white/10 rounded-full px-3 py-1 bg-white/5"
              >
                {industry}
              </span>
            ))}
          </div>
        </div>

        {/* ── Testimonials ── */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-black uppercase tracking-widest text-cyan-400">
            Client Testimonials
          </h3>
          <p className="text-white/50 text-sm mt-2">
            What our clients say about NAPCEN air pollution control equipment
          </p>
        </div>

        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
          itemScope
          itemType="https://schema.org/Review"
        >
          {REVIEWS.map((r, i) => (
            <div
              key={i}
              className="group p-8 md:p-10 rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-md transition-all duration-500 hover:border-cyan-500/50 hover:bg-white/10 relative overflow-hidden"
              itemScope
              itemType="https://schema.org/Review"
            >
              {/* Rating schema */}
              <div
                className="sr-only"
                itemScope
                itemType="https://schema.org/Rating"
                itemProp="reviewRating"
              >
                <meta itemProp="ratingValue" content={String(r.rating)} />
                <meta itemProp="bestRating" content="5" />
              </div>
              <meta itemProp="itemReviewed" content={`NAPCEN ${r.product}`} />

              <div className="absolute -top-4 -left-2 text-9xl text-cyan-500/10 font-serif pointer-events-none" aria-hidden="true">
                &ldquo;
              </div>

              <p
                className="text-gray-300 italic mb-6 leading-relaxed text-lg relative z-10"
                itemProp="reviewBody"
              >
                &ldquo;{r.quote}&rdquo;
              </p>

              {/* Product tag */}
              <span className="inline-block mb-4 text-[10px] text-cyan-300/70 border border-cyan-400/20 rounded-full px-3 py-1 uppercase tracking-wider">
                {r.product} — {r.industry}
              </span>

              {/* Star rating display */}
              <div className="flex gap-0.5 mb-4" aria-label={`${r.rating} out of 5 stars`}>
                {Array.from({ length: r.rating }).map((_, s) => (
                  <span key={s} className="text-cyan-400 text-sm" aria-hidden="true">★</span>
                ))}
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-1 bg-cyan-500" />
                <div>
                  <p className="font-bold text-xl text-cyan-400 tracking-tight" itemProp="author">
                    {r.name}
                  </p>
                  <p className="text-gray-400 text-sm font-medium uppercase tracking-tighter">
                    {r.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── Export Markets ── */}
        <p
          className="text-center mt-16 text-base md:text-lg text-white/60 italic"
          itemProp="areaServed"
        >
          Proudly Serving &nbsp;
          <strong className="text-white/80">India</strong> &bull;{' '}
          <strong className="text-white/80">UAE</strong> &bull;{' '}
          <strong className="text-white/80">Saudi Arabia</strong> &bull;{' '}
          <strong className="text-white/80">Malaysia</strong> &bull;{' '}
          <strong className="text-white/80">Sri Lanka</strong>
        </p>

        {/* ── Hidden SEO block ── */}
        <div className="sr-only">
          <p>
            NAPCEN is trusted by industries across India for industrial air pollution control equipment.
            Clients include chemical manufacturers, pharmaceutical companies, metal foundries, automotive plants,
            food processing units, textile mills, electronics manufacturers, semiconductor fabs,
            electroplating units, and hospital pathology laboratories. Products supplied include
            wet scrubbers, dry scrubbers, PP FRP scrubbers, packed bed scrubbers, venturi scrubbers,
            pulse jet dust collectors, cyclone dust collectors, cartridge dust collectors,
            welding fume extractors, downdraft tables, fume hoods, industrial blowers, heat exchangers,
            and oil mist collectors. All systems are CPCB and TNPCB compliant.
            Installation and AMC services available across Chennai, Tamil Nadu, Puducherry, Bengaluru,
            Hyderabad, Mumbai, Delhi, and all India.
          </p>
        </div>
      </div>

      <style jsx global>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        .group:hover .animate-marquee {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}