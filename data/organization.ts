import { OrganizationSchema } from "@/types/common"
import { site } from "./site"

export const organizationSchema: OrganizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Matelasmatch",
  url: site.url,
  email: site.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: site.city,
    addressCountry: site.countryCode
  },
  sameAs: []
}
