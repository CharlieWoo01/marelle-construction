export type Review = {
  name: string;
  location: string;
  quote: string;
};

/**
 * Placeholder testimonials for layout purposes only. Per README's Reviews
 * section, these must not be presented as Google/Trustpilot reviews unless
 * they genuinely originate from and are verified by that platform. Replace
 * with real, attributed customer reviews before launch.
 */
export const reviews: Review[] = [
  {
    name: "Sarah H.",
    location: "Denton",
    quote:
      "From the first quote to the final coat of paint, the team were brilliant. Our extension looks fantastic and they left the place spotless every day.",
  },
  {
    name: "James P.",
    location: "Hyde",
    quote:
      "Really clear communication throughout our kitchen renovation. No surprises, finished on the date they promised.",
  },
  {
    name: "Emma & Dan R.",
    location: "Stalybridge",
    quote:
      "We've used them twice now for maintenance work. Reliable, tidy and fairly priced. Wouldn't go anywhere else.",
  },
];
