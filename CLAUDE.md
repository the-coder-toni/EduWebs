# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server at http://localhost:5173
npm run build    # Production build (outputs to dist/)
npm run preview  # Preview the production build locally
npm run lint     # Run ESLint
```

No test suite is configured. There is no `npm test` command.

## Architecture

**Stack:** Vite + React 19, React Router v7, plain CSS (no Tailwind, no CSS-in-JS, no TypeScript).

**Routing** is defined in `src/App.jsx`. All routes are nested inside a single `<Layout>` route so that `Navbar` and `Footer` wrap every page. The `<Outlet>` in `src/components/Layout/Layout.jsx` is where page content renders.

**Data** lives entirely in `src/data/courses.js` — a single file exporting four arrays: `courses`, `instructors`, `features`, and `testimonials`. There is no backend, no API, and no state management library. Components import directly from this file.

**Component library** lives in `src/components/`, one folder per component. Every folder contains exactly two files: `ComponentName.jsx` and `ComponentName.css`. The CSS file is imported at the top of the `.jsx` file. Class names follow a BEM-ish convention (`.course-card`, `.course-card__title`).

**Design tokens** are CSS custom properties defined in `src/index.css` (colors, spacing scale, typography scale, shadows, border radii). All components consume these variables — do not use hard-coded pixel values or hex codes in component CSS files.

**Styling philosophy:** CSS is intentionally simple and readable because students learn from it. Avoid adding utility-class frameworks, CSS Modules, or styled-components.

**Page → Component relationship:**
- `HomePage` composes: `Hero`, `Features`, `CourseList`, `Testimonials`, `CallToAction`
- `CoursesPage` manages search/filter state and passes filtered courses to `SearchBar` + `CourseList`
- `CourseDetailPage` reads `:id` from `useParams()`, looks up the course in the data array, and composes `LessonList`, `InstructorCard`, `ProgressBar`, `CallToAction`
- `AboutPage` composes: `InstructorCard` grid, `CallToAction`
- `ContactPage` is a fully controlled form with local `useState`; form submission is a UI-only stub
