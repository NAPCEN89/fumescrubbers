import { productData } from '@/lib/products-data';
import { notFound } from 'next/navigation';
import ProductClient from './ProductClient';
import { Metadata } from 'next';

type Props = { params: Promise<{ category: string; slug: string }> };

export async function generateStaticParams() {
  return Object.entries(productData).flatMap(([category, data]) => 
    data.items.map((item: any) => ({ category, slug: item.slug }))
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category, slug } = await params;
  const product = productData[category]?.items.find((p: any) => p.slug === slug);
  if (!product) return { title: 'Product Not Found' };

  const title = `${product.label} Manufacturer - CPCB Compliant | NAPCEN`;
  const desc = `${product.description} NAPCEN is a leading industrial ${product.label} manufacturer serving Chennai, Puducherry, and across India. 99.9% Efficiency.`;

  return {
    title,
    description: desc,
    alternates: {
      canonical: `https://napcen.com/products/${category}/${slug}`,
    },
    openGraph: {
      title,
      description: desc,
      type: 'website',
      images: [{ url: product.image?.src || '/og-default.jpg', width: 1200, height: 630 }],
    },
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { category, slug } = await params;
  const categoryData = productData[category];
  const product = categoryData?.items.find((p: any) => p.slug === slug);

  if (!product || !categoryData) return notFound();

  // Structured Data for Google (JSON-LD)
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.label,
    image: `https://napcen.com${product.image?.src}`,
    description: product.description,
    brand: {
      '@type': 'Brand',
      name: 'NAPCEN',
    },
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      areaServed: ['Chennai', 'Puducherry', 'India'],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ProductClient 
        product={product} 
        categoryTitle={categoryData.title || 'Industrial Systems'} 
      />
    </>
  );
}