'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { blogPosts } from '@/lib/blog-data';
import { ArrowRight, Calendar, Clock, ChevronRight } from 'lucide-react';

const CYAN = '#00E5FF';

export default function BlogListPage() {
  return (
    <section className="bg-gradient-to-l from-[#334746ff] to-[#151d1dff] min-h-screen py-16 md:py-28 font-poppins text-white selection:bg-cyan-500/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* --- DYNAMIC HEADER --- */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            <span className="text-xs font-black uppercase tracking-[0.2em] text-cyan-400">Technical Hub 2025</span>
          </div>
          
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-black mb-6 tracking-tight leading-[0.9] uppercase">
            NAPCEN <span className="text-cyan-400 drop-shadow-[0_0_20px_rgba(0,229,255,0.3)]">INSIGHTS</span>
          </h1>
          
          <p className="max-w-xl text-gray-400 text-base md:text-lg leading-relaxed">
            Leading the industry with research-backed guides on emission control and CPCB industrial standards.
          </p>
        </div>

        {/* --- USER-FRIENDLY RESPONSIVE GRID --- */}
        <div className="flex flex-wrap justify-center gap-8 lg:gap-12">
          {blogPosts.map((post) => (
            <article 
              key={post.id} 
              className="group relative flex flex-col bg-[#1a2424] rounded-[2rem] border border-white/5 overflow-hidden transition-all duration-500 hover:border-cyan-500/40 hover:shadow-[0_0_60px_-15px_rgba(0,229,255,0.2)] w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.33%-2rem)] max-w-[420px]"
            >
              {/* Responsive Image Hook */}
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover transition-transform duration-700 scale-105 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a2424] via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-4 left-6">
                  <span className="bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] font-black px-3 py-1.5 rounded-lg uppercase tracking-widest">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* User Friendly Content */}
              <div className="p-7 md:p-9 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-[10px] text-cyan-400/60 mb-5 font-black uppercase tracking-widest">
                  <span className="flex items-center gap-1.5"><Calendar className="w-3 h-3" /> Jan 16, 2025</span>
                  <span className="flex items-center gap-1.5"><Clock className="w-3 h-3" /> 5 Min Read</span>
                </div>

                <h3 className="text-xl md:text-2xl font-black text-white mb-4 leading-tight group-hover:text-cyan-400 transition-colors">
                  {post.title}
                </h3>

                <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-8 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Highly Accessible Action Button */}
                <Link 
                  href={`/blogs/${post.slug}`}
                  className="mt-auto flex items-center justify-between group/btn w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-white font-bold text-sm uppercase tracking-wider transition-all hover:bg-cyan-500 hover:text-black hover:border-cyan-500"
                >
                  Explore Details
                  <span className="p-1 rounded-full bg-cyan-500/20 group-hover/btn:bg-black/20 transition-colors">
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </span>
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* --- BOTTOM FEEDBACK --- */}
        <div className="mt-20 flex flex-col items-center border-t border-white/5 pt-12">
          <p className="text-gray-500 text-sm font-bold uppercase tracking-widest mb-4">Want more technical data?</p>
          <button className="flex items-center gap-2 text-cyan-400 font-black hover:text-white transition-colors group">
            SUBSCRIBE TO NEWSLETTER <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}