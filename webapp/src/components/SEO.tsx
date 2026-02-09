import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string[];
  canonical?: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  schema?: object;
}

export const SEO = ({
  title,
  description,
  keywords = [],
  canonical,
  ogImage = '/og-base.png',
  ogType = 'website',
  schema,
}: SEOProps) => {
  const fullTitle = `${title} | Jax Vending Solutions`;
  const siteUrl = typeof window !== 'undefined' ? window.location.origin : '';
  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';
  const canonicalUrl = canonical || currentUrl;
  const imageUrl = ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`;

  // Default business schema
  const businessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Jax Vending Solutions',
    description: 'Premium vending machine services in Jacksonville, FL and surrounding areas including Duval County, St. Johns County, and Nassau County.',
    url: siteUrl,
    telephone: '(555) 123-4567',
    email: 'sales@jaxvendingsolutions.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Jacksonville',
      addressRegion: 'FL',
      addressCountry: 'US',
    },
    areaServed: [
      {
        '@type': 'City',
        name: 'Jacksonville',
        '@id': 'https://en.wikipedia.org/wiki/Jacksonville,_Florida',
      },
      {
        '@type': 'AdministrativeArea',
        name: 'Duval County',
      },
      {
        '@type': 'AdministrativeArea',
        name: 'St. Johns County',
      },
      {
        '@type': 'AdministrativeArea',
        name: 'Nassau County',
      },
    ],
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '30.3322',
      longitude: '-81.6557',
    },
    priceRange: '$$',
    openingHours: 'Mo-Su',
    sameAs: [
      'https://www.facebook.com/jaxvendingsolutions',
      'https://www.linkedin.com/company/jaxvendingsolutions',
      'https://twitter.com/jaxvending',
    ],
  };

  // Service area schema with ZIP codes
  const serviceAreaSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Vending Machine Services',
    provider: {
      '@type': 'LocalBusiness',
      name: 'Jax Vending Solutions',
    },
    areaServed: [
      // Duval County ZIP codes
      {
        '@type': 'PostalCodeRange',
        postalCodeBegin: '32099',
        postalCodeEnd: '32099',
        addressCountry: 'US',
        addressRegion: 'FL',
      },
      {
        '@type': 'PostalCodeRange',
        postalCodeBegin: '32201',
        postalCodeEnd: '32212',
        addressCountry: 'US',
        addressRegion: 'FL',
      },
      {
        '@type': 'PostalCodeRange',
        postalCodeBegin: '32214',
        postalCodeEnd: '32214',
        addressCountry: 'US',
        addressRegion: 'FL',
      },
      {
        '@type': 'PostalCodeRange',
        postalCodeBegin: '32216',
        postalCodeEnd: '32228',
        addressCountry: 'US',
        addressRegion: 'FL',
      },
      {
        '@type': 'PostalCodeRange',
        postalCodeBegin: '32231',
        postalCodeEnd: '32241',
        addressCountry: 'US',
        addressRegion: 'FL',
      },
      {
        '@type': 'PostalCodeRange',
        postalCodeBegin: '32244',
        postalCodeEnd: '32247',
        addressCountry: 'US',
        addressRegion: 'FL',
      },
      // St. Johns County ZIP codes
      {
        '@type': 'PostalCodeRange',
        postalCodeBegin: '32004',
        postalCodeEnd: '32004',
        addressCountry: 'US',
        addressRegion: 'FL',
      },
      {
        '@type': 'PostalCodeRange',
        postalCodeBegin: '32080',
        postalCodeEnd: '32082',
        addressCountry: 'US',
        addressRegion: 'FL',
      },
      {
        '@type': 'PostalCodeRange',
        postalCodeBegin: '32084',
        postalCodeEnd: '32086',
        addressCountry: 'US',
        addressRegion: 'FL',
      },
      {
        '@type': 'PostalCodeRange',
        postalCodeBegin: '32092',
        postalCodeEnd: '32092',
        addressCountry: 'US',
        addressRegion: 'FL',
      },
      {
        '@type': 'PostalCodeRange',
        postalCodeBegin: '32095',
        postalCodeEnd: '32095',
        addressCountry: 'US',
        addressRegion: 'FL',
      },
      // Nassau County ZIP codes
      {
        '@type': 'PostalCodeRange',
        postalCodeBegin: '32009',
        postalCodeEnd: '32009',
        addressCountry: 'US',
        addressRegion: 'FL',
      },
      {
        '@type': 'PostalCodeRange',
        postalCodeBegin: '32011',
        postalCodeEnd: '32011',
        addressCountry: 'US',
        addressRegion: 'FL',
      },
      {
        '@type': 'PostalCodeRange',
        postalCodeBegin: '32034',
        postalCodeEnd: '32035',
        addressCountry: 'US',
        addressRegion: 'FL',
      },
      {
        '@type': 'PostalCodeRange',
        postalCodeBegin: '32041',
        postalCodeEnd: '32041',
        addressCountry: 'US',
        addressRegion: 'FL',
      },
      {
        '@type': 'PostalCodeRange',
        postalCodeBegin: '32046',
        postalCodeEnd: '32046',
        addressCountry: 'US',
        addressRegion: 'FL',
      },
      {
        '@type': 'PostalCodeRange',
        postalCodeBegin: '32097',
        postalCodeEnd: '32097',
        addressCountry: 'US',
        addressRegion: 'FL',
      },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Vending Machine Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Smart Vending Machines',
            description: 'AI-powered vending machines with cashless payments and cloud connectivity',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Vending Machine Installation',
            description: 'Professional installation and setup for hospitals, schools, apartments, and offices',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Vending Machine Maintenance',
            description: '24/7 support and maintenance for all vending equipment',
          },
        },
      ],
    },
  };

  // Combine schemas
  const combinedSchema = schema || {
    '@context': 'https://schema.org',
    '@graph': [businessSchema, serviceAreaSchema],
  };

  useEffect(() => {
    // Update structured data
    const existingScript = document.querySelector('script[type="application/ld+json"]');
    if (existingScript) {
      existingScript.textContent = JSON.stringify(combinedSchema);
    }
  }, [combinedSchema]);

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      {keywords.length > 0 && <meta name="keywords" content={keywords.join(', ')} />}
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:site_name" content="Jax Vending Solutions" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      <meta name="twitter:site" content="@jaxvending" />
      <meta name="twitter:creator" content="@jaxvending" />

      {/* Additional SEO Meta Tags */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="googlebot" content="index, follow" />
      <meta name="bingbot" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="author" content="Jax Vending Solutions" />

      {/* Geo Meta Tags for Local SEO */}
      <meta name="geo.region" content="US-FL" />
      <meta name="geo.placename" content="Jacksonville" />
      <meta name="geo.position" content="30.3322;-81.6557" />
      <meta name="ICBM" content="30.3322, -81.6557" />

      {/* Structured Data / JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify(combinedSchema)}
      </script>
    </Helmet>
  );
};
