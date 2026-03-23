import { BASE_URL } from "@/lib/seo/metadata";

interface SchemaProps {
  type: 'WebSite' | 'BreadcrumbList' | 'Service' | 'FAQPage' | 'LocalBusiness';
  data: any;
}

export function JsonLd({ type, data }: SchemaProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": type,
          ...data
        }),
      }}
    />
  );
}

export const WEBSITE_SCHEMA = {
  name: "Agara Sofvix",
  url: BASE_URL,
  potentialAction: {
    "@type": "SearchAction",
    "target": `${BASE_URL}/products?q={search_term_string}`,
    "query-input": "required name=search_term_string"
  }
};

export const LOCAL_BUSINESS_SCHEMA = {
  "@type": "SoftwareCompany",
  "name": "Agara Sofvix",
  "image": `${BASE_URL}/logo.png`,
  "@id": `${BASE_URL}/#organization`,
  "url": BASE_URL,
  "telephone": "+91 98765 43210",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "123, 1st Cross Street",
    "addressLocality": "Velachery",
    "addressRegion": "Chennai",
    "postalCode": "600042",
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 12.9784,
    "longitude": 80.2184
  },
  "sameAs": [
    "https://linkedin.com/company/agara-sofvix",
    "https://twitter.com/agarasofvix"
  ]
};

export function generateBreadcrumbSchema(items: { name: string; item: string }[]) {
  return {
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": `${BASE_URL}${item.item}`
    }))
  };
}
