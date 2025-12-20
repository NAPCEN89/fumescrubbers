import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { productData } from '@/lib/products-data';
import DynamicProductList from '@/components/DynamicProductList';

type Props = {
  params: Promise<{ category: string }>;
};

/**
 * MANDATORY FOR STATIC EXPORT (output: 'export')
 * This function tells the Next.js builder exactly which dynamic 
 * folders to create during 'npm run build'.
 */
export async function generateStaticParams() {
  return Object.keys(productData).map((category) => ({
    category: category,
  }));
}

// Generate SEO-friendly metadata for each category
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const categoryData = productData[category];

  if (!categoryData) {
    return {
      title: 'Category Not Found | Napcen',
      description: 'The requested product category does not exist.',
    };
  }

  return {
    title: `${categoryData.title} | Napcen`,
    description: categoryData.seoDescription || `${categoryData.title} – High-quality industrial air pollution control systems by Napcen.`,
    openGraph: {
      title: `${categoryData.title} | Napcen`,
      description: categoryData.seoDescription || `${categoryData.title} – Reliable and CPCB-compliant solutions.`,
      url: `https://www.napcen.com/products/${category}`,
      type: 'website',
    },
    alternates: {
      canonical: `/products/${category}`,
    },
  };
}

// Main category page component
export default async function CategoryPage({ params }: Props) {
  const { category } = await params;
  const categoryData = productData[category];

  // If category doesn't exist → 404
  if (!categoryData) {
    notFound();
  }

  return (
    <main className="min-h-screen">
      <DynamicProductList
        title={categoryData.title}
        products={categoryData.items}
        categorySlug={category}
      />
    </main>
  );
}