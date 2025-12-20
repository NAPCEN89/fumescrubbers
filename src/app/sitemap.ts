import { MetadataRoute } from 'next';
import { productData } from '@/lib/products-data';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.napcen.com'; // Replace with your actual domain

  // 1. Generate URLs for Category Pages (e.g., /products/wet-scrubbers)
  const categoryUrls = Object.keys(productData).map((category) => ({
    url: `${baseUrl}/products/${category}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // 2. Generate URLs for every individual Product (The 20 scrubbers)
  const productUrls = Object.keys(productData).flatMap((category) =>
    productData[category].items.map((item: any) => ({
      url: `${baseUrl}/products/${category}/${item.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }))
  );

  // 3. Return the full list including the Homepage
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 1.0,
    },
    ...categoryUrls,
    ...productUrls,
  ];
}