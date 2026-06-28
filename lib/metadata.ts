import type { Metadata } from "next";
import { COMPANY } from "./constants";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.rocketlogic.ca";

export const siteMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${COMPANY.shortName} — ${COMPANY.slogan}`,
    template: `%s | ${COMPANY.shortName}`,
  },
  description: COMPANY.description,
  keywords: [
    "Rocket Logic",
    "business software",
    "workflow automation",
    "operations software",
    "property inspections",
  ],
  authors: [{ name: COMPANY.name }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: COMPANY.shortName,
    title: `${COMPANY.shortName} — ${COMPANY.slogan}`,
    description: COMPANY.description,
    images: [
      {
        url: "/brand/rocket-logic-logo.png",
        width: 1200,
        height: 630,
        alt: `${COMPANY.name} logo`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${COMPANY.shortName} — ${COMPANY.slogan}`,
    description: COMPANY.description,
    images: ["/brand/rocket-logic-logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};
