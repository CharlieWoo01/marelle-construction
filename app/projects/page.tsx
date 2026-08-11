import type { Metadata } from "next";
import Container from "@/components/Container";

export const metadata: Metadata = {
  title: "Projects",
  description: "A portfolio of completed work by Marelle Construction Services.",
};

export default function ProjectsPage() {
  return (
    <Container className="py-section">
      <h1 className="text-3xl font-semibold text-brand-black sm:text-4xl">
        Projects
      </h1>
      <p className="mt-4 max-w-2xl text-neutral-600">
        A portfolio of completed work will be displayed here.
      </p>
    </Container>
  );
}
