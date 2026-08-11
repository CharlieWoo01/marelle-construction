import Container from "@/components/Container";

export default async function ProjectPage({
  params,
}: PageProps<"/projects/[slug]">) {
  const { slug } = await params;

  return (
    <Container className="py-section">
      <h1 className="text-3xl font-semibold text-brand-black sm:text-4xl">
        Project: {slug}
      </h1>
      <p className="mt-4 max-w-2xl text-neutral-600">
        Individual project details and gallery will be displayed here.
      </p>
    </Container>
  );
}
