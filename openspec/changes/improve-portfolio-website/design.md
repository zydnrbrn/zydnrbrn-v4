## Context

This is a Next.js 14 portfolio website forked from dillionverma/portfolio. The site uses a single config file pattern (`src/data/resume.tsx`) that exports a `DATA` const driving all page sections. The site will be deployed on Vercel at zidansajid.me.

Current state:
- All content is in one monolithic `DATA` object in `src/data/resume.tsx`
- Projects section contains 4 placeholder entries from the template author
- Domain references point to `https://zydnrbrn.tech`
- Multiple typos in descriptions
- Contact section has no actionable CTA
- `next.config.mjs` has no image domain configuration
- Broken logo references (`logoUrl: "#"`) render incorrectly

## Goals / Non-Goals

**Goals:**
- Make the portfolio reflect real work and identity at zidansajid.me
- Separate project data into its own typed module for easy maintenance
- Fix all content errors (typos, placeholders, broken references)
- Ensure proper SEO/metadata for the correct domain
- Make contact section functional

**Non-Goals:**
- Redesigning the UI/layout (keeping the existing design system)
- Adding new pages or sections
- Setting up a CMS or dynamic data source (keeping static `as const` approach)
- Implementing a contact form with backend (just linking to existing channels)
- Adding new animations or component library dependencies

## Decisions

### 1. Extract projects into `src/data/projects.tsx`

**Decision**: Create a separate file with a typed `Project` interface and a `PROJECTS` const array, imported back into `resume.tsx` or consumed directly by `page.tsx`.

**Rationale**: Projects change more frequently than resume data. Separating them allows updating project entries without touching the rest of the config. The TypeScript interface ensures type safety when adding new entries.

**Alternatives considered**:
- Keep everything in `resume.tsx` — rejected because it's already 500+ lines and projects are semantically distinct
- Use MDX files per project — overkill for this use case, adds complexity with no benefit since projects don't need rich content rendering

### 2. Keep `as const` pattern (no CMS/API)

**Decision**: Continue using TypeScript `as const` assertions for all data.

**Rationale**: The site is a personal portfolio with infrequent updates. Static typing provides IDE autocomplete and compile-time validation. No runtime overhead, no API latency, no infrastructure to maintain.

### 3. Handle missing logos gracefully

**Decision**: Replace `logoUrl: "#"` with empty string and update `ResumeCard` to conditionally render the avatar only when a valid URL is provided.

**Rationale**: The current `#` value renders a broken image attempt. Empty string + conditional rendering is cleaner and matches how `ProjectCard` already handles optional images.

### 4. Contact section links to email

**Decision**: Update contact section text to be professional and link directly to `mailto:zidanreborn@gmail.com` with a secondary link to LinkedIn.

**Rationale**: Simplest approach that's immediately actionable. A contact form would require backend infrastructure which is out of scope.

### 5. Image remote patterns for project screenshots

**Decision**: Add `images.remotePatterns` in `next.config.mjs` to allow common image hosting domains (GitHub raw, Vercel blob, Cloudinary, etc.).

**Rationale**: When real project screenshots are added, they'll likely be hosted externally. Pre-configuring this avoids build failures when images are added later.

## Risks / Trade-offs

- **[Risk] Projects section will be empty initially** → Mitigation: Structure the data file with clear documentation/comments showing how to add entries. Add 1-2 real projects immediately if data is available.
- **[Risk] Domain change affects existing indexed URLs** → Mitigation: The old domain `zydnrbrn.tech` had no significant SEO presence, so redirect is nice-to-have but not critical.
- **[Risk] Breaking the `as const` type when restructuring** → Mitigation: Define explicit TypeScript interfaces so the compiler catches issues immediately.
