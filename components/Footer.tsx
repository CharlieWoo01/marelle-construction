import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { primaryNav, quoteLink } from "@/data/navigation";
import Container from "./Container";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-black text-brand-white">
      <Container className="grid gap-10 py-section sm:grid-cols-2 md:grid-cols-3">
        <div>
          <p className="font-display text-lg font-semibold">
            Marelle <span className="text-brand-red">Construction</span>
          </p>
          <p className="mt-3 max-w-xs text-sm text-neutral-400">
            Building, renovation, maintenance and property improvement
            services across Tameside and the surrounding areas.
          </p>
        </div>

        <nav aria-label="Footer" className="flex flex-col gap-2">
          {[...primaryNav, quoteLink].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-neutral-300 transition-colors hover:text-brand-red"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-col gap-3 text-sm text-neutral-300">
          <a
            href="tel:07766023224"
            className="flex items-center gap-2 transition-colors hover:text-brand-red"
          >
            <Phone size={16} aria-hidden="true" />
            07766 023 224
          </a>
          <a
            href="mailto:marellecs@outlook.com"
            className="flex items-center gap-2 transition-colors hover:text-brand-red"
          >
            <Mail size={16} aria-hidden="true" />
            marellecs@outlook.com
          </a>
          <span className="flex items-center gap-2">
            <MapPin size={16} aria-hidden="true" />
            Tameside &amp; surrounding areas
          </span>
        </div>
      </Container>

      <div className="border-t border-white/10 py-6">
        <Container>
          <p className="text-xs text-neutral-500">
            &copy; {year} Marelle Construction Services. All rights reserved.
          </p>
        </Container>
      </div>
    </footer>
  );
}
