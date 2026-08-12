import type { NextConfig } from "next";

// GitHub Pages serves the repo as a static site under /<repo-name>/, and has
// no server runtime: no API routes, no on-demand rendering. The GitHub
// Actions deploy workflow (.github/workflows/deploy-pages.yml) sets
// GITHUB_PAGES=true so only that build gets a static export with the
// project's base path; `pnpm dev`/`pnpm build` locally, and any future
// Vercel deploy, stay a normal Next.js server build.
//
// NOTE: once the /api/quote route handler (or anything else needing a
// server) is added, this repo can no longer also ship as a static export.
// Revisit hosting at that point, per the README's Deployment section.
const isGithubPagesBuild = process.env.GITHUB_PAGES === "true";
const repoName = "marelle-construction";

const nextConfig: NextConfig = {
  ...(isGithubPagesBuild && {
    output: "export",
    images: { unoptimized: true },
    basePath: `/${repoName}`,
    assetPrefix: `/${repoName}/`,
  }),
  trailingSlash: isGithubPagesBuild,
};

export default nextConfig;
