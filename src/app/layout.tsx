import type { Metadata } from "next";
import { Source_Sans_3, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

const sourceSans = Source_Sans_3({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const sourceSerif = Source_Serif_4({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.chwri.org"),
  applicationName: "CHWRI",
  title: {
    default:
      "CHWRI | Centre for Health & Wellbeing Research and Interventions",
    template: "%s | CHWRI",
  },
  description:
    "CHWRI is a multidisciplinary health and wellbeing hub based in Walewale, Ghana, dedicated to improving health outcomes through innovative research and practical interventions.",
  keywords: [
    "health research Ghana",
    "wellbeing interventions Ghana",
    "public health research centre Ghana",
    "health systems strengthening Ghana",
    "community health interventions Ghana",
    "research and policy health Ghana",
    "CHWRI",
    "Centre for Health and Wellbeing Research",
    "Walewale Ghana",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "CHWRI | Centre for Health & Wellbeing Research and Interventions",
    description:
      "Advancing health outcomes and quality of life through innovative research and evidence-based interventions in Ghana and beyond.",
    url: "https://www.chwri.org",
    siteName: "CHWRI",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/chwri-logo.png",
        width: 1024,
        height: 558,
        alt: "CHWRI logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CHWRI | Centre for Health & Wellbeing Research and Interventions",
    description:
      "Advancing health outcomes and quality of life through innovative research and evidence-based interventions in Ghana and beyond.",
    images: ["/images/chwri-logo.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/images/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/images/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Centre for Health & Wellbeing Research and Interventions (CHWRI)",
  url: "https://www.chwri.org",
  logo: "https://www.chwri.org/images/chwri-logo.png",
  sameAs: [],
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: "contact@chwri.org",
      telephone: "+233553311101",
      areaServed: "GH",
      availableLanguage: ["en"],
    },
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Box 66",
    addressLocality: "Walewale",
    addressRegion: "North-East Region",
    addressCountry: "GH",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sourceSans.variable} ${sourceSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
