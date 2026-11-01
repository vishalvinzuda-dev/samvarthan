import React, { useState } from 'react';
import { X, Check } from 'lucide-react';

export default function ModalSacredHT({ isOpen, onClose, initialTab = 'ingredients' }) {
  const [tab, setTab] = useState(initialTab);

  if (!isOpen) return null;

  const ingredientsList = [
    { title: 'A2 Gir Cow Milk', emoji: '🥛' },
    { title: 'Overnight Curd Culture', emoji: '🥣' },
    { title: 'Hand-Churned Makhan', emoji: '🧈' },
    { title: 'Clarified Butterfat', emoji: '🍯' },
  ];

  const noList = [
    'No artificial flavor enhancers',
    'No palm oil or vanaspati',
    'No added sweeteners',
    'No chemical additives',
  ];

  const nutritionLines = [
    { label: 'serving size', val: '1 tablespoon (15 ml)' },
    { label: 'servings per container', val: '~33 (500ml) / ~66 (1L)' },
    { label: 'total fat', val: '15g' },
    { label: 'saturated fat', val: '9.5g' },
    { label: 'trans fat', val: '0g' },
    { label: 'polyunsaturated fat', val: '0.6g' },
    { label: 'monounsaturated fat', val: '4.2g' },
    { label: 'cholesterol', val: '33mg' },
    { label: 'sodium', val: '0mg' },
    { label: 'total carbohydrates', val: '0g' },
    { label: 'sugar', val: '0g' },
    { label: 'protein / casein', val: '0g' },
    { label: 'energy (per 100g)', val: '897 kcal' },
  ];

  return (
    <div className="modal_window" style={{ display: 'flex' }} onClick={onClose}>
      <div className="modal_box" onClick={(e) => e.stopPropagation()}>
        
        {/* Modal Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '24px' }}>
          <div>
            <div style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--dark-brown)' }}>
              INSIDE THE JAR
            </div>
            <h3 className="h3 dark_heading" style={{ fontSize: '2.4rem', marginTop: '4px' }}>
              what makes<br />it sacred
            </h3>
          </div>
          <button onClick={onClose} className="close_icon">
            <X style={{ width: 18, height: 18 }} />
          </button>
        </div>

        {/* Tab Buttons (Hungry Tiger: .tabs, .tab) */}
        <div style={{
          display: 'flex',
          borderTop: '1px solid var(--dark-brown)',
          borderBottom: '1px solid var(--dark-brown)',
          marginBottom: '24px'
        }}>
          <button
            onClick={() => setTab('ingredients')}
            style={{
              flex: 1,
              padding: '14px 10px',
              fontWeight: 800,
              fontSize: '0.8rem',
              textTransform: 'uppercase',
              backgroundColor: tab === 'ingredients' ? 'var(--dark-brown)' : 'transparent',
              color: tab === 'ingredients' ? 'var(--primary)' : 'var(--dark-brown)',
              transition: 'all 0.3s'
            }}
          >
            ingredients
          </button>
          <button
            onClick={() => setTab('nutrition')}
            style={{
              flex: 1,
              padding: '14px 10px',
              fontWeight: 800,
              fontSize: '0.8rem',
              textTransform: 'uppercase',
              backgroundColor: tab === 'nutrition' ? 'var(--dark-brown)' : 'transparent',
              color: tab === 'nutrition' ? 'var(--primary)' : 'var(--dark-brown)',
              transition: 'all 0.3s'
            }}
          >
            nutrition facts
          </button>
        </div>

        {/* Tab Content */}
        {tab === 'ingredients' ? (
          <div>
            <div className="base_txt dark_paragraph" style={{ marginBottom: '20px', fontSize: '0.95rem' }}>
              nothing to hide — just 100% whole A2 milk from Saurashtra Gir cows, cultured curd, wooden bilona churning, and sacred Ayurvedic reverence.
            </div>

            {/* Grid Ingredients */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '24px' }}>
              {ingredientsList.map((ing) => (
                <div key={ing.title} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{
                    width: 44,
                    height: 44,
                    borderRadius: '100%',
                    backgroundColor: 'var(--dark-brown)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.4rem'
                  }}>
                    {ing.emoji}
                  </div>
                  <span className="base_txt dark_paragraph" style={{ fontSize: '0.85rem', fontWeight: 800 }}>
                    {ing.title}
                  </span>
                </div>
              ))}
            </div>

            {/* Splitter */}
            <div style={{ height: 1, backgroundColor: 'rgba(64, 32, 17, 0.25)', margin: '20px 0' }} />

            {/* No fillers list */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {noList.map((item) => (
                <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{
                    width: 24,
                    height: 24,
                    borderRadius: '100%',
                    backgroundColor: 'var(--dark-brown)',
                    color: 'var(--primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <Check style={{ width: 14, height: 14 }} />
                  </div>
                  <span className="base_txt dark_paragraph" style={{ fontSize: '0.85rem', fontWeight: 700 }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              border: '1px solid var(--dark-brown)',
              borderRadius: '8px',
              overflow: 'hidden'
            }}>
              {nutritionLines.map((row, i) => (
                <div
                  key={row.label}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    padding: '8px 16px',
                    fontSize: '0.85rem',
                    textTransform: 'uppercase',
                    fontWeight: 700,
                    backgroundColor: i % 2 === 0 ? 'rgba(64, 32, 17, 0.08)' : 'transparent',
                    borderBottom: i === nutritionLines.length - 1 ? 'none' : '1px solid rgba(64, 32, 17, 0.15)'
                  }}
                >
                  <span>{row.label}</span>
                  <span>{row.val}</span>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
