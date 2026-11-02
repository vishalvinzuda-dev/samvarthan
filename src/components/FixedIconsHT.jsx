import React from 'react';
import { ShoppingBag } from 'lucide-react';

export default function FixedIconsHT({ cartCount, onOpenCart, onOpenModal }) {
  return (
    <div className="fixed_icons">
      {/* Jar Details Trigger Icon (Matching Hungry Tiger circular action button) */}
      <div 
        onClick={() => onOpenModal('ingredients')}
        className="icon_circle"
        title="What's Inside the Jar"
        aria-label="What's inside the jar"
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
          <path d="M7 2h10a1 1 0 0 1 1 1v1H6V3a1 1 0 0 1 1-1zm-1 4h12a1 1 0 0 1 1 1v1.5a2 2 0 0 1-.8 1.6V19a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3v-8.9a2 2 0 0 1-.8-1.6V7a1 1 0 0 1 1-1zm2 5v7a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-7H8z" />
        </svg>
      </div>

      {/* Cart Basket Trigger Icon */}
      <div 
        onClick={onOpenCart}
        className="icon_circle"
        title="Open Bag"
      >
        <ShoppingBag style={{ width: 22, height: 22 }} />
        {cartCount > 0 && (
          <div className="cart_badge_fixed">
            {cartCount}
          </div>
        )}
      </div>
    </div>
  );
}
