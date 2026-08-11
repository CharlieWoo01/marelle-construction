export type NavLink = {
  label: string;
  href: string;
};

/**
 * Primary site navigation. `Get a Quote` is always the primary call to action
 * and should be styled/positioned as such wherever this list is rendered.
 */
export const primaryNav: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "People", href: "/people" },
];

export const quoteLink: NavLink = { label: "Get a Quote", href: "/quote" };
