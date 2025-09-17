export type BrandTrustSource = 'trustpilot' | 'google' | 'site';

export interface BrandTrust {
  rating?: number;
  reviews?: number;
  source?: BrandTrustSource;
  url?: string;
}

export interface Merchant {
  name: string;
  url: string;
  label?: string;
}

export interface Mattress {
  id: number;
  slug: string;
  brand: string;
  name: string;
  type: string;
  comfort?: string;
  firmness?: string;
  price: string;
  originalPrice?: string;
  rating: number;
  reviews: number;
  image?: string;
  images: string[];
  benefits?: string[];
  features?: string[];
  badge?: string;
  amazonLink: string;
  asin?: string;
  thicknessCm?: number;
  warrantyYears?: number;
  trialNights?: number;
  materials?: string[];
  certifications?: string[];
  sizes?: string[];
  countryOfOrigin?: string;
  edgeSupport?: string;
  motionIsolation?: string;
  cooling?: string;
  bestFor?: string[];
  weightSupportKg?: number;
  descriptionHtml?: string;
  pros?: string[];
  cons?: string[];
  trustpilotUrl?: string;
  brandUrl?: string;
  brandTrust?: BrandTrust;
  merchants?: Merchant[];
}
