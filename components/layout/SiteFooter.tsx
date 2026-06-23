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
    <footer className="border-t border-rl-border py-10">
      <Container className="flex max-w-5xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-rl-text-muted">
          © {year} {COMPANY.name}
        </p>

        <nav
          className="flex flex-wrap gap-x-5 gap-y-2"
          aria-label="Footer navigation"
        >
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="min-h-11 text-xs text-rl-text-muted transition-colors hover:text-rl-text sm:min-h-0"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </Container>
    </footer>
  );
}
