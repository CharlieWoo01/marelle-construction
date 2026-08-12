import { CheckCircle2, Clock, HandCoins, HeartHandshake, Mail, Phone } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import ReviewCard from "@/components/ReviewCard";
import Container from "@/components/Container";
import Button from "@/components/Button";
import { services } from "@/data/services";
import { reviews } from "@/data/reviews";

const capabilities = [
  "New builds and extensions",
  "Full and partial renovations",
  "Kitchen and bathroom fit-outs",
  "General property maintenance",
  "Roofing and guttering",
  "Groundwork and driveways",
];

const whyChooseUs: { icon: LucideIcon; title: string; description: string }[] = [
  {
    icon: HandCoins,
    title: "Clear, Honest Quotes",
    description: "No hidden costs: every quote is itemised and explained up front.",
  },
  {
    icon: CheckCircle2,
    title: "Skilled & Insured",
    description: "Experienced tradespeople, fully insured on every job we take on.",
  },
  {
    icon: Clock,
    title: "On Time, On Budget",
    description: "Realistic timelines and budgets, with clear communication throughout.",
  },
  {
    icon: HeartHandshake,
    title: "Aftercare You Can Trust",
    description: "We stand behind our work long after the final coat of paint.",
  },
];

export default function Home() {
  return (
    <>
      <Hero
        eyebrow="Marelle Construction Services"
        headingLines={["Building with Pride.", "Delivering with Care."]}
        description="From extensions and renovations to ongoing property maintenance, we deliver quality workmanship across [Area] and the surrounding areas, trusted by homeowners from first quote to final finish."
        primaryCta={{ label: "Get a Quote", href: "/quote" }}
        secondaryCta={{ label: "Our Services", href: "/services" }}
      />

      <TrustBar />

      {/* Our Services */}
      <section className="bg-brand-white">
        <Container className="py-section">
          <SectionHeading
            eyebrow="What We Offer"
            title="Our Services"
            description="A full range of building, renovation and property improvement services, delivered start to finish by our own trusted team."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <ServiceCard key={service.slug} {...service} />
            ))}
          </div>
          <div className="mt-10">
            <Button href="/services" variant="secondary">
              View All Services
            </Button>
          </div>
        </Container>
      </section>

      {/* What We Do (lighter, architectural-style background) */}
      <section className="bg-architectural">
        <Container className="grid gap-10 py-section lg:grid-cols-2 lg:items-center">
          <SectionHeading
            eyebrow="What We Do"
            title="One team, start to finish"
            description="Marelle Construction Services handles every stage of your project, from the first conversation and design through to build, finishing and aftercare, so you deal with one trusted team throughout."
          />
          <ul className="grid gap-3 sm:grid-cols-2">
            {capabilities.map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-neutral-700">
                <CheckCircle2 className="mt-0.5 shrink-0 text-brand-red" size={18} aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Why Choose Us */}
      <section className="bg-brand-white">
        <Container className="py-section">
          <SectionHeading
            eyebrow="Why Choose Us"
            title="Built on trust, delivered with care"
            align="center"
          />
          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {whyChooseUs.map(({ icon: Icon, title, description }) => (
              <div key={title} className="text-center">
                <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-brand-red-light">
                  <Icon className="text-brand-red" size={22} aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-lg font-semibold text-brand-black">{title}</h3>
                <p className="mt-2 text-sm text-neutral-600">{description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Get in Touch */}
      <section className="bg-brand-black text-brand-white">
        <Container className="flex flex-col items-center gap-6 py-section text-center">
          <h2 className="text-3xl font-semibold sm:text-4xl">Get in Touch</h2>
          <p className="max-w-xl text-neutral-300">
            Ready to start your project? Get in touch for a free,
            no-obligation quote. We&rsquo;re happy to talk through your
            ideas.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-4">
            <Button href="/quote" variant="primary">
              Get a Quote
            </Button>
            <a
              href="tel:07766023224"
              className="flex items-center gap-2 text-sm font-medium transition-colors hover:text-brand-red"
            >
              <Phone size={16} aria-hidden="true" />
              07766 023 224
            </a>
            <a
              href="mailto:marellecs@outlook.com"
              className="flex items-center gap-2 text-sm font-medium transition-colors hover:text-brand-red"
            >
              <Mail size={16} aria-hidden="true" />
              marellecs@outlook.com
            </a>
          </div>
        </Container>
      </section>

      {/* Customer reviews */}
      <section className="bg-brand-white">
        <Container className="py-section">
          <SectionHeading
            eyebrow="Customer Reviews"
            title="What our customers say"
            align="center"
          />
          <p className="mx-auto mt-2 max-w-xl text-center text-xs text-neutral-500">
            Example testimonials shown for now. To be replaced with real,
            verified customer reviews.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {reviews.map((review) => (
              <ReviewCard key={review.name} {...review} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
