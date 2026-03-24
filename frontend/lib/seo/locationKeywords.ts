import { CORE_KEYWORDS, AI_KEYWORDS, CLOUD_KEYWORDS, WEB_APP_KEYWORDS, BUSINESS_KEYWORDS, HIGH_INTENT_KEYWORDS } from "./keywords";

const LOCATION_SUFFIXES = [
  "Velachery",
  "Velachery Chennai",
  "Chennai",
  "Tamil Nadu",
  "Chennai IT services",
  "Tamil Nadu software company",
  "near me",
  "in Velachery",
  "Velachery area",
  "Chennai south",
  "Tamil Nadu India",
  "service center Velachery",
  "agency in Velachery",
  "company near Velachery"
];

export function expandKeywords(baseKeywords: string[]): string[] {
  return baseKeywords.flatMap(b =>
    LOCATION_SUFFIXES.map(s => `${b} ${s}`)
  );
}

export const VELACHERY_BASE_SET = [
  "software company Velachery",
  "software company in Velachery",
  "software company Velachery Chennai",
  "IT company Velachery",
  "IT services Velachery Chennai",
  "custom software Velachery",
  "enterprise software Velachery",
  "best software company Velachery",
  "top IT firms in Velachery",
  "software development Velachery Chennai",
  "Velachery tech companies",
  "IT outsourcing Velachery",
  "software solutions Velachery",
  "web development Velachery",
  "mobile app development Velachery",
  "AI services Velachery Chennai"
];

export const VELACHERY_CORE = expandKeywords(CORE_KEYWORDS);
export const VELACHERY_AI = expandKeywords(AI_KEYWORDS);
export const VELACHERY_WEB = expandKeywords(WEB_APP_KEYWORDS);
export const VELACHERY_CLOUD = expandKeywords(CLOUD_KEYWORDS);
export const VELACHERY_BUSINESS = expandKeywords(BUSINESS_KEYWORDS);
export const VELACHERY_HIGH_INTENT = expandKeywords(HIGH_INTENT_KEYWORDS);

export const ALL_LOCATION_KEYWORDS = [
  ...VELACHERY_BASE_SET,
  ...VELACHERY_CORE,
  ...VELACHERY_AI,
  ...VELACHERY_WEB,
  ...VELACHERY_CLOUD,
  ...VELACHERY_BUSINESS,
  ...VELACHERY_HIGH_INTENT
];
