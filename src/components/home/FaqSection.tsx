'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

// ─────────────────────────────────────────────────────────────
// NOTE: FAQPage JSON-LD schema lives in app/page.tsx (HomepageSchemas).
// Do NOT add another <script type="application/ld+json"> FAQPage here
// or in <Head> — that causes duplication which Google may penalise.
// The <Head> with title/meta is also removed — use Next.js metadata
// export in each page file instead (already done in layout.tsx).
//
// SEO KEYWORD TARGETS:
// wet scrubber price India, dust collector price India,
// PP FRP scrubber, venturi scrubber, packed bed scrubber,
// downdraft table, fume extractor, fume hood, oil mist collector,
// CPCB compliant, TNPCB compliant, AMC, installation India,
// warranty, delivery, maintenance, Puducherry, Tamil Nadu
// ─────────────────────────────────────────────────────────────

const faqs = [
  // ── Pricing ──
  {
    category: 'Pricing',
    question: 'What is the price of a wet scrubber in India?',
    answer:
      'NAPCEN wet scrubber prices start from ₹2.8 Lakh for a standard packed bed scrubber. Venturi scrubbers, ammonia scrubbers, and HCL scrubbers are priced based on airflow capacity (CFM/m³/hr), material (PP-FRP, MS, SS304/316), and automation level. PP FRP wet scrubbers for chemical and pharmaceutical industries start from ₹4.5 Lakh for a 5000 CFM system. Contact us at sales@napcen.com or +91-7904469219 for a firm quote within 2 hours.',
  },
  {
    category: 'Pricing',
    question: 'What is the price of a dust collector in India?',
    answer:
      'NAPCEN industrial dust collectors start from ₹2.8 Lakh. Pulse jet bag filter dust collectors, cyclone dust collectors, and cartridge dust collectors are priced based on air volume, dust load, filter media, and hopper configuration. We offer competitive factory-direct pricing from our Puducherry facility, serving Chennai, Tamil Nadu, and all India.',
  },
  // ── Products ──
  {
    category: 'Products',
    question: 'What is a PP FRP scrubber and when is it used?',
    answer:
      'A PP FRP scrubber (Polypropylene Fibre Reinforced Plastic scrubber) is a corrosion-resistant air pollution control system built to handle highly corrosive acids, chlorine, HCL gas, SO₂, and chemical fumes that would damage standard MS or SS equipment. NAPCEN manufactures custom PP FRP scrubbers for chemical processing, electroplating, semiconductor manufacturing, and pharmaceutical industries across India.',
  },
  {
    category: 'Products',
    question: 'What types of scrubbers does NAPCEN manufacture?',
    answer:
      'NAPCEN manufactures a comprehensive range of industrial scrubbers including: Packed Bed Scrubbers, Venturi Scrubbers, Ammonia Scrubbers, HCL Scrubbers, Multi-Stage Wet Scrubbers, Dry Scrubbers, PP FRP Scrubbers, and custom-designed scrubbers for specific gas or fume applications. All scrubbers achieve up to 99% removal efficiency and are CPCB/TNPCB compliant.',
  },
  {
    category: 'Products',
    question: 'What is a downdraft table and which industries use it?',
    answer:
      'A downdraft table is a work surface with built-in downward suction that captures dust, fumes, and particulates at the source during welding, grinding, cutting, or sanding operations. NAPCEN manufactures welding downdraft tables and grinding downdraft tables widely used in automotive, metal fabrication, aerospace, and engineering workshops across India. It is a cost-effective alternative to overhead fume extraction for bench-level operations.',
  },
  {
    category: 'Products',
    question: 'What types of dust collectors does NAPCEN manufacture?',
    answer:
      'NAPCEN manufactures a full range of industrial dust collectors: Pulse Jet Bag Filter Dust Collectors, Cyclone Dust Collectors (separators), Cartridge Dust Collectors, Reverse Air Baghouse Dust Collectors, Wet Dust Collectors, and Shaker Type Bag Filters. These are used for wood dust, metal dust, cement dust, chemical powders, carbon black, and other industrial particulate control applications in manufacturing plants across India.',
  },
  {
    category: 'Products',
    question: 'Does NAPCEN supply fume hoods and oil mist collectors?',
    answer:
      'Yes. NAPCEN manufactures laboratory fume hoods and industrial fume hoods for safe handling of hazardous chemical vapors and toxic gases. We also supply oil mist collectors for CNC machining centers, grinding machines, and other metalworking equipment where oil mist and coolant aerosols are generated. Both are available with custom dimensions and airflow specifications.',
  },
  // ── Compliance ──
  {
    category: 'Compliance',
    question: 'Are NAPCEN systems CPCB and TNPCB compliant?',
    answer:
      'Yes, 100%. All NAPCEN wet scrubbers, dry scrubbers, dust collectors, fume extractors, and air pollution control systems are fully CPCB (Central Pollution Control Board) and TNPCB (Tamil Nadu Pollution Control Board) compliant. We provide CFD simulation reports, emission test certificates, and performance guarantee documents required for pollution board consent renewals. We maintain a zero-rejection record for industrial compliance across India.',
  },
  // ── Services ──
  {
    category: 'Services',
    question: 'Does NAPCEN provide installation and commissioning services?',
    answer:
      'Yes. NAPCEN provides complete on-site installation, ducting fabrication, and commissioning for all air pollution control equipment — wet scrubbers, dust collectors, fume extractors, downdraft tables, industrial blowers, and ventilation systems. Our certified engineers serve Chennai, Coimbatore, Madurai, Bengaluru, Hyderabad, Mumbai, Delhi, and all of India. Turnkey project execution is available.',
  },
  {
    category: 'Services',
    question: 'What maintenance and AMC plans does NAPCEN offer?',
    answer:
      'NAPCEN offers Annual Maintenance Contracts (AMC) and emergency breakdown service for all air pollution control equipment. Our AMC plans include scheduled preventive maintenance (weekly pH checks, monthly nozzle inspections, quarterly pump servicing), spare parts supply, and 24-hour emergency technical support. Regular AMC ensures CPCB/TNPCB compliance, extends equipment life to 10+ years, and prevents costly production shutdowns.',
  },
  // ── Delivery & Warranty ──
  {
    category: 'Delivery & Warranty',
    question: 'How long does delivery and installation take?',
    answer:
      'Standard manufacturing lead time at NAPCEN is 3–4 weeks from order confirmation. Urgent fast-track orders can be completed in 10 business days. Once the equipment is delivered to your site, our engineers complete installation and commissioning within 72 hours. We serve customers across Tamil Nadu, Puducherry, and all India.',
  },
  {
    category: 'Delivery & Warranty',
    question: 'What warranty does NAPCEN provide on its equipment?',
    answer:
      'NAPCEN offers a 2-year comprehensive equipment warranty covering all mechanical and structural components, plus a 10-year corrosion warranty on PP FRP bodies. The warranty includes free replacement of defective parts, staff training, and access to our digital maintenance guide and video tutorials for 10+ years of trouble-free operation.',
  },
] as const;

// Group FAQs by category for display
const CATEGORIES = ['All', 'Pricing', 'Products', 'Compliance', 'Services', 'Delivery & Warranty'] as const;
type Category = typeof CATEGORIES[number];

export default function FAQSection() {
  const [expanded, setExpanded] = useState<number | false>(0);
  const [activeCategory, setActiveCategory] = useState<Category>('All');

  const filteredFaqs = activeCategory === 'All'
    ? faqs
    : faqs.filter((f) => f.category === activeCategory);

  return (
    <section
      className="py-24 bg-gradient-to-l from-[#334746ff] to-[#151d1dff] relative overflow-hidden"
      aria-labelledby="faq-heading"
      id="faq"
    >
      <div className="max-w-4xl mx-auto px-6 relative z-10">

        {/* ── Section Header ── */}
        <div className="text-center mb-12">
          <p className="text-sm font-black uppercase tracking-[0.3em] mb-3 text-cyan-400">
            Support &amp; Knowledge Base
          </p>
          <h2
            id="faq-heading"
            className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight"
          >
            Frequently Asked{' '}
            <span className="text-cyan-400 drop-shadow-[0_0_15px_rgba(0,229,255,0.4)]">
              Questions
            </span>
          </h2>
          {/* SEO subtitle */}
          <p className="mt-4 text-white/50 text-sm md:text-base max-w-xl mx-auto">
            Everything you need to know about our wet scrubbers, dust collectors,
            fume extractors, downdraft tables, PP FRP scrubbers, and services.
          </p>
          <div className="w-20 h-1.5 bg-cyan-500 mx-auto mt-6 rounded-full" />
        </div>

        {/* ── Category Filter Tabs ── */}
        <div className="flex flex-wrap justify-center gap-2 mb-10" role="tablist" aria-label="FAQ categories">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              role="tab"
              aria-selected={activeCategory === cat}
              onClick={() => { setActiveCategory(cat); setExpanded(false); }}
              className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all border ${
                activeCategory === cat
                  ? 'bg-cyan-500 text-black border-cyan-500'
                  : 'bg-white/5 text-white/60 border-white/10 hover:bg-white/10 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* ── FAQ Accordion ── */}
        <div className="space-y-4" role="list">
          {filteredFaqs.map((faq, index) => (
            <div
              key={`${activeCategory}-${index}`}
              role="listitem"
              itemScope
              itemType="https://schema.org/Question"
              className={`group rounded-3xl transition-all duration-500 border ${
                expanded === index
                  ? 'bg-white/10 border-cyan-500/50 shadow-[0_0_30px_rgba(0,229,255,0.1)]'
                  : 'bg-white/5 border-white/10 hover:border-white/20'
              }`}
            >
              <button
                onClick={() => setExpanded(expanded === index ? false : index)}
                className="w-full flex justify-between items-center p-6 md:p-8 text-left"
                aria-expanded={expanded === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span
                  itemProp="name"
                  className={`text-base md:text-lg font-bold transition-colors pr-4 ${
                    expanded === index ? 'text-cyan-400' : 'text-gray-200 group-hover:text-white'
                  }`}
                >
                  {faq.question}
                </span>
                {/* Category badge */}
                <div className="hidden sm:flex items-center gap-3 flex-shrink-0">
                  <span className="text-[10px] text-white/30 border border-white/10 rounded-full px-2 py-0.5 uppercase tracking-wider">
                    {faq.category}
                  </span>
                  <div className={`p-2 rounded-full transition-all duration-500 ${
                    expanded === index ? 'bg-cyan-500 text-black rotate-180' : 'bg-white/5 text-cyan-400'
                  }`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </div>
                {/* Mobile: icon only */}
                <div className={`sm:hidden p-2 rounded-full transition-all duration-500 flex-shrink-0 ${
                  expanded === index ? 'bg-cyan-500 text-black rotate-180' : 'bg-white/5 text-cyan-400'
                }`}>
                  <ChevronDown className="w-5 h-5" />
                </div>
              </button>

              <div
                id={`faq-answer-${index}`}
                role="region"
                itemScope
                itemType="https://schema.org/Answer"
                itemProp="acceptedAnswer"
                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  expanded === index ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-6 md:p-8 pt-0 border-t border-white/5">
                  <p
                    itemProp="text"
                    className="text-gray-300 text-sm md:text-base leading-relaxed"
                  >
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── CTA below FAQs ── */}
        <div className="mt-14 text-center bg-white/5 border border-white/10 rounded-3xl p-8">
          <p className="text-white font-bold text-lg mb-2">
            Didn't find your answer?
          </p>
          <p className="text-white/60 text-sm mb-6">
            Our engineers are available to answer any technical questions about
            wet scrubbers, dust collectors, fume extractors, downdraft tables,
            PP FRP scrubbers, or any air pollution control requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="tel:+917904469219"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-cyan-600 text-white font-bold rounded-full hover:bg-cyan-500 transition-all shadow-lg hover:-translate-y-1 text-sm"
              aria-label="Call NAPCEN for air pollution control inquiry"
            >
              📞 +91-7904469219
            </a>
            <a
              href="mailto:sales@napcen.com"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 border border-white/20 text-white font-bold rounded-full hover:bg-white/20 transition-all text-sm"
              aria-label="Email NAPCEN for wet scrubber or dust collector inquiry"
            >
              ✉ sales@napcen.com
            </a>
          </div>
        </div>

        {/* ── Hidden SEO block ── */}
        <div className="sr-only">
          <p>
            NAPCEN FAQ — frequently asked questions about industrial air pollution control equipment.
            Wet scrubber price India, dust collector price Tamil Nadu, PP FRP scrubber cost,
            venturi scrubber manufacturer Puducherry, packed bed scrubber India,
            downdraft table welding grinding India, fume hood laboratory industrial,
            oil mist collector CNC machine, CPCB compliant air pollution control,
            TNPCB compliant scrubber system, wet scrubber installation Chennai,
            dust collector AMC India, air pollution control annual maintenance contract,
            scrubber warranty India, fast delivery wet scrubber Tamil Nadu.
          </p>
        </div>
      </div>
    </section>
  );
}