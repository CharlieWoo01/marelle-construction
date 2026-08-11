# Marelle Construction Services

Website for **Marelle Construction Services**, a freelance construction business providing building, renovation, maintenance and property improvement services.

The website is designed to showcase services and completed projects, introduce the people behind the business, build trust with prospective customers and provide a simple way to request a quote.

## Tech Stack

- [Next.js](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Lucide React](https://lucide.dev/) - Icons
- [React Hook Form](https://react-hook-form.com/) - Form handling
- [Zod](https://zod.dev/) - Form and server-side validation
- [Resend](https://resend.com/) - Quote enquiry emails
- [Vercel](https://vercel.com/) - Hosting and deployment

## Pages

The website consists of the following primary pages:

| Page | Route | Purpose |
| --- | --- | --- |
| Home | `/` | Main landing page and business overview |
| Services | `/services` | Construction and property services |
| About | `/about` | Information about Marelle Construction Services |
| Projects | `/projects` | Portfolio of completed work |
| Project | `/projects/[slug]` | Individual project details and gallery |
| People | `/people` | People behind the business |
| Get a Quote | `/quote` | Customer enquiry and quote request form |

## Project Structure

```text
marelle-construction/
├── app/
│   ├── page.tsx
│   ├── services/
│   │   └── page.tsx
│   ├── about/
│   │   └── page.tsx
│   ├── projects/
│   │   ├── page.tsx
│   │   └── [slug]/
│   │       └── page.tsx
│   ├── people/
│   │   └── page.tsx
│   ├── quote/
│   │   └── page.tsx
│   └── api/
│       └── quote/
│           └── route.ts
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── ServiceCard.tsx
│   ├── ProjectCard.tsx
│   ├── ReviewCard.tsx
│   ├── TrustBar.tsx
│   └── QuoteForm.tsx
├── data/
│   ├── services.ts
│   ├── projects.ts
│   └── reviews.ts
└── public/
    ├── images/
    └── logo/
```

## Getting Started

### Requirements

Ensure the following are installed:

* Node.js 22+
* pnpm

### Install dependencies

```bash
pnpm install
```

### Run locally

Start the development server:

```bash
pnpm dev
```

The application will be available at:

```text
http://localhost:3000
```

## Development

### Lint

```bash
pnpm lint
```

### Type checking

```bash
pnpm typecheck
```

### Production build

```bash
pnpm build
```

### Run production build

```bash
pnpm start
```

## Quote Enquiries

The `/quote` page provides the primary conversion flow for prospective customers.

Customers can provide:

* Name
* Email address
* Phone number
* Location/postcode
* Project type
* Project description
* Budget range
* Desired start timeframe

Forms are validated client-side and server-side using **Zod**.

Successful submissions are sent to Marelle Construction Services through **Resend**.

The application does not require a database for the initial implementation.

## Projects

Projects are initially stored as static application data.

For example:

```ts
export const projects = [
  {
    slug: "rear-extension-denton",
    title: "Rear Extension",
    location: "Denton",
    category: "Extensions",
    image: "/images/projects/rear-extension.jpg",
  },
];
```

This keeps the initial website lightweight while allowing the data source to be replaced by a CMS in the future.

## Reviews

Customer testimonials are displayed throughout the website to provide social proof.

Reviews should only be presented as originating from platforms such as Google or Trustpilot when they genuinely originate from and/or are verified by that platform.

Until an external review integration is implemented, reviews are maintained as website content.

## SEO

The website should be optimised for local search, including searches around:

* Builders in Tameside
* Construction services in Tameside
* Home extensions
* Property maintenance
* Home renovations
* Kitchen and bathroom renovations

Next.js metadata should be configured for every public page.

The site should also provide:

* Open Graph metadata
* Canonical URLs
* `sitemap.xml`
* `robots.txt`
* Structured data
* Descriptive image alt text
* Semantic HTML

SEO content should remain natural and useful rather than being written purely for keyword density.

## Design

The website follows the Marelle Construction Services visual identity:

* **Red** - primary brand and CTA colour
* **Black / charcoal** - high-impact sections and footer
* **White / light grey** - primary content backgrounds
* Strong, modern typography
* Large construction/project photography
* Red line/icon accents
* Generous spacing
* Clear calls to action

The design should remain consistent across desktop, tablet and mobile.

## Navigation

Primary navigation:

```text
Home
Services
About
Projects
People
Get a Quote
```

`Get a Quote` should always be presented as the primary call to action.

## Accessibility

All new functionality should consider accessibility from the outset.

This includes:

* Semantic HTML
* Keyboard-accessible navigation
* Visible focus states
* Accessible form labels
* Useful validation messages
* Appropriate colour contrast
* Descriptive image alt text
* Reduced unnecessary motion

## Performance

The website should remain lightweight and fast.

Where appropriate:

* Use `next/image`
* Optimise uploaded project photography
* Lazy-load below-the-fold imagery
* Avoid unnecessary client-side JavaScript
* Prefer Server Components where interaction is not required
* Minimise third-party scripts

## Deployment

Production is hosted using **Vercel**.

Deployments should be connected to the Git repository so that:

* Pull requests receive preview deployments
* The main branch deploys to production
* Environment variables are managed through Vercel
* HTTPS is enabled automatically

## Future Improvements

Potential future additions include:

* CMS integration for projects and reviews
* Google Reviews integration
* Trustpilot integration
* Additional team members
* Project before/after galleries
* Customer image uploads when requesting a quote
* Service-area landing pages
* Enhanced analytics and conversion tracking

## Contact

**Marelle Construction Services**

**Phone:** 07766 023 224
**Email:** [marellecs@outlook.com](mailto:marellecs@outlook.com)
**Area:** Tameside & surrounding areas

---

© 2026 Marelle Construction Services. All rights reserved.
