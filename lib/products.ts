export interface Product {
  id: string;
  name: string;
  slug: string;
  status: "available" | "coming-soon";
  shortDescription: string;
  category?: string;
  featured?: boolean;
}

export const products: Product[] = [
  {
    id: "inspection",
    name: "Rocket Inspection",
    slug: "inspection",
    status: "available",
    shortDescription:
      "Streamline property inspections with structured workflows and instant reporting.",
    category: "Operations",
    featured: true,
  },
  {
    id: "inbox",
    name: "Rocket Inbox",
    slug: "email",
    status: "coming-soon",
    shortDescription:
      "Centralize communication and email workflows for your operations team.",
    category: "Communication",
  },
  {
    id: "maintenance",
    name: "Rocket Maintenance",
    slug: "maintenance",
    status: "coming-soon",
    shortDescription:
      "Triage and resolve maintenance requests with intelligent routing and tracking.",
    category: "Operations",
  },
  {
    id: "documents",
    name: "Rocket Documents",
    slug: "documents",
    status: "coming-soon",
    shortDescription:
      "Organize, search, and manage operational documentation in one place.",
    category: "Documentation",
  },
  {
    id: "onboarding",
    name: "Rocket Onboarding",
    slug: "onboarding",
    status: "coming-soon",
    shortDescription:
      "Automate tenant onboarding with guided workflows and digital checklists.",
    category: "Operations",
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}

export function getAvailableProducts(): Product[] {
  return products.filter((product) => product.status === "available");
}
