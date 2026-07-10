export type ProductStatus = "live" | "coming-soon";

export interface Product {
  id: string;
  name: string;
  status: ProductStatus;
  href?: string;
  logo?: string;
}

export const products: Product[] = [
  {
    id: "inspection",
    name: "Rocket Inspection App",
    status: "live",
    href: "/inspection",
    logo: "/brand/rocket-inspection-logo.png",
  },
  {
    id: "pm-dashboard",
    name: "Rocket PM Dashboard",
    status: "live",
    href: "/dashboard",
  },
  {
    id: "maintenance-triage",
    name: "Rocket Maintenance Triage",
    status: "coming-soon",
  },
  {
    id: "documents",
    name: "Rocket Documents",
    status: "coming-soon",
  },
  {
    id: "tenant-onboarding",
    name: "Rocket Tenant Onboarding",
    status: "coming-soon",
  },
];
