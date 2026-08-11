import { HardHat, ShieldCheck, Hammer } from "lucide-react";
import Container from "@/components/Container";
import Button from "@/components/Button";

const trustPoints = [
  {
    icon: HardHat,
    title: "Experienced tradespeople",
    description: "Skilled, reliable work across every stage of your project.",
  },
  {
    icon: ShieldCheck,
    title: "Fully insured",
    description: "Peace of mind from first consultation to final handover.",
  },
  {
    icon: Hammer,
    title: "Built to last",
    description: "Quality workmanship on every extension, renovation and repair.",
  },
];

export default function Home() {
  return (
    <>
      <section className="bg-brand-black text-brand-white">
        <Container className="flex flex-col gap-6 py-section">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-red">
            Marelle Construction Services
          </p>
          <h1 className="max-w-2xl text-4xl font-semibold sm:text-5xl">
            Building, renovation and property improvement you can trust.
          </h1>
          <p className="max-w-xl text-base text-neutral-300">
            Serving [Area] and the surrounding areas with quality
            workmanship on extensions, renovations, maintenance and more.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <Button href="/quote" variant="primary">
              Get a Quote
            </Button>
            <Button href="/projects" variant="ghost" className="border-white/20 text-brand-white hover:border-white">
              View Our Work
            </Button>
          </div>
        </Container>
      </section>

      <section className="bg-brand-white">
        <Container className="grid gap-8 py-section sm:grid-cols-3">
          {trustPoints.map(({ icon: Icon, title, description }) => (
            <div key={title} className="rounded-lg border border-neutral-200 p-6 shadow-card">
              <Icon className="text-brand-red" size={28} aria-hidden="true" />
              <h2 className="mt-4 text-lg font-semibold text-brand-black">{title}</h2>
              <p className="mt-2 text-sm text-neutral-600">{description}</p>
            </div>
          ))}
        </Container>
      </section>
    </>
  );
}
