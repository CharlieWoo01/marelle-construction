import Link from "next/link";
import { primaryNav, quoteLink } from "@/data/navigation";
import Container from "./Container";
import Button from "./Button";

export default function Header() {
  return (
    <header className="border-b border-neutral-200 bg-brand-white">
      <Container className="flex h-20 items-center justify-between">
        <Link
          href="/"
          className="font-display text-xl font-semibold tracking-tight text-brand-black"
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

        <Button href={quoteLink.href} variant="primary" className="hidden sm:inline-flex">
          {quoteLink.label}
        </Button>
      </Container>
    </header>
  );
}
