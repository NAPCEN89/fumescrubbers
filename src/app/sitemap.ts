export const dynamic = 'force-static';

import { MetadataRoute } from 'next';
import { productData } from '@/lib/products-data';
// FIXED IMPORT PATH
import { industriesData } from '@/app/data/navigation'; 

interface Industry {
  name: string;
  slug: string;
  path: string;
  description: string;
  subtypes: string[];
}

const baseUrl = 'https://fumescrubbers.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${baseUrl}/products`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/industries`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
  ];

  const categoryUrls: MetadataRoute.Sitemap = Object.keys(productData).map((category) => ({
    url: `${baseUrl}/products/${category}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  const productUrls: MetadataRoute.Sitemap = Object.keys(productData).flatMap((category) =>
    productData[category].items.map((item: any) => ({
      url: `${baseUrl}/products/${category}/${item.slug}`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    }))
  );

  // Safely map industry data using the fix
  const industryUrls: MetadataRoute.Sitemap = (industriesData as Industry[]).map((industry: Industry) => ({
    url: `${baseUrl}/industries/${industry.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  return [...staticPages, ...categoryUrls, ...productUrls, ...industryUrls];
}