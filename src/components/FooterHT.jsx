import React from 'react';

export default function FooterHT({ onOpenModal, onOpenLabModal }) {
  return (
    <footer className="footer">
      <div className="wrapper_footer">
        
        {/* Large Brand Text Marquee / Header */}
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <div className="dotted_line" style={{ marginBottom: '24px' }} />
          <div className="h1" style={{ fontSize: 'clamp(2.5rem, 8vw, 7.5rem)', color: 'var(--primary)', letterSpacing: '0.08em' }}>
            SAMVARDHAN
          </div>
          <div className="dotted_line" style={{ marginTop: '24px' }} />
        </div>

        {/* Footer Menus (Hungry Tiger style) */}
        <div className="footer_menu">
          <div>
            <div style={{ fontSize: '1.2rem', fontWeight: 800, textTransform: 'uppercase', marginBottom: '12px' }}>
              Organic Dairy &amp; Food
            </div>
            <p className="base_txt" style={{ fontSize: '0.85rem', textTransform: 'none', maxWidth: '35ch', lineHeight: '1.5' }}>
              Pure A2 Gir Cow Ghee prepared through traditional Bilona churning in Saurashtra, Gujarat, India. Quality over Quantity.
            </p>
          </div>

          <div>
            <div style={{ fontSize: '0.9rem', fontWeight: 800, textTransform: 'uppercase', marginBottom: '12px', color: 'var(--primary)' }}>
              Navigation
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.8rem', textTransform: 'uppercase', fontWeight: 700 }}>
              <a href="#ghee" style={{ color: 'var(--primary)' }}>Ghee</a>
              <a href="#about" style={{ color: 'var(--primary)' }}>What's Inside</a>
              <a href="#recipes" style={{ color: 'var(--primary)' }}>Ayurvedic Rituals</a>
              <a href="#tradition" style={{ color: 'var(--primary)' }}>Tradition &amp; Creation</a>
              <button 
                onClick={() => onOpenModal('ingredients')} 
                style={{ textAlign: 'left', color: 'var(--primary)', fontWeight: 700, textTransform: 'uppercase', fontSize: '0.8rem' }}
              >
                Ingredients &amp; Specs
              </button>
            </div>
          </div>

          <div>
            <div style={{ fontSize: '0.9rem', fontWeight: 800, textTransform: 'uppercase', marginBottom: '12px', color: 'var(--primary)' }}>
              Location &amp; Contact
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '0.85rem' }}>
              <span>Saurashtra Region, Gujarat 360001, India</span>
              <a href="mailto:info@samvardhanghee.com" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>
                info@samvardhanghee.com
              </a>
              <span style={{ fontSize: '0.8rem', color: '#9E8870', marginTop: '6px' }}>
                Artisanal micro herd of 2 Gir Cows &bull; Vedic Milking
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Credits */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderTop: '1px solid rgba(223, 192, 98, 0.2)',
          paddingTop: '20px',
          fontSize: '0.75rem',
          textTransform: 'uppercase',
          letterSpacing: '0.05em'
        }}>
          <div>&copy; {new Date().getFullYear()} Samvardhan / Savardhan Organic. All rights reserved.</div>
          <div style={{ display: 'flex', gap: '16px' }}>
            <span>Privacy Policy</span>
            <span>Terms of Purity</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
