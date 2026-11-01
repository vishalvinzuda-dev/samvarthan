import React, { useEffect, useState, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

export default function ShowcaseStageHT({ onAddToCart, onOpenModal }) {
  const stageRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const stage = stageRef.current;
      if (!stage) return;

      const rect = stage.getBoundingClientRect();
      const scrollable = stage.offsetHeight - window.innerHeight;
      if (scrollable <= 0) return;

      // Normalized progress from 0.0 to 1.0
      const p = Math.max(0, Math.min(1, -rect.top / scrollable));
      setProgress(p);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Silky Smooth Dwell-Locked Motion Helper
  // Returns { opacity, transform, pointerEvents, transition }
  const getSceneMotion = (enterStart, enterEnd, exitStart, exitEnd) => {
    let opacity = 0;
    let translateY = 24;

    if (progress < enterStart) {
      opacity = 0;
      translateY = 24;
    } else if (progress >= enterStart && progress < enterEnd) {
      const p = (progress - enterStart) / (enterEnd - enterStart);
      opacity = p;
      translateY = 24 * (1 - p);
    } else if (progress >= enterEnd && progress <= exitStart) {
      // Generous Dwell Reading Zone - completely locked and readable!
      opacity = 1;
      translateY = 0;
    } else if (progress > exitStart && progress <= exitEnd) {
      const p = (progress - exitStart) / (exitEnd - exitStart);
      opacity = 1 - p;
      translateY = -24 * p;
    } else {
      opacity = 0;
      translateY = -24;
    }

    return {
      opacity,
      transform: `translate3d(0, ${translateY}px, 0)`,
      pointerEvents: opacity > 0.2 ? 'auto' : 'none',
      transition: 'opacity 0.25s cubic-bezier(0.16, 1, 0.3, 1), transform 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
    };
  };

  // Motion calculations for each scene layer (extended dwell for high readability):
  const heroMotion = getSceneMotion(0.0, 0.0, 0.12, 0.20);
  const purityMotion = getSceneMotion(0.20, 0.26, 0.44, 0.50);
  const unwrapMotion = getSceneMotion(0.48, 0.54, 0.68, 0.74);
  const wellnessMotion = getSceneMotion(0.72, 0.78, 0.92, 0.98);

  const aromaIcons = [
    { label: 'Nutty Makhan', emoji: '🌰', desc: 'Slow woodfired cultured butter aroma' },
    { label: 'Danedar Crystals', emoji: '✨', desc: 'Signature granular golden carotene' },
    { label: 'Golden Carotene', emoji: '🌿', desc: 'Nutrient-rich grassfed Gir cow nectar' },
  ];

  return (
    <div 
      ref={stageRef} 
      id="showcase-stage" 
      style={{ 
        position: 'relative', 
        height: '460vh', 
        backgroundColor: 'transparent',
      }}
    >
      {/* Pinned Sticky Viewport (Transparent to reveal the site-wide StickyBotanicalBackground) */}
      <div 
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
        {/* =========================================================================
            STATIC ARTISANAL BOTANICAL WATERMARK & TEXTURE LAYER
            Sacred Vedic Bilva leaves, Saurashtra wild pasture grass, and fine paper grain
            Stays constant & calm throughout all scenes (No flashing!)
            ========================================================================= */}
        <svg 
          className="botanical_watermark_layer"
          viewBox="0 0 1440 900" 
          preserveAspectRatio="xMidYMid slice"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            pointerEvents: 'none',
            zIndex: 1,
            opacity: 0.09,
            mixBlendMode: 'screen',
          }}
        >
          {/* Subtle Paper / Cardstock Grain Filter */}
          <filter id="vedicPaperGrain">
            <feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="3" result="noise" />
            <feColorMatrix type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.05 0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#vedicPaperGrain)" fill="none" />

          {/* Top Left Botanical Sprig: Sacred Bilva (Bael) Trifoliate Leaf Cluster */}
          <g stroke="currentColor" fill="none" strokeWidth="1.2" color="#DFC062">
            <path d="M-20,180 Q60,160 140,220 Q180,260 210,340" />
            <path d="M140,220 C130,170 170,130 200,160 C215,185 180,215 140,220 Z" fill="currentColor" fillOpacity="0.25" />
            <path d="M140,220 C180,210 220,240 200,270 C175,285 150,250 140,220 Z" fill="currentColor" fillOpacity="0.22" />
            <path d="M210,340 C230,300 280,310 270,350 C250,380 220,365 210,340 Z" fill="currentColor" fillOpacity="0.2" />
            <path d="M60,160 C50,110 90,80 120,105 C135,125 100,150 60,160 Z" fill="currentColor" fillOpacity="0.18" />
          </g>

          {/* Top Right Botanical Watermark: Saurashtra Pasture Wheat & Holy Grass */}
          <g stroke="currentColor" fill="none" strokeWidth="1.2" color="#DFC062">
            <path d="M1480,140 Q1380,180 1320,260 Q1260,340 1230,440" />
            <path d="M1320,260 C1350,240 1380,250 1370,280 C1350,295 1330,280 1320,260 Z" fill="currentColor" fillOpacity="0.25" />
            <path d="M1300,290 C1270,270 1250,290 1265,315 C1285,325 1295,305 1300,290 Z" fill="currentColor" fillOpacity="0.22" />
            <path d="M1260,340 C1290,320 1315,335 1305,365 C1285,380 1270,360 1260,340 Z" fill="currentColor" fillOpacity="0.25" />
            <path d="M1230,440 C1250,400 1290,415 1280,450 C1260,470 1240,455 1230,440 Z" fill="currentColor" fillOpacity="0.2" />
          </g>

          {/* Bottom Left Foliage Sprig */}
          <g stroke="currentColor" fill="none" strokeWidth="1.2" color="#DFC062">
            <path d="M-30,750 Q80,720 160,780 Q220,830 260,920" />
            <path d="M80,720 C70,680 110,650 140,675 C150,700 120,720 80,720 Z" fill="currentColor" fillOpacity="0.2" />
            <path d="M160,780 C190,750 230,770 220,800 C200,820 180,800 160,780 Z" fill="currentColor" fillOpacity="0.22" />
          </g>

          {/* Bottom Right Sacred Banyan Branch Watermark */}
          <g stroke="currentColor" fill="none" strokeWidth="1.2" color="#DFC062">
            <path d="M1460,780 Q1360,740 1280,800 Q1220,850 1180,940" />
            <path d="M1360,740 C1380,700 1430,715 1420,750 C1400,770 1375,760 1360,740 Z" fill="currentColor" fillOpacity="0.25" />
            <path d="M1280,800 C1250,770 1230,795 1245,825 C1265,835 1275,815 1280,800 Z" fill="currentColor" fillOpacity="0.2" />
          </g>
        </svg>

        {/* =========================================================================
            LAYER 0: HERO (Active 0.0 -> 0.20)
            Well-proportioned typography breathing with generous negative space
            Never clips on any viewport; transitions smoothly with scroll
            ========================================================================= */}
        <div 
          className="showcase_layer layer_hero"
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: 'clamp(4.2rem, 7.5vh, 5.5rem) clamp(20px, 3.5vw, 36px) clamp(16px, 2.8vh, 26px)',
            maxWidth: '1440px',
            margin: '0 auto',
            left: 0,
            right: 0,
            zIndex: 10,
            ...heroMotion,
          }}
        >
          {/* Main Headline Block with Open Negative Space */}
          <div className="middle_al" style={{ textAlign: 'center', marginTop: 'clamp(0.2rem, 1vh, 0.6rem)', width: '100%' }}>
            
            {/* Small Centered Subtitle / Kicker */}
            <div className="caption_hero" style={{ marginBottom: 'clamp(8px, 1.4vh, 14px)' }}>
              <div 
                className="caption_txt" 
                style={{ 
                  color: 'var(--primary)', 
                  letterSpacing: '0.26em', 
                  fontSize: 'clamp(0.72rem, 1.1vw, 0.82rem)', 
                  fontWeight: 700,
                  textTransform: 'uppercase',
                }}
              >
                TRADITIONAL WOODEN BILONA METHOD
              </div>
            </div>

            {/* Monumental Headline (Responsive, fits gracefully without pushing content) */}
            <div className="h1_hero" style={{ margin: '4px 0 clamp(8px, 1.6vh, 16px)' }}>
              <h1 
                className="h1" 
                style={{ 
                  color: 'var(--primary)', 
                  fontSize: 'clamp(2.8rem, 7.8vw, 7.2rem)', 
                  fontWeight: 900,
                  lineHeight: 0.92,
                  letterSpacing: '-0.01em',
                  textTransform: 'uppercase',
                  margin: 0,
                }}
              >
                sacred purity
              </h1>
            </div>

            {/* Full-Width Middle Dotted Divider Line (Directly from Hungry Tiger Reference!) */}
            <div className="dotted_line" style={{ width: '100%', margin: '0 auto' }} />

            {/* Secondary Headline Below Middle Dotted Line */}
            <div className="additional_headline" style={{ marginTop: 'clamp(10px, 1.6vh, 18px)' }}>
              <div 
                className="like_h1" 
                style={{ 
                  color: 'var(--primary)', 
                  fontSize: 'clamp(1.5rem, 3.8vw, 3.2rem)', 
                  fontWeight: 900,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  marginTop: 0,
                }}
              >
                a2 gir cow ghee
              </div>
            </div>

          </div>

          {/* Bottom Part (CTA Left & Origin Right) */}
          <div className="bottom_part" style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', padding: '0 8px', zIndex: 12 }}>
            <div className="container_cta" style={{ maxWidth: '340px', display: 'flex', flexDirection: 'column', gap: 10 }}>
              <div className="base_txt" style={{ color: 'rgba(255, 250, 240, 0.92)', fontSize: '0.84rem', lineHeight: 1.45, fontWeight: 500, textShadow: '0 1px 4px rgba(0,0,0,0.3)' }}>
                Crafted from native Gir cows grazing freely in Saurashtra Gaushalas. Churned before dawn in wooden Bilona vessels.
              </div>
              <button
                onClick={() => onAddToCart({ id: 'ghee-1000', title: 'Samvardhan A2 Gir Cow Ghee', volume: '1 Litre', price: 3000 })}
                className="button"
                style={{ width: 'fit-content' }}
              >
                <div className="button_txt">buy now</div>
                <ArrowRight style={{ width: 14, height: 14 }} />
              </button>
            </div>

            <div style={{ textAlign: 'right' }}>
              <span style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--primary)', letterSpacing: '0.12em' }}>
                SAURASHTRA ORIGIN &bull; ₹1,499 (500ml) &bull; ₹3,000 (1L)
              </span>
            </div>
          </div>
        </div>

        {/* =========================================================================
            LAYER 1: A NEW ANGLE OF PURITY (Active 0.20 -> 0.50)
            Left Column: High-Readability Narrative & Badges
            Right Column: Clean Negative Space for the Docked 3D Jar
            ========================================================================= */}
        <div 
          className="showcase_layer layer_purity"
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            padding: '0 clamp(24px, 7vw, 120px)',
            maxWidth: '1440px',
            margin: '0 auto',
            left: 0,
            right: 0,
            zIndex: 10,
            ...purityMotion,
          }}
        >
          <div style={{ maxWidth: '540px', zIndex: 10 }}>
            <div className="caption_txt" style={{ color: 'var(--primary)', marginBottom: '14px', letterSpacing: '0.22em', fontSize: '0.82rem', fontWeight: 700, textTransform: 'uppercase' }}>
              CRYSTALLINE DANEDAR TEXTURE
            </div>
            
            <h2 className="h2" style={{ color: 'var(--primary)', fontSize: 'clamp(2.6rem, 5.5vw, 5.2rem)', lineHeight: 0.95, marginBottom: '22px', fontWeight: 900 }}>
              A New Angle<br />of Purity
            </h2>

            <div className="base_txt" style={{ color: 'rgba(255, 250, 240, 0.92)', fontSize: '1.08rem', lineHeight: '1.68', textTransform: 'none', marginBottom: '28px', textShadow: '0 2px 8px rgba(0,0,0,0.3)' }}>
              Discover how our cultured curd Bilona churn and native Gir cow milk elevate every daily Ayurvedic ritual and meal. Slow woodfired clarification creates micro-crystals of golden carotene that melt instantly on warm roti.
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '9px 18px', borderRadius: '100px', background: 'rgba(223, 192, 98, 0.15)', border: '1px solid rgba(223, 192, 98, 0.35)', color: 'var(--primary)', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.04em' }}>
                <span>✦</span> 25-30 Litres Milk per 1L Ghee
              </div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '9px 18px', borderRadius: '100px', background: 'rgba(223, 192, 98, 0.15)', border: '1px solid rgba(223, 192, 98, 0.35)', color: 'var(--primary)', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.04em' }}>
                <span>✦</span> Slow Cultured Curd Bilona
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            LAYER 2: UNWRAP THE HERITAGE (Active 0.48 -> 0.74)
            Top: Centered Headline | Bottom: Aroma Notes Framing Tilted Center Jar
            ========================================================================= */}
        <div 
          className="showcase_layer layer_unwrap"
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: 'clamp(4.5rem, 8vh, 6rem) 28px clamp(2rem, 4vh, 3.5rem)',
            textAlign: 'center',
            zIndex: 10,
            ...unwrapMotion,
          }}
        >
          {/* Top Headline */}
          <div style={{ zIndex: 10, marginTop: '0.5rem' }}>
            <h2 className="h2" style={{ color: 'var(--primary)', fontSize: 'clamp(2.6rem, 5.5vw, 5.2rem)', lineHeight: 0.95, fontWeight: 900 }}>
              Unwrap the<br />Heritage
            </h2>
          </div>

          {/* Bottom Aroma Badges & Sensory Quote */}
          <div style={{ maxWidth: '720px', margin: '0 auto', zIndex: 10 }}>
            <div className="icons_flex" style={{ display: 'flex', justifyContent: 'center', gap: '24px', flexWrap: 'wrap', marginBottom: '18px' }}>
              {aromaIcons.map((item) => (
                <div 
                  key={item.label} 
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '8px',
                    maxWidth: '180px',
                  }}
                >
                  <div 
                    className="circle_highlight" 
                    style={{ 
                      width: '66px', 
                      height: '66px', 
                      borderRadius: '50%',
                      border: '1.5px solid var(--primary)', 
                      background: 'rgba(223, 192, 98, 0.16)', 
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 4px 16px rgba(0,0,0,0.25)',
                    }}
                  >
                    <span style={{ fontSize: '1.75rem' }}>{item.emoji}</span>
                  </div>
                  <span style={{ fontSize: '0.78rem', fontWeight: 800, letterSpacing: '0.08em', color: 'var(--primary)', textTransform: 'uppercase' }}>
                    {item.label}
                  </span>
                  <span style={{ fontSize: '0.74rem', color: 'rgba(255, 250, 240, 0.85)', lineHeight: 1.3 }}>
                    {item.desc}
                  </span>
                </div>
              ))}
            </div>

            <div className="base_txt middle_txt" style={{ color: 'rgba(255, 250, 240, 0.92)', fontSize: '1.02rem', lineHeight: '1.55', textTransform: 'none', textShadow: '0 1px 4px rgba(0,0,0,0.3)' }}>
              Crack open the turned lid and you’re hit with the warm, nutty scent of slow-simmered cultured butter and pure Saurashtra sunshine. Rich, golden, granular, and aromatic.
            </div>
          </div>
        </div>

        {/* =========================================================================
            LAYER 3: NOURISH FROM WITHIN (Active 0.72 -> 0.98)
            Right Column: CTA, Headline & Trust Badges (Left: Negative Space for Jar)
            ========================================================================= */}
        <div 
          className="showcase_layer layer_wellness"
          style={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            padding: '0 clamp(24px, 7vw, 120px)',
            maxWidth: '1440px',
            margin: '0 auto',
            left: 0,
            right: 0,
            zIndex: 10,
            ...wellnessMotion,
          }}
        >
          <div style={{ maxWidth: '540px', textAlign: 'right', display: 'flex', flexDirection: 'column', alignItems: 'flex-end', zIndex: 10 }}>
            <div className="caption_txt" style={{ color: 'var(--primary)', marginBottom: '14px', letterSpacing: '0.22em', fontSize: '0.82rem', fontWeight: 700, textTransform: 'uppercase' }}>
              DAILY AYURVEDIC WELLNESS
            </div>

            <h2 className="h2" style={{ color: 'var(--primary)', fontSize: 'clamp(2.6rem, 5.5vw, 5.2rem)', lineHeight: 0.95, marginBottom: '20px', fontWeight: 900 }}>
              Nourish from<br />Within
            </h2>

            <div className="base_txt" style={{ color: 'rgba(255, 250, 240, 0.92)', fontSize: '1.05rem', lineHeight: '1.65', textTransform: 'none', marginBottom: '22px', textShadow: '0 2px 8px rgba(0,0,0,0.3)' }}>
              Pure A2 Gir Cow Ghee acts as a Yogavahi—a catalytic carrier that transports deep cellular nourishment, fuels digestion (Agni), and enhances vitality (Ojas). Sealed in heavy pharmaceutical glass.
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', justifyContent: 'flex-end', marginBottom: '24px' }}>
              <span style={{ fontSize: '0.74rem', padding: '6px 16px', borderRadius: '100px', border: '1px solid rgba(223, 192, 98, 0.35)', background: 'rgba(223, 192, 98, 0.12)', color: 'var(--primary)', letterSpacing: '0.05em', textTransform: 'uppercase', fontWeight: 600 }}>
                ✦ Ahimsa Milking
              </span>
              <span style={{ fontSize: '0.74rem', padding: '6px 16px', borderRadius: '100px', border: '1px solid rgba(223, 192, 98, 0.35)', background: 'rgba(223, 192, 98, 0.12)', color: 'var(--primary)', letterSpacing: '0.05em', textTransform: 'uppercase', fontWeight: 600 }}>
                ✦ Vedic Shlokas
              </span>
              <span style={{ fontSize: '0.74rem', padding: '6px 16px', borderRadius: '100px', border: '1px solid rgba(223, 192, 98, 0.35)', background: 'rgba(223, 192, 98, 0.12)', color: 'var(--primary)', letterSpacing: '0.05em', textTransform: 'uppercase', fontWeight: 600 }}>
                ✦ 100% Native Gir
              </span>
            </div>

            <button
              onClick={() => onAddToCart({ id: 'ghee-1000', title: 'Samvardhan A2 Gir Cow Ghee', volume: '1 Litre', price: 3000 })}
              className="button"
              style={{ width: 'fit-content' }}
            >
              <div className="button_txt">reserve 1 litre &bull; ₹3,000</div>
              <ArrowRight style={{ width: 14, height: 14 }} />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

