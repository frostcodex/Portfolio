export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "FrostCodex",
    description:
      "Product-focused engineers for startups. Ship faster, scale smarter — without giving up equity.",
    url: "https://frostcodex.com", // Update with your actual URL
    logo: "https://frostcodex.com/logo.png", // Update with your logo URL
    sameAs: [
      // Add your social media profiles
      // "https://twitter.com/frostcodex",
      // "https://linkedin.com/company/frostcodex",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      email: "hello@frostcodex.com",
    },
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Software Development Services",
    provider: {
      "@type": "Organization",
      name: "FrostCodex",
    },
    areaServed: "Worldwide",
    description:
      "Technical co-founders for startups. MVP development, SaaS platforms, web applications, mobile apps, and UI/UX design.",
    offers: {
      "@type": "Offer",
      description: "Technical co-founder services with 0% equity",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
    </>
  );
}
