# Samvardhan Codebase Sitemap & AI Navigation Guide

This index enables AI agents and developers to immediately locate the exact file, component, or data model needed without scanning the entire repository.

---

## ⚡ Quick-Lookup Intent Map ("Where do I find...?")

| What You Want to Modify or Inspect | Target File | Line / Symbol |
| :--- | :--- | :--- |
| **3D Jar Model, Glass, Lid & Lighting** | [`src/components/ScrollJarCanvas3D.jsx`](file:///f:/WebSites/07/src/components/ScrollJarCanvas3D.jsx) | Three.js WebGL scene, brushed metallic lid, Danedar ghee core, physical glass, 5-point studio lighting |
| **Scroll Choreography & Text In-Out Animations** | [`src/components/ShowcaseStageHT.jsx`](file:///f:/WebSites/07/src/components/ShowcaseStageHT.jsx) | Pinned `380vh` viewport, `getSceneMotion` dwell zones, negative space text layers |
| **Header, Brand Monogram & Nav Links** | [`src/components/HeaderHT.jsx`](file:///f:/WebSites/07/src/components/HeaderHT.jsx) | Minimal editorial header, `सं SAMVARDHAN` emblem, audio toggle, cart trigger |
| **Cart Drawer, Quantities & Checkout** | [`src/components/CartDrawerHT.jsx`](file:///f:/WebSites/07/src/components/CartDrawerHT.jsx) | Slide-over bag, promo code (`VEDIC10`), free shipping bar, Confetti checkout |
| **Brand Master Truth & Sourcing Facts** | [`rf.md`](file:///f:/WebSites/07/rf.md) | Official pricing (₹1,499 / ₹3,000), Saurashtra Gaushala, Gir Cow Bilona documentation |
| **Global Theme Tokens & Typography** | [`src/index.css`](file:///f:/WebSites/07/src/index.css) | `--brown: #24140D`, `--primary: #DFC062`, `--dark-brown: #140A05`, `Cinzel`, dotted lines |
| **"What's Inside" Split-Screen Showcase** | [`src/components/WhatsInsideHT.jsx`](file:///f:/WebSites/07/src/components/WhatsInsideHT.jsx) | `#about`, Whole A2 Milk, Woodfire Cultured Makhan, Clarified Butterfat |
| **Vedic Tradition Stages (१, २, ३ Cards)** | [`src/components/TraditionsHT.jsx`](file:///f:/WebSites/07/src/components/TraditionsHT.jsx) | `#bilona`, Surya Ketu Nadi, Earthen Bilva Churn, Slow Woodfire Simmer |
| **"Why the Jar Matters" Glass Benefits** | [`src/components/WhyTheJarMattersHT.jsx`](file:///f:/WebSites/07/src/components/WhyTheJarMattersHT.jsx) | UV-blocking amber glass, turned acacia wood seal, zero plastic leaching |
| **Culinary Rituals & Recipe Modals** | [`src/components/RecipesHT.jsx`](file:///f:/WebSites/07/src/components/RecipesHT.jsx) | `#recipes`, Golden Turmeric Milk, Vedic Dal Tadka, Morning Snehan rituals |
| **Full-Width Impact Banner CTA** | [`src/components/FullsizeCTAHT.jsx`](file:///f:/WebSites/07/src/components/FullsizeCTAHT.jsx) | "Unlock the magic inside the jar" full-bleed conversion section |
| **"What Makes It Sacred" Tabbed Modal** | [`src/components/ModalSacredHT.jsx`](file:///f:/WebSites/07/src/components/ModalSacredHT.jsx) | Sacred Ingredients & Lab-tested Nutritional Facts table dialog |
| **Procedural Vedic Audio Synthesizer** | [`src/utils/audioSynthesizer.js`](file:///f:/WebSites/07/src/utils/audioSynthesizer.js) | Web Audio API Vedic flute synthesizer, dawn birdsong, river drone |
| **Floating Action Buttons (Bottom Right)** | [`src/components/FixedIconsHT.jsx`](file:///f:/WebSites/07/src/components/FixedIconsHT.jsx) | Floating jar modal pill + quick cart badge button |
| **Footer & Gaushala Location** | [`src/components/FooterHT.jsx`](file:///f:/WebSites/07/src/components/FooterHT.jsx) | Saurashtra gaushala origin, legal policies, social links, dotted divider |
| **Root Application State & Mounts** | [`src/App.jsx`](file:///f:/WebSites/07/src/App.jsx) | Cart state, modal controllers, section layout order |

---

## 🏛️ Application Architecture & Component Hierarchy

```
App.jsx (Root State: Cart, Modals, Audio)
 ├── ScrollJarCanvas3D.jsx       [Fixed Fullscreen WebGL Canvas: z-index 50, pointer-events none]
 ├── HeaderHT.jsx                [Sticky Minimalist Header: z-index 999]
 └── <main>
      ├── ShowcaseStageHT.jsx    [Pinned 380vh Stage: Hero + 3 Angle Scenes with In-Out Motion]
      │    ├── Layer 0: Hero Scene (0.00 -> 0.22)
      │    ├── Layer 1: A New Angle of Purity (0.18 -> 0.50) [Left Text, Right Negative Space]
      │    ├── Layer 2: Unwrap the Heritage (0.46 -> 0.76)   [Top Title, Bottom Aroma Badges]
      │    └── Layer 3: A New Perspective on Wellness (0.72 -> 0.99) [Right Text, Left Neg. Space]
      ├── WhatsInsideHT.jsx      [Section #about: Split 2-Column Showcase]
      ├── TraditionsHT.jsx       [Section #bilona: Numbered Vedic Process Cards १, २, ३]
      ├── WhyTheJarMattersHT.jsx [Glass & Storage Benefits Showcase]
      ├── FullsizeCTAHT.jsx      [Full-Bleed High-Contrast Banner]
      └── RecipesHT.jsx          [Section #recipes: Ayurvedic Culinary Rituals + Modals]
 ├── FooterHT.jsx                [Footer, Policies, Saurashtra Heritage]
 ├── FixedIconsHT.jsx            [Floating Bottom-Right Action Triggers]
 ├── CartDrawerHT.jsx            [Slide-Over Cart Bag with Promo & Confetti]
 └── ModalSacredHT.jsx           [Ingredients & Nutrition Analysis Modal]
```

---

## 🎨 Theme Tokens & Design Rules ([`src/index.css`](file:///f:/WebSites/07/src/index.css))

| Variable | Hex / Value | Semantic Role |
| :--- | :--- | :--- |
| `--brown` | `#24140D` | Deep Sacred Earth Brown (Brand Backdrop) |
| `--primary` | `#DFC062` | Antique Radiant Gold (Accent, Borders, Badges) |
| `--primary-hover` | `#F2D27A` | Interactive Hover Highlight |
| `--dark-brown` | `#140A05` | Deepest Onyx Soil (High-Contrast Sections) |
| `--cream` | `#FAF6EE` | Warm Royal Cream (Light Sections) |
| `--cream-pure` | `#FDFBF7` | Uncoated Cotton Label Texture |
| `--font-display` | `'Cinzel', serif` | Royal Brand Headlines & Monograms |
| `--font-serif` | `'Cormorant Garamond', serif`| Vedic Shlokas & Literary Editorial Text |
| `--font-sans` | `'Plus Jakarta Sans', sans-serif` | Technical Specs, UI Navigation & Body |

> [!IMPORTANT]
> **No Tailwind in this codebase.** All styling is crafted with Vanilla CSS in [`src/index.css`](file:///f:/WebSites/07/src/index.css). Do not introduce Tailwind utility classes unless requested.

---

## 🧭 File-by-File Breakdown

### 1. 3D & Animation Engines
- [`src/components/ScrollJarCanvas3D.jsx`](file:///f:/WebSites/07/src/components/ScrollJarCanvas3D.jsx):
  - Three.js WebGL renderer with `ACESFilmicToneMapping`.
  - **Photoshoot Materials**: Brushed aluminium cap (`0xDBE0E5`), optical clearcoat glass (`reflectivity: 0.98`), golden Danedar A2 ghee with internal amber backlight.
  - **Label Texture**: High-res 2048x1080 canvas texture with micro-fiber paper grain, Sanskrit monogram `सं`, and side nutritional/Vedic panels.
  - **Choreography**: Reads scroll progress from `#showcase-stage`. Docks dynamically with `dockX` based on screen aspect ratio. Zero mouse interaction.
- [`src/components/ShowcaseStageHT.jsx`](file:///f:/WebSites/07/src/components/ShowcaseStageHT.jsx):
  - Pinned `380vh` sticky stage with smooth background color transitions.
  - Mathematical `getSceneMotion` function providing entrance fade-in, locked dwell reading zones, and exit fade-outs in negative space.

### 2. Header & Overlays
- [`src/components/HeaderHT.jsx`](file:///f:/WebSites/07/src/components/HeaderHT.jsx):
  - Minimal editorial header with translucent dark glass (`rgba(20, 10, 5, 0.82)`), clean text links, centered `सं SAMVARDHAN` mark, sound toggle, and single hero `BUY NOW` pill.
- [`src/components/CartDrawerHT.jsx`](file:///f:/WebSites/07/src/components/CartDrawerHT.jsx):
  - Right slide-over drawer. Calculates ₹1,499 (500ml) & ₹3,000 (1L). Applies promo `VEDIC10` (-10%). Triggers `canvas-confetti` on checkout.
- [`src/components/ModalSacredHT.jsx`](file:///f:/WebSites/07/src/components/ModalSacredHT.jsx):
  - Accessible modal dialog for Sacred Ingredients & Laboratory Nutrition Facts table.

### 3. Audio & Sensory Utilities
- [`src/utils/audioSynthesizer.js`](file:///f:/WebSites/07/src/utils/audioSynthesizer.js):
  - Synthesizes procedural Vedic flute melodies (pentatonic Mohanam / Bhupali scale), dawn river drone, and morning bells using pure Web Audio API without external audio files.

### 4. Ground-Truth Documentation
- [`rf.md`](file:///f:/WebSites/07/rf.md):
  - Master brand documentation consolidating origin, Gir cow herd nucleus, Vedic Bilona method, pricing, and visual guidelines.

