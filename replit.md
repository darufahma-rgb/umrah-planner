# Project Overview

A React + Vite + TypeScript frontend application (migrated from Lovable). It is a travel/tourism landing page with sections for hero, features, benefits, itinerary, locations, tips, and a CTA.

## Tech Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS + shadcn/ui components
- **Routing**: React Router DOM v6
- **State/Data**: TanStack React Query
- **Animation**: Framer Motion
- **Forms**: React Hook Form + Zod

## Project Structure

- `src/pages/` - Page components (Index, NotFound)
- `src/components/` - Feature and UI components (HeroSection, Navbar, FeaturesSection, etc.)
- `src/components/ui/` - shadcn/ui primitives
- `src/hooks/` - Custom React hooks
- `src/lib/` - Utility functions
- `public/` - Static assets

## Running the App

```bash
npm run dev
```

Runs on port 5000 (Replit webview).

## Building for Production

```bash
npm run build
```

Output goes to `dist/`.

## Notes

- Migrated from Lovable; `lovable-tagger` dev plugin removed from vite.config.ts (Replit incompatible)
- Server binds to `0.0.0.0` for Replit preview pane compatibility
