import React, { useState, useEffect } from 'react';
import { ShoppingBag, Volume2, VolumeX, Menu, X } from 'lucide-react';
import { soundscape } from '../utils/audioSynthesizer';

export default function HeaderHT({ cartCount, onOpenCart, onOpenModal }) {
  const [isAudioActive, setIsAudioActive] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isLightSection, setIsLightSection] = useState(false);

  const toggleSound = () => {
    const active = soundscape.toggle();
    setIsAudioActive(active);
  };

  useEffect(() => {
    let lastY = window.scrollY;

    const handleScroll = () => {
      const currentY = window.scrollY;
      setIsScrolled(currentY > 20);

      // Scroll Trigger Motion: Hide on fast downward scroll, reveal smoothly on scroll up
      if (currentY > 140 && currentY > lastY + 8) {
        setIsHidden(true);
      } else if (currentY < lastY - 4 || currentY <= 80) {
        setIsHidden(false);
      }
      // Clean, calm header with constant theme stability
      lastY = currentY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const pillClass = 'nav_pill_btn';
  const logoColor = 'var(--primary)';

  return (
    <header 
      className={`header minimal_header ${isScrolled ? 'is_scrolled' : ''} ${isHidden ? 'is_hidden' : ''}`}
      style={{
        backgroundColor: isScrolled ? 'rgba(36, 18, 10, 0.40)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(12px)' : 'none',
        WebkitBackdropFilter: isScrolled ? 'blur(12px)' : 'none',
        transform: isHidden ? 'translateY(-100%)' : 'translateY(0)',
        transition: 'transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.35s ease',
      }}
    >
      <div className="wrapper_header">
        <div className="flexbox_header">
          
          {/* Left Navigation: Hungry Tiger Rounded Pills */}
          <div className="left_links">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="mobile_menu_trigger"
              style={{ color: logoColor, borderColor: isLightSection ? 'rgba(20, 10, 5, 0.3)' : 'rgba(223, 192, 98, 0.3)' }}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X style={{ width: 16, height: 16 }} /> : <Menu style={{ width: 16, height: 16 }} />}
            </button>

            <nav className="desktop_nav_links">
              <a href="#about" className={pillClass}>Ghee</a>
              <a href="#about" className={pillClass}>About</a>
              <a href="#recipes" className={pillClass}>Rituals</a>
              <a href="#bilona" className={pillClass}>Bilona</a>
            </nav>
          </div>

          {/* Center Brand Monogram & Wordmark */}
          <div className="logo_ht">
            <a href="#" className="logo_text" aria-label="Samvardhan Home" style={{ color: logoColor }}>
              <div 
                className="emblem_circle"
                style={{ 
                  color: logoColor, 
                  borderColor: logoColor,
                  transition: 'color 0.35s ease, border-color 0.35s ease',
                }}
              >
                सं
              </div>
              <span style={{ color: logoColor, transition: 'color 0.35s ease' }}>SAMVARDHAN</span>
            </a>
          </div>

          {/* Right Navigation: Refined Actions with Hungry Tiger Pills */}
          <div className="right_links">
            {/* Vedic Soundscape Minimal Pill Trigger */}
            <button
              onClick={toggleSound}
              className={`${pillClass} icon_pill desktop_only_link`}
              title={isAudioActive ? 'Mute Vedic Audio' : 'Listen to Vedic Dawn Soundscape'}
              aria-label="Vedic Audio"
            >
              {isAudioActive ? (
                <Volume2 style={{ width: 14, height: 14 }} />
              ) : (
                <VolumeX style={{ width: 14, height: 14 }} />
              )}
              <span>Vedic Audio</span>
            </button>

            <button
              onClick={() => onOpenModal('ingredients')}
              className={`${pillClass} desktop_only_link`}
            >
              what's inside
            </button>

            {/* Buy Now Pill with Cart Count */}
            <button
              onClick={onOpenCart}
              className={`${pillClass} buy_pill`}
              aria-label="Cart"
            >
              <span>buy now</span>
              <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                <ShoppingBag style={{ width: 14, height: 14 }} />
                {cartCount > 0 && (
                  <span className="cart_count_badge">
                    {cartCount}
                  </span>
                )}
              </div>
            </button>
          </div>

        </div>
      </div>

      {/* Full-Width Repeating Dotted Line Under Header (Directly From Hungry Tiger Reference!) */}
      <div 
        className="dotted_line" 
        style={{ 
          opacity: isLightSection ? 0.35 : 0.85,
          transition: 'opacity 0.35s ease',
        }} 
      />

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="mobile_menu_drawer">
          <a href="#about" onClick={() => setMobileMenuOpen(false)} className="mobile_menu_item">our gaushala</a>
          <a href="#bilona" onClick={() => setMobileMenuOpen(false)} className="mobile_menu_item">bilona method</a>
          <a href="#recipes" onClick={() => setMobileMenuOpen(false)} className="mobile_menu_item">sacred rituals</a>
          <button 
            onClick={() => { setMobileMenuOpen(false); onOpenModal('ingredients'); }} 
            className="mobile_menu_item text_button"
          >
            what's inside the jar
          </button>
        </div>
      )}
    </header>
  );
}
