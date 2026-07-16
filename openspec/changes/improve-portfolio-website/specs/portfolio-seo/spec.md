## ADDED Requirements

### Requirement: Domain URL is configured correctly
The `DATA.url` field SHALL be set to `https://zidansajid.me`.

#### Scenario: Metadata base URL
- **WHEN** Next.js generates metadata
- **THEN** `metadataBase` resolves to `https://zidansajid.me`

#### Scenario: OpenGraph URL
- **WHEN** a page renders OpenGraph meta tags
- **THEN** the `og:url` value uses `zidansajid.me` domain

### Requirement: OpenGraph metadata is complete
The site SHALL generate valid OpenGraph metadata including title, description, url, siteName, locale, and type.

#### Scenario: Homepage OpenGraph tags
- **WHEN** viewing the homepage source
- **THEN** og:title is "Zidan Khulul Sajid", og:site_name is "Zidan Khulul Sajid", og:type is "website"

### Requirement: Twitter card metadata is configured
The site SHALL include Twitter card metadata with `summary_large_image` card type.

#### Scenario: Twitter card renders
- **WHEN** the page is shared on Twitter/X
- **THEN** it displays as a large image card with the correct title

### Requirement: Next.js image configuration allows external sources
The `next.config.mjs` SHALL include `images.remotePatterns` that allow loading images from common hosting domains.

#### Scenario: External project screenshot loads
- **WHEN** a project entry has an image URL from an external host (e.g., GitHub raw content, Vercel blob storage)
- **THEN** Next.js `Image` component loads it without build errors

#### Scenario: Build succeeds with remote images
- **WHEN** running `next build`
- **THEN** no "Invalid src" errors occur for configured remote image patterns

### Requirement: Contact section has actionable links
The contact section SHALL display a professional message with a direct link to email (mailto) and optionally LinkedIn.

#### Scenario: Email link is present
- **WHEN** viewing the contact section
- **THEN** a clickable link to `mailto:zidanreborn@gmail.com` is displayed

#### Scenario: Contact text is professional
- **WHEN** reading the contact section copy
- **THEN** it does not contain generic placeholder text like "shoot me a dm" without context
