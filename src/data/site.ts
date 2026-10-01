// Canonical host. www.h4md1.fr currently 301s to the apex, so the apex is what gets advertised.
// (public/CNAME is the apex), so the apex is used for canonical, og:url, JSON-LD and the sitemap.
export const SITE_URL = 'https://h4md1.fr';

export const links = {
  linkedin: 'https://www.linkedin.com/in/hamdilaadhari',
  github: 'https://github.com/killerwolf',
  devto: 'https://dev.to/hamdi_laadhari',
  cv: '/cv/hamdi-laadhari-ai-engineer.pdf',
  privacy: '/privacy/',
} as const;

export const meta = {
  title: 'Hamdi Laadhari · AI Engineer (GenAI) · Software Engineer turned AI Engineer',
  description:
    'Hamdi Laadhari: 16 years shipping production software, now an AI engineer focused on GenAI and LLMs. MSc AIMS at EPITA × EM Normandie. Open to a 6-month internship from March 2027.',
  // LinkedIn shows this text on a shared link, before anyone clicks. It has to carry the name,
  // the role and the differentiator, not the tagline used on the page itself.
  ogTitle: 'Hamdi Laadhari — AI Engineer (GenAI), 16 years of production software',
  ogImage: `${SITE_URL}/assets/og-frame-title.jpg`,
} as const;

export const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Hamdi Laadhari',
  jobTitle: 'AI Engineer',
  url: `${SITE_URL}/`,
  image: `${SITE_URL}/assets/hamdi-ai-cap.png`,
  sameAs: [links.linkedin, links.github, links.devto],
  alumniOf: { '@type': 'CollegeOrUniversity', name: 'ESIGELEC' },
  affiliation: [
    { '@type': 'CollegeOrUniversity', name: 'EPITA' },
    { '@type': 'CollegeOrUniversity', name: 'EM Normandie' },
  ],
  knowsAbout: [
    'Generative AI',
    'Large Language Models',
    'Model Context Protocol',
    'Python',
    'Symfony',
    'Elasticsearch',
  ],
};

export const GA_ID: string | undefined = import.meta.env.PUBLIC_GA_MEASUREMENT_ID || undefined;
