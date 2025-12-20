// src/app/products/[category]/[slug]/layout.tsx
import { Metadata } from 'next';
import { productData } from '@/lib/products-data';

type Props = {
  params: Promise<{ category: string; slug: string }>;
  children: React.ReactNode;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category, slug } = await params;
  const categoryData = productData[category];
  const product = categoryData?.items.find((p: any) => p.slug === slug);

  if (!product) {
    return { title: 'Product Not Found | Napcen' };
  }

  const title = `${product.label} Manufacturer in India | Napcen`;
  const description = product.description || `${product.label} – Industrial air pollution control system by Napcen India.`;

  return {
    title,
    description,
    keywords: [`${product.label} manufacturer`, 'industrial scrubber', 'Napcen India'],
    openGraph: {
      title,
      description,
      type: 'website',
      images: [{ url: '/images/og-image.jpg' }],
    },
  };
}

export default function ProductLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}