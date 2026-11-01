import React from 'react';

/**
 * StickyBotanicalBackground
 * A permanent, fixed artisanal backdrop matching the Eat Hungry Tiger aesthetic.
 * Remains 100% sticky across the entire site with high-visibility sacred Vedic
 * botanical patterns (Bilva leaves, Saurashtra pasture wheat, and Banyan foliage).
 */
export default function StickyBotanicalBackground() {
  return (
    <div
      className="fixed_sticky_art_backdrop"
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0,
        pointerEvents: 'none',
        overflow: 'hidden',
        background: 'radial-gradient(circle at 50% 38%, #8E3917 0%, #762D11 50%, #481806 100%)',
      }}
    >
      {/* High-Visibility Artisanal Botanical Watermarks */}
      <svg
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
        }}
      >
        <defs>
          {/* Subtle Cardstock Texture Filter */}
          <filter id="stickyPaperNoise">
            <feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="3" result="noise" />
            <feColorMatrix type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.045 0" />
          </filter>

          {/* Reusable Botanical Leaf Motif: Bilva Leaflet */}
          <g id="bilvaLeaf">
            <path
              d="M0,0 C-18,-35 -14,-75 0,-105 C14,-75 18,-35 0,0 Z"
              fill="rgba(32, 9, 3, 0.36)"
              stroke="rgba(240, 195, 110, 0.24)"
              strokeWidth="1.6"
            />
            {/* Center vein */}
            <path d="M0,0 L0,-95" stroke="rgba(240, 195, 110, 0.28)" strokeWidth="1.2" />
            {/* Side veins */}
            <path d="M0,-30 Q-8,-45 -12,-52" stroke="rgba(240, 195, 110, 0.2)" strokeWidth="1" />
            <path d="M0,-30 Q8,-45 12,-52" stroke="rgba(240, 195, 110, 0.2)" strokeWidth="1" />
            <path d="M0,-60 Q-6,-72 -9,-78" stroke="rgba(240, 195, 110, 0.2)" strokeWidth="1" />
            <path d="M0,-60 Q6,-72 9,-78" stroke="rgba(240, 195, 110, 0.2)" strokeWidth="1" />
          </g>

          {/* Reusable Saurashtra Wheat Ear */}
          <g id="wheatEar">
            <path d="M0,0 Q-4,-40 -12,-80" stroke="rgba(240, 195, 110, 0.28)" strokeWidth="1.6" fill="none" />
            <ellipse cx="-4" cy="-25" rx="5" ry="11" transform="rotate(-25 -4 -25)" fill="rgba(32, 9, 3, 0.34)" stroke="rgba(240, 195, 110, 0.22)" strokeWidth="1.4" />
            <ellipse cx="2" cy="-35" rx="5" ry="11" transform="rotate(25 2 -35)" fill="rgba(32, 9, 3, 0.34)" stroke="rgba(240, 195, 110, 0.22)" strokeWidth="1.4" />
            <ellipse cx="-7" cy="-50" rx="5" ry="11" transform="rotate(-30 -7 -50)" fill="rgba(32, 9, 3, 0.34)" stroke="rgba(240, 195, 110, 0.22)" strokeWidth="1.4" />
            <ellipse cx="0" cy="-62" rx="5" ry="11" transform="rotate(25 0 -62)" fill="rgba(32, 9, 3, 0.34)" stroke="rgba(240, 195, 110, 0.22)" strokeWidth="1.4" />
            <ellipse cx="-10" cy="-76" rx="4" ry="10" transform="rotate(-28 -10 -76)" fill="rgba(32, 9, 3, 0.34)" stroke="rgba(240, 195, 110, 0.22)" strokeWidth="1.4" />
            {/* Awn bristles */}
            <path d="M-6,-28 L-18,-42 M4,-38 L16,-52 M-9,-53 L-22,-70 M2,-65 L14,-82" stroke="rgba(240, 195, 110, 0.18)" strokeWidth="1" />
          </g>

          {/* Reusable Banyan / Broad Heart Leaf */}
          <g id="broadLeaf">
            <path
              d="M0,0 C-35,-20 -55,-60 -45,-100 C-35,-140 0,-155 0,-165 C0,-155 35,-140 45,-100 C55,-60 35,-20 0,0 Z"
              fill="rgba(30, 8, 3, 0.34)"
              stroke="rgba(240, 195, 110, 0.24)"
              strokeWidth="1.6"
            />
            <path d="M0,0 L0,-155" stroke="rgba(240, 195, 110, 0.28)" strokeWidth="1.4" />
            <path d="M0,-40 Q-22,-55 -35,-65" stroke="rgba(240, 195, 110, 0.2)" strokeWidth="1" fill="none" />
            <path d="M0,-40 Q22,-55 35,-65" stroke="rgba(240, 195, 110, 0.2)" strokeWidth="1" fill="none" />
            <path d="M0,-85 Q-20,-100 -30,-115" stroke="rgba(240, 195, 110, 0.2)" strokeWidth="1" fill="none" />
            <path d="M0,-85 Q20,-100 30,-115" stroke="rgba(240, 195, 110, 0.2)" strokeWidth="1" fill="none" />
          </g>
        </defs>

        {/* Paper Grain Overlay */}
        <rect width="100%" height="100%" filter="url(#stickyPaperNoise)" fill="none" />

        {/* -------------------------------------------------------------
            1. TOP-LEFT BOTANICAL CLUSTER (Bilva branch + Pasture grass)
            ------------------------------------------------------------- */}
        <g transform="translate(110, 160) rotate(-15)">
          <path d="M-80,80 Q20,30 110,-20 Q180,-60 260,-90" stroke="rgba(240, 195, 110, 0.26)" strokeWidth="2" fill="none" />
          {/* Trifoliate Leaf Cluster */}
          <g transform="translate(110, -20) scale(1.15)">
            <use href="#bilvaLeaf" transform="rotate(-35)" />
            <use href="#bilvaLeaf" transform="rotate(5) translate(0, -10)" />
            <use href="#bilvaLeaf" transform="rotate(45)" />
          </g>
          {/* Secondary branch with broad leaf */}
          <use href="#broadLeaf" transform="translate(20, 35) rotate(-60) scale(0.75)" />
          <use href="#wheatEar" transform="translate(-40, 60) rotate(-40) scale(0.9)" />
        </g>

        {/* -------------------------------------------------------------
            2. TOP-RIGHT BOTANICAL CLUSTER (Saurashtra Golden Wheat & Grass)
            ------------------------------------------------------------- */}
        <g transform="translate(1330, 150) rotate(22)">
          <path d="M80,80 Q-20,30 -110,-30 Q-180,-80 -250,-120" stroke="rgba(240, 195, 110, 0.26)" strokeWidth="2" fill="none" />
          <use href="#wheatEar" transform="translate(-110, -30) scale(1.35) rotate(15)" />
          <use href="#wheatEar" transform="translate(-60, 10) scale(1.1) rotate(40)" />
          <use href="#bilvaLeaf" transform="translate(-160, -70) scale(1.1) rotate(-45)" />
          <use href="#broadLeaf" transform="translate(-20, 45) scale(0.7) rotate(30)" />
        </g>

        {/* -------------------------------------------------------------
            3. MID-LEFT BOTANICAL FLOURISH (Framing the Left Text Zones)
            ------------------------------------------------------------- */}
        <g transform="translate(60, 480) rotate(28)">
          <path d="M-60,-80 Q30,-20 90,50 Q140,110 180,180" stroke="rgba(240, 195, 110, 0.24)" strokeWidth="1.8" fill="none" />
          <use href="#broadLeaf" transform="translate(90, 50) scale(1.1) rotate(60)" />
          <use href="#bilvaLeaf" transform="translate(30, -20) scale(0.9) rotate(-30)" />
          <use href="#wheatEar" transform="translate(130, 100) scale(1.05) rotate(75)" />
        </g>

        {/* -------------------------------------------------------------
            4. MID-RIGHT BOTANICAL FLOURISH (Framing the Right Docked Jar)
            ------------------------------------------------------------- */}
        <g transform="translate(1380, 490) rotate(-24)">
          <path d="M60,-80 Q-30,-20 -90,50 Q-140,110 -190,180" stroke="rgba(240, 195, 110, 0.24)" strokeWidth="1.8" fill="none" />
          <g transform="translate(-90, 50) scale(1.15)">
            <use href="#bilvaLeaf" transform="rotate(-40)" />
            <use href="#bilvaLeaf" transform="rotate(0) translate(0, -8)" />
            <use href="#bilvaLeaf" transform="rotate(40)" />
          </g>
          <use href="#wheatEar" transform="translate(-40, -10) scale(1.2) rotate(-55)" />
          <use href="#broadLeaf" transform="translate(-130, 95) scale(0.85) rotate(-70)" />
        </g>

        {/* -------------------------------------------------------------
            5. BOTTOM-LEFT BOTANICAL CLUSTER
            ------------------------------------------------------------- */}
        <g transform="translate(120, 780) rotate(-35)">
          <path d="M-80,60 Q10,20 90,-25 Q160,-65 240,-95" stroke="rgba(240, 195, 110, 0.26)" strokeWidth="2" fill="none" />
          <use href="#broadLeaf" transform="translate(90, -25) scale(1.2) rotate(35)" />
          <use href="#wheatEar" transform="translate(20, 15) scale(1.1) rotate(-15)" />
          <use href="#bilvaLeaf" transform="translate(170, -65) scale(0.95) rotate(55)" />
        </g>

        {/* -------------------------------------------------------------
            6. BOTTOM-RIGHT BOTANICAL CLUSTER
            ------------------------------------------------------------- */}
        <g transform="translate(1340, 790) rotate(32)">
          <path d="M80,60 Q-10,20 -90,-25 Q-160,-65 -230,-95" stroke="rgba(240, 195, 110, 0.26)" strokeWidth="2" fill="none" />
          <g transform="translate(-90, -25) scale(1.1)">
            <use href="#bilvaLeaf" transform="rotate(-30)" />
            <use href="#bilvaLeaf" transform="rotate(8) translate(0, -8)" />
            <use href="#bilvaLeaf" transform="rotate(45)" />
          </g>
          <use href="#wheatEar" transform="translate(-30, 15) scale(1.2) rotate(40)" />
          <use href="#broadLeaf" transform="translate(-170, -65) scale(0.8) rotate(-45)" />
        </g>

        {/* -------------------------------------------------------------
            7. DELICATE CENTER-UPPER RADIANT HALO & FLOATING LEAF ACCENTS
            ------------------------------------------------------------- */}
        <g transform="translate(720, 240)" opacity="0.65">
          {/* Subtle Vedic sunburst ring behind hero headline */}
          <circle cx="0" cy="0" r="180" stroke="rgba(240, 195, 110, 0.12)" strokeWidth="1.2" strokeDasharray="4 8" fill="none" />
          <circle cx="0" cy="0" r="260" stroke="rgba(240, 195, 110, 0.08)" strokeWidth="1" strokeDasharray="6 12" fill="none" />
          {/* Subtle floating leaves */}
          <use href="#bilvaLeaf" transform="translate(-340, 30) scale(0.65) rotate(55)" opacity="0.75" />
          <use href="#bilvaLeaf" transform="translate(340, 25) scale(0.65) rotate(-65)" opacity="0.75" />
          <use href="#wheatEar" transform="translate(-240, 120) scale(0.7) rotate(60)" opacity="0.7" />
          <use href="#wheatEar" transform="translate(240, 115) scale(0.7) rotate(-55)" opacity="0.7" />
        </g>
      </svg>
    </div>
  );
}

