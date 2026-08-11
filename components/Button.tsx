import type { AnchorHTMLAttributes } from "react";
import Link from "next/link";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  variant?: "primary" | "secondary" | "ghost";
};

const variantClass: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary:
    "bg-brand-red text-brand-white hover:bg-brand-red-dark focus-visible:outline-brand-white",
  secondary:
    "bg-brand-black text-brand-white hover:bg-brand-charcoal focus-visible:outline-brand-red",
  ghost:
    "bg-transparent text-brand-black border border-neutral-300 hover:border-brand-black",
};

/**
 * Shared call-to-action button. `Get a Quote` should use the `primary`
 * variant wherever it appears, per the brand's primary CTA colour.
 */
export default function Button({
  href,
  variant = "primary",
  className = "",
  children,
  ...props
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-md px-5 py-2.5 text-sm font-semibold transition-colors ${variantClass[variant]} ${className}`}
      {...props}
    >
      {children}
    </Link>
  );
}
