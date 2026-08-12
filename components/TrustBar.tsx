import { Award, HardHat, MapPin, ShieldCheck } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Container from "./Container";

type TrustItem = {
  icon: LucideIcon;
  label: string;
};

const trustItems: TrustItem[] = [
  { icon: HardHat, label: "Experienced" },
  { icon: ShieldCheck, label: "Reliable" },
  { icon: Award, label: "Quality Workmanship" },
  { icon: MapPin, label: "Local & Trusted" },
];

export default function TrustBar() {
  return (
    <div className="border-b border-neutral-200 bg-brand-white">
      <Container className="grid grid-cols-2 gap-x-4 gap-y-4 py-6 sm:grid-cols-4">
        {trustItems.map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center justify-center gap-2 sm:justify-start">
            <Icon className="shrink-0 text-brand-red" size={20} aria-hidden="true" />
            <span className="text-sm font-semibold text-brand-black">{label}</span>
          </div>
        ))}
      </Container>
    </div>
  );
}
