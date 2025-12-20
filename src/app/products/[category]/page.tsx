import { productData } from '@/lib/products-data';
import { notFound } from 'next/navigation';
import DynamicProductList from '@/components/DynamicProductList';
import { Metadata } from 'next';

type Props = { params: Promise<{ category: string }> };

/**
 * Pre-renders all category paths at build time for maximum speed.
 */
export async function generateStaticParams() {
  return Object.keys(productData).map((category) => ({ category }));
}

/**
 * Dynamic SEO for Category Pages
 */
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const categoryData = productData[category];
  
  if (!categoryData) return { title: 'Category Not Found | NAPCEN' };

  const title = `${categoryData.title} Manufacturer in Chennai & Puducherry | NAPCEN`;
  const description = `Leading manufacturer of high-efficiency ${categoryData.title.toLowerCase()} systems. CPCB compliant solutions for industrial air pollution control in Tamil Nadu and India.`;

  return {
    title,
    description,
    alternates: {
      canonical: `https://napcen.com/products/${category}`,
    },
    openGraph: {
      title,
      description,
      type: 'website',
      url: `https://napcen.com/products/${category}`,
      images: [
        {
          url: '/og-category-default.jpg', // Ensure this exists in /public
          width: 1200,
          height: 630,
          alt: `${categoryData.title} Industrial Solutions`,
        },
      ],
    },
  };
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;
  const categoryData = productData[category];

  if (!categoryData) notFound();

  // JSON-LD for Search Engines to understand this is a Collection of Products
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: categoryData.title,
    description: `Industrial catalog of ${categoryData.title} manufactured by NAPCEN.`,
    url: `https://napcen.com/products/${category}`,
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
      {/* Schema.org Integration */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="min-h-screen bg-[#0A1F22] selection:bg-cyan-500/30">
        {/* Hidden SEO Keywords */}
        <div className="sr-only" aria-hidden="true">
          <h1>{categoryData.title} manufacturer in Chennai, Puducherry, India.</h1>
          <p>Industrial {categoryData.title} with 99.9% efficiency for environmental compliance.</p>
        </div>

        {/* Dynamic List with Entrance Animation Container */}
        <div className="relative pt-10">
          {/* Subtle Global Background Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-cyan-500/5 blur-[120px] pointer-events-none" />
          
          <DynamicProductList
            title={categoryData.title}
            products={categoryData.items}
            categorySlug={category}
          />
        </div>
      </main>
    </>
  );
}