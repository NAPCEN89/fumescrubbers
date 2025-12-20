'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Calendar, Clock, ChevronRight } from 'lucide-react';
import { blogPosts } from '@/lib/blog-data';

const CYAN = '#00E5FF';

export default function BlogListPage() {
  return (
    <section 
      className="bg-gradient-to-l from-[#334746ff] to-[#151d1dff] min-h-screen py-16 md:py-28 font-poppins text-white selection:bg-cyan-500/30"
      itemScope
      itemType="https://schema.org/Blog"
    >
      {/* Hidden Keywords */}
      <div className="sr-only" aria-hidden="true">
        air pollution control blog India, wet scrubber guide Chennai, CPCB norms 2025 Tamil Nadu, industrial dust collector maintenance India, welding fume extractor safety, venturi vs packed bed scrubber comparison, PP-FRP scrubber advantages, pulse jet baghouse maintenance
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            <span className="text-xs font-black uppercase tracking-[0.2em] text-cyan-400">Technical Insights 2025</span>
          </div>
          
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-black mb-6 tracking-tight leading-[0.9] uppercase">
            NAPCEN <span className="text-cyan-400 drop-shadow-[0_0_20px_rgba(0,229,255,0.3)]">INSIGHTS</span>
            <br className="md:hidden" />
            <span className="block text-2xl md:text-3xl lg:text-4xl font-bold normal-case mt-4 text-white/90">
              Air Pollution Control Guides for Indian Industries
            </span>
          </h1>
          
          <p className="max-w-3xl text-gray-300 text-base md:text-lg leading-relaxed">
            Expert guides on wet scrubbers, dust collectors, fume extraction, CPCB/TNPCB compliance, and industrial emission control. Manufactured in Puducherry, serving Chennai, Tamil Nadu & India-wide.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 justify-center">
          {blogPosts.map((post, index) => (
            <article 
              key={post.id} 
              className="group relative flex flex-col bg-[#1a2424] rounded-[2rem] border border-white/5 overflow-hidden transition-all duration-500 hover:border-cyan-500/40 hover:shadow-[0_0_60px_-15px_rgba(0,229,255,0.2)]"
              itemProp="blogPost"
              itemScope
              itemType="https://schema.org/BlogPosting"
            >
              <meta itemProp="position" content={String(index + 1)} />
              
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <Image
                  src={post.image}
                  alt={`${post.title} - NAPCEN Technical Guide for Industrial Air Pollution Control in India`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 scale-105 group-hover:scale-110"
                  priority={index < 3}
                  itemProp="image"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a2424] via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-4 left-6">
                  <span className="bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] font-black px-3 py-1.5 rounded-lg uppercase tracking-widest">
                    {post.category}
                  </span>
                </div>
              </div>

              <div className="p-7 md:p-9 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-[10px] text-cyan-400/60 mb-5 font-black uppercase tracking-widest">
                  <span className="flex items-center gap-1.5"><Calendar className="w-3 h-3" /> {post.date}</span>
                  <span className="flex items-center gap-1.5"><Clock className="w-3 h-3" /> {post.readTime}</span>
                </div>

                <h2 className="text-xl md:text-2xl font-black text-white mb-4 leading-tight group-hover:text-cyan-400 transition-colors" itemProp="headline">
                  <Link href={`/blogs/${post.slug}`}>
                    {post.title}
                  </Link>
                </h2>

                <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-8 line-clamp-3" itemProp="description">
                  {post.excerpt}
                </p>

                <Link 
                  href={`/blogs/${post.slug}`}
                  className="mt-auto flex items-center justify-between group/btn w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-white font-bold text-sm uppercase tracking-wider transition-all hover:bg-cyan-500 hover:text-black hover:border-cyan-500"
                  itemProp="url"
                >
                  Read Full Guide
                  <span className="p-1 rounded-full bg-cyan-500/20 group-hover/btn:bg-black/20 transition-colors">
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </span>
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 flex flex-col items-center border-t border-white/5 pt-12">
          <p className="text-gray-500 text-sm font-bold uppercase tracking-widest mb-4">Stay Updated on Emission Standards & Technology</p>
          <button className="flex items-center gap-2 text-cyan-400 font-black hover:text-white transition-colors group text-lg">
            Subscribe to NAPCEN Insights <ChevronRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}