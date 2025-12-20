import { productData } from '@/lib/products-data';
import { notFound } from 'next/navigation';
import ProductClient from './ProductClient';
import { Metadata, ResolvingMetadata } from 'next';

// =====================================================
// 1. STATIC PARAMS – Perfect for full static export
// =====================================================
export async function generateStaticParams() {
  const paths: { category: string; slug: string }[] = [];

  Object.keys(productData).forEach((category) => {
    productData[category].items.forEach((item: any) => {
      paths.push({
        category,
        slug: item.slug,
      });
    });
  });

  return paths;
}

// =====================================================
// 2. DYNAMIC METADATA – SEO Gold (Fixed OpenGraph type)
// =====================================================
type Props = {
  params: Promise<{ category: string; slug: string }>;
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { category, slug } = await params;

  const product = productData[category]?.items.find((p: any) => p.slug === slug);
  if (!product) return { title: 'Product Not Found' };

  const categoryTitle = productData[category]?.title || '';
  const fullProductName = `${product.label} ${categoryTitle.includes('Scrubber') || categoryTitle.includes('Collector') ? '' : 'System'}`;

  const primaryTitle = `${product.label} Manufacturer in Puducherry | NAPCEN Chennai & Tamil Nadu`;
  const locationDescription = `NAPCEN manufactures high-efficiency ${product.label.toLowerCase()} in Puducherry, serving industrial clients across Chennai, Tamil Nadu, and India. CPCB compliant solutions with >99% efficiency.`;

  return {
    title: primaryTitle,
    description: `${product.description} ${locationDescription}`,
    keywords: [
      `${product.label.toLowerCase()} manufacturer Chennai`,
      `${product.label.toLowerCase()} manufacturer Tamil Nadu`,
      `${product.label.toLowerCase()} manufacturer Puducherry`,
      `${product.label.toLowerCase()} manufacturer India`,
      `${product.label.toLowerCase()} price India`,
      `industrial ${product.label.toLowerCase()} Puducherry`,
      `CPCB compliant ${product.label.toLowerCase()}`,
      ...product.features?.slice(0, 5).map((f: string) => f.toLowerCase()),
    ],
    openGraph: {
      title: `${product.label} | NAPCEN Industrial Air Pollution Control`,
      description: product.description,
      url: `https://fumescrubbers.com/products/${category}/${slug}`,
      images: [
        {
          url: product.image?.src || '/og-product-default.jpg',
          width: 1200,
          height: 630,
          alt: `${product.label} - NAPCEN Manufacturing in Puducherry`,
        },
      ],
      type: 'website',  // ← CHANGED FROM 'product' TO 'website' (valid & safe)
      locale: 'en_IN',
      siteName: 'NAPCEN',
    },
    twitter: {
      card: 'summary_large_image',
      title: primaryTitle,
      description: locationDescription,
      images: [product.image?.src || '/og-product-default.jpg'],
    },
    alternates: {
      canonical: `https://fumescrubbers.com/products/${category}/${slug}`,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

// =====================================================
// 3. PAGE COMPONENT – Unchanged & excellent
// =====================================================
export default async function ProductDetailPage({ params }: Props) {
  const { category, slug } = await params;

  const product = productData[category]?.items.find((p: any) => p.slug === slug);
  const categoryData = productData[category];

  if (!product || !categoryData) return notFound();

  return (
    <>
      {/* Product + FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: `${product.label} - NAPCEN`,
            description: product.description,
            image: product.image?.src || '',
            brand: { "@type": "Organization", name: "NAPCEN" },
            manufacturer: {
              "@type": "Organization",
              name: "NAPCEN",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Villianur, Puducherry",
                addressRegion: "PY",
                postalCode: "605110",
                addressCountry: "IN",
              },
            },
            offers: {
              "@type": "Offer",
              url: `https://fumescrubbers.com/products/${category}/${slug}`,
              availability: "https://schema.org/InStock",
              priceCurrency: "INR",
              priceValidUntil: "2026-12-31",
              itemCondition: "https://schema.org/NewCondition",
            },
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
              { "@type": "ListItem", position: 2, name: categoryData.title, item: `https://fumescrubbers.com/products/${category}` },
              { "@type": "ListItem", position: 3, name: product.label },
            ],
          }),
        }}
      />

      <ProductClient product={product} category={category} categoryTitle={categoryData.title} />
    </>
  );
}