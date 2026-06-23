export const COMPANY = {
  name: "Rocket Logic Inc.",
  shortName: "Rocket Logic",
  slogan: "Ignite Your Efficiency",
  tagline:
    "Software designed to streamline inspections, communication, maintenance, documentation, and business operations.",
  credibility:
    "Built to help property managers, real estate professionals, and operations teams eliminate repetitive work.",
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
  { label: "Products", href: "#ecosystem" },
  { label: "Mission", href: "#mission" },
] as const;
