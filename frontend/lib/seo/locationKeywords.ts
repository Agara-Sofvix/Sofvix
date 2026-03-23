import { CORE_KEYWORDS, AI_KEYWORDS, CLOUD_KEYWORDS, WEB_APP_KEYWORDS, BUSINESS_KEYWORDS } from "./keywords";

const LOCATION_SUFFIXES = [
  "Velachery",
  "Velachery Chennai",
  "Chennai",
  "Tamil Nadu",
  "Chennai IT services",
  "Tamil Nadu software company"
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
  "best software company Velachery"
];

export const VELACHERY_AI = expandKeywords(AI_KEYWORDS.slice(0, 10));
export const VELACHERY_WEB = expandKeywords(WEB_APP_KEYWORDS.slice(0, 10));
export const VELACHERY_CLOUD = expandKeywords(CLOUD_KEYWORDS.slice(0, 10));
export const VELACHERY_BUSINESS = expandKeywords(BUSINESS_KEYWORDS.slice(0, 10));

export const ALL_LOCATION_KEYWORDS = [
  ...VELACHERY_BASE_SET,
  ...VELACHERY_AI,
  ...VELACHERY_WEB,
  ...VELACHERY_CLOUD,
  ...VELACHERY_BUSINESS
];
