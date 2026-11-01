import React from 'react';
import { ShoppingBag } from 'lucide-react';

export default function FixedIconsHT({ cartCount, onOpenCart, onOpenModal }) {
  return (
    <div className="fixed_icons">
      {/* Jar Details Trigger Icon */}
      <div 
        onClick={() => onOpenModal('ingredients')}
        className="icon_circle"
        title="What's Inside the Jar"
      >
        <span>🍯</span>
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
