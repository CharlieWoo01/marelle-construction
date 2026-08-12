import { Mail, MapPin, Phone, ShieldCheck } from "lucide-react";
import { quoteLink } from "@/data/navigation";
import Container from "./Container";
import Button from "./Button";

const trustPoints = [
  {
    icon: MapPin,
    title: "Proudly Local",
    description:
      "Based in [Area], proud to serve customers across the surrounding areas.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Guaranteed",
    description:
      "Skilled, insured tradespeople and workmanship you can rely on.",
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-black text-brand-white">
      <Container className="grid gap-10 py-section md:grid-cols-3">
        {trustPoints.map(({ icon: Icon, title, description }) => (
          <div key={title}>
            <Icon className="text-brand-red" size={24} aria-hidden="true" />
            <p className="mt-3 font-display text-lg font-semibold">{title}</p>
            <p className="mt-2 max-w-xs text-sm text-neutral-400">{description}</p>
          </div>
        ))}

        <div>
          <p className="font-display text-lg font-semibold">
            Let&rsquo;s Build Something Great
          </p>
          <p className="mt-2 max-w-xs text-sm text-neutral-400">
            Get in touch for a free, no-obligation quote on your next
            project.
          </p>
          <Button href={quoteLink.href} variant="primary" className="mt-4">
            {quoteLink.label}
          </Button>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container className="flex flex-col gap-4 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-neutral-500">
            &copy; {year} Marelle Construction Services. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-neutral-300">
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
          </div>
        </Container>
      </div>
    </footer>
  );
}
