import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ScrollJarCanvas3D from './ScrollJarCanvas3D';

gsap.registerPlugin(ScrollTrigger);

export default function ShowcaseStageHT({ onAddToCart, onOpenModal }) {
  const stageRef = useRef(null);
  const viewportRef = useRef(null);

  // Hero refs (Phase 1, 2, 3)
  const heroEyebrowRef = useRef(null);
  const heroHeadlineRef = useRef(null);
  const heroDottedRef = useRef(null);
  const heroSubheadingRef = useRef(null);
  const heroBottomLeftRef = useRef(null);
  const heroBottomRightRef = useRef(null);

  // Editorial Phrases refs (Phase 4)
  const phrase1Ref = useRef(null);
  const phrase2Ref = useRef(null);
  const phrase3Ref = useRef(null);

  // Jar Opening Title refs (Phase 5a)
  const openingTitleRef = useRef(null);

  // "What's Inside That Ghee" on Flowing Liquid refs (Phase 5b/c)
  const wiBadgeRef = useRef(null);
  const wiTitleRef = useRef(null);
  const wiDottedRef = useRef(null);
  const wiItem1Ref = useRef(null);
  const wiItem2Ref = useRef(null);
  const wiItem3Ref = useRef(null);
  const wiGuaranteeRef = useRef(null);

  // Golden Nectar Droplet (Reference Teardrop Splitting from Jar Lip)
  const dropStageRef = useRef(null);
  const dropImpactSplashRef = useRef(null);

  // 5+ Layer Parallax Ocean Current refs (Expands at Section Edge)
  const oceanContainerRef = useRef(null);
  const oceanLayer1Ref = useRef(null); // Layer 1: Abyssal Deep Molten Amber Ocean Bed
  const oceanLayer2Ref = useRef(null); // Layer 2: Viscous Under-Current Ocean Wave
  const oceanLayer3Ref = useRef(null); // Layer 3: Mid-Depth Rolling Golden Wave Stream
  const oceanLayer4Ref = useRef(null); // Layer 4: Surface Wave Surge & Churning Eddies
  const oceanLayer5Ref = useRef(null); // Layer 5: Specular Crest Wave Foam & Sunlight Glimmer
  const oceanLayer6Ref = useRef(null); // Layer 6: Danedar Crystal Pearls & Swirling Fluid Droplets

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;

    window.__showcaseProgress = 0;

    // Master GSAP Scroll Timeline (520vh runway)
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: stage,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.6,
        onUpdate: (self) => {
          window.__showcaseProgress = self.progress;
        },
      },
    });

    // -------------------------------------------------------------------------
    // PHASE 1 & 2: INITIAL HERO & SUBTLE JAR EMERGENCE (0.00 -> 0.08)
    // -------------------------------------------------------------------------
    tl.to(heroEyebrowRef.current, {
      y: -24,
      opacity: 0,
      duration: 0.05,
      ease: 'none',
    }, 0.015);

    tl.to(heroDottedRef.current, {
      scaleX: 0.6,
      opacity: 0,
      duration: 0.05,
      ease: 'none',
    }, 0.02);

    tl.to(heroBottomLeftRef.current, {
      y: 24,
      opacity: 0,
      duration: 0.05,
      ease: 'none',
    }, 0.015);

    tl.to(heroBottomRightRef.current, {
      y: 24,
      opacity: 0,
      duration: 0.05,
      ease: 'none',
    }, 0.015);

    // Headline moves subtly with the ascending jar during Phase 2
    tl.to(heroHeadlineRef.current, {
      y: -18,
      scale: 1.02,
      duration: 0.08,
      ease: 'none',
    }, 0.00);

    tl.to(heroSubheadingRef.current, {
      y: -12,
      opacity: 0.7,
      duration: 0.08,
      ease: 'none',
    }, 0.00);

    // -------------------------------------------------------------------------
    // PHASE 3: HEADLINE TRANSFORMATION & EXIT (0.08 -> 0.16)
    // As jar glides towards right dock, main heading lifts smoothly upward
    // -------------------------------------------------------------------------
    tl.to(heroHeadlineRef.current, {
      y: -75,
      opacity: 0,
      duration: 0.08,
      ease: 'none',
    }, 0.08);

    tl.to(heroSubheadingRef.current, {
      y: -35,
      opacity: 0,
      duration: 0.06,
      ease: 'none',
    }, 0.08);

    // -------------------------------------------------------------------------
    // PHASE 4: EDITORIAL PHRASES (0.16 -> 0.44)
    // All text single-lined, bold, transparent background, linear scroll in/out
    // NO pop in/out (no scale transforms)
    // -------------------------------------------------------------------------

    // Phrase 1: "PURE BY TRADITION." (0.16 -> 0.25)
    tl.fromTo(phrase1Ref.current, 
      { opacity: 0, y: 55 },
      { opacity: 1, y: 0, duration: 0.035, ease: 'none' },
      0.16
    )
    .to(phrase1Ref.current, { y: 0, duration: 0.035, ease: 'none' }, 0.195)
    .to(phrase1Ref.current, { opacity: 0, y: -50, duration: 0.025, ease: 'none' }, 0.23);

    // Phrase 2: "CRAFTED BEFORE DAWN." (0.25 -> 0.34)
    tl.fromTo(phrase2Ref.current, 
      { opacity: 0, y: 55 },
      { opacity: 1, y: 0, duration: 0.035, ease: 'none' },
      0.25
    )
    .to(phrase2Ref.current, { y: 0, duration: 0.035, ease: 'none' }, 0.285)
    .to(phrase2Ref.current, { opacity: 0, y: -50, duration: 0.025, ease: 'none' }, 0.32);

    // Phrase 3: "WOODEN BILONA METHOD." (0.34 -> 0.44)
    tl.fromTo(phrase3Ref.current, 
      { opacity: 0, y: 55 },
      { opacity: 1, y: 0, duration: 0.035, ease: 'none' },
      0.34
    )
    .to(phrase3Ref.current, { y: 0, duration: 0.035, ease: 'none' }, 0.375)
    .to(phrase3Ref.current, { opacity: 0, y: -50, duration: 0.025, ease: 'none' }, 0.41);

    // -------------------------------------------------------------------------
    // PHASE 5a: JAR RE-CENTERING TO MIDDLE & LID LIFT (0.45 -> 0.58)
    // "UNLOCKING THE LIQUID GOLD" TEXT POSITION
    // -------------------------------------------------------------------------
    tl.fromTo(openingTitleRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.04, ease: 'none' },
      0.45
    )
    .to(openingTitleRef.current, { y: 0, duration: 0.08, ease: 'none' }, 0.49)
    .to(openingTitleRef.current, { opacity: 0, y: -35, duration: 0.04, ease: 'none' }, 0.57);

    // -------------------------------------------------------------------------
    // PHASE 5b: GOLDEN DROPLET EMERGES & SPLITS FROM TILTED JAR LIP (0.58 -> 0.66)
    // Droplet forms at mouth, stretches into teardrop, and cleanly splits from jar!
    // -------------------------------------------------------------------------
    tl.fromTo(dropStageRef.current,
      { opacity: 0, scale: 0.15, x: 0, y: 0 },
      { opacity: 1, scale: 1.0, duration: 0.04, ease: 'power1.out' },
      0.58
    );

    // Droplet elongates and splits/detaches from the glass rim
    tl.to(dropStageRef.current, {
      y: 35,
      scaleY: 1.35,
      scaleX: 0.85,
      duration: 0.04,
      ease: 'none',
    }, 0.62);

    // -------------------------------------------------------------------------
    // PHASE 5b-2: DROPLET FALLS DOWN TO EDGE OF NEW SECTION (0.66 -> 0.83)
    // Accelerates smoothly down the open negative space between text and jar
    // -------------------------------------------------------------------------
    tl.to(dropStageRef.current, {
      y: 520,
      x: -110,
      scaleY: 1.1,
      scaleX: 0.95,
      duration: 0.16,
      ease: 'power2.in',
    }, 0.66);

    // Droplet impacts the section edge boundary and blooms into expansion splash
    tl.to(dropStageRef.current, {
      scaleY: 0.45,
      scaleX: 1.7,
      duration: 0.02,
      ease: 'power2.out',
    }, 0.82)
    .to(dropStageRef.current, {
      opacity: 0,
      scale: 2.2,
      duration: 0.03,
      ease: 'none',
    }, 0.84);

    tl.fromTo(dropImpactSplashRef.current,
      { opacity: 0, scale: 0.2 },
      { opacity: 1, scale: 2.2, duration: 0.035, ease: 'power1.out' },
      0.82
    )
    .to(dropImpactSplashRef.current, {
      opacity: 0,
      duration: 0.035,
      ease: 'none',
    }, 0.855);

    // -------------------------------------------------------------------------
    // PHASE 5c: APPEARING TEXT ("WHAT'S INSIDE THE GHEE") VISIBLE ON LEFT (0.60 -> 0.88)
    // Single-lined, bold, static position on left side away from jar & falling drop
    // -------------------------------------------------------------------------
    tl.fromTo(wiBadgeRef.current,
      { opacity: 0, y: 25 },
      { opacity: 1, y: 0, duration: 0.03, ease: 'none' },
      0.60
    );

    tl.fromTo(wiTitleRef.current,
      { opacity: 0, y: 35 },
      { opacity: 1, y: 0, duration: 0.035, ease: 'none' },
      0.62
    );

    tl.fromTo(wiDottedRef.current,
      { opacity: 0, scaleX: 0.4 },
      { opacity: 0.85, scaleX: 1.0, duration: 0.025, ease: 'none' },
      0.64
    );

    // 3 Sequential Single-Lined Bold Ingredient Statements
    tl.fromTo(wiItem1Ref.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.035, ease: 'none' },
      0.66
    );

    tl.fromTo(wiItem2Ref.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.035, ease: 'none' },
      0.71
    );

    tl.fromTo(wiItem3Ref.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.035, ease: 'none' },
      0.76
    );

    tl.fromTo(wiGuaranteeRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.03, ease: 'none' },
      0.80
    );

    // Steady dwell: 0.80 -> 0.88 (text stays cleanly visible)
    // Linear exit scroll upwards for What's Inside layer
    tl.to([wiBadgeRef.current, wiTitleRef.current, wiDottedRef.current, wiItem1Ref.current, wiItem2Ref.current, wiItem3Ref.current, wiGuaranteeRef.current], {
      opacity: 0,
      y: -35,
      duration: 0.035,
      ease: 'none',
    }, 0.885);

    // -------------------------------------------------------------------------
    // PHASE 5d: 5+ LAYER PARALLAX OCEAN OF GHEE EXPANDS AT SECTION EDGE (0.80 -> 1.00)
    // Droplet impact triggers 6 distinct fluid parallax layers moving like oceanic currents
    // -------------------------------------------------------------------------
    tl.fromTo(oceanContainerRef.current,
      { opacity: 0, y: 90 },
      { opacity: 1, y: 0, duration: 0.12, ease: 'power1.out' },
      0.80
    );

    // 5+ Differential Parallax Translations:
    // Layer 1: Abyssal Deep Amber Ocean Floor
    tl.fromTo(oceanLayer1Ref.current,
      { y: 65 },
      { y: -35, duration: 0.20, ease: 'none' },
      0.80
    );

    // Layer 2: Viscous Under-Current Ocean Body
    tl.fromTo(oceanLayer2Ref.current,
      { y: 48 },
      { y: -24, duration: 0.20, ease: 'none' },
      0.80
    );

    // Layer 3: Mid-Depth Rolling Golden Wave Stream
    tl.fromTo(oceanLayer3Ref.current,
      { y: 32 },
      { y: -15, duration: 0.20, ease: 'none' },
      0.80
    );

    // Layer 4: Surface Wave Surge & Churning Eddies
    tl.fromTo(oceanLayer4Ref.current,
      { y: 18 },
      { y: -8, duration: 0.20, ease: 'none' },
      0.80
    );

    // Layer 5: Specular Crest Wave Foam & Sunlight Glimmer
    tl.fromTo(oceanLayer5Ref.current,
      { y: 6 },
      { y: -2, duration: 0.20, ease: 'none' },
      0.80
    );

    // Layer 6: Danedar Ghee Crystals & Swirling Fluid Droplets
    tl.fromTo(oceanLayer6Ref.current,
      { y: 40 },
      { y: -22, duration: 0.20, ease: 'none' },
      0.80
    );

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger === stage) t.kill();
      });
      delete window.__showcaseProgress;
    };
  }, []);

  return (
    <div 
      ref={stageRef} 
      id="showcase-stage" 
      style={{ 
        position: 'relative', 
        height: '520vh', // Compact, cinematic scroll runway that stops sticky scroll at pouring
        backgroundColor: 'transparent',
        zIndex: 2,
      }}
    >
      {/* Pinned Viewport */}
      <div 
        ref={viewportRef}
        className="pinned_showcase_viewport"
        style={{
          position: 'sticky',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: 'transparent',
        }}
      >
        {/* 3D Jar & Natural Spilling Ghee Canvas (Anchored inside showcase stage) */}
        <ScrollJarCanvas3D />

        {/* =========================================================================
            GOLDEN NECTAR DROPLET (REFERENCE TEARDROP SPLITTING FROM TILTED JAR)
            Visually matches reference image: 3D amber gradient body, curved specular
            rim reflections, inner golden refraction, and bottom caustics!
            Splits from the tilted jar mouth and falls down across the negative space.
            ========================================================================= */}
        <div
          ref={dropStageRef}
          className="falling_ghee_droplet"
          style={{
            position: 'absolute',
            top: 'clamp(170px, 24vh, 230px)',
            left: 'clamp(58%, 62vw, 68%)',
            width: '84px',
            height: '128px',
            pointerEvents: 'none',
            zIndex: 15,
            opacity: 0,
            transformOrigin: '50% 0%',
            filter: 'drop-shadow(0 18px 30px rgba(135, 40, 0, 0.55))',
          }}
        >
          <svg viewBox="0 0 100 150" fill="none" style={{ width: '100%', height: '100%' }}>
            <defs>
              {/* 3D Core Amber Fluid Body Gradient (Matching Reference Photo) */}
              <linearGradient id="refDropBody" x1="50%" y1="0%" x2="50%" y2="100%">
                <stop offset="0%" stopColor="#FFF7BD" stopOpacity="0.95" />
                <stop offset="16%" stopColor="#FFD54F" stopOpacity="0.98" />
                <stop offset="42%" stopColor="#FFA000" stopOpacity="1.0" />
                <stop offset="76%" stopColor="#E65100" stopOpacity="1.0" />
                <stop offset="100%" stopColor="#A83200" stopOpacity="1.0" />
              </linearGradient>

              {/* Internal Spherical Amber Caustic Refraction */}
              <radialGradient id="refDropCoreGlow" cx="50%" cy="65%" r="55%">
                <stop offset="0%" stopColor="#FFB300" stopOpacity="1" />
                <stop offset="55%" stopColor="#E65100" stopOpacity="0.95" />
                <stop offset="90%" stopColor="#B73500" stopOpacity="0.85" />
                <stop offset="100%" stopColor="#7A2200" stopOpacity="0.4" />
              </radialGradient>

              {/* Left Specular Curved Reflection Streak (Matching Reference Photo Left Rim) */}
              <linearGradient id="refDropLeftHighlight" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
                <stop offset="35%" stopColor="#FFF8DC" stopOpacity="0.85" />
                <stop offset="70%" stopColor="#FFE082" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#FFD54F" stopOpacity="0" />
              </linearGradient>

              {/* Right Specular Edge Reflection (Matching Reference Photo Right Rim) */}
              <linearGradient id="refDropRightHighlight" x1="100%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.85" />
                <stop offset="40%" stopColor="#FFF9C4" stopOpacity="0.7" />
                <stop offset="85%" stopColor="#FFD54F" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#FFA000" stopOpacity="0" />
              </linearGradient>

              {/* Front Glossy Convex Lens Softbox Reflection */}
              <linearGradient id="refDropConvexLens" x1="30%" y1="0%" x2="70%" y2="100%">
                <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.75" />
                <stop offset="50%" stopColor="#FFF9C4" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#FFA000" stopOpacity="0" />
              </linearGradient>
            </defs>

            {/* Ambient Warm Golden Glow Halo */}
            <ellipse cx="50" cy="95" rx="42" ry="28" fill="rgba(255, 174, 25, 0.45)" filter="blur(8px)" />

            {/* Main Teardrop Silhouette Matching Reference Photo */}
            <path
              d="M 50,8 C 62,35 88,68 88,102 C 88,126 71,142 50,142 C 29,142 12,126 12,102 C 12,68 38,35 50,8 Z"
              fill="url(#refDropBody)"
            />

            {/* Internal Volumetric Amber Refraction */}
            <path
              d="M 50,18 C 60,42 82,72 82,102 C 82,122 68,136 50,136 C 32,136 18,122 18,102 C 18,72 40,42 50,18 Z"
              fill="url(#refDropCoreGlow)"
            />

            {/* Left Curved Gloss Specular Streak */}
            <path
              d="M 44,22 C 32,44 18,72 18,98 C 18,114 26,128 36,134 C 28,126 23,114 23,98 C 23,76 35,50 44,22 Z"
              fill="url(#refDropLeftHighlight)"
            />

            {/* Right Rim Specular Streak */}
            <path
              d="M 56,24 C 68,46 80,72 80,98 C 80,114 73,126 64,134 C 71,126 75,114 75,98 C 75,76 65,50 56,24 Z"
              fill="url(#refDropRightHighlight)"
            />

            {/* Front Glossy Softbox Glare (Studio Softbox Reflection on Convex Bulb) */}
            <ellipse cx="40" cy="85" rx="14" ry="24" transform="rotate(-18 40 85)" fill="url(#refDropConvexLens)" />

            {/* Bottom Internal Caustic Lens Ring */}
            <ellipse cx="50" cy="132" rx="20" ry="5" fill="#FFF8DC" opacity="0.82" filter="blur(1px)" />

            {/* Pointed Top Light Pin */}
            <circle cx="50" cy="12" r="2.5" fill="#FFFFFF" opacity="0.95" />
          </svg>
        </div>

        {/* Impact Splash Expansion Ring at Section Edge */}
        <div
          ref={dropImpactSplashRef}
          style={{
            position: 'absolute',
            bottom: '70px',
            left: 'clamp(52%, 58vw, 64%)',
            width: '160px',
            height: '80px',
            transform: 'translate(-50%, 50%)',
            pointerEvents: 'none',
            zIndex: 14,
            opacity: 0,
          }}
        >
          <svg viewBox="0 0 160 80" fill="none" style={{ width: '100%', height: '100%' }}>
            <ellipse cx="80" cy="40" rx="72" ry="32" stroke="#FFF2A8" strokeWidth="3" opacity="0.9" />
            <ellipse cx="80" cy="40" rx="50" ry="22" stroke="#FFD54F" strokeWidth="2.5" opacity="0.8" />
            <ellipse cx="80" cy="40" rx="30" ry="14" stroke="#FFA000" strokeWidth="2" opacity="0.7" />
          </svg>
        </div>

        {/* =========================================================================
            LAYER 0: HERO SECTION EDITORIAL HIERARCHY (PHASE 1, 2, 3)
            Refined to match the Hungry Tiger reference layout:
            - Full-width gold dotted line running across the viewport
            - Eyebrow above headline
            - Main headline in elegant luxury serif font
            - Supporting headline "A2 GIR COW GHEE" centered beneath dotted line
            - Lowered jar with only top half visible at initial load
            ========================================================================= */}
        <div 
          className="showcase_layer layer_hero"
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-start',
            paddingTop: 'clamp(84px, 12vh, 108px)',
            width: '100%',
            maxWidth: '100%',
            zIndex: 3,
            pointerEvents: 'none',
          }}
        >
          {/* Centered Top Content Block */}
          <div 
            className="hero_center_content"
            style={{
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              userSelect: 'none',
              pointerEvents: 'none',
            }}
          >
            {/* 1. Eyebrow Kicker */}
            <div ref={heroEyebrowRef} style={{ marginBottom: 'clamp(10px, 1.8vh, 16px)', padding: '0 24px' }}>
              <span 
                className="caption_txt"
                style={{ 
                  color: 'var(--primary)', 
                  fontFamily: 'var(--font-sans)',
                  letterSpacing: '0.24em', 
                  fontSize: '12px', 
                  lineHeight: '16px',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  display: 'inline-block',
                }}
              >
                TRADITIONAL WOODEN BILONA METHOD
              </span>
            </div>

            {/* 2. Main Headline: Luxury Serif (Cormorant Garamond / Cinzel) */}
            <h1 
              ref={heroHeadlineRef}
              className="h1"
              style={{ 
                color: 'var(--primary)', 
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(3.2rem, 7.2vw, 6.6rem)', 
                fontWeight: 700,
                lineHeight: 0.90,
                letterSpacing: '0.03em',
                textTransform: 'uppercase',
                margin: 0,
                padding: '0 24px',
                textShadow: '0 4px 24px rgba(0, 0, 0, 0.40)',
                whiteSpace: 'nowrap',
              }}
            >
              sacred purity
            </h1>

            {/* 3. Full-Width Repeating Dotted Divider (Hungry Tiger Reference Match!) */}
            <div 
              ref={heroDottedRef}
              className="dotted_line" 
              style={{ 
                width: '100%',
                maxWidth: '100%',
                margin: 'clamp(14px, 2.2vh, 20px) 0',
                opacity: 0.85,
              }} 
            />

            {/* 4. Supporting Headline: Bold & Centered beneath Dotted Line */}
            <div 
              ref={heroSubheadingRef}
              className="like_h1"
              style={{ 
                color: 'var(--primary)', 
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.4rem, 2.6vw, 2.3rem)', 
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                textShadow: '0 2px 14px rgba(0, 0, 0, 0.35)',
                whiteSpace: 'nowrap',
                padding: '0 24px',
              }}
            >
              a2 gir cow ghee
            </div>
          </div>

          {/* 5. Bottom-Left Supporting Block */}
          <div 
            ref={heroBottomLeftRef}
            className="hero_bottom_left_block"
            style={{
              position: 'absolute',
              bottom: 'clamp(32px, 5vh, 52px)',
              left: 'clamp(32px, 5vw, 68px)',
              maxWidth: 'clamp(240px, 20vw, 300px)',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
              textAlign: 'left',
              pointerEvents: 'auto',
              zIndex: 10,
            }}
          >
            <p 
              className="base_txt"
              style={{ 
                color: 'var(--primary)', 
                fontFamily: 'var(--font-sans)',
                fontSize: '11px', 
                lineHeight: '16px', 
                letterSpacing: '0.08em',
                fontWeight: 500, 
                textShadow: '0 2px 8px rgba(0,0,0,0.4)',
                margin: 0,
                textTransform: 'uppercase',
                opacity: 0.9,
              }}
            >
              Crafted from native Gir cows grazing freely in Saurashtra Gaushalas. Churned before dawn in wooden Bilona vessels.
            </p>

            <button
              onClick={() => onAddToCart({ id: 'ghee-1000', title: 'Samvardhan A2 Gir Cow Ghee', volume: '1 Litre', price: 3000 })}
              className="nav_pill_btn"
              style={{ 
                width: 'fit-content',
                backgroundColor: 'var(--primary)',
                color: '#402011',
                fontFamily: 'var(--font-sans)',
                fontSize: '12px',
                lineHeight: '16px',
                letterSpacing: '0.12em',
                fontWeight: 700,
                padding: '9px 24px',
                borderRadius: '9999px',
                boxShadow: '0 4px 14px rgba(0,0,0,0.25)',
                cursor: 'pointer',
              }}
            >
              <span>BUY NOW</span>
            </button>
          </div>

          {/* 6. Bottom-Right Origin & Pricing Block */}
          <div 
            ref={heroBottomRightRef}
            className="hero_bottom_right_block"
            style={{
              position: 'absolute',
              bottom: 'clamp(32px, 5vh, 52px)',
              right: 'clamp(100px, 9.5vw, 136px)',
              textAlign: 'right',
              pointerEvents: 'auto',
              zIndex: 10,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-end',
            }}
          >
            <div 
              style={{ 
                color: 'var(--primary)', 
                fontFamily: 'var(--font-display)',
                letterSpacing: '0.20em', 
                fontSize: '11px', 
                lineHeight: '15px',
                fontWeight: 700, 
                textTransform: 'uppercase',
                textShadow: '0 2px 8px rgba(0,0,0,0.4)',
              }}
            >
              SAURASHTRA ORIGIN
            </div>
            <div
              style={{
                color: 'var(--primary)',
                fontFamily: 'var(--font-sans)',
                fontSize: '12px',
                lineHeight: '16px',
                fontWeight: 600,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                opacity: 0.95,
                marginTop: '4px',
                textShadow: '0 2px 8px rgba(0,0,0,0.4)',
              }}
            >
              ₹1,499 (500ML) &bull; ₹3,000 (1L)
            </div>
          </div>
        </div>

        {/* =========================================================================
            LAYER 1: PHASE 4 — PROGRESSIVE EDITORIAL STATEMENTS (0.16 -> 0.44)
            SINGLE LINED • BOLD • NORMAL STATIC POSITION • TRANSPARENT BACKGROUND
            NO POP IN/OUT ANIMATIONS (LINEAR VERTICAL TRANSLATION ONLY)
            ========================================================================= */}
        <div 
          className="showcase_layer layer_editorial_phrases"
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            padding: '0 clamp(28px, 6vw, 110px)',
            maxWidth: '1440px',
            margin: '0 auto',
            left: 0,
            right: 0,
            zIndex: 10,
            pointerEvents: 'none',
          }}
        >
          <div style={{ position: 'relative', width: '100%', maxWidth: '640px', minHeight: '260px' }}>
            
            {/* Phrase 1: PURE BY TRADITION. */}
            <div 
              ref={phrase1Ref}
              style={{
                position: 'absolute',
                top: '50%',
                left: 0,
                transform: 'translateY(-50%)',
                width: '100%',
                background: 'transparent',
                border: 'none',
                boxShadow: 'none',
                opacity: 0,
                pointerEvents: 'auto',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
              }}
            >
              {/* Single-lined bold kicker */}
              <div 
                style={{ 
                  color: 'var(--primary)', 
                  fontFamily: 'var(--font-sans)',
                  letterSpacing: '0.22em', 
                  fontSize: 'clamp(0.72rem, 1.1vw, 0.88rem)', 
                  fontWeight: 800, 
                  textTransform: 'uppercase',
                  whiteSpace: 'nowrap',
                  textShadow: '0 2px 10px rgba(0,0,0,0.6)',
                }}
              >
                ✦ STAGE 01 &bull; VEDIC AHIMSA GIR COW SANCTUARY ✦
              </div>

              {/* Single-lined bold headline */}
              <div 
                style={{ 
                  color: 'var(--primary)', 
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(2.4rem, 5.2vw, 4.8rem)', 
                  lineHeight: 0.95, 
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  letterSpacing: '0.01em',
                  whiteSpace: 'nowrap',
                  textShadow: '0 4px 24px rgba(0,0,0,0.65)',
                }}
              >
                PURE BY TRADITION.
              </div>

              {/* Single-lined bold subline */}
              <div 
                style={{ 
                  color: '#FFF8E7', 
                  fontFamily: 'var(--font-sans)',
                  fontSize: 'clamp(0.85rem, 1.3vw, 1.12rem)', 
                  fontWeight: 700, 
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  whiteSpace: 'nowrap',
                  textShadow: '0 2px 12px rgba(0,0,0,0.7)',
                }}
              >
                SOURCED FROM NATIVE SAURASHTRA GIR COWS GRAZING FREELY
              </div>

              {/* Single-lined bold detail guarantee */}
              <div 
                style={{ 
                  color: 'var(--primary)', 
                  fontFamily: 'var(--font-sans)',
                  fontSize: 'clamp(0.72rem, 1.0vw, 0.86rem)', 
                  fontWeight: 800, 
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  whiteSpace: 'nowrap',
                  opacity: 0.95,
                  textShadow: '0 2px 8px rgba(0,0,0,0.5)',
                }}
              >
                CALF NURTURED FIRST &bull; ZERO HORMONES &bull; 100% AHIMSA
              </div>
            </div>

            {/* Phrase 2: CRAFTED BEFORE DAWN. */}
            <div 
              ref={phrase2Ref}
              style={{
                position: 'absolute',
                top: '50%',
                left: 0,
                transform: 'translateY(-50%)',
                width: '100%',
                background: 'transparent',
                border: 'none',
                boxShadow: 'none',
                opacity: 0,
                pointerEvents: 'auto',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
              }}
            >
              {/* Single-lined bold kicker */}
              <div 
                style={{ 
                  color: 'var(--primary)', 
                  fontFamily: 'var(--font-sans)',
                  letterSpacing: '0.22em', 
                  fontSize: 'clamp(0.72rem, 1.1vw, 0.88rem)', 
                  fontWeight: 800, 
                  textTransform: 'uppercase',
                  whiteSpace: 'nowrap',
                  textShadow: '0 2px 10px rgba(0,0,0,0.6)',
                }}
              >
                ✦ STAGE 02 &bull; AUSPICIOUS BRAHMA MUHURTA CHURN ✦
              </div>

              {/* Single-lined bold headline */}
              <div 
                style={{ 
                  color: 'var(--primary)', 
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(2.4rem, 5.2vw, 4.8rem)', 
                  lineHeight: 0.95, 
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  letterSpacing: '0.01em',
                  whiteSpace: 'nowrap',
                  textShadow: '0 4px 24px rgba(0,0,0,0.65)',
                }}
              >
                CRAFTED BEFORE DAWN.
              </div>

              {/* Single-lined bold subline */}
              <div 
                style={{ 
                  color: '#FFF8E7', 
                  fontFamily: 'var(--font-sans)',
                  fontSize: 'clamp(0.85rem, 1.3vw, 1.12rem)', 
                  fontWeight: 700, 
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  whiteSpace: 'nowrap',
                  textShadow: '0 2px 12px rgba(0,0,0,0.7)',
                }}
              >
                HAND-CHURNED IN EARTHEN POTS UNDER MOONLIGHT COOLNESS
              </div>

              {/* Single-lined bold detail */}
              <div 
                style={{ 
                  color: 'var(--primary)', 
                  fontFamily: 'var(--font-sans)',
                  fontSize: 'clamp(0.72rem, 1.0vw, 0.86rem)', 
                  fontWeight: 800, 
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  whiteSpace: 'nowrap',
                  opacity: 0.95,
                  textShadow: '0 2px 8px rgba(0,0,0,0.5)',
                }}
              >
                4:30 AM CHURN &bull; PRESERVES LIVING PRANA &bull; HEAT-SENSITIVE VITAMINS
              </div>
            </div>

            {/* Phrase 3: WOODEN BILONA METHOD. */}
            <div 
              ref={phrase3Ref}
              style={{
                position: 'absolute',
                top: '50%',
                left: 0,
                transform: 'translateY(-50%)',
                width: '100%',
                background: 'transparent',
                border: 'none',
                boxShadow: 'none',
                opacity: 0,
                pointerEvents: 'auto',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
              }}
            >
              {/* Single-lined bold kicker */}
              <div 
                style={{ 
                  color: 'var(--primary)', 
                  fontFamily: 'var(--font-sans)',
                  letterSpacing: '0.22em', 
                  fontSize: 'clamp(0.72rem, 1.1vw, 0.88rem)', 
                  fontWeight: 800, 
                  textTransform: 'uppercase',
                  whiteSpace: 'nowrap',
                  textShadow: '0 2px 10px rgba(0,0,0,0.6)',
                }}
              >
                ✦ STAGE 03 &bull; TWO-WAY WOODEN MATHANI ALCHEMY ✦
              </div>

              {/* Single-lined bold headline */}
              <div 
                style={{ 
                  color: 'var(--primary)', 
                  fontFamily: 'var(--font-serif)',
                  fontSize: 'clamp(2.4rem, 5.2vw, 4.8rem)', 
                  lineHeight: 0.95, 
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  letterSpacing: '0.01em',
                  whiteSpace: 'nowrap',
                  textShadow: '0 4px 24px rgba(0,0,0,0.65)',
                }}
              >
                WOODEN BILONA METHOD.
              </div>

              {/* Single-lined bold subline */}
              <div 
                style={{ 
                  color: '#FFF8E7', 
                  fontFamily: 'var(--font-sans)',
                  fontSize: 'clamp(0.85rem, 1.3vw, 1.12rem)', 
                  fontWeight: 700, 
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  whiteSpace: 'nowrap',
                  textShadow: '0 2px 12px rgba(0,0,0,0.7)',
                }}
              >
                SLOW-SIMMERED OVER GENTLE WOODFIRE EMBERS IN CLAY POTS
              </div>

              {/* Single-lined bold detail */}
              <div 
                style={{ 
                  color: 'var(--primary)', 
                  fontFamily: 'var(--font-sans)',
                  fontSize: 'clamp(0.72rem, 1.0vw, 0.86rem)', 
                  fontWeight: 800, 
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  whiteSpace: 'nowrap',
                  opacity: 0.95,
                  textShadow: '0 2px 8px rgba(0,0,0,0.5)',
                }}
              >
                ACACIA WOOD MATHANI &bull; AUTHENTIC DANEDAR GRANULAR GOLD
              </div>
            </div>

          </div>
        </div>

        {/* =========================================================================
            LAYER 2: PHASE 5a — JAR OPENING INTRODUCTION (0.45 -> 0.54)
            SINGLE LINED • BOLD • TRANSPARENT BACKGROUND • SMOOTH VERTICAL SCROLL
            ========================================================================= */}
        <div 
          className="showcase_layer layer_opening_intro"
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-start',
            paddingTop: 'clamp(90px, 14vh, 130px)',
            paddingLeft: '24px',
            paddingRight: '24px',
            textAlign: 'center',
            zIndex: 3,
            pointerEvents: 'none',
          }}
        >
          <div 
            ref={openingTitleRef}
            style={{
              maxWidth: '1000px',
              margin: '0 auto',
              opacity: 0,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '10px',
            }}
          >
            {/* Single-lined bold kicker */}
            <div 
              style={{ 
                color: 'var(--primary)', 
                fontFamily: 'var(--font-sans)',
                fontSize: 'clamp(0.76rem, 1.1vw, 0.92rem)', 
                letterSpacing: '0.24em', 
                fontWeight: 800, 
                textTransform: 'uppercase',
                whiteSpace: 'nowrap',
                textShadow: '0 2px 10px rgba(0,0,0,0.6)',
              }}
            >
              ✦ THE SACRED BILONA ALCHEMY ✦
            </div>

            {/* Single-lined bold headline */}
            <div 
              style={{ 
                fontFamily: 'var(--font-serif)', 
                fontSize: 'clamp(2.6rem, 5.8vw, 5.4rem)', 
                color: 'var(--primary)', 
                fontWeight: 800, 
                lineHeight: 0.95,
                margin: 0,
                textTransform: 'uppercase',
                letterSpacing: '0.02em',
                whiteSpace: 'nowrap',
                textShadow: '0 4px 24px rgba(0, 0, 0, 0.65)',
              }}
            >
              UNLOCKING THE LIQUID GOLD
            </div>

            {/* Single-lined bold subline */}
            <div 
              style={{ 
                color: '#FFF8E7', 
                fontFamily: 'var(--font-sans)',
                fontSize: 'clamp(0.85rem, 1.3vw, 1.15rem)', 
                fontWeight: 700, 
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                whiteSpace: 'nowrap',
                textShadow: '0 2px 12px rgba(0,0,0,0.7)',
              }}
            >
              SLOW-SIMMERED OVER GENTLE EMBERS INTO PURE DANEDAR NECTAR
            </div>
          </div>
        </div>

        {/* =========================================================================
            LAYER 3: PHASE 5b/c — WHAT'S INSIDE THAT GHEE (LEFT EDITORIAL COLUMN)
            Active 0.60 -> 0.88. Positioned on the left side of the viewport,
            completely separated from the tilted jar on the right side and the falling drop.
            ALL TEXT: SINGLE LINED • BOLD • TRANSPARENT BACKGROUND • STATIC POSITION
            NO POP IN/OUT ANIMATIONS (LINEAR VERTICAL SCROLL ONLY)
            ========================================================================= */}
        <div 
          className="showcase_layer layer_whats_inside_liquid"
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            paddingLeft: 'clamp(28px, 6vw, 96px)',
            paddingRight: '24px',
            maxWidth: '1440px',
            margin: '0 auto',
            left: 0,
            right: 0,
            zIndex: 12,
            pointerEvents: 'none',
          }}
        >
          <div 
            style={{ 
              maxWidth: 'clamp(340px, 38vw, 490px)', 
              pointerEvents: 'auto',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
            }}
          >
            {/* Kicker badge: single-lined & bold */}
            <div 
              ref={wiBadgeRef} 
              style={{ 
                color: 'var(--primary)', 
                fontFamily: 'var(--font-sans)',
                letterSpacing: '0.22em', 
                fontSize: 'clamp(0.74rem, 1.1vw, 0.90rem)', 
                fontWeight: 800, 
                textTransform: 'uppercase',
                whiteSpace: 'nowrap',
                textShadow: '0 2px 10px rgba(0,0,0,0.6)',
                opacity: 0,
              }}
            >
              ✦ SACRED BILONA ANATOMY ✦
            </div>

            {/* Main Title: single-lined & bold */}
            <div 
              ref={wiTitleRef}
              style={{ 
                fontFamily: 'var(--font-serif)', 
                fontSize: 'clamp(2.4rem, 4.8vw, 4.2rem)', 
                color: 'var(--primary)', 
                fontWeight: 800, 
                lineHeight: 0.95,
                margin: 0,
                textTransform: 'uppercase',
                letterSpacing: '0.01em',
                whiteSpace: 'nowrap',
                textShadow: '0 4px 24px rgba(0,0,0,0.65)',
                opacity: 0,
              }}
            >
              WHAT'S INSIDE THE GHEE
            </div>

            {/* Dotted separator line */}
            <div 
              ref={wiDottedRef} 
              className="dotted_line" 
              style={{ 
                maxWidth: 380, 
                margin: '4px 0 8px', 
                opacity: 0,
              }} 
            />

            {/* Ingredient 1: Single-lined & bold */}
            <div ref={wiItem1Ref} style={{ display: 'flex', flexDirection: 'column', gap: '3px', opacity: 0 }}>
              <div 
                style={{ 
                  color: 'var(--primary)', 
                  fontFamily: 'var(--font-display)', 
                  fontSize: 'clamp(1.02rem, 1.7vw, 1.45rem)', 
                  fontWeight: 800, 
                  letterSpacing: '0.06em', 
                  textTransform: 'uppercase',
                  whiteSpace: 'nowrap',
                  textShadow: '0 2px 12px rgba(0,0,0,0.6)',
                }}
              >
                01 &bull; WHOLE A2 GIR COW MILK
              </div>
              <div 
                style={{ 
                  color: '#FFF8E7', 
                  fontFamily: 'var(--font-sans)',
                  fontSize: 'clamp(0.74rem, 1.0vw, 0.88rem)', 
                  fontWeight: 700, 
                  letterSpacing: '0.08em', 
                  textTransform: 'uppercase',
                  whiteSpace: 'nowrap',
                  textShadow: '0 2px 8px rgba(0,0,0,0.6)',
                }}
              >
                NATIVE SAURASHTRA HERD &bull; PURE A2 BETA-CASEIN BASE
              </div>
            </div>

            {/* Ingredient 2: Single-lined & bold */}
            <div ref={wiItem2Ref} style={{ display: 'flex', flexDirection: 'column', gap: '3px', opacity: 0 }}>
              <div 
                style={{ 
                  color: 'var(--primary)', 
                  fontFamily: 'var(--font-display)', 
                  fontSize: 'clamp(1.02rem, 1.7vw, 1.45rem)', 
                  fontWeight: 800, 
                  letterSpacing: '0.06em', 
                  textTransform: 'uppercase',
                  whiteSpace: 'nowrap',
                  textShadow: '0 2px 12px rgba(0,0,0,0.6)',
                }}
              >
                02 &bull; WOODFIRE CULTURED MAKHAN
              </div>
              <div 
                style={{ 
                  color: '#FFF8E7', 
                  fontFamily: 'var(--font-sans)',
                  fontSize: 'clamp(0.74rem, 1.0vw, 0.88rem)', 
                  fontWeight: 700, 
                  letterSpacing: '0.08em', 
                  textTransform: 'uppercase',
                  whiteSpace: 'nowrap',
                  textShadow: '0 2px 8px rgba(0,0,0,0.6)',
                }}
              >
                BI-DIRECTIONAL ACACIA BILONA CHURN &bull; VELVETY NUTTY AROMA
              </div>
            </div>

            {/* Ingredient 3: Single-lined & bold */}
            <div ref={wiItem3Ref} style={{ display: 'flex', flexDirection: 'column', gap: '3px', opacity: 0 }}>
              <div 
                style={{ 
                  color: 'var(--primary)', 
                  fontFamily: 'var(--font-display)', 
                  fontSize: 'clamp(1.02rem, 1.7vw, 1.45rem)', 
                  fontWeight: 800, 
                  letterSpacing: '0.06em', 
                  textTransform: 'uppercase',
                  whiteSpace: 'nowrap',
                  textShadow: '0 2px 12px rgba(0,0,0,0.6)',
                }}
              >
                03 &bull; 99.8% CLARIFIED DANEDAR GOLD
              </div>
              <div 
                style={{ 
                  color: '#FFF8E7', 
                  fontFamily: 'var(--font-sans)',
                  fontSize: 'clamp(0.74rem, 1.0vw, 0.88rem)', 
                  fontWeight: 700, 
                  letterSpacing: '0.08em', 
                  textTransform: 'uppercase',
                  whiteSpace: 'nowrap',
                  textShadow: '0 2px 8px rgba(0,0,0,0.6)',
                }}
              >
                NATURAL GRANULAR BETA-CAROTENE CRYSTALS &bull; ZERO ADDITIVES
              </div>
            </div>

            {/* Purity Guarantee: Single-lined & bold */}
            <div 
              ref={wiGuaranteeRef}
              style={{ 
                color: 'var(--primary)', 
                fontFamily: 'var(--font-sans)',
                fontSize: 'clamp(0.74rem, 1.0vw, 0.88rem)', 
                fontWeight: 800, 
                letterSpacing: '0.14em', 
                textTransform: 'uppercase',
                whiteSpace: 'nowrap',
                marginTop: '4px',
                textShadow: '0 2px 10px rgba(0,0,0,0.6)',
                opacity: 0,
              }}
            >
              ✦ NO FILLERS &bull; NO SHORTCUTS &bull; PURE GOLDEN NECTAR ✦
            </div>

          </div>
        </div>

        {/* =========================================================================
            LAYER 4: 5+ LAYER PARALLAX OCEAN CURRENT OF LIQUID GHEE (NON-INTERACTIVE)
            Expands as the golden droplet falls down to the edge of the new section (#about).
            6 distinct fluid parallax layers with continuous oceanic wave oscillations!
            ========================================================================= */}
        <div 
          ref={oceanContainerRef}
          className="ocean_of_ghee_container"
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            width: '100vw',
            height: '340px',
            pointerEvents: 'none',
            zIndex: 14,
            opacity: 0,
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
          }}
        >
          <svg 
            viewBox="0 0 1440 340" 
            fill="none" 
            preserveAspectRatio="none"
            style={{ 
              position: 'absolute', 
              bottom: 0, 
              left: 0, 
              width: '100%', 
              height: '100%', 
            }}
          >
            <defs>
              {/* Ocean Layer 1: Abyssal Deep Molten Amber Gradient */}
              <linearGradient id="oceanAbyssGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="rgba(140, 43, 0, 0.75)" />
                <stop offset="40%" stopColor="rgba(115, 30, 0, 0.92)" />
                <stop offset="100%" stopColor="#4A1200" />
              </linearGradient>

              {/* Ocean Layer 2: Viscous Under-Current Ocean Body Gradient */}
              <linearGradient id="oceanUnderCurrentGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#D47300" stopOpacity="0.85" />
                <stop offset="45%" stopColor="#B84F00" stopOpacity="0.95" />
                <stop offset="100%" stopColor="#7E2600" stopOpacity="1.0" />
              </linearGradient>

              {/* Ocean Layer 3: Mid-Depth Rolling Golden Wave Stream Gradient */}
              <linearGradient id="oceanMidStreamGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#F5A623" stopOpacity="0.92" />
                <stop offset="35%" stopColor="#E68A00" stopOpacity="0.96" />
                <stop offset="100%" stopColor="#C45A00" stopOpacity="1.0" />
              </linearGradient>

              {/* Ocean Layer 4: Surface Wave Surge & Churning Eddies Gradient */}
              <linearGradient id="oceanSurfaceSurgeGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#FFD54F" stopOpacity="0.95" />
                <stop offset="30%" stopColor="#FFB300" stopOpacity="0.98" />
                <stop offset="100%" stopColor="#F57C00" stopOpacity="1.0" />
              </linearGradient>

              {/* Ocean Layer 5: Specular Wave Crest Foam & Sunlight Highlight Gradient */}
              <linearGradient id="oceanSpecularCrestGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#FFFDF0" stopOpacity="0.98" />
                <stop offset="25%" stopColor="#FFF59D" stopOpacity="0.90" />
                <stop offset="50%" stopColor="#FFFFFF" stopOpacity="1.0" />
                <stop offset="75%" stopColor="#FFF176" stopOpacity="0.88" />
                <stop offset="100%" stopColor="#FFFDF0" stopOpacity="0.98" />
              </linearGradient>
            </defs>

            {/* LAYER 1: ABYSSAL DEEP AMBER OCEAN BASE (Slow Parallax + Wave 1) */}
            <g ref={oceanLayer1Ref} style={{ animation: 'oceanWaveCurrent1 12s ease-in-out infinite' }}>
              <path 
                d="M 0,110 C 240,60 480,150 720,90 C 960,30 1200,140 1440,75 L 1440,340 L 0,340 Z" 
                fill="url(#oceanAbyssGrad)" 
              />
            </g>

            {/* LAYER 2: VISCOUS UNDER-CURRENT OCEAN WAVE (Intermediate Parallax + Wave 2) */}
            <g ref={oceanLayer2Ref} style={{ animation: 'oceanWaveCurrent2 10s ease-in-out infinite' }}>
              <path 
                d="M 0,140 C 220,180 500,80 740,150 C 980,210 1220,100 1440,135 L 1440,340 L 0,340 Z" 
                fill="url(#oceanUnderCurrentGrad)" 
              />
            </g>

            {/* LAYER 3: MID-DEPTH ROLLING GOLDEN WAVE STREAM (Mid Parallax + Wave 3) */}
            <g ref={oceanLayer3Ref} style={{ animation: 'oceanWaveCurrent3 8.5s ease-in-out infinite' }}>
              <path 
                d="M 0,185 C 260,130 520,230 760,170 C 1000,110 1240,210 1440,165 L 1440,340 L 0,340 Z" 
                fill="url(#oceanMidStreamGrad)" 
              />
            </g>

            {/* LAYER 4: SURFACE WAVE SURGE & CHURNING EDDIES (Fast Parallax + Wave 4) */}
            <g ref={oceanLayer4Ref} style={{ animation: 'oceanWaveCurrent4 7s ease-in-out infinite' }}>
              <path 
                d="M 0,225 C 200,265 460,185 700,240 C 940,290 1180,205 1440,230 L 1440,340 L 0,340 Z" 
                fill="url(#oceanSurfaceSurgeGrad)" 
              />
            </g>

            {/* LAYER 5: SPECULAR CREST WAVE FOAM & SUNLIGHT GLIMMER (Fastest Parallax + Wave 5) */}
            <g ref={oceanLayer5Ref} style={{ animation: 'oceanWaveCurrent5 6s ease-in-out infinite' }}>
              <path 
                d="M 0,184 C 260,129 520,229 760,169 C 1000,109 1240,209 1440,164" 
                fill="none" 
                stroke="url(#oceanSpecularCrestGrad)" 
                strokeWidth="3.5" 
                strokeLinecap="round" 
                opacity="0.9" 
              />
              <path 
                d="M 0,224 C 200,264 460,184 700,239 C 940,289 1180,204 1440,229" 
                fill="none" 
                stroke="#FFFDF5" 
                strokeWidth="2.5" 
                strokeLinecap="round" 
                opacity="0.95" 
              />
            </g>

            {/* LAYER 6: DANEDAR CRYSTAL PEARLS & SWIRLING FLUID PARTICLES */}
            <g ref={oceanLayer6Ref}>
              <circle cx="120" cy="220" r="4.5" fill="#FFFDF0" opacity="0.9" />
              <circle cx="280" cy="180" r="3.5" fill="#FFE082" opacity="0.85" />
              <circle cx="390" cy="245" r="5" fill="#FFF8DC" opacity="0.95" />
              <circle cx="510" cy="195" r="3" fill="#FFFDF0" opacity="0.8" />
              <circle cx="640" cy="230" r="5.5" fill="#FFD54F" opacity="0.9" />
              <circle cx="760" cy="175" r="4" fill="#FFFDF0" opacity="0.95" />
              <circle cx="890" cy="255" r="3.5" fill="#FFF9C4" opacity="0.85" />
              <circle cx="1020" cy="210" r="5" fill="#FFFDF0" opacity="0.92" />
              <circle cx="1140" cy="265" r="3" fill="#FFE082" opacity="0.8" />
              <circle cx="1260" cy="200" r="4.5" fill="#FFF8DC" opacity="0.9" />
              <circle cx="1380" cy="240" r="3.5" fill="#FFFDF0" opacity="0.85" />
              <polygon points="340,165 343,172 350,172 344,176 346,182 340,178 334,182 336,176 330,172 337,172" fill="#FFFDF0" opacity="0.92" />
              <polygon points="720,155 723,162 730,162 724,166 726,172 720,168 714,172 716,166 710,162 717,162" fill="#FFFFFF" opacity="0.98" />
              <polygon points="1080,185 1083,192 1090,192 1084,196 1086,202 1080,198 1074,202 1076,196 1070,192 1077,192" fill="#FFFDF0" opacity="0.9" />
            </g>
          </svg>

          {/* Golden Ocean Current Transition Bar */}
          <div 
            style={{ 
              position: 'relative', 
              zIndex: 10, 
              color: '#1A0D06', 
              fontFamily: 'var(--font-sans)', 
              fontSize: 'clamp(0.74rem, 1.1vw, 0.88rem)', 
              fontWeight: 800, 
              letterSpacing: '0.22em', 
              textTransform: 'uppercase',
              whiteSpace: 'nowrap',
              textAlign: 'center',
              paddingBottom: '20px',
              textShadow: '0 1px 4px rgba(255,255,255,0.4)',
            }}
          >
            ✦ SACRED OCEAN OF BILONA GOLD &bull; FLOWS SEAMLESSLY INTO THE ORIGIN ✦
          </div>
        </div>

      </div>
    </div>
  );
}
