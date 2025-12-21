import { extendedProductData } from '@/lib/products-data';
import { notFound } from 'next/navigation';
import DynamicProductList from '@/components/DynamicProductList';
import { Metadata } from 'next';
import { ShieldCheck, Zap, Factory } from 'lucide-react';
import ReactDOM from 'react-dom'; // Required for hoisting preloads

type Props = { params: Promise<{ category: string }> };

export async function generateStaticParams() {
  return Object.keys(extendedProductData).map((category) => ({ category }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const categoryData = extendedProductData[category];
  if (!categoryData) return { title: 'Category Not Found | NAPCEN' };

  return {
    title: `${categoryData.title} Manufacturer | NAPCEN India`,
    description: categoryData.seoDescription,
    alternates: { canonical: `https://napcen.com/products/${category}` },
  };
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;
  const categoryData = extendedProductData[category];

  if (!categoryData) notFound();

  // 1. PRE-CACHE STRATEGY: Hoist preloads to the actual document <head>
  // This replaces the previous <head> tag block to fix the hydration error
  const topPriorityImages = categoryData.items.slice(0, 2).map((item: any) => item.image.src);
  
  topPriorityImages.forEach((src: string) => {
    ReactDOM.preload(src, { as: 'image', fetchPriority: 'high' });
  });

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: categoryData.title,
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: categoryData.items.map((item: any, index: number) => ({
        '@type': 'ListItem',
        position: index + 1,
        url: `https://napcen.com/products/${category}/${item.slug}`,
        name: item.label,
      })),
    },
  };

return (
    <>
      {/* JSON-LD for SEO */}
      <script 
        type="application/ld+json" 
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} 
      />

      <main className="min-h-screen bg-[#0A1F22] selection:bg-cyan-500/30">
        <div className="relative pt-10">
          {/* Visual Glow Effect */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-cyan-500/5 blur-[120px] pointer-events-none" />
          
          <DynamicProductList
            title={categoryData.title}
            products={categoryData.items}
            categorySlug={category === 'all' ? 'category-redirect' : category}
          />
        </div>

        {/* Technical Compliance Section */}
        <section className="py-24 px-6 border-t border-white/5 bg-black/20">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter mb-8">
                  Engineered for <span className="text-cyan-500">Compliance</span>
                </h2>
                <p className="text-gray-400 text-lg leading-relaxed mb-8">
                  Our systems are designed to meet <strong>CPCB and SPCB emission norms</strong>. NAPCEN delivers 99.9% efficiency in air pollution control.
                </p>
                
                <div className="space-y-4">
                  {[
                    { icon: ShieldCheck, text: "High-grade PP-FRP & SS316L construction" },
                    { icon: Zap, text: "Low pressure drop for energy efficiency" },
                    { icon: Factory, text: "Customized CFM capacities (500 to 1,00,000+)" }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-cyan-400">
                      <item.icon className="w-5 h-5 text-cyan-500" />
                      <span className="text-gray-200 font-semibold">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Insight Box */}
              <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 bg-white/5 flex items-center justify-center">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-cyan-500/10 via-transparent to-transparent opacity-50" />
                <div className="relative text-center p-8 z-10">
                  <div className="w-12 h-12 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4 border border-cyan-500/30">
                    <Zap className="w-6 h-6 text-cyan-500" />
                  </div>
                  <p className="text-cyan-500 font-bold uppercase tracking-widest text-[10px] mb-2">Engineering Standard</p>
                  <p className="text-white text-sm max-w-xs mx-auto leading-relaxed">
                    Every NAPCEN system undergoes rigorous pH balancing and airflow static pressure testing prior to installation to guarantee performance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
