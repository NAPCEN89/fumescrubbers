import { extendedProductData } from '@/lib/products-data';
import { notFound } from 'next/navigation';
import DynamicProductList from '@/components/DynamicProductList';
import { Metadata } from 'next';
import { ShieldCheck, Zap, Factory } from 'lucide-react';

type Props = { params: Promise<{ category: string }> };

export async function generateStaticParams() {
  // Now includes 'all' plus your 5 specific categories
  return Object.keys(extendedProductData).map((category) => ({ category }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const categoryData = extendedProductData[category];
  
  if (!categoryData) return { title: 'Category Not Found | NAPCEN' };

  const title = `${categoryData.title} Manufacturer | NAPCEN India`;
  return {
    title,
    description: categoryData.seoDescription,
    alternates: { canonical: `https://napcen.com/products/${category}` },
  };
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;
  const categoryData = extendedProductData[category];

  if (!categoryData) notFound();

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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <main className="min-h-screen bg-[#0A1F22] selection:bg-cyan-500/30">
        {/* HERO / PRODUCT LIST */}
        <div className="relative pt-10">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-cyan-500/5 blur-[120px] pointer-events-none" />
          <DynamicProductList
            title={categoryData.title}
            products={categoryData.items}
            categorySlug={category === 'all' ? 'category-redirect' : category}
          />
        </div>

        {/* TECHNICAL AUTHORITY SECTION - Vital for B2B SEO */}
        <section className="py-24 px-6 border-t border-white/5 bg-black/20">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter mb-8">
                  Engineered for <span className="text-cyan-500">Compliance</span>
                </h2>
                <p className="text-gray-400 text-lg leading-relaxed mb-8">
                  Our systems are designed to meet <strong>CPCB and SPCB emission norms</strong>. Whether you require a 
                  <strong> Packed Bed Wet Scrubber</strong> for chemical fumes or a <strong>Pulse Jet Baghouse</strong> for 
                  particulate matter, NAPCEN delivers 99.9% efficiency.
                </p>
                <div className="space-y-4">
                  {[
                    { icon: ShieldCheck, text: "High-grade PP-FRP & SS316L construction" },
                    { icon: Zap, text: "Low pressure drop for energy efficiency" },
                    { icon: Factory, text: "Customized CFM capacities (500 to 1,00,000+)" }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-cyan-400">
                      <item.icon className="w-5 h-5" />
                      <span className="text-gray-200 font-semibold">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Spec Diagram placeholder */}
              <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 bg-white/5 flex items-center justify-center">
                 <div className="text-center p-8">
                    <p className="text-cyan-500 font-bold uppercase tracking-widest text-xs mb-2">Technical Insight</p>
                    <p className="text-white text-sm">Every NAPCEN system undergoes rigorous pH balancing and airflow static pressure testing prior to installation.</p>
                 </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}