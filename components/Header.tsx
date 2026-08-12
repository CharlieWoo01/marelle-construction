"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HardHat, Menu, X } from "lucide-react";
import { primaryNav, quoteLink, type NavLink } from "@/data/navigation";
import Container from "./Container";
import Button from "./Button";

function isActivePath(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  // Let keyboard users dismiss the mobile menu with Escape.
  useEffect(() => {
    if (!menuOpen) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setMenuOpen(false);
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  const renderLink = (link: NavLink, className: string, activeClassName: string) => {
    const active = isActivePath(pathname, link.href);
    return (
      <Link
        key={link.href}
        href={link.href}
        aria-current={active ? "page" : undefined}
        className={`${className} ${active ? activeClassName : ""}`}
        onClick={() => setMenuOpen(false)}
      >
        {link.label}
      </Link>
    );
  };

  return (
    <header className="border-b border-neutral-200 bg-brand-white">
      {/* This is an early work-in-progress mock-up. Remove once the real design is signed off. */}
      <div className="bg-brand-black text-brand-white">
        <Container className="flex items-center justify-center gap-2 py-1.5 text-center text-xs">
          <HardHat size={14} className="shrink-0 text-brand-red" aria-hidden="true" />
          <p>
            Placeholder site. This is a work-in-progress mock-up, not the
            final design.
          </p>
        </Container>
      </div>

      <Container className="flex h-20 items-center justify-between">
        <Link
          href="/"
          className="font-display text-xl font-semibold tracking-tight text-brand-black"
          onClick={() => setMenuOpen(false)}
        >
          Marelle <span className="text-brand-red">Construction</span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {primaryNav.map((link) =>
            renderLink(
              link,
              "border-b-2 border-transparent py-1 text-sm font-medium text-neutral-700 transition-colors hover:text-brand-red",
              "border-brand-red text-brand-red",
            ),
          )}
        </nav>

        <div className="hidden md:block">
          <Button href={quoteLink.href} variant="primary">
            {quoteLink.label}
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-brand-black md:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
        </button>
      </Container>

      {menuOpen && (
        <div id="mobile-nav" className="border-t border-neutral-200 bg-brand-white md:hidden">
          <Container className="flex flex-col gap-1 py-4">
            <nav aria-label="Primary" className="flex flex-col gap-1">
              {primaryNav.map((link) =>
                renderLink(
                  link,
                  "rounded-md px-2 py-2.5 text-sm font-medium text-neutral-700 transition-colors hover:bg-neutral-50 hover:text-brand-red",
                  "bg-neutral-50 text-brand-red",
                ),
              )}
            </nav>
            <Button
              href={quoteLink.href}
              variant="primary"
              className="mt-2"
              onClick={() => setMenuOpen(false)}
            >
              {quoteLink.label}
            </Button>
          </Container>
        </div>
      )}
    </header>
  );
}
