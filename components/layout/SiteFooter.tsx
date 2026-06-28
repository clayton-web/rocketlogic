import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { COMPANY, ROUTES } from "@/lib/constants";

const footerLinks = [
  { label: "Contact", href: ROUTES.contact },
  { label: "Privacy", href: ROUTES.privacy },
  { label: "Terms", href: ROUTES.terms },
] as const;

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-rl-border">
      <Container className="flex flex-col gap-4 py-10 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-rl-text-subtle">
          © {year} {COMPANY.name}
        </p>

        <nav
          className="flex flex-wrap gap-x-6 gap-y-2"
          aria-label="Footer navigation"
        >
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-rl-text-subtle transition-colors hover:text-rl-text"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </Container>
    </footer>
  );
}
