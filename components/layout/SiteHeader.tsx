"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Wordmark } from "@/components/brand/Wordmark";
import { Container } from "@/components/ui/Container";
import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
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
        "fixed inset-x-0 top-0 z-50 border-b bg-rl-bg transition-colors duration-200",
        scrolled ? "border-rl-border" : "border-transparent",
      )}
    >
      <Container className="flex h-14 items-center justify-between md:h-16">
        <Wordmark />

        <nav
          className="hidden items-center gap-8 md:flex"
          aria-label="Primary navigation"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-rl-text-muted transition-colors hover:text-rl-text focus-visible:outline-none focus-visible:text-rl-text"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-md text-rl-text-muted transition-colors hover:text-rl-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rl-blue focus-visible:ring-offset-2 focus-visible:ring-offset-rl-bg md:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
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
        <div
          id="mobile-nav"
          className="border-t border-rl-border bg-rl-bg md:hidden"
        >
          <Container className="flex flex-col py-2">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="min-h-11 py-2.5 text-sm text-rl-text-muted transition-colors hover:text-rl-text focus-visible:outline-none focus-visible:text-rl-text"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </Container>
        </div>
      ) : null}
    </header>
  );
}
