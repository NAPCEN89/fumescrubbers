// src/app/robots.ts
import type { MetadataRoute } from 'next';

// This line forces static generation — REQUIRED for output: 'export'
export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: 'https://fumescrubbers.com/sitemap.xml',
  };
}