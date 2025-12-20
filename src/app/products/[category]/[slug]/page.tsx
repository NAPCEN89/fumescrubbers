import { productData } from '@/lib/products-data';
import { notFound } from 'next/navigation';
import ProductClient from './ProductClient';

/**
 * MANDATORY FOR STATIC EXPORT
 * This function works here because this is now a Server Component.
 */
export async function generateStaticParams() {
  const paths: { category: string; slug: string }[] = [];

  Object.keys(productData).forEach((category) => {
    productData[category].items.forEach((item: any) => {
      paths.push({
        category: category,
        slug: item.slug,
      });
    });
  });

  return paths;
}

export default async function ProductDetailPage({ params }: { params: Promise<{ category: string; slug: string }> }) {
  // Await the params (Next.js 15 requirement)
  const { category, slug } = await params;
  
  // Find the product in our data
  const product = productData[category]?.items.find((p: any) => p.slug === slug);

  if (!product) return notFound();

  // Return the Client Component and pass the data as props
  return <ProductClient product={product} category={category} />;
}