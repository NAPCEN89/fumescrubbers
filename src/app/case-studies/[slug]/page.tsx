// app/case-studies/[slug]/page.tsx
// Server Component — generateMetadata handles all SEO per case study

import { caseStudies } from '@/lib/case-studies-data';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle, Quote, ArrowRight, MapPin, Building2, Calendar, ShieldCheck, Phone, Mail, ChevronRight } from 'lucide-react';
import { Metadata } from 'next';

// ─────────────────────────────────────────────────────────────
// CANONICAL DOMAIN
// ─────────────────────────────────────────────────────────────
const SITE = 'https://fumescrubbers.com';

type Props = {
  params: Promise<{ slug: string }>;
};

// ─────────────────────────────────────────────────────────────
// STATIC PATHS
// ─────────────────────────────────────────────────────────────
export async function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

// ─────────────────────────────────────────────────────────────
// PER-CASE-STUDY METADATA
// ─────────────────────────────────────────────────────────────
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.slug === slug);
  if (!study) return { title: 'Case Study Not Found | NAPCEN' };

  const canonicalUrl = `${SITE}/case-studies/${slug}`;
  const imageUrl = `${SITE}${study.image}`;

  // Build keyword-rich title: client + product + industry + location
  const title = `${study.title} | ${study.industry} Case Study | NAPCEN Air Pollution Control India`;

  // Build keyword-rich description: challenge + solution + location
  const desc =
    `NAPCEN case study: ${study.challenge?.substring(0, 80)}... ` +
    `Solution: ${study.solution?.substring(0, 80)}... ` +
    `${study.industry} — ${study.location}. CPCB/TNPCB compliant air pollution control systems by NAPCEN, Puducherry, India.`;

  const metaDesc = desc.length > 160 ? desc.substring(0, 157) + '...' : desc;

  return {
    title,
    description: metaDesc,
    keywords: [
      `${study.industry} air pollution control India`,
      `${study.industry} wet scrubber case study`,
      `${study.industry} dust collector India`,
      `NAPCEN case study ${study.industry}`,
      `air pollution control case study India`,
      `CPCB compliant ${study.industry} scrubber`,
      `wet scrubber installation ${study.location}`,
      `industrial air filtration ${study.industry} India`,
      'NAPCEN Puducherry India',
      'industrial air pollution control success story India',
    ],
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title,
      description: metaDesc,
      url: canonicalUrl,
      siteName: 'NAPCEN Industrial Air Solutions',
      locale: 'en_IN',
      type: 'article',
      images: [{ url: imageUrl, width: 1200, height: 630, alt: `${study.title} — NAPCEN air pollution control case study` }],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: metaDesc,
      images: [imageUrl],
    },
  };
}

// ─────────────────────────────────────────────────────────────
// PAGE COMPONENT
// ─────────────────────────────────────────────────────────────
export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const study = caseStudies.find((s) => s.slug === slug);
  if (!study) notFound();

  // Related case studies (same industry, exclude current)
  const related = caseStudies
    .filter((s) => s.slug !== slug && s.industry === study.industry)
    .slice(0, 3);

  // Other case studies if no same-industry
  const otherStudies = related.length > 0
    ? related
    : caseStudies.filter((s) => s.slug !== slug).slice(0, 3);

  // ── CaseStudy JSON-LD Schema ──
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: study.title,
    description: study.challenge,
    image: `${SITE}${study.image}`,
    url: `${SITE}/case-studies/${slug}`,
    datePublished: study.publishedDate || '2024-01-01',
    dateModified: study.modifiedDate || study.publishedDate || '2024-01-01',
    author: {
      '@type': 'Organization',
      name: 'NAPCEN',
      url: SITE,
    },
    publisher: {
      '@type': 'Organization',
      name: 'NAPCEN',
      logo: { '@type': 'ImageObject', url: `${SITE}/logo-napcen.png` },
    },
    about: {
      '@type': 'Product',
      name: study.productUsed || 'Industrial Air Pollution Control System',
      manufacturer: { '@type': 'Organization', name: 'NAPCEN', url: SITE },
    },
    locationCreated: {
      '@type': 'Place',
      name: study.location || 'India',
    },
  };

  // ── BreadcrumbList ──
  const breadcrumbLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE },
      { '@type': 'ListItem', position: 2, name: 'Case Studies', item: `${SITE}/case-studies` },
      { '@type': 'ListItem', position: 3, name: study.title, item: `${SITE}/case-studies/${slug}` },
    ],
  };

  // ── Review / Testimonial Schema ──
  const reviewLd = study.quote
    ? {
        '@context': 'https://schema.org',
        '@type': 'Review',
        reviewBody: study.quote,
        author: { '@type': 'Person', name: study.quoteAuthor || 'Client' },
        itemReviewed: {
          '@type': 'Product',
          name: study.productUsed || 'NAPCEN Air Pollution Control System',
          brand: { '@type': 'Brand', name: 'NAPCEN' },
        },
        reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
      }
    : null;

  return (
    <>
      {/* JSON-LD Schemas */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      {reviewLd && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewLd) }} />}

      <article
        className="min-h-screen bg-[#0A1F22] text-white py-16 md:py-24"
        itemScope
        itemType="https://schema.org/Article"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-8">

          {/* ── BREADCRUMB ── */}
          <nav className="mb-10" aria-label="Breadcrumb">
            <ol className="flex flex-wrap items-center gap-2 text-xs text-white/40">
              <li><Link href="/" className="hover:text-cyan-400 transition-colors">Home</Link></li>
              <li><span className="text-white/20">/</span></li>
              <li><Link href="/case-studies" className="hover:text-cyan-400 transition-colors">Case Studies</Link></li>
              <li><span className="text-white/20">/</span></li>
              <li><span className="text-white/70 line-clamp-1">{study.title}</span></li>
            </ol>
          </nav>

          {/* ── HERO IMAGE ── */}
          <div className="relative h-96 md:h-[500px] rounded-3xl overflow-hidden mb-10">
            <Image
              src={study.image}
              alt={`${study.title} — NAPCEN ${study.industry} air pollution control case study ${study.location}`}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 1000px"
              itemProp="image"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A1F22] via-[#0A1F22]/30 to-transparent" aria-hidden="true" />
            <div className="absolute bottom-8 left-8 right-8">
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <span className="text-[10px] font-black text-cyan-400 border border-cyan-400/30 rounded-full px-3 py-1 uppercase tracking-widest bg-[#0A1F22]/60 backdrop-blur-sm">
                  {study.industry}
                </span>
                <span className="flex items-center gap-1 text-[10px] font-bold text-white/60 uppercase tracking-widest">
                  <MapPin className="w-3 h-3 text-cyan-400/60" aria-hidden="true" /> {study.location}
                </span>
                {study.productUsed && (
                  <span className="text-[10px] font-bold text-white/50 border border-white/10 rounded-full px-3 py-1 bg-[#0A1F22]/60 uppercase tracking-widest">
                    {study.productUsed}
                  </span>
                )}
              </div>
              <h1
                className="text-3xl md:text-5xl font-black leading-tight"
                itemProp="headline"
              >
                {study.title}
              </h1>
            </div>
          </div>

          {/* ── META STRIP ── */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-16">
            {[
              { icon: <Building2 className="w-4 h-4" />, label: 'Industry', value: study.industry },
              { icon: <MapPin className="w-4 h-4" />, label: 'Location', value: study.location },
              { icon: <ShieldCheck className="w-4 h-4" />, label: 'Compliance', value: 'CPCB / TNPCB' },
              { icon: <Calendar className="w-4 h-4" />, label: 'Project', value: study.projectYear || 'Completed' },
            ].map((item) => (
              <div key={item.label} className="bg-white/5 border border-white/10 rounded-2xl p-4 text-center">
                <div className="text-cyan-400 flex justify-center mb-2" aria-hidden="true">{item.icon}</div>
                <p className="text-white/30 text-[9px] uppercase tracking-widest font-bold mb-1">{item.label}</p>
                <p className="text-white text-xs font-bold">{item.value}</p>
              </div>
            ))}
          </div>

          {/* ── CHALLENGE + SOLUTION ── */}
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <div>
              <h2 className="text-2xl md:text-3xl font-black mb-6 text-cyan-400 uppercase tracking-tight">
                The Challenge
              </h2>
              <p className="text-lg leading-relaxed text-gray-300" itemProp="description">
                {study.challenge}
              </p>
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-black mb-6 text-cyan-400 uppercase tracking-tight">
                NAPCEN Solution
              </h2>
              <p className="text-lg leading-relaxed text-gray-300">
                {study.solution}
              </p>
              {/* Product used — keyword-rich */}
              {study.productUsed && (
                <div className="mt-6 p-4 bg-cyan-500/5 border border-cyan-500/20 rounded-2xl">
                  <p className="text-[10px] font-black text-cyan-400/70 uppercase tracking-widest mb-1">Equipment Installed</p>
                  <p className="text-white font-bold text-sm">
                    {study.productUsed} — <span className="text-white/60 font-normal">NAPCEN, Puducherry, India</span>
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* ── RESULTS ── */}
          <section className="mb-20" aria-labelledby="results-heading">
            <h2
              id="results-heading"
              className="text-3xl md:text-4xl font-black text-center mb-12 text-cyan-400 uppercase tracking-tight"
            >
              Results Achieved
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {study.results.map((result: string, i: number) => (
                <div
                  key={i}
                  className="bg-white/5 rounded-2xl p-8 border border-white/10 text-center hover:border-cyan-500/30 hover:bg-white/[0.08] transition-all"
                >
                  <CheckCircle className="w-10 h-10 text-cyan-400 mx-auto mb-4" aria-hidden="true" />
                  <p className="text-base md:text-lg font-bold text-white leading-snug">{result}</p>
                </div>
              ))}
            </div>
          </section>

          {/* ── SEO CONTENT: What NAPCEN did ── */}
          <section
            className="mb-20 bg-white/[0.02] border border-white/5 rounded-3xl p-8 md:p-12"
            aria-labelledby="napcen-work-heading"
          >
            <h2
              id="napcen-work-heading"
              className="text-xl md:text-2xl font-black uppercase tracking-widest text-white mb-4"
            >
              About This Project — NAPCEN, Puducherry, India
            </h2>
            <div className="grid md:grid-cols-2 gap-8 text-gray-400 text-sm leading-relaxed">
              <p>
                This project showcases NAPCEN's expertise as a leading{' '}
                <strong className="text-white">industrial air pollution control equipment manufacturer</strong> in{' '}
                <strong className="text-white">Puducherry (Pondicherry), India</strong>. Our team
                delivered a complete turnkey solution for the {study.industry.toLowerCase()} sector in{' '}
                <strong className="text-white">{study.location}</strong> — from initial site assessment
                and custom engineering design to full installation, commissioning, and performance verification.
              </p>
              <p>
                All NAPCEN systems installed at this facility are fully{' '}
                <strong className="text-white">CPCB and TNPCB compliant</strong> with issued stack emission
                test certificates and performance guarantee documents. We provide ongoing{' '}
                <strong className="text-white">Annual Maintenance Contracts (AMC)</strong> to ensure
                continued compliance and system reliability. Contact us at{' '}
                <a href="tel:+917904469219" className="text-cyan-400 hover:underline">+91-7904469219</a> or{' '}
                <a href="mailto:sales@napcen.com" className="text-cyan-400 hover:underline">sales@napcen.com</a>{' '}
                for a custom solution for your facility.
              </p>
            </div>
          </section>

          {/* ── TESTIMONIAL ── */}
          {study.quote && (
            <blockquote
              className="bg-[#1a2424] rounded-3xl p-10 md:p-14 text-center mb-20 border-l-8 border-cyan-400"
              itemScope
              itemType="https://schema.org/Review"
            >
              <Quote className="w-12 h-12 text-cyan-400/30 mx-auto mb-6" aria-hidden="true" />
              <p
                className="text-xl md:text-2xl font-bold italic mb-6 text-white leading-relaxed"
                itemProp="reviewBody"
              >
                &ldquo;{study.quote}&rdquo;
              </p>
              {/* Star rating display */}
              <div className="flex justify-center gap-1 mb-4" aria-label="5 out of 5 stars">
                {[1,2,3,4,5].map((s) => (
                  <span key={s} className="text-cyan-400 text-lg" aria-hidden="true">★</span>
                ))}
              </div>
              {/* Hidden rating schema */}
              <div className="sr-only" itemProp="reviewRating" itemScope itemType="https://schema.org/Rating">
                <meta itemProp="ratingValue" content="5" />
                <meta itemProp="bestRating" content="5" />
              </div>
              <footer className="text-cyan-400 font-black text-sm uppercase tracking-widest">
                — <span itemProp="author">{study.quoteAuthor}</span>, {study.client}
              </footer>
            </blockquote>
          )}

          {/* ── RELATED CASE STUDIES ── */}
          {otherStudies.length > 0 && (
            <section className="mb-20" aria-labelledby="related-heading">
              <h2
                id="related-heading"
                className="text-xl font-black uppercase tracking-widest text-white mb-8 text-center"
              >
                More NAPCEN Case Studies
              </h2>
              <div className="grid sm:grid-cols-3 gap-4">
                {otherStudies.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/case-studies/${s.slug}`}
                    className="group block bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-cyan-500/40 hover:bg-white/[0.08] transition-all"
                    aria-label={`Read case study: ${s.title}`}
                  >
                    <div className="relative h-32 rounded-xl overflow-hidden mb-4">
                      <Image
                        src={s.image}
                        alt={`${s.title} — NAPCEN case study`}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="300px"
                      />
                    </div>
                    <span className="text-[9px] font-black text-cyan-400/70 uppercase tracking-widest">{s.industry}</span>
                    <h3 className="text-white font-bold text-sm mt-1 leading-snug group-hover:text-cyan-400 transition-colors line-clamp-2">
                      {s.title}
                    </h3>
                    <p className="flex items-center gap-1 text-white/30 text-[10px] mt-2">
                      <MapPin className="w-3 h-3" aria-hidden="true" /> {s.location}
                    </p>
                  </Link>
                ))}
              </div>
              <div className="text-center mt-8">
                <Link
                  href="/case-studies"
                  className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-bold text-sm uppercase tracking-widest transition-colors"
                >
                  View All Case Studies <ChevronRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </div>
            </section>
          )}

          {/* ── FINAL CTA ── */}
          <section className="text-center py-16 border-t border-white/5" aria-label="Contact NAPCEN">
            <h2 className="text-3xl md:text-4xl font-black mb-4 uppercase tracking-tight">
              Ready for Your Own Success Story?
            </h2>
            <p className="text-gray-400 text-base mb-8 max-w-xl mx-auto">
              Get a custom air pollution control solution for your{' '}
              {study.industry.toLowerCase()} facility. CPCB/TNPCB compliant systems
              with performance guarantee — designed and installed by NAPCEN, Puducherry.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 px-10 py-5 bg-cyan-500 text-black font-black text-sm uppercase tracking-widest rounded-full hover:bg-cyan-400 transition-all shadow-[0_10px_30px_-5px_rgba(0,229,255,0.3)]"
                aria-label="Contact NAPCEN for air pollution control solution"
              >
                Get a Custom Solution Quote
                <ArrowRight className="w-5 h-5" aria-hidden="true" />
              </Link>
              <a
                href="tel:+917904469219"
                className="inline-flex items-center gap-2 px-8 py-5 border border-white/20 hover:bg-white/10 text-white font-bold text-sm uppercase tracking-widest rounded-full transition-all"
                aria-label="Call NAPCEN"
              >
                <Phone className="w-4 h-4" aria-hidden="true" />
                +91-7904469219
              </a>
            </div>
            {/* NAP for Local SEO */}
            <p className="mt-8 text-white/30 text-xs flex items-center justify-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-cyan-400/40" aria-hidden="true" />
              NAPCEN — No.1, North Street, SMV Puram, Villianur, Puducherry – 605110, India
            </p>
          </section>

          {/* ── sr-only SEO BLOCK ── */}
          <div className="sr-only">
            <p>
              NAPCEN case study: {study.title}. Industry: {study.industry}. Location: {study.location}.
              NAPCEN is a leading air pollution control equipment manufacturer in Puducherry, India.
              We installed CPCB/TNPCB compliant {study.productUsed || 'air pollution control systems'}
              for this {study.industry.toLowerCase()} plant in {study.location}.
              NAPCEN provides wet scrubbers, dry scrubbers, dust collectors, fume extractors, downdraft tables,
              industrial blowers, heat exchangers, and fume hoods for industries across
              Chennai, Tamil Nadu, Bengaluru, Hyderabad, Mumbai, Delhi, and all India.
              Contact: +91-7904469219. sales@napcen.com. fumescrubbers.com.
            </p>
          </div>
        </div>
      </article>
    </>
  );
}