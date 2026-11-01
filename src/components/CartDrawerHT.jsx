import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ArrowRight, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function CartDrawerHT({ isOpen, onClose, cart, updateQuantity, removeItem, clearCart }) {
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [success, setSuccess] = useState(false);
  const [coupon, setCoupon] = useState('');
  const [discount, setDiscount] = useState(0);

  if (!isOpen) return null;

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const finalTotal = Math.max(0, subtotal - discount);

  const applyPromo = (e) => {
    e.preventDefault();
    if (coupon.toUpperCase() === 'VEDIC10' || coupon.toUpperCase() === 'SAURASHTRA') {
      setDiscount(Math.round(subtotal * 0.1));
    } else {
      alert('Try promo code: VEDIC10 for 10% heritage discount.');
    }
  };

  const handleCheckout = () => {
    setIsCheckingOut(true);
    setTimeout(() => {
      setIsCheckingOut(false);
      setSuccess(true);
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#DFC062', '#24140D', '#FFFFFF', '#C59B27'],
      });
      setTimeout(() => {
        clearCart();
      }, 3500);
    }, 1200);
  };

  return (
    <div className="cart_drawer_backdrop" onClick={onClose}>
      <div className="cart_c" onClick={(e) => e.stopPropagation()}>
        
        {/* Cart Header (Hungry Tiger: .cart_header) */}
        <div className="cart_header">
          <div className="cart_headline">bag</div>
          <button onClick={onClose} className="close_icon">
            <X style={{ width: 16, height: 16 }} />
          </button>
        </div>

        {/* Cart Items List */}
        <div className="cart_list_content">
          {success ? (
            <div style={{ textAlign: 'center', padding: '40px 10px' }}>
              <div style={{ fontSize: '3rem', marginBottom: '16px' }}>✨</div>
              <h4 style={{ fontSize: '1.8rem', textTransform: 'uppercase' }}>Order Reserved!</h4>
              <p style={{ fontSize: '0.9rem', color: '#4A2A1A', marginTop: '10px' }}>
                Thank you for honoring pure Saurashtra Gaushala traditions. Your fresh artisanal batch of Bilona Ghee is being carefully prepared.
              </p>
              <button 
                onClick={() => { setSuccess(false); onClose(); }} 
                className="button dark" 
                style={{ marginTop: '24px' }}
              >
                <div className="button_txt">continue exploring</div>
              </button>
            </div>
          ) : cart.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '60px 10px', color: '#4A2A1A' }}>
              <div style={{ fontSize: '3rem', marginBottom: '10px' }}>🍯</div>
              <p style={{ fontWeight: 700, textTransform: 'uppercase' }}>This bag is empty</p>
              <p style={{ fontSize: '0.85rem' }}>Reserve 500ml (₹1,499) or 1L (₹3,000) pure A2 Gir Cow Ghee.</p>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {cart.map((item) => (
                <div 
                  key={item.id}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 16,
                    padding: '16px',
                    backgroundColor: 'rgba(255,255,255,0.4)',
                    borderRadius: '8px',
                    border: '1px solid rgba(64,32,17,0.2)'
                  }}
                >
                  <div style={{ fontSize: '2rem' }}>🍯</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 800, textTransform: 'uppercase', fontSize: '0.9rem' }}>
                      {item.title}
                    </div>
                    <div style={{ fontSize: '0.8rem', color: '#4A2A1A' }}>
                      {item.volume} &bull; Traditional Bilona
                    </div>
                    
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '10px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', border: '1px solid var(--dark-brown)', borderRadius: '4px' }}>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          style={{ padding: '2px 8px', fontWeight: 800 }}
                        >
                          <Minus style={{ width: 12, height: 12 }} />
                        </button>
                        <span style={{ padding: '0 8px', fontWeight: 800, fontSize: '0.85rem' }}>{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          style={{ padding: '2px 8px', fontWeight: 800 }}
                        >
                          <Plus style={{ width: 12, height: 12 }} />
                        </button>
                      </div>

                      <span style={{ fontWeight: 900, fontSize: '1rem' }}>
                        ₹{(item.price * item.quantity).toLocaleString('en-IN')}
                      </span>
                    </div>
                  </div>

                  <button onClick={() => removeItem(item.id)} style={{ color: 'var(--dark-brown)', opacity: 0.6 }}>
                    <Trash2 style={{ width: 16, height: 16 }} />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Cart Footer */}
        {!success && cart.length > 0 && (
          <div className="cart-footer">
            
            <form onSubmit={applyPromo} style={{ display: 'flex', gap: 8 }}>
              <input 
                type="text" 
                placeholder="PROMO (e.g. VEDIC10)"
                value={coupon}
                onChange={(e) => setCoupon(e.target.value)}
                style={{
                  flex: 1,
                  padding: '10px 14px',
                  borderRadius: '100em',
                  border: '1px solid var(--dark-brown)',
                  backgroundColor: 'transparent',
                  color: 'var(--dark-brown)',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  outline: 'none'
                }}
              />
              <button 
                type="submit"
                style={{
                  backgroundColor: 'var(--dark-brown)',
                  color: 'var(--primary)',
                  borderRadius: '100em',
                  padding: '0 16px',
                  fontSize: '0.75rem',
                  fontWeight: 800,
                  textTransform: 'uppercase'
                }}
              >
                apply
              </button>
            </form>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 6, fontSize: '0.85rem', textTransform: 'uppercase', fontWeight: 700 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>Subtotal</span>
                <span>₹{subtotal.toLocaleString('en-IN')}</span>
              </div>
              {discount > 0 && (
                <div style={{ display: 'flex', justifyContent: 'space-between', color: '#1B4226' }}>
                  <span>Heritage Discount (10%)</span>
                  <span>-₹{discount.toLocaleString('en-IN')}</span>
                </div>
              )}
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>taxes</span>
                <span>₹0.00</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>shipping</span>
                <span>calculated at checkout (free across India)</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.2rem', marginTop: 8, paddingTop: 8, borderTop: '1px solid rgba(64,32,17,0.3)' }}>
                <span>Total</span>
                <span>₹{finalTotal.toLocaleString('en-IN')}</span>
              </div>
            </div>

            <button 
              onClick={handleCheckout} 
              disabled={isCheckingOut}
              className="checkout_button"
            >
              {isCheckingOut ? 'Hang tight...' : 'Continue to Checkout'}
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
