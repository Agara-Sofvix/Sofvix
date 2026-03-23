import { seo } from "./metadata";
import { CORE_KEYWORDS, AI_KEYWORDS, BUSINESS_KEYWORDS, HIGH_INTENT_KEYWORDS } from "./keywords";
import { VELACHERY_BASE_SET, ALL_LOCATION_KEYWORDS } from "./locationKeywords";

export const PAGE_SEO = {
  home: seo({
    title: "Enterprise Software Development Company | Build Scalable Systems Faster",
    description: "Agara Sofvix builds AI-powered enterprise systems that reduce cost, automate workflows, and scale your business faster. Specialized in custom software and digital transformation in Chennai.",
    path: "/",
    keywords: [
      ...CORE_KEYWORDS.slice(0, 5),
      ...AI_KEYWORDS.slice(0, 5),
      ...VELACHERY_BASE_SET.slice(0, 5)
    ]
  }),
  services: seo({
    title: "Enterprise Solutions & Digital Transformation Services | Scale Your Operations",
    description: "Modernize your business with AI-powered automation, custom CRM systems, and scalable cloud infrastructure. Explore our enterprise-grade digital services.",
    path: "/services",
    keywords: [
      ...CORE_KEYWORDS,
      ...AI_KEYWORDS,
      ...ALL_LOCATION_KEYWORDS.slice(0, 10)
    ]
  }),
  products: seo({
    title: "Custom SaaS & Enterprise Product Ecosystem | High-Performance Systems",
    description: "Discover our suite of business systems including CRM, Marketing Automation, and Finance Ops. Built for high-performance and seamless scalability.",
    path: "/products",
    keywords: [
      "SaaS products",
      "enterprise software tools",
      "business software Velachery",
      ...BUSINESS_KEYWORDS
    ]
  }),
  about: seo({
    title: "About Agara Sofvix | Engineering Excellence & Innovation Culture",
    description: "Learn about our journey, our engineering-first culture, and how we help businesses globally through strategic software architecture and purpose-driven design.",
    path: "/about",
    keywords: [
      "software engineering company",
      "enterprise technology partner",
      "IT company Velachery",
      ...HIGH_INTENT_KEYWORDS
    ]
  }),
  careers: seo({
    title: "Career Opportunities for Elite Engineers | Join Agara Sofvix",
    description: "Build the future of enterprise software. We are looking for talented developers, architects, and designers to join our high-performance engineering team.",
    path: "/careers",
    keywords: [
      "software jobs",
      "developer careers",
      "IT jobs Velachery",
      "hiring software engineers Velachery"
    ]
  }),
  getStarted: seo({
    title: "Get Started | Contact Agara Sofvix for Custom Software Solutions",
    description: "Ready to transform your business? Contact our team for a free consultation on enterprise systems, AI automation, and scalable digital products.",
    path: "/get-started",
    keywords: ["contact software company", "hire developers Chennai", "software consultation Velachery"]
  })
};
