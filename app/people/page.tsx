import type { Metadata } from "next";
import Container from "@/components/Container";

export const metadata: Metadata = {
  title: "People",
  description: "The people behind Marelle Construction Services.",
};

export default function PeoplePage() {
  return (
    <Container className="py-section">
      <h1 className="text-3xl font-semibold text-brand-black sm:text-4xl">
        People
      </h1>
      <p className="mt-4 max-w-2xl text-neutral-600">
        The people behind Marelle Construction Services will be introduced
        here.
      </p>
    </Container>
  );
}
