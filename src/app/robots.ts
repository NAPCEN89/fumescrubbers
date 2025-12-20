export const dynamic = 'force-static'; // Add this line

import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://fumescrubbers.in/sitemap.xml',
  };
}