# Samvardhan Landing Page — Progress & Next Steps Plan

> [!IMPORTANT]
> Hand this document to the next prompt as context. It contains the full picture of what's done, what's broken, and exactly how to continue.

---

## ✅ Completed Work (What's Done)

### Task 1 — Background Architecture
- **Single sticky terracotta background** via `radial-gradient` on `.pinned_showcase_viewport` (no more flashing between sections).
- **Botanical watermark SVG** (Bilva leaves, wheat, banyan) embedded directly inside `ShowcaseStageHT.jsx` with `mixBlendMode: screen`, `opacity: 0.09`, `pointerEvents: none`.
- **CSS root variables** in `src/index.css`: `--brown: #7A2E12`, `--primary: #DFC062`, `--dark-brown: #140A05`, etc.
- `html` and `body` both set to `background-color: var(--brown)` so no white flash on load.

### Task 2 — Scroll-Driven 3D Jar
- **`ScrollJarCanvas3D.jsx`** — Three.js WebGL canvas, fixed fullscreen (`z-index 50`, `pointerEvents: none`).
- 5-point commercial studio lighting: key softbox, rim, amber backlight, lid overhead, floor bounce.
- Jar reads `#showcase-stage` scroll progress to drive position, rotation and Y translation — **no mouse interaction**.
- ACES Filmic tone mapping (`exposure: 1.38`).

### Task 3 — Jar Visual Quality (Real Product Feel)
- Brushed aluminium lid: `MeshStandardMaterial`, `metalness: 0.96`, `roughness: 0.18`, torque ridges as `CylinderGeometry` rings.
- Optical-grade glass shell: `MeshPhysicalMaterial`, `transmission: 0.92`, `reflectivity: 0.98`, `ior: 1.52`, `clearcoat: 1`.
- Canvas-painted label texture (2048×1080): Sanskrit monogram `सं`, printed product copy, micro-fiber paper grain.
- Golden Danedar ghee core: `MeshPhysicalMaterial`, `color: 0xD4A017`, subtle inner backlight glow.

### Task 4 — Scroll Scene Choreography (`ShowcaseStageHT.jsx`)
Four text layers with `getSceneMotion()` dwell zones:
| Layer | Scene | Progress Range |
|---|---|---|
| 0 | Hero — "Sacred Purity / A2 Gir Cow Ghee" | `0.00 → 0.20` |
| 1 | "A New Angle of Purity" (left text) | `0.20 → 0.50` |
| 2 | "Unwrap the Heritage" (top + aroma badges) | `0.48 → 0.74` |
| 3 | "Nourish from Within" (right text + CTA) | `0.72 → 0.98` |

Each layer: fade-in → dwell (full opacity, locked) → fade-out. Stage height: `460vh`.

### Task 5 — Header
- Minimal premium header (`HeaderHT.jsx`): transparent at top, `rgba(36,18,10,0.40)` + `blur(12px)` on scroll.
- **Scroll-hide on fast downscroll** (`>8px delta`), **reveal on upscroll** (`<-4px delta`).
- Left: rounded pill nav links. Center: `सं SAMVARDHAN` logo emblem. Right: Vedic Audio toggle, "what's inside", "buy now" + cart badge.
- Full-width repeating dotted line separator below header.

### Task 6 — Sitemap
- [`f:/WebSites/07/sitemap.md`](file:///f:/WebSites/07/sitemap.md) — AI navigation guide mapping every component, CSS token, and utility to its file path.

---

## ⚠️ Known Issues & Incomplete Items

### 🔴 Critical — `ShowcaseStageHT.jsx` Broken Import
The file currently starts with:
```js
import BackgroundPattern from './BackgroundPattern';
import { ArrowRight, Sparkles } from 'lucide-react';
```
**The original `import React, { useEffect, useState, useRef } from 'react';` line was accidentally replaced.**

**Fix needed (first thing in next session):**
```js
import React, { useEffect, useState, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
```
The inline SVG watermark is already in the file — `BackgroundPattern` import is not needed and should be removed.

### 🟡 Medium — `BackgroundPattern.jsx` exists but is unused
- File: `C:/Users/dell/.gemini/antigravity/brain/.../src/components/BackgroundPattern.jsx`
- It was created as an artifact scratch file, **not in the actual project** at `f:/WebSites/07/src/components/`.
- Either delete it or copy to the real project and keep the import — **don't leave it dangling**.

### 🟡 Medium — Background still flashes on section transitions below the fold
- Sections below `ShowcaseStageHT` (`WhatsInsideHT`, `TraditionsHT`, `WhyTheJarMattersHT`, etc.) have their own `background-color` overrides.
- The sticky background only covers the showcase stage. After it, the dark sections resume normally.
- **If the user asks for a fully sticky background across the entire page**, a `position: fixed` background layer on `<body>` or `App.jsx` is needed.

### 🟡 Medium — `Sparkles` import from lucide-react is unused
- `Sparkles` was imported but never rendered. Safe to remove when fixing imports.

---

## 📁 Key File Locations

| File | Purpose |
|---|---|
| [`f:/WebSites/07/src/components/ShowcaseStageHT.jsx`](file:///f:/WebSites/07/src/components/ShowcaseStageHT.jsx) | Hero scroll stage — fix imports here first |
| [`f:/WebSites/07/src/components/ScrollJarCanvas3D.jsx`](file:///f:/WebSites/07/src/components/ScrollJarCanvas3D.jsx) | Three.js 3D jar (583 lines) |
| [`f:/WebSites/07/src/components/HeaderHT.jsx`](file:///f:/WebSites/07/src/components/HeaderHT.jsx) | Header with scroll-hide logic |
| [`f:/WebSites/07/src/index.css`](file:///f:/WebSites/07/src/index.css) | All global styles (1237 lines) |
| [`f:/WebSites/07/src/App.jsx`](file:///f:/WebSites/07/src/App.jsx) | Root component — cart state, section order |
| [`f:/WebSites/07/sitemap.md`](file:///f:/WebSites/07/sitemap.md) | AI navigation sitemap |
| [`f:/WebSites/07/rf.md`](file:///f:/WebSites/07/rf.md) | Brand master truth — pricing, sourcing |

---

## 🗺️ How to Continue in the Next Prompt

### Step 1 — Fix the broken import (MANDATORY FIRST FIX)
Open `ShowcaseStageHT.jsx` and replace lines 1–4 with:
```js
import React, { useEffect, useState, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
```

### Step 2 — Verify dev server compiles
```bash
npm run dev
```
Check `localhost:5173` — all four scroll scenes should animate, jar should be visible, header should hide/reveal on scroll.

### Step 3 — Continue with next user request
Common next tasks the user may ask:
- **Scroll smoothness** — add `lenis` or CSS `scroll-behavior: smooth` with momentum.
- **Jar position refinement** — adjust `dockX`, `targetY`, scale in `ScrollJarCanvas3D.jsx`.
- **Sections below fold** — style `WhatsInsideHT`, `TraditionsHT`, `RecipesHT` with the same Hungry Tiger reference aesthetic.
- **Mobile responsiveness** — test on 375px–480px viewport, adjust `clamp()` values.
- **Performance** — reduce Three.js geometry complexity, lazy-load canvas.

---

## 🧠 Design Principles to Preserve

> [!NOTE]
> These must be respected in every future edit.

1. **No mouse interaction on the jar** — scroll-only animation.
2. **No Tailwind** — vanilla CSS only in `src/index.css`.
3. **No external libraries** beyond what's already installed (Three.js, lucide-react, canvas-confetti).
4. **Sticky terracotta background** — never revert to per-section background flashing.
5. **Negative space is sacred** — don't fill all available space with content; let the jar breathe.
6. **Reference: Hungry Tiger** (`eathungrytiger.com`) — rounded pill nav, large display type, dotted line separator, warm earth tones.
7. **Brand truth** — pricing from `rf.md`: ₹1,499 (500ml), ₹3,000 (1L). Origin: Saurashtra Gaushala.

---

*Last updated: 2026-11-01 · Conversation: f3b3ebe8-8d1c-4baf-8854-4479b6e6ca8a*
