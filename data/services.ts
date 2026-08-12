import { Building2, Hammer, Paintbrush, Wrench } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type Service = {
  slug: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

export const services: Service[] = [
  {
    slug: "extensions",
    title: "Extensions",
    description:
      "Rear, side and double-storey extensions that add space without losing character.",
    icon: Building2,
  },
  {
    slug: "renovations",
    title: "Renovations",
    description:
      "Full property renovations, from structural work through to finishing touches.",
    icon: Hammer,
  },
  {
    slug: "kitchens-bathrooms",
    title: "Kitchens & Bathrooms",
    description:
      "Kitchen and bathroom refits designed and built around how you live.",
    icon: Paintbrush,
  },
  {
    slug: "property-maintenance",
    title: "Property Maintenance",
    description:
      "Ongoing repairs and maintenance to keep your property in top condition.",
    icon: Wrench,
  },
];
