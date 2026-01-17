# Claude Code Configuration

## Project Context

**⚡ IMPORTANT**: Before starting work, read the project context:
- `docs/PROJECT_CONTEXT.md` - Quick overview of project structure and intent
- `docs/workflow-produit.md` - Detailed user workflow (current state vs target)

## Security Rules

🚫 **NEVER** read, access, or suggest changes to:
- `.env` files
- `.env.local` files
- `.env.development` files
- `.env.production` files
- Any file containing environment variables or secrets

## Project Overview

This is a **Digital Product Passport (DPP)** demo for Louis Vuitton (LVMH Hackathon).

**Tech Stack**: Next.js 16, React 19, TypeScript, TailwindCSS 4, Framer Motion

**Key Features**:
- 3D Interactive Aura Certificate Card
- Product traceability & provenance
- Service Ledger (maintenance history)
- User authentication flow (localStorage MVP)

**Current Focus**: Implementing conditional rendering based on user authentication state.

## Code Style

- Use TypeScript with strict typing
- Prefer Tailwind utility classes over custom CSS
- Use Framer Motion for animations
- Follow Next.js App Router conventions
- Keep components modular and reusable

## Important Files

- `components/feature-certificate-card-v2.tsx` - 3D Aura card (blur/unblur code)
- `components/page-dpp-section-3.tsx` - Service Ledger (conditional display)
- `components/page-account-creation.tsx` - Auth form
- `app/page.tsx` - Main DPP page

## Development Notes

- This is a **demo/MVP** - no real backend
- User data stored in `localStorage`
- Form pre-filled with "John Doe" for quick testing
- Service Ledger currently visible to all (security issue to fix)
- Code unique on card is blurred for everyone (needs conditional logic)

---

For complete context, always refer to `docs/PROJECT_CONTEXT.md` first.
