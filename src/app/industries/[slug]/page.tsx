import { industriesData } from "../../data/navigation"; 
import { notFound } from "next/navigation";
import Image from "next/image";
import { Metadata } from 'next';

// SEO: Dynamic Metadata generation
export async function generateMetadata({ params }: { params: any }): Promise<Metadata> {
  const { slug } = await params;
  const industry = industriesData.find(i => i.slug === slug);
  return {
    title: `${industry?.title} | Professional Wet Scrubber Solutions`,
    description: `Industrial ${industry?.name} solutions including high-efficiency wet scrubbers, fume extractors, and gas neutralization systems.`
  };
}

export const dynamicParams = false;

export async function generateStaticParams() {
  return industriesData.map((industry) => ({ slug: industry.slug }));
}

export default async function IndustryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const industry = industriesData.find((item) => item.slug === slug);

  if (!industry) return notFound();

  return (
    <main className="min-h-screen bg-white text-text-main pt-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-primary-blue font-bold uppercase tracking-widest text-sm">Industrial Air Quality</span>
            <h1 className="text-5xl font-black uppercase text-text-main mt-2 mb-6 tracking-tighter">
              {industry.title}
            </h1>
            <p className="text-xl text-text-muted leading-relaxed mb-8">
              {industry.description}
            </p>
            
            {/* SEO Keyword-Rich Technical Section */}
            <div className="bg-bg-light border border-primary-blue/10 p-6 rounded-xl mb-8">
              <h2 className="text-primary-blue font-bold mb-4 uppercase text-sm tracking-wider">Pollutant Control Focus</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <span className="text-xs text-text-muted/80 uppercase">Primary Technology</span>
                  <span className="text-sm text-text-main font-semibold">Wet Fume Scrubber</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs text-text-muted/80 uppercase">Efficiency Rate</span>
                  <span className="text-sm text-text-main font-semibold">99.9% Absorption</span>
                </div>
              </div>
            </div>
          </div>

          <div className="relative h-[500px] rounded-2xl overflow-hidden border border-primary-blue/10 shadow-xl">
            <Image 
              src={industry.image} 
              alt={`${industry.name} Wet Scrubber Installation`}
              fill
              className="object-cover"
              priority
              unoptimized
            />
          </div>
        </div>

        {/* Content Section for SEO Depth */}
        <section className="mt-20 py-12 border-t border-primary-blue/10">
          <div className="max-w-3xl">
            <h2 className="text-3xl text-text-main font-bold mb-6">Advanced Fume & Gas Neutralization</h2>
            <p className="text-text-muted mb-6">
               In {industry.name}, air quality management is critical. Our industrial <strong>wet scrubbers</strong> and <strong>fume scrubbers</strong> 
               are engineered to handle the unique chemical footprint of your facility. By utilizing chemical absorption and 
               gas-to-liquid contact, we neutralize acidic vapors and toxic emissions before they reach the atmosphere.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}