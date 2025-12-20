// src/app/products/[category]/page.tsx

import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { productData } from '@/lib/products-data';
import DynamicProductList from '@/components/DynamicProductList';

type Props = {
  params: Promise<{ category: string }>;
};

// Dynamic Metadata for SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const categoryData = productData[category];

  if (!categoryData) {
    return {
      title: 'Category Not Found | Napcen',
      description: 'The requested product category does not exist.',
    };
  }

  const pageTitle = `${categoryData.title} | Napcen India`;
  const pageDescription = categoryData.seoDescription || 
    `${categoryData.title} – CPCB compliant industrial air pollution control systems manufactured in India. High-efficiency solutions for acid fumes, dust, and chemical gases.`;

  return {
    title: pageTitle,
    description: pageDescription,
    openGraph: {
      title: pageTitle,
      description: pageDescription,
      url: `https://www.napcen.com/products/${category}`,
      siteName: 'Napcen',
      type: 'website',
      locale: 'en_IN',
    },
    alternates: {
      canonical: `/products/${category}`,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

// Main Category Page
export default async function CategoryPage({ params }: Props) {
  const { category } = await params;
  const categoryData = productData[category];

  if (!categoryData) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#0d1515] text-white">
      {/* Dynamic Product Marquee List */}
      <DynamicProductList
        title={categoryData.title}
        products={categoryData.items}
        categorySlug={category}
      />

      {/* SEO-Rich Content Block – Optimized for Indian Market */}
      <section className="py-16 md:py-24 px-6 max-w-5xl mx-auto">
        <div className="space-y-8 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-black text-[#00BFFF] mb-8">
            Leading {categoryData.title.replace('Systems', '').trim()} Manufacturer in India
          </h2>

          <div className="prose prose-invert prose-lg max-w-none opacity-90 leading-relaxed space-y-6">
            <p>
              Napcen is a trusted name among <strong>industrial air pollution control equipment manufacturers in India</strong>. 
              Our {categoryData.title.toLowerCase()} are engineered with premium materials like PP-FRP, PVDF, and SS 316 to deliver 
              <strong> over 99% removal efficiency</strong> for acid fumes, particulates, chemical gases, and odors.
            </p>

            <p>
              Fully compliant with <strong>CPCB</strong> and <strong>State Pollution Control Board (SPCB)</strong> guidelines, 
              our systems are widely installed across industries in <strong>Tamil Nadu, Gujarat, Maharashtra, Karnataka, Andhra Pradesh, Telangana</strong>, and pan-India.
            </p>

            <p>
              Whether you need solutions for chemical processing, pharmaceutical manufacturing, steel pickling, foundries, or waste incineration — 
              Napcen provides customized, energy-efficient, and low-maintenance systems backed by expert installation and after-sales support.
            </p>

            <p className="text-[#00BFFF] font-semibold text-xl mt-10">
              Contact us today for site assessment, design consultation, and competitive quotes across India.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}