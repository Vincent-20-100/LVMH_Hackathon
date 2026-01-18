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

## Current Focus

The initial implementation of the user flow (anonymous vs. owner) is complete. The current focus is on refining the UI/UX and implementing the next round of features from the backlog.

## Development Notes

- This is a **demo/MVP** - no real backend.
- User data, including products, is stored in `localStorage`.
- Form pre-filled with "John Doe" for quick testing.
- **Service Ledger is now conditional**: only visible to product owners.
- **Certificate code is now conditional**: un-blurred for product owners.
- **Collection page (`/collection`) is implemented** with a product grid.
- **Header and DPP page are personalized** for logged-in users.


---

For complete context, always refer to `docs/PROJECT_CONTEXT.md` first.
