import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { COMPANY, ROUTES } from "@/lib/constants";

const footerLinks = [
  { label: "Contact", href: ROUTES.contact },
  { label: "Privacy Policy", href: ROUTES.privacy },
  { label: "Terms of Service", href: ROUTES.terms },
] as const;

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-rl-border py-12">
      <Container className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-medium text-rl-text">{COMPANY.shortName}</p>
          <p className="mt-1 text-sm text-rl-text-muted">
            © {year} {COMPANY.name}
          </p>
        </div>

        <nav
          className="flex flex-col gap-3 sm:flex-row sm:gap-8"
          aria-label="Footer navigation"
        >
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="min-h-11 text-sm text-rl-text-muted transition-colors hover:text-rl-text sm:min-h-0 sm:py-0"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </Container>
    </footer>
  );
}
