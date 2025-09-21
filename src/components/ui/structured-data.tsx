import React from 'react';

export const StructuredData = () => {
  const localBusinessData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "AgentForge",
    "description": "AI agents for bookings & customer support. 24/7 website chat, SMS follow-ups, and on-brand answers that convert.",
    "url": "https://agentforge.com",
    "telephone": "+1-XXX-XXX-XXXX",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Main Street",
      "addressLocality": "Garden Grove",
      "addressRegion": "CA",
      "postalCode": "92840",
      "addressCountry": "US"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Garden Grove"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Orange County"
      }
    ],
    "serviceType": "AI Customer Support",
    "priceRange": "$999-$2449"
  };

  const aggregateRatingData = {
    "@context": "https://schema.org",
    "@type": "AggregateRating",
    "ratingValue": "5",
    "reviewCount": "24",
    "itemReviewed": {
      "@type": "Organization",
      "name": "AgentForge"
    }
  };

  const reviewsData = [
    {
      "@context": "https://schema.org",
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Sarah Chen"
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "reviewBody": "AgentForge transformed our customer support. We went from 4-hour response times to instant answers, and our booking conversion increased by 45%. The AI understands our products perfectly.",
      "datePublished": "2024-01-15",
      "itemReviewed": {
        "@type": "Organization",
        "name": "AgentForge"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Marcus Rodriguez"
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "reviewBody": "The SMS follow-up feature alone paid for itself. We recovered over $50k in missed bookings in the first quarter. The AI sounds exactly like our staff - professional and caring.",
      "datePublished": "2024-02-03",
      "itemReviewed": {
        "@type": "Organization",
        "name": "AgentForge"
      }
    }
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aggregateRatingData) }}
      />
      {reviewsData.map((review, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(review) }}
        />
      ))}
    </>
  );
};