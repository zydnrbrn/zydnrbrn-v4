## Why

The portfolio website at zidansajid.me is currently using placeholder/template data from the original boilerplate (dillionverma/portfolio). The projects section shows fake projects, the domain configuration points to an old URL, there are typos in the content, and the contact section is non-functional. These issues make the portfolio unprofessional and misrepresent the owner's actual work.

## What Changes

- **Fix domain and SEO metadata**: Update `DATA.url` from `https://zydnrbrn.tech` to `https://zidansajid.me`, ensure OpenGraph/Twitter cards reference the correct domain
- **Fix content typos and quality**: Correct "Self-taugh" → "Self-taught", "curiousity" → "curiosity", fix `showHackatons` typo, rewrite the generic summary to be more authentic
- **Restructure projects data**: Extract projects into a dedicated `src/data/projects.tsx` file with a proper TypeScript interface, remove all placeholder projects, prepare the structure for real project entries
- **Improve contact section**: Replace generic "shoot me a dm" text with an actionable contact CTA linking to email or LinkedIn
- **Update Next.js config**: Add `images.remotePatterns` for external project screenshots
- **Clean up dead data**: Remove placeholder hackathon data, fix broken logo references (`logoUrl: "#"`) with proper fallback handling
- **Fix placeholder phone number**: Remove or replace `+6212345678902`

## Capabilities

### New Capabilities
- `project-data-structure`: Typed project data module (`src/data/projects.tsx`) with a `Project` interface, separated from resume data for independent maintainability
- `portfolio-seo`: Correct domain, metadata, and OpenGraph configuration for zidansajid.me

### Modified Capabilities
<!-- No existing specs to modify -->

## Impact

- **Files modified**: `src/data/resume.tsx`, `src/app/layout.tsx`, `src/app/page.tsx`, `next.config.mjs`, `src/components/project-card.tsx` (minor)
- **New files**: `src/data/projects.tsx`
- **Dependencies**: No new dependencies required
- **Deployment**: Domain needs to be configured in Vercel to serve from zidansajid.me
- **Breaking changes**: None — this is a content and configuration update
