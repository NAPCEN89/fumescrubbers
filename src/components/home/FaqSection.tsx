'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import Head from 'next/head';

// --- CONSTANTS ---
const CYAN = '#00E5FF';

const faqs = [
  {
    question: "What is the price of a wet scrubber and dust collector in India?",
    answer: "Wet scrubber systems start from ₹4.5 Lakh (5000 CFM PP-FRP). Dust collectors start from ₹2.8 Lakh. Final pricing depends on airflow requirements, material choice, and automation levels. We provide a firm quote within 2 hours.",
  },
  {
    question: "What warranty and after-sales service do you provide?",
    answer: "We offer a 2-year comprehensive equipment warranty and a 10-year corrosion warranty on our FRP bodies. Service includes free installation, staff training, and 24-hour emergency technical support.",
  },
  {
    question: "How long does delivery and installation take?",
    answer: "Standard manufacturing takes 3–4 weeks. Urgent 'Fast-Track' orders can be completed in 10 days. Once delivered, our engineers complete on-site installation within 72 hours.",
  },
  {
    question: "Are your systems TNPCB/CPCB compliant?",
    answer: "Yes, 100%. We provide CFD (Computational Fluid Dynamics) simulation reports and emission test certificates required for TNPCB/CPCB consent. We maintain a zero-rejection record for industrial compliance.",
  },
  {
    question: "How do I maintain the scrubber for a long lifespan?",
    answer: "Maintenance is streamlined: weekly pH checks, monthly nozzle inspections, and quarterly pump servicing. We provide a digital maintenance guide and video training to ensure 10+ years of trouble-free operation.",
  },
];

export default function FAQSection() {
  const [expanded, setExpanded] = useState<number | false>(0); // Default first one open for better UX

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };

  return (
    <>
      <Head>
        <title>FAQ | Industrial Air Pollution Control Systems | NAPCEN</title>
        <meta name="description" content="NAPCEN answers common questions about wet scrubber pricing, warranty, CPCB compliance, and maintenance." />
      </Head>

      {/* Replaced generic background with the specific gradient used in Products/Partners */}
      <section className="py-24 bg-gradient-to-l from-[#334746ff] to-[#151d1dff] relative overflow-hidden font-poppins">
        
        {/* Semantic SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />

        <div className="max-w-4xl mx-auto px-6 relative z-10">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="text-sm font-black uppercase tracking-[0.3em] mb-3 text-cyan-400">
              Support & Knowledge
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight">
              Got <span className="text-cyan-400 drop-shadow-[0_0_15px_rgba(0,229,255,0.4)]">Questions?</span>
            </h2>
            <div className="w-20 h-1.5 bg-cyan-500 mx-auto mt-6 rounded-full" />
          </div>

          {/* FAQ List */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`group rounded-3xl transition-all duration-500 border ${
                  expanded === index 
                    ? 'bg-white/10 border-cyan-500/50 shadow-[0_0_30px_rgba(0,229,255,0.1)]' 
                    : 'bg-white/5 border-white/10 hover:border-white/20'
                }`}
              >
                <button
                  onClick={() => setExpanded(expanded === index ? false : index)}
                  className="w-full flex justify-between items-center p-6 md:p-8 text-left"
                >
                  <span className={`text-lg md:text-xl font-bold transition-colors ${
                    expanded === index ? 'text-cyan-400' : 'text-gray-200 group-hover:text-white'
                  }`}>
                    {faq.question}
                  </span>
                  <div className={`p-2 rounded-full transition-all duration-500 ${
                    expanded === index ? 'bg-cyan-500 text-black rotate-180' : 'bg-white/5 text-cyan-400'
                  }`}>
                    <ChevronDown className="w-6 h-6" />
                  </div>
                </button>

                <div
                  className={`transition-all duration-500 ease-in-out overflow-hidden ${
                    expanded === index ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="p-6 md:p-8 pt-0 border-t border-white/5">
                    <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Visual Divider / Branding */}
          <div className="mt-20 text-center">
            <div className="inline-block p-[1px] rounded-full bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent w-full" />
          </div>
        </div>
      </section>
    </>
  );
}