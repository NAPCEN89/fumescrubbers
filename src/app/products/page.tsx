import { productData } from '@/lib/products-data';
import Link from 'next/link';
import Image from 'next/image';
import { LayoutGrid, ArrowUpRight } from 'lucide-react';

export default function ProductsHubPage() {
  return (
    <main className="min-h-screen bg-[#0A1F22] pt-32 pb-20 selection:bg-cyan-500/30">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <header className="mb-20">
          <h1 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter">
            Industrial <span className="text-cyan-500">Catalog</span>
          </h1>
          <p className="text-gray-400 mt-6 max-w-2xl text-lg border-l-2 border-cyan-500 pl-6">
            NAPCEN high-performance systems for CPCB compliance. 
            Select a category to view technical specifications.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* MASTER CATALOG CARD (The "All" link) */}
          <Link href="/products/all" className="group relative h-[450px] rounded-[3rem] overflow-hidden border border-cyan-500/30 bg-cyan-950/20 p-10 flex flex-col justify-between">
            <LayoutGrid className="w-12 h-12 text-cyan-500 group-hover:rotate-90 transition-transform duration-500" />
            <div>
              <h2 className="text-4xl font-black text-white uppercase leading-none">View All<br/>Systems</h2>
              <p className="text-cyan-400 mt-4 font-bold tracking-widest text-xs uppercase flex items-center gap-2">
                Explore 30+ Products <ArrowUpRight className="w-4 h-4" />
              </p>
            </div>
          </Link>

          {/* DYNAMIC CATEGORY CARDS */}
          {Object.entries(productData).map(([slug, category]) => (
            <Link 
              key={slug} 
              href={`/products/${slug}`} 
              className="group relative h-[450px] rounded-[3rem] overflow-hidden border border-white/5 bg-white/[0.02] hover:border-cyan-500/40 transition-all duration-500"
            >
              <Image 
                src={category.items[0].image.src} 
                alt={category.title}
                fill
                className="object-cover opacity-20 grayscale group-hover:grayscale-0 group-hover:opacity-40 group-hover:scale-110 transition-all duration-700"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1F22] via-[#0A1F22]/40 to-transparent" />
              
              <div className="relative h-full flex flex-col justify-end p-10">
                <h2 className="text-2xl font-black text-white uppercase tracking-tight group-hover:text-cyan-400 transition-colors">
                  {category.title}
                </h2>
                <p className="text-gray-400 text-sm mt-2">{category.items.length} Engineering Solutions</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}