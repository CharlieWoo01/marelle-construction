type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

/** Consistent eyebrow + heading + optional description used to open a page section. */
export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && (
        <p className="text-sm font-semibold uppercase tracking-widest text-brand-red">
          {eyebrow}
        </p>
      )}
      <h2 className="mt-2 text-3xl font-semibold text-brand-black sm:text-4xl">{title}</h2>
      {description && <p className="mt-4 text-neutral-600">{description}</p>}
    </div>
  );
}
