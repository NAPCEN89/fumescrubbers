import { productData } from '@/lib/products-data';
import { notFound } from 'next/navigation';
import DynamicProductList from '@/components/DynamicProductList';
import { Metadata } from 'next';

type Props = {
  params: Promise<{ category: string }>;
};

// =====================================================
// 1. STATIC PARAMS – Unchanged (Perfect for SSG)
// =====================================================
export async function generateStaticParams() {
  return Object.keys(productData).map((category) => ({
    category,
  }));
}

// =====================================================
// 2. DYNAMIC METADATA – Hyper-Targeted for Local + National Rankings
// =====================================================
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const categoryData = productData[category];

  if (!categoryData) {
    return {
      title: 'Category Not Found | NAPCEN',
      description: 'The requested product category does not exist.',
    };
  }

  // Map category slugs to primary keyword targets
  const keywordMap: Record<string, { primary: string; secondary: string }> = {
    'wet-scrubbers': {
      primary: 'Wet Scrubber Manufacturer Chennai | Puducherry & Tamil Nadu',
      secondary: 'Leading manufacturer of packed bed, venturi, ammonia, HCl, and specialized wet scrubbers in India.',
    },
    'dry-scrubbers': {
      primary: 'Dry Scrubber Manufacturer India | NAPCEN',
      secondary: 'Water-free and semi-dry scrubbing systems for acid gases, H2S, VOCs, and odor control.',
    },
    'dust-collectors': {
      primary: 'Industrial Dust Collector Manufacturer Chennai | Tamil Nadu',
      secondary: 'Pulse jet baghouse, cartridge, cyclone, and portable dust collection systems for heavy industrial applications.',
    },
    'fume-extractors': {
      primary: 'Fume Extractor Manufacturer Chennai | Welding & Laser Fume Control',
      secondary: 'Mobile and centralized fume extraction systems for welding, soldering, laser cutting, and laboratory fumes.',
    },
    'downdraft-tables': {
      primary: 'Downdraft Table Manufacturer India | Grinding & Welding',
      secondary: 'Dry and wet downdraft workstations for safe dust and fume capture during grinding, welding, and polishing.',
    },
  };

  const keywords = keywordMap[category] || {
    primary: `${categoryData.title} Manufacturer in Puducherry | NAPCEN India`,
    secondary: categoryData.seoDescription || `${categoryData.title} – High-efficiency, CPCB-compliant industrial solutions.`,
  };

  return {
    title: `${categoryData.title} | ${keywords.primary} | NAPCEN`,
    description: `${keywords.secondary} Manufactured in Puducherry, serving industries across Chennai, Tamil Nadu, and India with guaranteed performance and compliance.`,
    keywords: [
      `${categoryData.title.toLowerCase()} manufacturer Chennai`,
      `${categoryData.title.toLowerCase()} manufacturer Tamil Nadu`,
      `${categoryData.title.toLowerCase()} manufacturer Puducherry`,
      `${categoryData.title.toLowerCase()} manufacturer India`,
      `industrial ${categoryData.title.toLowerCase()} price`,
      `CPCB compliant ${categoryData.title.toLowerCase()}`,
      `best ${categoryData.title.toLowerCase()} India`,
    ],
    openGraph: {
      title: `${categoryData.title} | ${keywords.primary} | NAPCEN`,
      description: keywords.secondary,
      url: `https://fumescrubbers.com/products/${category}`,
      siteName: 'NAPCEN Industrial Air Solutions',
      images: [
        {
          url: '/og-category-default.jpg', // Create one hero image per category or use a general one
          width: 1200,
          height: 630,
          alt: `${categoryData.title} - NAPCEN Manufacturing in Puducherry`,
        },
      ],
      locale: 'en_IN',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${categoryData.title} | ${keywords.primary}`,
      description: keywords.secondary,
      images: ['/og-category-default.jpg'],
    },
    alternates: {
      canonical: `https://fumescrubbers.com/products/${category}`,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

// =====================================================
// 3. CATEGORY PAGE WITH SCHEMA
// =====================================================
export default async function CategoryPage({ params }: Props) {
  const { category } = await params;
  const categoryData = productData[category];

  if (!categoryData) {
    notFound();
  }

  return (
    <>
      {/* ItemList Schema – Helps Google show rich "product carousel" results */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: categoryData.title,
            description: categoryData.seoDescription || `${categoryData.title} by NAPCEN – Industrial air pollution control equipment.`,
            numberOfItems: categoryData.items.length,
            itemListElement: categoryData.items.map((item: any, index: number) => ({
              "@type": "ListItem",
              position: index + 1,
              url: `https://fumescrubbers.com/products/${category}/${item.slug}`,
              name: item.label,
              image: item.image?.src || '',
              description: item.description,
            })),
          }),
        }}
      />

      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://fumescrubbers.com" },
              { "@type": "ListItem", position: 2, name: categoryData.title },
            ],
          }),
        }}
      />

      {/* Ethical Hidden Keywords for Crawlers */}
      <div className="sr-only" aria-hidden="true">
        {categoryData.title} manufacturer Chennai, {categoryData.title} manufacturer Tamil Nadu, 
        {categoryData.title} manufacturer Puducherry, {categoryData.title} manufacturer India, 
        best {categoryData.title.toLowerCase()} in India, CPCB compliant {categoryData.title.toLowerCase()}
      </div>

      <main className="min-h-screen bg-[#0A1F22]">
        <DynamicProductList
          title={categoryData.title}
          products={categoryData.items}
          categorySlug={category}
          // Pass categoryData for potential use in DynamicProductList if needed
          seoDescription={categoryData.seoDescription}
        />
      </main>
    </>
  );
}