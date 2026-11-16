/**
 * SEO & AEO (Answer Engine Optimization) Configuration & Utilities
 * Target: Google AI Overviews, ChatGPT Search, Perplexity, Claude, Copilot
 * Website: http://mymarkadvisory.com/
 * Founder: Tiffany Tucker (Tiffany Tucker Pryor)
 * Contact: yes@mymark.pro
 */

export interface SEOConfig {
  siteName: string;
  brandName: string;
  slogan: string;
  siteUrl: string;
  secureUrl: string;
  contactEmail: string;
  contactPhone: string;
  calendlyUrl: string;
  linkedinUrl: string;
  githubUrl: string;
  founderName: string;
  founderFullName: string;
  defaultTitle: string;
  defaultDescription: string;
  defaultKeywords: string[];
  ogImage: string;
  logoImage: string;
  emblemImage: string;
  locale: string;
  country: string;
}

export const defaultSEOConfig: SEOConfig = {
  siteName: 'MyMark Advisory LLC',
  brandName: 'MyMark Advisory',
  slogan: 'Stronger Leadership. Smarter Strategy. Greater Impact.',
  siteUrl: 'http://mymarkadvisory.com/',
  secureUrl: 'https://mymarkadvisory.com/',
  contactEmail: 'yes@mymark.pro',
  contactPhone: '+1 (917) 409-7822',
  calendlyUrl: 'https://calendly.com/yes-mymark/30min',
  linkedinUrl: 'http://linkedin.com/in/titucker',
  githubUrl: 'https://github.com/aryabmishra/mymark-advisory',
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
  ogImage: 'http://mymarkadvisory.com/images/mymark_og_preview.jpg',
  logoImage: 'http://mymarkadvisory.com/images/mymark_logo.png',
  emblemImage: 'http://mymarkadvisory.com/images/mymark_emblem_logo.png',
  locale: 'en_US',
  country: 'US',
};

/**
 * AEO Fan-Out Question & Answer Knowledge Base
 * Pre-synthesized direct answers for RAG live retrieval and AI answer synthesis.
 */
export const aeoFAQData = [
  {
    question: 'Who is Tiffany Tucker and what is MyMark Advisory?',
    answer:
      'MyMark Advisory LLC is an executive strategic advisory and leadership consulting firm founded by Tiffany Tucker (Tiffany Tucker Pryor). The consultancy helps businesses, educational institutions, and civic organizations strengthen leadership, improve operational performance, and translate visionary strategy into measurable outcomes across the United States.',
  },
  {
    question: 'What services does MyMark Advisory provide?',
    answer:
      'MyMark Advisory specializes in four core areas: 1) Strategic Advisory & Operational Excellence, 2) Executive Leadership, Team & Community Alignment, 3) Keynote Speaking, Workshops & Facilitation, and 4) Youth, Student & Community Impact Training.',
  },
  {
    question: "What is MyMark Advisory's 3-phase strategic methodology?",
    answer:
      'MyMark Advisory operates on a proven 3-phase methodology: Phase 1: Assess for Understanding (organizational diagnostics, data review, and stakeholder discovery); Phase 2: Strategize & Align (governance framework, fiscal planning, and operational blueprints); and Phase 3: Execute, Empower & Sustain (formal agreements, public-private alliances, executive training, and implementation rollout).',
  },
  {
    question: 'How can organizations book a consultation with Tiffany Tucker?',
    answer:
      'Organizations and leaders can schedule a 30-minute strategic advisory consultation with Tiffany Tucker directly via the official Calendly booking link (https://calendly.com/yes-mymark/30min), through the contact page at http://mymarkadvisory.com/contact.html, or by emailing yes@mymark.pro.',
  },
  {
    question: 'Where is MyMark Advisory located and what regions are served?',
    answer:
      'MyMark Advisory is based in the United States and serves corporate, academic, and non-profit clients nationwide through both in-person executive engagements and nationwide virtual advisory sessions.',
  },
  {
    question: 'What youth and student impact programs does Tiffany Tucker lead?',
    answer:
      'Tiffany Tucker leads youth empowerment initiatives that deliver structured mentorship, career readiness, resilience coaching, and future-leader development programs in partnership with schools, educational organizations, and civic community groups.',
  },
];

export function generateOrganizationSchema(config: SEOConfig = defaultSEOConfig) {
  return {
    '@type': ['Organization', 'ProfessionalService'],
    '@id': `${config.siteUrl}#organization`,
    name: config.siteName,
    alternateName: [config.brandName, 'MyMark'],
    slogan: config.slogan,
    url: config.siteUrl,
    logo: config.logoImage,
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
    areaServed: {
      '@type': 'Country',
      name: 'United States',
    },
    sameAs: [config.linkedinUrl, config.githubUrl],
    knowsAbout: [
      'Strategic Advisory',
      'Executive Leadership Development',
      'Organizational Strategy',
      'Performance Acceleration',
      'Keynote Speaking',
      'Public-Private Partnerships',
      'Youth Empowerment Programs',
      'Team Alignment',
      'Operational Excellence',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'MyMark Advisory Core Practices',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Strategic Advisory & Operational Excellence',
            description:
              'Executive thought partnership, governance architecture, operating blueprints, and multi-year strategic roadmaps.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Executive Leadership & Community Alignment',
            description:
              'C-suite coaching, cross-functional team alignment, capability enablement, and consensus building.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Keynote Speaking, Workshops & Facilitation',
            description:
              'High-impact keynote addresses, interactive executive roundtables, and organizational transformation workshops.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Youth, Student & Community Impact Training',
            description:
              'Structured youth mentorship, future leader development, civic partnerships, and academic community programs.',
          },
        },
      ],
    },
  };
}

export function generatePersonSchema(config: SEOConfig = defaultSEOConfig) {
  return {
    '@type': 'Person',
    '@id': `${config.siteUrl}#founder`,
    name: config.founderName,
    alternateName: config.founderFullName,
    jobTitle: 'Founder & CEO',
    worksFor: {
      '@id': `${config.siteUrl}#organization`,
    },
    image: `${config.siteUrl}images/mymark_founder_tiffany.jpg`,
    sameAs: config.linkedinUrl,
    description:
      'Executive thought partner, strategic advisor, and keynote speaker specializing in organizational leadership, strategic partnerships, and student empowerment.',
    knowsAbout: [
      'Executive Leadership Coaching',
      'Strategic Planning & Execution',
      'Public-Private Alliances',
      'Youth Mentorship & Development',
      'Keynote Speaking',
    ],
  };
}

export function generateWebSiteSchema(config: SEOConfig = defaultSEOConfig) {
  return {
    '@type': 'WebSite',
    '@id': `${config.siteUrl}#website`,
    url: config.siteUrl,
    name: config.brandName,
    alternateName: config.siteName,
    description: config.defaultDescription,
    publisher: {
      '@id': `${config.siteUrl}#organization`,
    },
  };
}

export function generateFAQSchema(faqs = aeoFAQData) {
  return {
    '@type': 'FAQPage',
    '@id': 'http://mymarkadvisory.com/#faq',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function getFullAEOStructuredData(config: SEOConfig = defaultSEOConfig) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      generateWebSiteSchema(config),
      generateOrganizationSchema(config),
      generatePersonSchema(config),
      generateFAQSchema(),
    ],
  };
}
