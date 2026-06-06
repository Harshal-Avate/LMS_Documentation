# SimpleSphere LMS Documentation Portal " Implementation Plan

## Overview

Build a complete, production-ready static documentation portal for **SimpleSphere Learning** using Next.js 15 App Router, TypeScript, Tailwind CSS, MDX, Shadcn UI, Lucide React, and Next Themes. The portal documents the Student, Mentor, and Admin guides extracted from the provided DOCX/Markdown files.

---

## Technology Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Content | MDX (native `@next/mdx`) |
| UI Components | Shadcn UI |
| Icons | Lucide React |
| Themes | next-themes |
| Syntax Highlight | Shiki (via rehype-pretty-code) |
| Markdown plugins | remark-gfm, rehype-slug, rehype-autolink-headings |

---

## Folder Structure

```
docs-portal/
+-- app/
│   +-- layout.tsx                  # Root layout with ThemeProvider
│   +-- page.tsx                    # Homepage
│   +-- globals.css
│   +-- robots.ts
│   +-- sitemap.ts
│   +-- docs/
│       +-- layout.tsx              # Docs layout (sidebar + TOC)
│       +-- page.tsx                # /docs index redirect
│       +-- getting-started/
│       │   +-- introduction/page.mdx
│       │   +-- login/page.mdx
│       │   +-- dashboard/page.mdx
│       +-- student/
│       │   +-- login/page.mdx
│       │   +-- dashboard/page.mdx
│       │   +-- announcements/page.mdx
│       │   +-- courses/page.mdx
│       │   +-- attendance/page.mdx
│       │   +-- assessments/page.mdx
│       │   +-- analytics/page.mdx
│       │   +-- documents/page.mdx
│       │   +-- certificates/page.mdx
│       │   +-- code-arena/page.mdx
│       │   +-- ai-study-mentor/page.mdx
│       │   +-- chats/page.mdx
│       │   +-- projects/page.mdx
│       │   +-- settings/page.mdx
│       │   +-- logout/page.mdx
│       +-- mentor/
│       │   +-- login/page.mdx
│       │   +-- dashboard/page.mdx
│       │   +-- student-registry/page.mdx
│       │   +-- course-management/page.mdx
│       │   +-- course-profile/page.mdx
│       │   +-- curriculum-builder/page.mdx
│       │   +-- student-progress/page.mdx
│       │   +-- kanban-tasks/page.mdx
│       │   +-- assignments/page.mdx
│       │   +-- grading-ledger/page.mdx
│       │   +-- attendance/page.mdx
│       │   +-- session-logging/page.mdx
│       │   +-- project-portfolio/page.mdx
│       │   +-- project-milestone/page.mdx
│       │   +-- doubt-resolution/page.mdx
│       │   +-- ai-copilot/page.mdx
│       │   +-- chats/page.mdx
│       │   +-- certificates/page.mdx
│       │   +-- student-documents/page.mdx
│       │   +-- analytics/page.mdx
│       │   +-- code-arena/page.mdx
│       │   +-- announcements/page.mdx
│       │   +-- settings/page.mdx
│       │   +-- live-classroom/page.mdx
│       │   +-- quality-audit/page.mdx
│       │   +-- notifications/page.mdx
│       │   +-- logout/page.mdx
│       +-- admin/
│       │   +-- login/page.mdx
│       │   +-- dashboard/page.mdx
│       │   +-- user-management/page.mdx
│       │   +-- batch-management/page.mdx
│       │   +-- course-management/page.mdx
│       │   +-- announcements/page.mdx
│       │   +-- assessments/page.mdx
│       │   +-- attendance/page.mdx
│       │   +-- analytics/page.mdx
│       │   +-- certificates/page.mdx
│       │   +-- projects/page.mdx
│       │   +-- chats/page.mdx
│       │   +-- settings/page.mdx
│       │   +-- logout/page.mdx
│       +-- faq/
│           +-- page.mdx
+-- components/
│   +-- docs/
│   │   +-- Sidebar.tsx
│   │   +-- MobileSidebar.tsx
│   │   +-- Breadcrumb.tsx
│   │   +-- TOC.tsx
│   │   +-- Search.tsx
│   │   +-- PrevNext.tsx
│   │   +-- ThemeToggle.tsx
│   │   +-- Callout.tsx
│   │   +-- DocLayout.tsx
│   │   +-- Header.tsx
│   +-- ui/  (shadcn components)
+-- lib/
│   +-- navigation.ts
│   +-- toc.ts
│   +-- search.ts
+-- types/
│   +-- docs.ts
+-- public/
│   +-- images/
│       +-- student/
│       +-- mentor/
│       +-- admin/
+-- mdx-components.tsx
+-- next.config.mjs
+-- tailwind.config.ts
+-- tsconfig.json
```

---

## Proposed Changes

### Phase 1 " Bootstrap Project
- Run `npx create-next-app@latest` with TypeScript, Tailwind, App Router
- Install all deps: MDX, Shadcn, Lucide, next-themes, remark/rehype plugins

### Phase 2 " Core Config Files
- `next.config.mjs` " MDX support with rehype-slug, rehype-autolink-headings, remark-gfm, rehype-pretty-code
- `mdx-components.tsx` " Custom MDX component mappings
- `tailwind.config.ts` " Design tokens, typography plugin
- `globals.css` " CSS variables, custom styles

### Phase 3 " Types & Lib
- `types/docs.ts` " NavItem, SearchItem, TOCItem interfaces
- `lib/navigation.ts` " Full sidebar navigation config
- `lib/search.ts` " Search data and utility
- `lib/toc.ts` " TOC extraction utility

### Phase 4 " Components
- `Header.tsx` " Sticky top bar with logo, search, theme toggle
- `Sidebar.tsx` " Navigation tree with section groups
- `MobileSidebar.tsx` " Sheet drawer for mobile
- `TOC.tsx` " Sticky right-side table of contents
- `Breadcrumb.tsx` " Dynamic breadcrumbs
- `PrevNext.tsx` " Previous/Next page navigation
- `Search.tsx` " Client-side search modal
- `ThemeToggle.tsx` " Dark/light toggle
- `Callout.tsx` " Info/Warning/Success/Error blocks

### Phase 5 " Pages
- Homepage (`app/page.tsx`) " Hero, category cards, search
- Docs layout (`app/docs/layout.tsx`)
- All MDX pages with real content from the guidebooks

### Phase 6 " SEO
- `robots.ts`, `sitemap.ts`
- Metadata on every page

---

## Verification Plan

- Run `npm run dev` and verify all pages render
- Check dark/light theme toggle
- Check mobile sidebar
- Check search functionality
- Check breadcrumbs, prev/next navigation
- Check TOC active highlighting
