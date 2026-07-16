## 1. Fix Resume Data & Content

- [x] 1.1 Fix typos in `src/data/resume.tsx`: "Self-taugh" → "Self-taught", "curiousity" → "curiosity"
- [x] 1.2 Rewrite `DATA.summary` to be concise and authentic (remove repetitive "I'm a" patterns)
- [x] 1.3 Update `DATA.url` from `https://zydnrbrn.tech` to `https://zidansajid.me`
- [x] 1.4 Rename `showHackatons` to `showHackathons` and update reference in `src/app/page.tsx`
- [x] 1.5 Replace `logoUrl: "#"` with empty string for Torche and SID work entries
- [x] 1.6 Fix or remove placeholder phone number (`DATA.contact.tel`)
- [x] 1.7 Remove all hackathon placeholder data (keep empty array)

## 2. Create Project Data Module

- [x] 2.1 Create `src/data/projects.tsx` with `Project` TypeScript interface
- [x] 2.2 Export a `PROJECTS` const array (initially empty or with real projects if available)
- [x] 2.3 Import `PROJECTS` into `src/data/resume.tsx` and assign to `DATA.projects`
- [x] 2.4 Remove all placeholder project entries (Chat Collect, Magic UI, llm.report, Automatic Chat)

## 3. Update SEO & Next.js Configuration

- [x] 3.1 Add `images.remotePatterns` to `next.config.mjs` for GitHub raw, Vercel blob, and common image hosts
- [x] 3.2 Verify OpenGraph metadata in `src/app/layout.tsx` references correct domain and content

## 4. Improve Contact Section

- [x] 4.1 Update contact section text in `src/app/page.tsx` with professional copy
- [x] 4.2 Add mailto link and LinkedIn link as actionable CTAs in the contact section

## 5. Handle Missing Logo Fallbacks

- [x] 5.1 Update `ResumeCard` component to conditionally render avatar only when `logoUrl` is a non-empty valid string

## 6. Verification

- [x] 6.1 Run `next build` to verify no TypeScript or build errors
- [x] 6.2 Verify projects section renders correctly (empty state or with entries)
- [x] 6.3 Verify metadata output includes correct domain in page source
