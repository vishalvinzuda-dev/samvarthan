import React from 'react';

/**
 * StickyBotanicalBackground (PROMPT 04)
 * Continuous fixed traditional Indian heritage canvas.
 * Stays permanently stationary at the application root (zIndex: 0) while all
 * website sections, 3D product canvas, typography, and interactive elements scroll over it.
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
        backgroundColor: '#7A2E12',
      }}
    >
      {/* 1. Primary Fixed Heritage Canvas Artwork (Samvardhan Indian Heritage Environment) */}
      <div 
        className="heritage_canvas_img"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          backgroundImage: "url('/samvardhan-heritage-bg.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
        }}
      />

      {/* 2. Subtle Dark Readability Overlay: Preserves text contrast while letting the sacred cow, Gaushala, and golden motifs shine through */}
      <div 
        className="heritage_canvas_overlay"
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse at 50% 50%, rgba(20, 8, 4, 0.05) 0%, rgba(20, 8, 4, 0.28) 100%)',
          pointerEvents: 'none',
        }}
      />
    </div>
  );
}
