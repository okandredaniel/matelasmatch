export type SiteInfo = {
  name: string;
  url: string;
  email: string;
  city: string;
  countryCode: string;
};

export type NavLink = {
  href: string;
  label: string;
  external?: boolean;
  rel?: string;
};

export type NavSection = {
  title: string;
  links: NavLink[];
};

export type OrganizationSchema = Record<string, unknown>;

export type Feature = {
  id: string;
  title: string;
  description: string;
  icon: 'search' | 'external-link' | 'award' | 'star';
};
