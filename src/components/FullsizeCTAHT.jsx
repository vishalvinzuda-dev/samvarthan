import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function FullsizeCTAHT({ onAddToCart }) {
  return (
    <section className="fullsize">
      <div className="content_cta">
        <div className="h2_box_cta">
          
          <h2 className="h2" style={{ color: 'var(--primary)', textAlign: 'center' }}>
            unlock the<br />magic inside<br />the jar
          </h2>

          <div className="dotted_line" style={{ maxWidth: 360, margin: '0 auto' }} />

          <p className="base_txt" style={{ maxWidth: '42ch', fontSize: '0.95rem', margin: '0 auto' }}>
            Single-origin A2 Gir Cow Bilona Ghee in 500ml (₹1,499) and 1 Litre (₹3,000) small batches. Hand-churned in Saurashtra.
          </p>

          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <button
              onClick={() => onAddToCart({ id: 'ghee-500', title: 'Samvardhan A2 Gir Cow Ghee', volume: '500 ml', price: 1499 })}
              className="button dark"
            >
              <div className="button_txt">reserve 500ml (₹1,499)</div>
            </button>

            <button
              onClick={() => onAddToCart({ id: 'ghee-1000', title: 'Samvardhan A2 Gir Cow Ghee', volume: '1 Litre', price: 3000 })}
              className="button"
            >
              <div className="button_txt">reserve 1L (₹3,000)</div>
              <ArrowRight style={{ width: 14, height: 14 }} />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
