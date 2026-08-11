import type { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
  /** Maximum width token to constrain content to. Defaults to the standard content width. */
  width?: "narrow" | "content" | "wide";
};

const widthClass: Record<NonNullable<ContainerProps["width"]>, string> = {
  narrow: "max-w-narrow",
  content: "max-w-content",
  wide: "max-w-wide",
};

/**
 * Centred, gutter-padded content wrapper built on the shared container width
 * and gutter spacing design tokens defined in app/globals.css.
 */
export default function Container({
  children,
  className = "",
  width = "content",
}: ContainerProps) {
  return (
    <div className={`mx-auto w-full px-gutter ${widthClass[width]} ${className}`}>
      {children}
    </div>
  );
}
