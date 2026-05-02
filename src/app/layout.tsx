import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://stitchandmoral.vercel.app"),
  title: {
    default:
      "Sewa Jas Palangka Raya | Stitch & Moral — Jas Wisuda, Wedding & Event Formal",
    template: "%s | Stitch & Moral — Sewa Jas Palangka Raya",
  },
  description:
    "Stitch & Moral menyediakan jasa sewa jas formal pria terlengkap di Palangka Raya. Jas wisuda, wedding, pre-wedding, kelulusan, MC & event formal. Kualitas premium, harga terjangkau. Hubungi 081549193834.",
  keywords: [
    "sewa jas palangka raya",
    "rental jas palangka raya",
    "sewa jas wisuda palangka raya",
    "sewa jas wedding palangka raya",
    "sewa jas formal palangka raya",
    "jas pria palangka raya",
    "sewa jas murah palangka raya",
    "sewa jas pre-wedding palangka raya",
    "sewa jas kelulusan palangka raya",
    "sewa jas MC palangka raya",
    "stitch and moral",
    "stitch & moral",
    "sewa jas kalimantan tengah",
    "rental jas formal",
    "jas wisuda",
    "jas wedding",
    "jas pre-wedding",
  ],
  authors: [{ name: "Stitch & Moral" }],
  creator: "Stitch & Moral",
  publisher: "Stitch & Moral",
  formatDetection: {
    telephone: true,
    email: false,
    address: true,
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://stitchandmoral.vercel.app",
    siteName: "Stitch & Moral",
    title:
      "Sewa Jas Palangka Raya | Stitch & Moral — Jas Wisuda, Wedding & Event Formal",
    description:
      "Stitch & Moral menyediakan jasa sewa jas formal pria terlengkap di Palangka Raya. Jas wisuda, wedding, pre-wedding, kelulusan, MC & event formal. Kualitas premium, harga terjangkau.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Stitch & Moral — Sewa Jas Premium Palangka Raya",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Sewa Jas Palangka Raya | Stitch & Moral — Jas Wisuda, Wedding & Event Formal",
    description:
      "Stitch & Moral menyediakan jasa sewa jas formal pria terlengkap di Palangka Raya. Kualitas premium, harga terjangkau.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://stitchandmoral.vercel.app",
  },
  category: "fashion",
};

/* JSON-LD Structured Data */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Stitch & Moral",
  alternateName: "Stitch and Moral Sewa Jas",
  image: "https://stitchandmoral.vercel.app/og-image.png",
  url: "https://stitchandmoral.vercel.app",
  telephone: "+6281549193834",
  description:
    "Stitch & Moral menyediakan jasa sewa jas formal pria terlengkap di Palangka Raya untuk wisuda, wedding, pre-wedding, kelulusan, MC & event formal.",
  address: {
    "@type": "PostalAddress",
    streetAddress:
      "JL. Pangeran Samudera Induk, Kost Barak Kita no 11",
    addressLocality: "Palangka Raya",
    addressRegion: "Kalimantan Tengah",
    postalCode: "73111",
    addressCountry: "ID",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -2.2136,
    longitude: 113.9108,
  },
  areaServed: {
    "@type": "City",
    name: "Palangka Raya",
  },
  priceRange: "$$",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "09:00",
      closes: "21:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "10:00",
      closes: "18:00",
    },
  ],
  sameAs: [
    "https://www.instagram.com/stitchandmoral",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Layanan Sewa Jas",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Sewa Jas Wisuda",
          description:
            "Sewa jas formal untuk acara wisuda di Palangka Raya",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Sewa Jas Wedding",
          description:
            "Sewa jas pengantin pria untuk pernikahan di Palangka Raya",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Sewa Jas Pre-Wedding",
          description:
            "Sewa jas untuk sesi foto pre-wedding di Palangka Raya",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Sewa Jas Event Formal",
          description:
            "Sewa jas untuk MC, kelulusan, dan berbagai event formal di Palangka Raya",
        },
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <meta name="theme-color" content="#000000" />
        <meta name="geo.region" content="ID-KT" />
        <meta name="geo.placename" content="Palangka Raya" />
        <meta name="geo.position" content="-2.2136;113.9108" />
        <meta name="ICBM" content="-2.2136, 113.9108" />
        <meta name="google-site-verification" content="BPxxYA52ta7RvOm4afR_giDFbpUKAHwmXK2_5dwXuKo" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
