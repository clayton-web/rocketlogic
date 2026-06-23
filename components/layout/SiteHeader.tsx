"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { Container } from "@/components/ui/Container";
import { NAV_LINKS, ROUTES } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled ? "border-b border-rl-border bg-rl-bg/90 backdrop-blur-md" : "",
      )}
    >
      <Container
        as="div"
        className="flex h-14 max-w-5xl items-center justify-between lg:h-16"
      >
        <Logo width={120} height={36} priority />

        <nav
          className="hidden items-center gap-7 md:flex"
          aria-label="Primary navigation"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-rl-text-muted transition-colors hover:text-rl-text"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href={ROUTES.inspection}
            className="text-sm text-rl-text-muted transition-colors hover:text-rl-text"
          >
            Inspection
          </Link>
        </nav>

        <button
          type="button"
          className="inline-flex min-h-11 min-w-11 items-center justify-center text-rl-text-muted md:hidden"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
            {menuOpen ? (
              <path
                d="M4 4L14 14M14 4L4 14"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M2 5H16M2 9H16M2 13H16"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </Container>

      {menuOpen ? (
        <div className="border-t border-rl-border bg-rl-bg md:hidden">
          <Container className="flex max-w-5xl flex-col py-3">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="min-h-11 py-2.5 text-sm text-rl-text-muted transition-colors hover:text-rl-text"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href={ROUTES.inspection}
              className="min-h-11 py-2.5 text-sm text-rl-text-muted transition-colors hover:text-rl-text"
              onClick={() => setMenuOpen(false)}
            >
              Inspection
            </Link>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
