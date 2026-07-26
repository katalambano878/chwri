import type { Metadata } from "next";

const SITE_NAME = "CHWRI";
const DEFAULT_OG_IMAGE = "/images/chwri-logo-og.webp";

export function buildPageMetadata(
  title: string,
  description: string,
  pathname: string
): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: pathname,
    },
    openGraph: {
      title: `${title} | ${SITE_NAME}`,
      description,
      url: pathname,
      siteName: SITE_NAME,
      locale: "en_US",
      type: "website",
      images: [
        {
          url: DEFAULT_OG_IMAGE,
          width: 1200,
          height: 800,
          alt: "CHWRI logo",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${SITE_NAME}`,
      description,
      images: [DEFAULT_OG_IMAGE],
    },
  };
}
