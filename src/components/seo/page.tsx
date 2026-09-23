import Head from 'next/head';
import type { Metadata } from 'next';

type SEOProps = {
  title: string;
  description: string;
  image?: string;
  url?: string;
};

export default function SEO({ title, description, image = '/napcen-hero-fallback.jpg', url }: SEOProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content="air pollution control, wet scrubber, dust collector, napcen" />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url || 'https://www.napcen.com'} />
      <meta property="og:type" content="website" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      <link rel="canonical" href={url || 'https://www.napcen.com'} />
    </Head>
  );
}