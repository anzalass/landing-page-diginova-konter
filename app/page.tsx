import type { Metadata } from "next";
import LandingPage from "@/component/landing-page";

export const metadata: Metadata = {
  title: "BukuKonter — Aplikasi Pencatatan Penjualan & Servis HP untuk Konter",
  description:
    "BukuKonter adalah aplikasi kasir digital, pencatatan penjualan, manajemen stok, dan servis HP khusus untuk pemilik konter pulsa, HP, dan aksesori di Indonesia. Gratis 14 hari, tanpa kartu kredit.",
  keywords: [
    "aplikasi konter pulsa",
    "aplikasi kasir konter",
    "pencatatan penjualan konter",
    "manajemen stok konter",
    "aplikasi servis hp",
    "buku konter digital",
    "pos kasir konter",
    "aplikasi konter hp",
    "laporan penjualan konter",
    "software konter pulsa indonesia",
  ],
  authors: [{ name: "BukuKonter", url: "https://bukukonter.my.id" }],
  creator: "BukuKonter",
  publisher: "BukuKonter",
  metadataBase: new URL("https://bukukonter.my.id"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://bukukonter.my.id",
    siteName: "BukuKonter",
    title: "BukuKonter — Aplikasi Kasir & Servis HP untuk Konter",
    description:
      "Kelola penjualan, stok, servis HP, dan laporan keuangan kontermu dalam satu aplikasi. Lebih dari 12.000 konter aktif di 500+ kota Indonesia.",
    images: [
      {
        url: "/logodiginova.jpeg",
        width: 1200,
        height: 630,
        alt: "BukuKonter — Aplikasi Pencatatan Penjualan Konter",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BukuKonter — Aplikasi Kasir & Servis HP untuk Konter",
    description:
      "Kelola penjualan, stok, servis HP, dan laporan keuangan kontermu dalam satu aplikasi.",
    images: ["/logodiginova.jpeg"],
    creator: "@bukukonter",
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
  icons: {
    icon: "/logodiginova.jpeg",
    shortcut: "/logodiginova.jpeg",
    apple: "/logodiginova.jpeg",
  },
  manifest: "/site.webmanifest",
  category: "technology",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "BukuKonter",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web, Android, iOS",
  description:
    "Aplikasi kasir digital, pencatatan penjualan, manajemen stok, dan servis HP khusus untuk pemilik konter pulsa, HP, dan aksesori di Indonesia.",
  url: "https://bukukonter.id",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "IDR",
    priceValidUntil: "2026-12-31",
    availability: "https://schema.org/InStock",
    description: "Gratis 14 hari, tidak perlu kartu kredit",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "1200",
    bestRating: "5",
    worstRating: "1",
  },
  author: {
    "@type": "Organization",
    name: "BukuKonter",
    url: "https://bukukonter.my.id",
    logo: "https://bukukonter.id/logo.png",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      availableLanguage: "Indonesian",
    },
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="w-full mx-auto">
        <LandingPage />
      </div>
    </>
  );
}
