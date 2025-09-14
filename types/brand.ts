export interface Brand {
  name: string;
  slug: string;
  logo?: string;
  website?: string;
  trustpilotUrl?: string;
  rating?: number;
  reviews?: number;
  description?: string;
  social?: { name: string; url: string }[];
  country: string;
}
