/**
 * SEO Configuration & Utilities for MyMark Advisory
 * Website: http://mymarkadvisory.com/
 * Founder: Tiffany Tucker (Tiffany Tucker Pryor)
 * Contact Email: yes@mymark.pro
 */

export interface SEOConfig {
  siteName: string;
  brandName: string;
  siteUrl: string;
  secureUrl: string;
  contactEmail: string;
  contactPhone: string;
  calendlyUrl: string;
  linkedinUrl: string;
  founderName: string;
  founderFullName: string;
  defaultTitle: string;
  defaultDescription: string;
  defaultKeywords: string[];
  ogImage: string;
  locale: string;
  country: string;
}

export const defaultSEOConfig: SEOConfig = {
  siteName: 'MyMark Advisory LLC',
  brandName: 'MyMark Advisory',
  siteUrl: 'http://mymarkadvisory.com/',
  secureUrl: 'https://mymarkadvisory.com/',
  contactEmail: 'yes@mymark.pro',
  contactPhone: '+1 (917) 409-7822',
  calendlyUrl: 'https://calendly.com/yes-mymark/30min',
  linkedinUrl: 'http://linkedin.com/in/titucker',
  founderName: 'Tiffany Tucker',
  founderFullName: 'Tiffany Tucker Pryor',
  defaultTitle: 'MyMark Advisory | Strategic Advisory, Executive Leadership & Impact Consulting | Tiffany Tucker',
  defaultDescription: 'MyMark Advisory LLC, led by Tiffany Tucker (Tiffany Tucker Pryor), provides executive strategic consulting, leadership development, organizational alignment, keynote speaking, and youth empowerment programs across the United States.',
  defaultKeywords: [
    'MyMark Advisory',
    'MyMark Advisory LLC',
    'mymarkadvisory.com',
    'Tiffany Tucker',
    'Tiffany Tucker Pryor',
    'strategic advisory',
    'executive leadership coaching',
    'organizational strategy',
    'leadership development',
    'keynote speaker',
    'youth mentorship programs',
    'business consulting',
    'strategic partnerships',
    'educational consulting',
    'team alignment',
    'operational excellence'
  ],
  ogImage: 'http://mymarkadvisory.com/images/mymark_founder_tiffany.jpg',
  locale: 'en_US',
  country: 'US',
};

export interface PageMetadata {
  title?: string;
  description?: string;
  keywords?: string[];
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  author?: string;
}

export function generateOrganizationSchema(config: SEOConfig = defaultSEOConfig) {
  return {
    '@context': 'https://schema.org',
    '@type': ['Organization', 'ProfessionalService'],
    '@id': `${config.siteUrl}#organization`,
    name: config.siteName,
    alternateName: [config.brandName, 'MyMark'],
    url: config.siteUrl,
    logo: `${config.siteUrl}images/mymark_logo.png`,
    image: config.ogImage,
    description: config.defaultDescription,
    founder: {
      '@type': 'Person',
      '@id': `${config.siteUrl}#founder`,
      name: config.founderName,
      alternateName: config.founderFullName,
      jobTitle: 'Founder & CEO',
      sameAs: config.linkedinUrl,
    },
    email: config.contactEmail,
    telephone: config.contactPhone,
    address: {
      '@type': 'PostalAddress',
      addressCountry: config.country,
    },
    areaServed: config.country,
    sameAs: [config.linkedinUrl],
  };
}

export function generatePersonSchema(config: SEOConfig = defaultSEOConfig) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${config.siteUrl}#founder`,
    name: config.founderName,
    alternateName: config.founderFullName,
    jobTitle: 'Founder & CEO',
    worksFor: {
      '@id': `${config.siteUrl}#organization`,
    },
    image: config.ogImage,
    sameAs: config.linkedinUrl,
    description: 'Executive thought partner, strategic advisor, and keynote speaker specializing in organizational leadership, strategic partnerships, and student empowerment.',
  };
}

export function generateWebSiteSchema(config: SEOConfig = defaultSEOConfig) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${config.siteUrl}#website`,
    url: config.siteUrl,
    name: config.brandName,
    description: config.defaultDescription,
    publisher: {
      '@id': `${config.siteUrl}#organization`,
    },
  };
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function getFullStructuredData(config: SEOConfig = defaultSEOConfig) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      generateWebSiteSchema(config),
      generateOrganizationSchema(config),
      generatePersonSchema(config),
    ],
  };
}
