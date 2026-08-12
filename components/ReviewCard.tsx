import { Quote } from "lucide-react";
import type { Review } from "@/data/reviews";

export default function ReviewCard({ name, location, quote }: Review) {
  return (
    <figure className="flex h-full flex-col rounded-lg border border-neutral-200 bg-brand-white p-6 shadow-card">
      <Quote className="text-brand-red" size={22} aria-hidden="true" />
      <blockquote className="mt-4 flex-1 text-sm text-neutral-700">
        &ldquo;{quote}&rdquo;
      </blockquote>
      <figcaption className="mt-4 text-sm font-semibold text-brand-black">
        {name}
        <span className="block font-normal text-neutral-500">{location}</span>
      </figcaption>
    </figure>
  );
}
