                    # Changelog

## [Unreleased]

## [0.2.0] - 2026-01-01 - Engineering & UX Overhaul

### Added
- **Quality Assurance**: ESLint + Prettier configuration with Husky pre-commit hooks.
- **Test Suite**: Vitest (Unit) and Playwright (E2E) infrastructure.
- **Architecture**: Astro Content Collections for structural data (Projects).
- **Visual UX**: Shared View Transitions for smooth page navigation.
- **Interactivity**: Sound effects on clicks and Scroll Spy navigation.

### Changed
- Migrated hardcoded project data to `src/content/projects`.
- Upgraded `Button` and `FloatingNav` components for better interactivity.

### Added
- Created `CHANGELOG.md` to track progress and next steps.
- Established migration plan to Astro.

### Status - 2025-12-31
- **Current State**: Project is a React/Vite SPA.
- **Goal**: Migrate to Astro with React Islands and View Transitions.
- **Next Steps**:
    1.  [x] Backup existing project files.
    2.  [ ] Clean root directory (Done).
    3.  [x] Initialize new Astro project.
    4.  [x] Correct project structure (Move from subfolder).
    5.  [x] Install React & Tailwind integrations.
    6.  [x] Copy legacy source folders (components, lib, etc.).
    7.  [x] Install original dependencies.
    8.  [x] Migrate Tailwind config & global styles.
    9.  [x] Install Nanostores for state management.
    10. [x] Refactor LanguageContext to Nano Store.
    11. [x] Create Astro pages and layouts.
    12. [x] Configure TypeScript path aliases.
    13. [x] Migrate 404 page.
    14. [x] Verify component compatibility (removed react-router-dom and obsolete files).
    15. [x] Launch development server.
    
## [Unreleased]
- Migration to Astro completed.
- Server running on port 4321.
- Changed body font to system-ui stack for a cleaner look.
- Preserved 'Inter' font for Headings and Hero section.
- Fixed missing 'image.png' by restoring from backup.
- Fixed Project card layout: forced identical height and bottom-aligned buttons using flexbox.
- Restored original 'developer-icon.png' favicon.
- Integrated Framer Motion for smooth Hero animations.
- Added Aceternity UI 'Spotlight' effect to Hero background.
- Implemented 'Card Hover Effect' for Skills section.
- Implemented '3D Card' effect for Projects section.
- Replaced static Navbar with 'Floating Navbar'.
- Added 'Text Generate Effect' to About section.
- Reverted About section text to original static format (by request).
- Combined colors with Aceternity UI style (Deep Dark Blue/Zinc).
- Added icons to Skills section using react-icons.
- Added 'Background Beams' to Contact section.
- Centered technology names in Skills section.
- Improved button styling in Projects cards (added cursor-pointer, stronger hover colors, and scale animation).
- Added 'Details' toggle to Skills section to switch between list view and detailed view.
- Improved Skills interaction: disabled pointer cursor in detailed view and renamed toggle button to "Ver Descripciones".
- Internationalized 'Show/Hide Details' button in Skills section.

### Changed
- Moved legacy files to `_legacy_backup`.
