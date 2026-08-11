import type { Metadata } from "next";
import Container from "@/components/Container";

export const metadata: Metadata = {
  title: "About",
  description: "Information about Marelle Construction Services.",
};

export default function AboutPage() {
  return (
    <Container className="py-section">
      <h1 className="text-3xl font-semibold text-brand-black sm:text-4xl">
        About Us
      </h1>
      <p className="mt-4 max-w-2xl text-neutral-600">
        Information about Marelle Construction Services will be presented
        here.
      </p>
    </Container>
  );
}
