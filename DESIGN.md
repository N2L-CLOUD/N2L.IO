# N2L.io Design System & Brand Guidelines

This document outlines the core design tokens and brand rules extracted from the Phase A Design System Proof. It serves as the single source of truth for the cinematic, dark, scientific, and agentic design language of N2L.io.

## 🎨 Colors
N2L's palette emphasizes deep space blacks, using color as electricity rather than decoration.

### Core Backgrounds & Surfaces
- **Deep Black (`--color-bg`)**: `#0B0D12`
- **Dark Surface (`--color-surface`)**: `#121624`
- **Near-Navy (`--color-surface-2`)**: `#161B2A`
- **Elevated Card (`--color-surface-3`)**: `#1C2233`

### Borders & Dividers
- **Soft Border / Divider (`--color-divider` / `--color-border`)**: `#2A3145`

### Typography Colors
- **Off-White / Primary (`--color-text`)**: `#F2F4F8`
- **Muted Text (`--color-text-muted`)**: `#98A2B3`
- **Faint Text (`--color-text-faint`)**: `#4A5568`
- **Inverse Text (`--color-text-inverse`)**: `#0B0D12`

### Accents
- **Electric Cyan (`--color-cyan`)**: `#4FD1FF`
- **Magenta (`--color-magenta`)**: `#C23BFF`
- **Amber (`--color-amber`)**: `#FFB547`
- **Deep Indigo (`--color-indigo`)**: `#4A5FA7`

---

## 🔤 Typography
The typography system uses a pairing of Space Grotesk for mission-critical headers and Inter for clean, legible UI and body text.

- **Display Font (`--font-display`)**: "Space Grotesk", "Helvetica Neue", sans-serif
- **Body Font (`--font-body`)**: "Inter", "Helvetica Neue", sans-serif

### Sizing Scale (Fluid)
- `--text-xs`: clamp(0.75rem,  0.7rem  + 0.25vw, 0.875rem) (Labels / Metadata)
- `--text-sm`: clamp(0.875rem, 0.8rem  + 0.35vw, 1rem) (Buttons / Nav / UI)
- `--text-base`: clamp(1rem,     0.95rem + 0.25vw, 1.125rem) (Standard Body)
- `--text-lg`: clamp(1.125rem, 1rem    + 0.75vw, 1.5rem) (Section Heading)
- `--text-xl`: clamp(1.5rem,   1.2rem  + 1.25vw, 2.25rem) (Max for web app headings)
- `--text-2xl`: clamp(2rem,     1.2rem  + 2.5vw,  3.5rem)
- `--text-3xl`: clamp(2.5rem,   1rem    + 4vw,    5rem)
- `--text-hero`: clamp(3rem,     0.5rem  + 7vw,    8rem) (Informational hero only)

---

## 📏 Spacing
A comprehensive spacing scale for consistent layouts, margins, and padding.

- `--space-1`: 0.25rem (4px)
- `--space-2`: 0.5rem (8px)
- `--space-3`: 0.75rem (12px)
- `--space-4`: 1rem (16px)
- `--space-5`: 1.25rem (20px)
- `--space-6`: 1.5rem (24px)
- `--space-8`: 2rem (32px)
- `--space-10`: 2.5rem (40px)
- `--space-12`: 3rem (48px)
- `--space-16`: 4rem (64px)
- `--space-20`: 5rem (80px)
- `--space-24`: 6rem (96px)

---

## 🎬 Motion
Motion should feel fast, snappy, and responsive. We utilize a standardized easing curve for consistent physics.

- **Base Easing (`--ease-out`)**: cubic-bezier(0.16, 1, 0.3, 1)
- **Fast Transition (`--transition-fast`)**: 120ms cubic-bezier(0.16, 1, 0.3, 1)
- **Base Transition (`--transition-base`)**: 200ms cubic-bezier(0.16, 1, 0.3, 1)
- **Slow Transition (`--transition-slow`)**: 400ms cubic-bezier(0.16, 1, 0.3, 1)

---

## 🔬 Lab Brand Rules
Each N2L Lab operates under the master brand umbrella but maintains its own distinct visual token system.

### 1. Media Lab
*Broadcasting intelligence — TekBeacon news platform and MiSM Music Catalog, powered by AI editorial and data systems.*
- **Accent Color**: Magenta (#C23BFF)
- **Hover State**: #D46FFF
- **Glow State**: rgba(194, 59, 255, 0.15)
- **Shadow Token**: 0 0 24px rgba(194, 59, 255, 0.25)

### 2. Spatial Intelligence Lab
*Mapping the universe — Satalytics, Orbitarium, and ATLAS World Models. From asteroid belts to kilonovae.*
- **Accent Color**: Electric Cyan (#4FD1FF)
- **Hover State**: #7ADEFF
- **Glow State**: rgba(79, 209, 255, 0.15)
- **Shadow Token**: 0 0 24px rgba(79, 209, 255, 0.25)

### 3. Applied Intelligence Lab
*Shipping agentic tools — Proposal Ninja, Pic2Spec, VectorScope Cyber Dashboard, and Anubis Research.*
- **Accent Color**: Amber (#FFB547)
- **Hover State**: #FFC96B
- **Glow State**: rgba(255, 181, 71, 0.15)
- **Shadow Token**: 0 0 24px rgba(255, 181, 71, 0.25)
