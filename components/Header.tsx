"use client";

import { useState } from "react";
import Link from "next/link";
import { HardHat, Menu, X } from "lucide-react";
import { primaryNav, quoteLink } from "@/data/navigation";
import Container from "./Container";
import Button from "./Button";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="border-b border-neutral-200 bg-brand-white">
      {/* This is an early work-in-progress mock-up — remove once the real design is signed off. */}
      <div className="bg-brand-black text-brand-white">
        <Container className="flex items-center justify-center gap-2 py-1.5 text-center text-xs">
          <HardHat size={14} className="shrink-0 text-brand-red" aria-hidden="true" />
          <p>
            Placeholder site — this is a work-in-progress mock-up, not the
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
          {primaryNav.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-neutral-700 transition-colors hover:text-brand-red"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Button href={quoteLink.href} variant="primary" className="hidden md:inline-flex">
          {quoteLink.label}
        </Button>

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
              {primaryNav.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-md px-2 py-2.5 text-sm font-medium text-neutral-700 transition-colors hover:bg-neutral-50 hover:text-brand-red"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
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
