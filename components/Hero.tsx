import Button from "./Button";
import Container from "./Container";

type HeroCta = {
  label: string;
  href: string;
};

type HeroProps = {
  eyebrow?: string;
  /** Each entry renders on its own line, e.g. ["Building with Pride.", "Delivering with Care."] */
  headingLines: string[];
  description: string;
  primaryCta: HeroCta;
  secondaryCta: HeroCta;
};

export default function Hero({
  eyebrow,
  headingLines,
  description,
  primaryCta,
  secondaryCta,
}: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-brand-black text-brand-white">
      {/* Subtle accent pattern standing in for real project photography */}
      <div
        className="pointer-events-none absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, var(--color-brand-red) 0, var(--color-brand-red) 2px, transparent 2px, transparent 40px)",
        }}
        aria-hidden="true"
      />

      <Container className="relative flex flex-col gap-6 py-section">
        {eyebrow && (
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-red">
            {eyebrow}
          </p>
        )}
        <h1 className="max-w-2xl text-4xl font-semibold sm:text-5xl">
          {headingLines.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h1>
        <p className="max-w-xl text-base text-neutral-300">{description}</p>
        <div className="flex flex-wrap gap-4 pt-2">
          <Button href={primaryCta.href} variant="primary">
            {primaryCta.label}
          </Button>
          <Button
            href={secondaryCta.href}
            variant="ghost"
            className="border-white/20 text-brand-white hover:border-white"
          >
            {secondaryCta.label}
          </Button>
        </div>
      </Container>
    </section>
  );
}
