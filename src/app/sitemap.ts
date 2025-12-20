// src/app/sitemap.ts
export const dynamic = 'force-static'; // Ensures full static generation at build time

import { MetadataRoute } from 'next';
import { productData } from '@/lib/products-data';

const baseUrl = 'https://fumescrubbers.com'; // Correct primary domain

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // 1. Homepage – Highest priority
  const staticPages = [
    {
      url: baseUrl,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/products`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    // Add other static pages if you have them (e.g., /about, /contact)
    // {
    //   url: `${baseUrl}/about`,
    //   lastModified: now,
    //   changeFrequency: 'yearly',
    //   priority: 0.6,
    // },
  ];

  // 2. Category Pages (e.g., /products/wet-scrubbers)
  const categoryUrls = Object.keys(productData).map((category) => ({
    url: `${baseUrl}/products/${category}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  // 3. Individual Product Pages (deep pages – great for long-tail)
  const productUrls = Object.keys(productData).flatMap((category) =>
    productData[category].items.map((item: any) => ({
      url: `${baseUrl}/products/${category}/${item.slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }))
  );

  // 4. Final Sitemap Array
  return [
    ...staticPages,
    ...categoryUrls,
    ...productUrls,
  ];
}