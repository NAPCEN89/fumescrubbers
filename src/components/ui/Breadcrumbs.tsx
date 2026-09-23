'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronRight, Home } from 'lucide-react';
import { Container, Box, Typography } from '@mui/material';

const CYAN = '#00E5FF';

export default function Breadcrumbs({ categoryLabel, productLabel }: { categoryLabel?: string, productLabel?: string }) {
  const pathname = usePathname();
  const pathSegments = pathname.split('/').filter((v) => v);

  // Schema.org Structured Data
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": pathSegments.map((segment, index) => {
      const url = `https://www.napcen.com/${pathSegments.slice(0, index + 1).join('/')}`;
      let name = segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' ');
      
      // Use the actual labels if provided
      if (index === 1 && categoryLabel) name = categoryLabel;
      if (index === 2 && productLabel) name = productLabel;

      return {
        "@type": "ListItem",
        "position": index + 1,
        "name": name,
        "item": url
      };
    })
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <Box sx={{ py: 2, backgroundColor: 'rgba(0,0,0,0.2)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <Container>
          <nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-sm text-gray-400">
            <Link href="/" className="hover:text-[#00E5FF] transition-colors flex items-center">
              <Home size={16} className="mr-1" />
              Home
            </Link>
            
            {pathSegments.map((segment, index) => {
              const isLast = index === pathSegments.length - 1;
              const url = `/${pathSegments.slice(0, index + 1).join('/')}`;
              let name = segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' ');

              if (index === 1 && categoryLabel) name = categoryLabel;
              if (index === 2 && productLabel) name = productLabel;

              return (
                <React.Fragment key={url}>
                  <ChevronRight size={14} className="text-gray-600" />
                  {isLast ? (
                    <Typography component="span" sx={{ fontSize: '0.875rem', color: CYAN, fontWeight: 600 }}>
                      {name}
                    </Typography>
                  ) : (
                    <Link href={url} className="hover:text-[#00E5FF] transition-colors">
                      {name}
                    </Link>
                  )}
                </React.Fragment>
              );
            })}
          </nav>
        </Container>
      </Box>
    </>
  );
}