// src/app/case-studies/page.tsx
'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Calendar } from 'lucide-react';
import { caseStudies } from '@/lib/case-studies-data';

const CYAN = '#00E5FF';

export default function CaseStudiesListPage() {
  return (
    <section className="bg-gradient-to-l from-[#334746ff] to-[#151d1dff] min-h-screen py-16 md:py-28 font-poppins text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Header */}
        <div className="text-center mb-16 md:mb-24">
          <span className="text-cyan-400 font-black uppercase tracking-[0.3em] text-sm">Real Results</span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mt-4 leading-tight">
            Case Studies
            <br />
            <span className="text-cyan-400">From Indian Industries</span>
          </h1>
          <p className="mt-8 max-w-3xl mx-auto text-lg md:text-xl text-gray-300">
            Proven air pollution control solutions delivering compliance, efficiency, and safety for clients across Chennai, Tamil Nadu, and India.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {caseStudies.map((study) => (
            <Link href={`/case-studies/${study.slug}`} key={study.id} className="group block">
              <article className="bg-[#1a2424]/80 rounded-3xl overflow-hidden border border-white/10 transition-all duration-500 hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-500/20">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={study.thumbnail}
                    alt={`${study.title} - NAPCEN Case Study`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a2424] to-transparent opacity-60" />
                </div>

                <div className="p-8">
                  <div className="flex items-center gap-3 text-cyan-400 text-sm mb-4">
                    <Calendar className="w-4 h-4" />
                    <span>{study.date}</span>
                  </div>

                  <h3 className="text-2xl font-black mb-4 group-hover:text-cyan-400 transition-colors">
                    {study.title}
                  </h3>

                  <p className="text-gray-300 mb-6 line-clamp-3">
                    {study.challenge}
                  </p>

                  <div className="flex items-center justify-between text-cyan-400 font-bold">
                    <span>View Full Case Study</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}