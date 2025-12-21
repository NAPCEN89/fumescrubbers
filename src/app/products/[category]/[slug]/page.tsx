import { productData } from '@/lib/products-data';
import { notFound } from 'next/navigation';
import ProductClient from './ProductClient';
import { Metadata } from 'next';

type Props = { params: Promise<{ category: string; slug: string }> };

export async function generateStaticParams() {
  return Object.entries(productData).flatMap(([category, data]) => {
    if (!data.items) return [];
    return data.items.map((item: any) => ({
      category: category,
      slug: item.slug,
    }));
  });
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category, slug } = await params;
  const product = productData[category]?.items.find((p: any) => p.slug === slug);
  if (!product) return { title: 'Product Not Found' };

  const title = `${product.label} Manufacturer - CPCB Compliant | NAPCEN`;
  const desc = `${product.description} NAPCEN is a leading industrial ${product.label} manufacturer in India. 99.9% Efficiency.`;

  return {
    title,
    description: desc,
    alternates: { canonical: `https://napcen.com/products/${category}/${slug}` },
    openGraph: {
      title,
      description: desc,
      images: [{ url: product.image?.src || '/og-default.jpg' }],
    },
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { category, slug } = await params;
  const categoryData = productData[category];
  const items = categoryData?.items || [];
  const productIndex = items.findIndex((p: any) => p.slug === slug);
  const product = items[productIndex];

  if (!product || !categoryData) return notFound();

  // PRE-CACHE STRATEGY: Get the next product in the list to "warm up" the next page
  const nextProduct = items[(productIndex + 1) % items.length];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.label,
    image: `https://napcen.com${encodeURI(product.image?.src || '')}`,
    description: product.description,
    brand: { '@type': 'Brand', name: 'NAPCEN' },
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      areaServed: ['Chennai', 'Puducherry', 'India'],
    },
  };

  return (
    <>
      <head>
        {/* 1. CRITICAL PRELOAD: Load this specific product image at MAX priority */}
        <link rel="preload" as="image" href={product.image?.src} fetchPriority="high" />
        
        {/* 2. SPECULATIVE PRELOAD: Pre-fetch the next product's image while user is reading */}
        {nextProduct && (
          <link rel="preload" as="image" href={nextProduct.image?.src} fetchPriority="low" />
        )}
      </head>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* 3. WRAPPER FOR BACKGROUND CACHING */}
      <ProductClient 
        product={product} 
        categoryTitle={categoryData.title || 'Industrial Systems'} 
      />
    </>
  );
}