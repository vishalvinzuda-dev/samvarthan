import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function HeroSectionHT({ onAddToCart, onOpenModal }) {

  return (
    <section className="hero_part" id="ghee">
      <div className="hero_section">
        
        {/* Main Content (Hungry Tiger: caption, h1, dotted_line, like_h1) */}
        <div className="wrapper_hero">
          
          <div className="middle_al">
            {/* Caption */}
            <div className="caption_hero">
              <div className="caption_txt">
                TRADITIONAL WOODEN BILONA METHOD
              </div>
            </div>

            {/* H1 Main Headline */}
            <div className="h1_hero">
              <h1 className="h1">
                sacred purity
              </h1>
            </div>

            {/* Dotted Line */}
            <div className="dotted_line" style={{ maxWidth: 480, margin: '10px auto' }} />

            {/* Additional Headline (like_h1) */}
            <div className="additional_headline">
              <div className="like_h1">
                a2 gir cow ghee
              </div>
            </div>
          </div>

          {/* Centerpiece 3D Interactive Ghee Jar Negative Space Stage */}
          <div className="hero_jar_stage" style={{ minHeight: '380px', width: '100%', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {/* Ambient subtle golden aura behind jar */}
            <div 
              style={{
                position: 'absolute',
                width: '420px',
                height: '420px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(223, 192, 98, 0.12) 0%, rgba(36, 20, 13, 0) 70%)',
                pointerEvents: 'none',
                filter: 'blur(30px)',
              }}
            />
          </div>

        </div>

        {/* Bottom Part (Hungry Tiger: container_cta with text + buy now button) */}
        <div className="bottom_part">
          <div className="container_cta">
            <div className="txt_box">
              <div className="base_txt">
                Crafted from the Gaushalas of Vedic Gujarat. Nurtured for those who revere unadulterated purity.
              </div>
            </div>
            <button
              onClick={() => onAddToCart({ id: 'ghee-1000', title: 'Samvardhan A2 Gir Cow Ghee', volume: '1 Litre', price: 3000 })}
              className="button"
            >
              <div className="button_txt">buy now</div>
              <ArrowRight style={{ width: 14, height: 14 }} />
            </button>
          </div>

          <div style={{ textAlign: 'right' }}>
            <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--primary)', letterSpacing: '0.1em' }}>
              SAURASHTRA ORIGIN &bull; ₹1,499 (500ml) &bull; ₹3,000 (1L)
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
