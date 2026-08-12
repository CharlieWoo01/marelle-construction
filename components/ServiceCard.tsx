import type { LucideIcon } from "lucide-react";

type ServiceCardProps = {
  title: string;
  description: string;
  icon: LucideIcon;
};

/**
 * Image card for a service. The top region is reserved for real project
 * photography once it's available — for now it shows an icon placeholder
 * so the layout is honest about its unfinished state rather than a broken
 * <Image>.
 */
export default function ServiceCard({ title, description, icon: Icon }: ServiceCardProps) {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-lg border border-neutral-200 bg-brand-white shadow-card">
      <div className="flex h-36 items-center justify-center bg-neutral-100">
        <Icon className="text-neutral-400" size={36} aria-hidden="true" />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-semibold text-brand-black">{title}</h3>
        <p className="mt-2 text-sm text-neutral-600">{description}</p>
      </div>
    </div>
  );
}
