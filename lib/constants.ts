export const COMPANY = {
  name: "Rocket Logic Inc.",
  shortName: "Rocket Logic",
  slogan: "Ignite Your Efficiency",
  description:
    "We build software to simplify business workflows.",
  mission: {
    lead: "Rocket Logic builds software that removes friction from everyday business operations.",
    body: "From inspections and communication to maintenance and documentation, our goal is simple:",
    closing: "Ignite Your Efficiency.",
  },
} as const;

export const ROUTES = {
  home: "/",
  inspection: "/inspection",
  contact: "/contact",
  privacy: "/privacy",
  terms: "/terms",
} as const;

export const NAV_LINKS = [
  { label: "Products", href: "#products" },
  { label: "Mission", href: "#mission" },
] as const;
