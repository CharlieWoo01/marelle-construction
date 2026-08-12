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
    <div className="border-b border-neutral-200 bg-neutral-50">
      <Container className="py-10">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {trustItems.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex flex-col items-center gap-3 rounded-lg border border-neutral-200 bg-brand-white p-5 text-center shadow-card"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-red-light">
                <Icon className="text-brand-red" size={20} aria-hidden="true" />
              </span>
              <span className="text-sm font-semibold text-brand-black">{label}</span>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
