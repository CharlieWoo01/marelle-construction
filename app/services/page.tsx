import type { Metadata } from "next";
import Container from "@/components/Container";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Construction and property services offered by Marelle Construction Services.",
};

export default function ServicesPage() {
  return (
    <Container className="py-section">
      <h1 className="text-3xl font-semibold text-brand-black sm:text-4xl">
        Services
      </h1>
      <p className="mt-4 max-w-2xl text-neutral-600">
        Our full range of construction and property services will be listed
        here.
      </p>
    </Container>
  );
}
