import type { Metadata } from "next";
import Container from "@/components/Container";

export const metadata: Metadata = {
  title: "Get a Quote",
  description:
    "Request a quote from Marelle Construction Services for your building, renovation or maintenance project.",
};

export default function QuotePage() {
  return (
    <Container className="py-section">
      <h1 className="text-3xl font-semibold text-brand-black sm:text-4xl">
        Get a Quote
      </h1>
      <p className="mt-4 max-w-2xl text-neutral-600">
        The quote request form will be available here.
      </p>
    </Container>
  );
}
