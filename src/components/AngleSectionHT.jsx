import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function AngleSectionHT({ onAddToCart }) {
  const aromaIcons = [
    { label: 'Nutty Makhan', emoji: '🌰' },
    { label: 'Danedar Crystals', emoji: '✨' },
    { label: 'Golden Carotene', emoji: '🌿' },
  ];

  return (
    <>
      {/* 1. A NEW ANGLE OF PURITY (Hungry Tiger: .angle_part) */}
      <section className="angle_part" id="angle-purity">
        <div className="wrapper">
          <div className="angle_grid">
            
            {/* Left Content Column */}
            <div className="angle_content">
              <div className="caption_txt" style={{ color: 'var(--dark-brown)', opacity: 0.75, marginBottom: '12px' }}>
                CRYSTALLINE DANEDAR TEXTURE
              </div>
              <div className="h2_box">
                <h2 className="h2 dark_heading">
                  A New Angle<br />of Purity
                </h2>
              </div>
              <div style={{ marginTop: '24px' }}>
                <div className="section_paragraph">
                  <div className="base_txt dark_paragraph" style={{ maxWidth: '40ch', fontSize: '1.05rem', lineHeight: '1.6', textTransform: 'none' }}>
                    Discover how our cultured curd Bilona churn and native Gir cow milk elevate every daily Ayurvedic ritual and meal. Slow woodfired clarification creates micro-crystals of golden carotene that melt instantly on warm roti.
                  </div>
                </div>

                {/* Luxury Feature Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '24px' }}>
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '6px 14px', borderRadius: '100px', background: 'rgba(36, 20, 13, 0.08)', color: 'var(--dark-brown)', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.04em' }}>
                    <span>✦</span> 25-30 Litres Milk per 1L Ghee
                  </div>
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', padding: '6px 14px', borderRadius: '100px', background: 'rgba(36, 20, 13, 0.08)', color: 'var(--dark-brown)', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.04em' }}>
                    <span>✦</span> Slow Cultured Curd Bilona
                  </div>
                </div>
              </div>
            </div>

            {/* Right Negative Space Column for 3D Jar */}
            <div className="angle_spacer" aria-hidden="true" />

          </div>
        </div>
      </section>

      {/* 2. UNWRAP THE HERITAGE (Hungry Tiger: .unwrap_part) */}
      <section className="unwrap_part" id="angle-heritage">
        <div className="wrapper" style={{ alignItems: 'center' }}>
          
          <div className="middle_h">
            <h2 className="h2" style={{ color: 'var(--primary)', textAlign: 'center' }}>
              Unwrap the<br />Heritage
            </h2>
          </div>

          {/* Central Negative Space for Tilted 3D Jar */}
          <div className="unwrap_spacer" aria-hidden="true" />

          <div className="small_txt" style={{ maxWidth: '680px', margin: '0 auto' }}>
            {/* 3 Circular Highlight Aroma Badges with labels */}
            <div className="icons_flex" style={{ gap: '24px', flexWrap: 'wrap' }}>
              {aromaIcons.map((item) => (
                <div 
                  key={item.label} 
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '8px',
                  }}
                >
                  <div className="circle_highlight" style={{ width: '68px', height: '68px', border: '1px solid var(--primary)', background: 'rgba(223, 192, 98, 0.1)', transition: 'all 0.3s ease' }}>
                    <span style={{ fontSize: '1.75rem' }}>{item.emoji}</span>
                  </div>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.08em', color: 'var(--primary)', textTransform: 'uppercase' }}>
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

            <div className="base_txt middle_txt" style={{ fontSize: '1.05rem', lineHeight: '1.6', textTransform: 'none', marginTop: '16px' }}>
              Crack open the turned wooden lid and you’re hit with the warm, nutty scent of slow-simmered cultured butter and pure Saurashtra sunshine. Rich, golden, granular, and aromatic.
            </div>
          </div>

        </div>
      </section>

      {/* 3. A NEW PERSPECTIVE ON WELLNESS (Hungry Tiger: .angle_part.last_spec) */}
      <section className="angle_part last_spec" id="angle-wellness">
        <div className="wrapper">
          <div className="perspective_grid">

            {/* Left Negative Space Column for 3D Jar */}
            <div className="perspective_spacer" aria-hidden="true" />

            {/* Right Content Column */}
            <div className="perspective_content">
              <div style={{ display: 'flex', flexDirection: 'column', gap: 20, marginBottom: '32px' }}>
                <div className="base_txt" style={{ color: 'var(--primary)', maxWidth: '40ch', fontSize: '1.05rem', lineHeight: '1.6', textTransform: 'none' }}>
                  Vedic reverence, smooth golden texture, and a timeless taste of Indian tradition — all sealed in amber glass.
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', justifyContent: 'flex-end' }}>
                  <span style={{ fontSize: '0.74rem', padding: '4px 12px', borderRadius: '100px', border: '1px solid rgba(223, 192, 98, 0.3)', color: 'var(--primary)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                    ✦ Ahimsa Milking
                  </span>
                  <span style={{ fontSize: '0.74rem', padding: '4px 12px', borderRadius: '100px', border: '1px solid rgba(223, 192, 98, 0.3)', color: 'var(--primary)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                    ✦ Vedic Shlokas
                  </span>
                  <span style={{ fontSize: '0.74rem', padding: '4px 12px', borderRadius: '100px', border: '1px solid rgba(223, 192, 98, 0.3)', color: 'var(--primary)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                    ✦ 100% Native Gir
                  </span>
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

              <div className="h2_box">
                <h2 className="h2" style={{ color: 'var(--primary)' }}>
                  A New Perspective<br />on Wellness
                </h2>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
