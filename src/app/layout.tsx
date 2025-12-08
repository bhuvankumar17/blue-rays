import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Blue Rays Green Energy - #1 Solar Panel Installation Tamil Nadu | Chennai, Coimbatore, Madurai",
  description: "Tamil Nadu's leading solar company. Serving Chennai, Coimbatore, Madurai, Trichy, Salem. ₹30k-₹78k govt subsidy. ISO certified. Expert installations. Call +91 9600970313",
  keywords: [
    "solar panels Tamil Nadu",
    "solar installation",
    "solar panel company",
    "solar panels",
    "solar panels",
    "solar installation",
    "solar panels",
    "residential solar Tamil Nadu",
    "commercial solar",
    "solar energy Tamil Nadu",
    "Blue Rays Green Energy",
    "solar subsidy Tamil Nadu",
    "rooftop solar",
    "best solar company Tamil Nadu",
    "solar panel dealers",
    "TANGEDCO solar",
    "Tamil Nadu solar policy",
    "Adani solar panels",
    "Waaree solar panels Tamil Nadu"
  ],
  authors: [{ name: "Blue Rays Green Energy" }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
  alternates: {
    canonical: 'https://www.blueraysgreenenergy.com',
  },
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: "Blue Rays Green Energy - #1 Solar Panel Installation Tamil Nadu",
    description: "Tamil Nadu's most trusted solar company. Expert installations across Chennai, Coimbatore, Madurai. Get govt subsidy up to ₹78,000.",
    type: "website",
    locale: "en_IN",
    url: "https://www.blueraysgreenenergy.com",
    siteName: "Blue Rays Green Energy",
    images: [
      {
        url: "https://www.blueraysgreenenergy.com/images/hero-background.jpg",
        width: 1200,
        height: 630,
        alt: "Blue Rays Green Energy - Solar Installation Tamil Nadu",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blue Rays Green Energy - Solar Panel Installation Tamil Nadu",
    description: "Tamil Nadu's leading solar company. Expert installations. Govt subsidy available.",
    images: ["https://www.blueraysgreenenergy.com/images/hero-background.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.blueraysgreenenergy.com/#organization",
    "name": "Blue Rays Green Energy",
    "alternateName": "Blue Rays Solar",
    "description": "Leading solar panel installation company in Tamil Nadu, providing residential and commercial solar solutions with government subsidy support.",
    "url": "https://www.blueraysgreenenergy.com",
    "logo": "https://www.blueraysgreenenergy.com/images/logo.jpg",
    "image": "https://www.blueraysgreenenergy.com/images/hero-background.jpg",
    "telephone": "+919600970313",
    "email": "info@blueraysgreenenergy.com",
    "priceRange": "₹₹₹₹",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Salem-Namakkal Main Road, Namakkal - 637018",
      "addressLocality": "Namakkal",
      "addressRegion": "Tamil Nadu",
      "postalCode": "637018",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "13.0827",
      "longitude": "80.2707"
    },
    "areaServed": [
      {
        "@type": "State",
        "name": "Tamil Nadu"
      },
      {
        "@type": "City",
        "name": "Chennai"
      },
      {
        "@type": "City",
        "name": "Coimbatore"
      },
      {
        "@type": "City",
        "name": "Madurai"
      },
      {
        "@type": "City",
        "name": "Tiruchirappalli"
      },
      {
        "@type": "City",
        "name": "Salem"
      },
      {
        "@type": "City",
        "name": "Tirunelveli"
      },
      {
        "@type": "City",
        "name": "Erode"
      },
      {
        "@type": "City",
        "name": "Vellore"
      },
      {
        "@type": "City",
        "name": "Thoothukudi"
      }
    ],
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "09:00",
        "closes": "18:00"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/blueraysgreenenergy",
      "https://www.instagram.com/blueraysgreenenergy",
      "https://www.linkedin.com/company/blueraysgreenenergy",
      "https://twitter.com/blueraysgreen"
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "500"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Solar Panel Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Residential Solar Panel Installation",
            "description": "Complete solar panel installation for homes with government subsidy support"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Commercial Solar Installation",
            "description": "Large-scale solar solutions for commercial and industrial properties"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Solar Panel Maintenance",
            "description": "Annual maintenance and monitoring services for solar systems"
          }
        }
      ]
    }
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <link rel="shortcut icon" href="/images/logo.jpg" type="image/x-icon" />
      </head>
      <body className={inter.className} suppressHydrationWarning>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
