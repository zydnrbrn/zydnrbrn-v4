## ADDED Requirements

### Requirement: Project data module exists as separate file
The system SHALL have a dedicated `src/data/projects.tsx` file that exports a typed array of project entries and a `Project` TypeScript interface.

#### Scenario: Projects file exports typed data
- **WHEN** the application builds
- **THEN** `src/data/projects.tsx` exports a `PROJECTS` const array typed as `readonly Project[]`

#### Scenario: Project interface defines required fields
- **WHEN** a developer adds a new project entry
- **THEN** TypeScript enforces the presence of `title`, `description`, `href`, `dates`, `technologies`, and `links` fields

### Requirement: Project interface includes all display fields
The `Project` interface SHALL define the following fields: `title` (string), `href` (string), `description` (string), `dates` (string), `active` (boolean), `technologies` (readonly string[]), `links` (readonly array of link objects with `type`, `href`, `icon`), `image` (optional string), `video` (optional string).

#### Scenario: Optional media fields
- **WHEN** a project entry omits `image` and `video`
- **THEN** the project card renders without a media header and no errors occur

#### Scenario: Technologies render as badges
- **WHEN** a project has a `technologies` array with entries
- **THEN** each technology string renders as a badge in the project card

### Requirement: Projects are consumed by the main page
The main page (`src/app/page.tsx`) SHALL import and render projects from `src/data/projects.tsx` via the `DATA` object or direct import.

#### Scenario: Page renders projects from the data file
- **WHEN** the homepage loads
- **THEN** the projects section displays all entries from the `PROJECTS` array

#### Scenario: Empty projects array renders no cards
- **WHEN** the `PROJECTS` array is empty
- **THEN** the projects section heading still displays but no project cards are rendered

### Requirement: Placeholder projects are removed
The system SHALL NOT contain any template/placeholder project entries (Chat Collect, Magic UI, llm.report, Automatic Chat).

#### Scenario: No template data present
- **WHEN** inspecting `src/data/projects.tsx`
- **THEN** no project entry has `href` pointing to chatcollect.com, magicui.design, llm.report, or automatic.chat

### Requirement: Resume data file is cleaned up
The `src/data/resume.tsx` file SHALL have all typos fixed, placeholder data removed, and correct contact information.

#### Scenario: No typos in description
- **WHEN** reading `DATA.description`
- **THEN** it contains "Self-taught" (not "Self-taugh") and "curiosity" (not "curiousity")

#### Scenario: Summary is rewritten
- **WHEN** reading `DATA.summary`
- **THEN** it does not contain repetitive "I'm a" patterns and reads as authentic, concise prose

#### Scenario: Hackathons flag is correctly named
- **WHEN** checking the DATA object
- **THEN** the field is named `showHackathons` (not `showHackatons`)

#### Scenario: Work entries have valid logo URLs
- **WHEN** a work entry has no available logo
- **THEN** its `logoUrl` is an empty string (not `"#"`)

#### Scenario: Contact phone is valid or removed
- **WHEN** reading `DATA.contact.tel`
- **THEN** it contains a real phone number or is an empty string
