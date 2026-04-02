# AGENTS.md

This file is the single source of truth for any agent (or developer) building this portfolio. Do not assume anything not written here. If something is ambiguous, leave a `TODO:` comment and flag it — do not invent.

---

## 1. project overview

Personal portfolio website for Keshav Jha, a backend/systems engineer at Oracle (MySQL InnoDB team). The site is inspired by https://www.ayushanand.dev/ in terms of layout structure and section flow, but is an original design — not a copy.

**Goal:** A clean, professional portfolio that signals deep systems/backend expertise. Every design and content decision should reinforce this identity.

**Framework:** Next.js 14 (App Router), TypeScript only. No JavaScript files. No backend server. Pure static generation where possible.

**Deployment target:** Vercel (static export compatible).

---

## 2. folder structure

```
keshav-portfolio/
├── public/
│   └── me.jpg                      # TODO: replace with actual headshot
│   # NOTE: No resume.pdf here. Resume is hosted on Google Drive (see Section 7).
├── src/
│   ├── app/
│   │   ├── layout.tsx              # root layout: fonts, ThemeProvider, metadata
│   │   ├── page.tsx                # home page — assembles all sections
│   │   ├── globals.css             # CSS variables, base resets, scrollbar styling
│   │   └── api/
│   │       └── medium/
│   │           └── route.ts        # GET handler: fetches + parses Medium RSS feed
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx          # top navigation bar
│   │   │   ├── SidebarLeft.tsx     # fixed left sidebar (social icons + vertical line)
│   │   │   ├── SidebarRight.tsx    # fixed right sidebar (email + vertical line)
│   │   │   └── Footer.tsx          # bottom footer strip
│   │   ├── sections/
│   │   │   ├── Hero.tsx            # full-screen hero section
│   │   │   ├── About.tsx           # about me + tech list + photo
│   │   │   ├── Experience.tsx      # tabbed experience section
│   │   │   ├── Projects.tsx        # project card grid + show more toggle
│   │   │   ├── Featured.tsx        # 2 featured projects (alternating layout)
│   │   │   ├── Blog.tsx            # latest Medium posts
│   │   │   └── Contact.tsx         # contact CTA
│   │   └── ui/
│   │       ├── ThemeToggle.tsx     # dark/light mode toggle button
│   │       ├── ProjectCard.tsx     # reusable card for project grid
│   │       ├── Tag.tsx             # reusable tech tag pill
│   │       └── SectionHeading.tsx  # reusable "01. heading ————" component
│   ├── data/
│   │   ├── experience.ts           # all experience entries (typed)
│   │   ├── projects.ts             # all project entries (typed)
│   │   └── meta.ts                 # site-wide constants (name, email, links, RESUME_URL)
│   ├── types/
│   │   └── index.ts                # shared TypeScript interfaces
│   └── lib/
│       └── medium.ts               # RSS fetch + parse utility
├── tailwind.config.ts
├── tsconfig.json
├── next.config.ts
├── .env.local                      # MEDIUM_USERNAME=@yourusername
├── README.md
└── AGENTS.md
```

---

## 3. color palette

### dark mode (default)

| token | value | usage |
|---|---|---|
| `--bg-primary` | `#0d0d0f` | page background |
| `--bg-secondary` | `#111114` | card backgrounds |
| `--bg-card` | `#16161a` | elevated card surfaces |
| `--accent` | `#00D9FF` | all accent elements: links, borders, tags, bullets |
| `--accent-subtle` | `rgba(0, 217, 255, 0.08)` | tag backgrounds |
| `--accent-border` | `rgba(0, 217, 255, 0.22)` | tag borders |
| `--text-primary` | `#e6f1ff` | headings, important text |
| `--text-secondary` | `#ccd6f6` | body text |
| `--text-muted` | `#8892b0` | captions, labels, placeholders |
| `--border` | `rgba(255, 255, 255, 0.07)` | card borders, dividers |
| `--border-hover` | `rgba(0, 217, 255, 0.25)` | card hover border |

### light mode

| token | value | usage |
|---|---|---|
| `--bg-primary` | `#f7f6f2` | page background (warm off-white) |
| `--bg-secondary` | `#fafaf8` | card backgrounds |
| `--bg-card` | `#ffffff` | elevated card surfaces |
| `--accent` | `#5b6af0` | all accent elements |
| `--accent-subtle` | `rgba(91, 106, 240, 0.08)` | tag backgrounds |
| `--accent-border` | `rgba(91, 106, 240, 0.22)` | tag borders |
| `--text-primary` | `#1a1a2e` | headings |
| `--text-secondary` | `#2d2d3a` | body text |
| `--text-muted` | `#6b7080` | captions, labels |
| `--border` | `rgba(0, 0, 0, 0.08)` | card borders |
| `--border-hover` | `rgba(91, 106, 240, 0.25)` | card hover border |

### rules
- Never hardcode hex values in components — always use CSS variables.
- Accent color must be the ONLY color used for: bullets (▸), section numbers, tag text, tag borders, active tab indicator, link hover, nav logo.
- Font family: `JetBrains Mono` (Google Fonts) as primary. Fallback: `'Courier New', monospace`.
- Font weights: 400 (body), 600 (headings), 700 (hero name only). Never use 300 or 500.

---

## 4. layout structure

### fixed sidebars
- **Left sidebar** (48px wide, fixed): contains GitHub, LinkedIn, Twitter icons stacked vertically, followed by a vertical line extending to the bottom edge. Icons link to socials (see Section 7).
- **Right sidebar** (48px wide, fixed): contains the placeholder email `keshav@placeholder.com` written vertically (writing-mode: vertical-rl), followed by a vertical line. Email links to `mailto:keshav@placeholder.com`.
- Both sidebars are hidden on mobile (below 768px breakpoint). On mobile, social links move to the footer.

### navbar
- Fixed top, full width.
- Left: logo `>_ kj` in accent color.
- Center: numbered nav links — `01. about`, `02. experience`, `03. work`, `04. blog`, `05. contact`. Each scrolls to the corresponding section via smooth scroll + anchor IDs.
- Right: `resume.pdf` button — opens the Google Drive resume link in a new tab (`target="_blank"`). Styled as an outlined button in accent color. The URL is stored in `src/data/meta.ts` as `RESUME_URL` — do not hardcode it in the component.
- On mobile: hamburger menu that reveals a full-screen overlay nav. The overlay has the same dark/light background as the page.
- Theme toggle button sits in the navbar, right of the resume button.

### main content
- Centered, max-width `900px`, with `padding: 0 60px` on desktop, `padding: 0 24px` on mobile.
- Sections are separated by a `0.5px` horizontal divider line.
- Section order: Hero → About → Experience → Projects → Featured → Blog → Contact → Footer.

---

## 5. section-by-section specification

---

### 5.1 hero

**Anchor ID:** `#hero`

**Layout:** Full viewport height (`100vh`) centered vertically. Left-aligned text block.

**Content (exact copy):**
```
>_ hi, my name is          ← accent color, 14px, monospace
Keshav Jha.                ← --text-primary, 64px, weight 700
I build storage engines.   ← --text-muted, 52px, weight 700
```

**Subtext (exact copy):**
```
Software engineer at Oracle (MySQL InnoDB), obsessed with storage
internals, distributed systems, and the kind of code that runs
closest to the metal.
```
Font: 14px, color `--text-muted`, max-width 520px, line-height 1.9.

**Buttons:**
- `view my work` → smooth scrolls to `#projects`. Outlined, accent color.
- `read blog →` → smooth scrolls to `#blog`. Outlined, muted color.

**Animation:** On mount, the three text lines fade in sequentially with a 200ms stagger (opacity 0 → 1, translateY 10px → 0). Use CSS keyframes, not a library.

---

### 5.2 about

**Anchor ID:** `#about`

**Section heading:** `01. about me`

**Layout:** Two-column grid — `3fr 2fr`. Left: text + tech list. Right: photo placeholder.

**Left column content (exact copy):**
```
Hey! I'm Keshav — a backend and systems engineer who loves digging
into the internals of software. I currently work on the MySQL InnoDB
storage engine at Oracle, where I spend most of my time thinking
about buffer pools, WALs, and MVCC.

Outside of work, I build systems-level projects: storage engines,
distributed task queues, consensus protocols — the kind of things
that are best understood by building from scratch.

Here's a stack I've been working with lately:
```

**Tech list (2-column grid, bullet ▸ in accent color):**
```
C++              Python
TypeScript       Kafka
Redis            Docker
Prometheus       MySQL / InnoDB
```

**Right column:**
- Image element: `src="/me.jpg"`, `alt="Keshav Jha"`.
- Styled as a square with a 2px accent-colored border offset (CSS: `outline: 2px solid var(--accent); outline-offset: 6px`).
- Until `me.jpg` exists, render a placeholder div with text `[ photo ]` in `--text-muted`.

**Responsive:** On mobile, stack to single column. Photo moves below text.

---

### 5.3 experience

**Anchor ID:** `#experience`

**Section heading:** `02. where i've worked`

**Layout:** Two-column. Left: tab list of company names (160px wide). Right: detail panel for the selected tab.

**CRITICAL — dynamic height:** The experience panel height must be `auto` — it must grow to fit the content of the active tab. Do NOT set a fixed height on the panel or the container. Use `min-height: 0` on the grid and let the right panel size itself. This is critical because different roles have different numbers of bullet points.

**Tab behavior:** Clicking a company tab updates the active tab and swaps the content in the right panel. The active tab has a `2px solid var(--accent)` left border and accent-colored text. Inactive tabs have `--text-muted` text and `transparent` left border.

**Experience data** (populate `src/data/experience.ts`):

```ts
// Entry 1
company: "Oracle"
url: "https://www.oracle.com"
role: "Software Engineer"
period: "TODO: start date – Present"
bullets: [
  "TODO: bullet 1",
  "TODO: bullet 2",
  "TODO: bullet 3",
]

// Entry 2 — placeholder
company: "TODO: Company Name"
url: "#"
role: "TODO: Role"
period: "TODO: period"
bullets: ["TODO: bullet 1"]

// Entry 3 — placeholder
company: "TODO: Company Name"
url: "#"
role: "TODO: Role"
period: "TODO: period"
bullets: ["TODO: bullet 1"]
```

**Responsive:** On mobile, tabs move above the panel (horizontal scroll if needed, or a `<select>` dropdown). Panel takes full width below.

---

### 5.4 projects (card grid)

**Anchor ID:** `#projects`

**Section heading:** `03. things i've built`

**Layout:** 3-column card grid on desktop, 2-column on tablet (≥768px), 1-column on mobile.

**Default state:** Show 6 cards.

**"Show more" behavior:** A `show more ↓` button below the grid reveals all remaining cards with a smooth height transition (`max-height` animation or `framer-motion` layout animation). Once expanded, button text changes to `show less ↑`.

**Card anatomy (ProjectCard.tsx):**
- Top row: folder icon (◫, accent color, 28px) on left, GitHub icon link + external link icon on right (both `--text-muted`, turn accent on hover).
- Project title: 14px, `--text-primary`, weight 600.
- Description: 12px, `--text-muted`, line-height 1.8.
- Tags: rendered using `Tag.tsx` component (accent color text + background + border).

**Card hover state:** Border transitions to `var(--border-hover)`. Slight `translateY(-4px)` transform. Transition: `all 0.2s ease`.

**Project data** (populate `src/data/projects.ts` — all entries, ordered by tier):

```ts
// Tier 1
{ title: "Notification System v2", desc: "Reworked notification system with Docker, Grafana, and benchmarks.", tags: ["Go", "Kafka", "Docker", "Grafana"], github: "#", external: null, featured: false },
{ title: "LLD Compendium", desc: "Rate limiter (3 algos), consistent hashing, WAL, LSM tree, MVCC cache, Bloom filter, Pub-Sub — each a clean standalone implementation.", tags: ["Python", "TypeScript"], github: "#", external: null, featured: false },

// Tier 2
{ title: "Mini Storage Engine", desc: "KV store with WAL + MVCC + B-Tree/LSM. Written in C++ and Python, built to understand InnoDB from the ground up.", tags: ["C++", "Python", "WAL", "MVCC"], github: "#", external: null, featured: true },
{ title: "Distributed Task Queue", desc: "Priority queues, dead-letter queues, and Prometheus observability — built from scratch.", tags: ["Go", "Redis", "Prometheus"], github: "#", external: null, featured: false },
{ title: "Mini Query Engine", desc: "SQL tokenizer → parser → planner → executor pipeline.", tags: ["Python", "SQL"], github: "#", external: null, featured: false },
{ title: "Raft Consensus", desc: "5-node Docker cluster implementing the Raft consensus protocol.", tags: ["Go", "Docker", "Raft"], github: "#", external: null, featured: false },

// Tier 3
{ title: "Agent Orchestrator", desc: "Claude API + git worktree + tmux + Redis. Spins isolated agents per task, merges results.", tags: ["Python", "Redis", "Claude API"], github: "#", external: null, featured: false },

// Tier 4
{ title: "Real-Time Collab Editor Backend", desc: "CRDT-based backend for real-time collaborative text editing.", tags: ["TypeScript", "CRDT"], github: "#", external: null, featured: false },
{ title: "Observability Platform Lite", desc: "Custom time-series storage with an alerting engine.", tags: ["Go", "TypeScript"], github: "#", external: null, featured: false },

// Tier 5 (Flagship)
{ title: "Distributed KV Store", desc: "Dynamo-style KV store: consistent hashing, quorum replication (R+W>N), gossip protocol, vector clocks, client SDK with failover.", tags: ["C++", "Docker", "Gossip", "Quorum"], github: "#", external: null, featured: true },
```

The `featured: true` projects are NOT shown in the card grid — they appear in the Featured section (5.5). The card grid shows all `featured: false` entries (6 by default, rest hidden behind "show more").

---

### 5.5 featured projects

**Anchor ID:** (part of `#projects` scroll zone, no separate anchor needed)

**Layout:** Alternating left/right. First featured project: text left, visual right. Second featured project: text right, visual left (use `flex-direction: row-reverse`).

**Featured project 1 — Mini Storage Engine:**
- Label: `featured project` (accent color, 12px)
- Title: `Mini Storage Engine`
- Description: `A key-value storage engine built in C++ and Python — WAL for crash recovery, MVCC for concurrent reads without locks, and a pluggable B-Tree / LSM-Tree index. Built to deeply understand how InnoDB works under the hood.`
- Tags: `C++`, `Python`, `WAL`, `MVCC`, `B-Tree`
- GitHub link: `#` (placeholder)
- Visual: A box with a monospace ASCII architecture diagram (see below). Background: `var(--accent-subtle)`. Border: `0.5px solid var(--accent-border)`.

```
  ┌─────────────────────┐
  │   KV Storage Engine │
  ├─────────────────────┤
  │  WAL (write-ahead)  │
  ├──────────┬──────────┤
  │  B-Tree  │   LSM    │
  ├──────────┴──────────┤
  │   MVCC (versioning) │
  └─────────────────────┘
```

**Featured project 2 — Distributed KV Store:**
- Label: `featured project`
- Title: `Distributed KV Store`
- Description: `Dynamo-style distributed key-value store built in C++. Implements consistent hashing for partitioning, quorum reads/writes (R+W>N), gossip protocol for membership, vector clocks for conflict resolution, and a client SDK with automatic failover. Runs as a 5-node Docker cluster.`
- Tags: `C++`, `Docker`, `Gossip`, `Quorum`, `Vector Clocks`
- GitHub link: `#` (placeholder)
- Visual: ASCII cluster diagram:

```
  [ node-1 ]──[ node-2 ]
      ╲              ╱
      [ node-3 ]
      ╱              ╲
  [ node-4 ]──[ node-5 ]
```

**Responsive:** On mobile, both featured projects stack to single column (text above visual).

---

### 5.6 blog

**Anchor ID:** `#blog`

**Section heading:** `04. latest writing`

**Data source:** Medium RSS feed for the user's Medium profile. Fetched via `src/app/api/medium/route.ts` which calls `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@TODO_MEDIUM_USERNAME`. The Medium username is read from `process.env.MEDIUM_USERNAME`.

**Display:** 3 cards in a row on desktop, 1 column on mobile. Each card shows:
- Post title (--text-primary, 14px, weight 600, links to the Medium post in a new tab)
- Publication date (--text-muted, 12px)
- First 120 characters of the post description, truncated with `...` (--text-muted, 12px, line-height 1.7)
- Read time if available from RSS feed

**Error/loading state:** If the RSS fetch fails or returns empty, show 3 skeleton placeholder cards. Do not show an error message to the user.

**Placeholder state:** Until Medium username is configured, render 3 placeholder cards with `TODO: Medium username not set` visible only in the browser console, not on screen.

---

### 5.7 contact

**Anchor ID:** `#contact`

**Layout:** Centered, max-width 560px, generous vertical padding (`120px` top and bottom).

**Content (exact copy):**
```
05. what's next         ← accent color, 14px, above heading
get in touch.           ← --text-primary, 52px, weight 700
```

**Body text (exact copy):**
```
I'm always up for a deep-tech conversation — storage engines,
distributed systems, or just interesting engineering problems.
My inbox is open.
```

**Button:** `say hello →` — outlined accent button, `href="mailto:keshav@placeholder.com"`. TODO: replace with real email.

---

### 5.8 footer

**Content (exact copy):**
```
designed & built by keshav jha
```
12px, `--text-muted`, centered. No links. No year (avoids stale content).

On mobile, social icons (GitHub, LinkedIn, Twitter) appear above this line in the footer, since the sidebars are hidden.

---

## 6. navigation links — full hyperlink map

| nav label | href | behavior |
|---|---|---|
| `01. about` | `/#about` | smooth scroll |
| `02. experience` | `/#experience` | smooth scroll |
| `03. work` | `/#projects` | smooth scroll |
| `04. blog` | `/#blog` | smooth scroll |
| `05. contact` | `/#contact` | smooth scroll |
| `resume.pdf` | `RESUME_URL` from `meta.ts` | open in new tab (Google Drive) |
| logo `>_ kj` | `/` | page reload / scroll to top |

| sidebar element | href | behavior |
|---|---|---|
| GitHub icon | `https://github.com/TODO_GITHUB` | new tab |
| LinkedIn icon | `https://linkedin.com/in/TODO_LINKEDIN` | new tab |
| Twitter icon | `https://twitter.com/TODO_TWITTER` | new tab |
| email (right sidebar) | `mailto:TODO_EMAIL` | opens mail client |

| project card | github href | external href |
|---|---|---|
| All projects | `#` (placeholder) | `#` or `null` |

---

## 7. placeholder values (replace before launch)

```
TODO_GITHUB          → github.com/keshavjha
TODO_LINKEDIN        → linkedin.com/in/keshavjha
TODO_TWITTER         → twitter.com/keshavjha
TODO_EMAIL           → keshav@domain.com
TODO_MEDIUM_USERNAME → @keshavjha
TODO_RESUME_URL      → https://drive.google.com/file/d/FILE_ID/view
                       (share the file publicly on Drive, copy the link, paste here)
                       IMPORTANT: always replace the file on Drive — never delete and re-upload,
                       as that changes the FILE_ID and breaks the link.
/me.jpg              → actual headshot in /public
Experience bullets   → real content per role
Past company names   → real company names + URLs + dates
```

---

## 8. responsiveness

All breakpoints are defined in `tailwind.config.ts`.

| breakpoint | width | key changes |
|---|---|---|
| mobile | < 768px | sidebars hidden, social icons in footer; single-column layouts; hamburger nav; font sizes reduced |
| tablet | 768px – 1024px | 2-column project grid; experience tabs may use select dropdown |
| desktop | > 1024px | full layout as designed |

Tailwind breakpoints to use: `sm` (640px), `md` (768px), `lg` (1024px). Do not add custom breakpoints unless absolutely necessary.

---

## 9. theme (dark / light mode)

- Use `next-themes` package. Provider wraps root layout.
- Default theme: `system` (respects OS preference).
- CSS variables for colors are defined on `:root` (light) and `[data-theme="dark"]` (dark) in `globals.css`.
- The `ThemeToggle.tsx` component cycles between dark and light. It uses a sun icon for light and a moon icon for dark (use `lucide-react` icons: `Sun`, `Moon`).
- No flash of wrong theme: set `suppressHydrationWarning` on `<html>` tag in `layout.tsx`.

---

## 10. animation rules

- **Hero text:** Sequential fade-in (opacity 0→1, translateY 10→0) with 200ms stagger per line. CSS keyframes only — no animation library for this.
- **Project cards:** `translateY(-4px)` on hover, transition `200ms ease`.
- **Experience tab switch:** Content fades in (`opacity 0→1`) over `150ms` on tab change.
- **Show more toggle:** Card grid expands with a smooth `max-height` transition (`500ms ease`).
- **No other animations.** Do not add scroll-triggered animations, parallax, or page transitions — they distract from content.

---

## 11. performance & SEO

- All images use `next/image` with proper `width`, `height`, and `alt`.
- `layout.tsx` defines metadata: `title: "Keshav Jha"`, `description: "Software engineer at Oracle (MySQL InnoDB). I build storage engines and distributed systems."`, `openGraph` with placeholder image.
- No external CSS. No Google Analytics (add only if explicitly asked).
- `next/font` for JetBrains Mono — do not use a `<link>` tag.
- Medium API route uses `revalidate: 3600` (cache for 1 hour).

---

## 12. what NOT to do

- Do not add animations beyond what is listed in Section 10.
- Do not add a page for individual projects — all project info lives on the homepage.
- Do not add a CMS or database of any kind.
- Do not use JavaScript files — TypeScript everywhere.
- Do not hardcode colors — CSS variables only.
- Do not add dependencies not listed here unless absolutely necessary and flagged with a comment.
- Do not add a cookie banner, analytics, or any tracking.
- Do not use `any` type in TypeScript.
- Do not set fixed heights on the experience panel — it must be dynamic (see 5.3).
- Do not copy Ayush Anand's site — the layout structure is inspired by it but all code and content must be original.