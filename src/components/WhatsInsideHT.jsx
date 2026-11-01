import React from 'react';
import { ArrowRight, Sparkles, Check } from 'lucide-react';

export default function WhatsInsideHT({ onOpenModal }) {
  const ingredients = [
    {
      title: 'Whole A2 Gir Cow Milk',
      desc: 'from Saurashtra native cows for rich bio-active base',
      emoji: '🥛',
    },
    {
      title: 'Slow Woodfire Cultured Makhan',
      desc: 'for velvety granular texture & traditional aroma',
      emoji: '🧈',
    },
    {
      title: 'Clarified Pure Butterfat',
      desc: '99.8% pure clarified golden nectar with zero additives',
      emoji: '🍯',
    },
  ];

  return (
    <section className="inside_sides" id="about">
      
      {/* Upper Split Screen (Hungry Tiger: what's inside + list_icon + right image) */}
      <div className="flexbox_insides">
        
        {/* Left Side */}
        <div className="left_side">
          <div className="wrapper_sides">
            
            <div className="heading_side">
              <div className="headline_side">
                <h3 className="h3">
                  what's<br />inside
                </h3>
              </div>
              <div className="dotted_line" style={{ maxWidth: 360, margin: '14px 0' }} />
            </div>

            <div className="wrapper_side">
              <div className="description_inside">
                <div className="base_txt" style={{ fontSize: '0.95rem', lineHeight: '1.4' }}>
                  Our A2 Gir Cow Ghee is made with real whole milk curd for pure bio-active nourishment.
                </div>
              </div>

              {/* List of 3 ingredients with circle_inside */}
              <div className="cms_inside">
                <div className="list_icon">
                  {ingredients.map((item) => (
                    <div key={item.title} className="flex_inside">
                      <div className="circle_inside">
                        <span>{item.emoji}</span>
                      </div>
                      <div className="caption_inside">
                        <div className="base_txt" style={{ fontSize: '0.85rem' }}>
                          <strong style={{ color: '#FFF' }}>{item.title}</strong> — {item.desc}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* Right Side: Visual Presentation Card */}
        <div className="right_side">
          <div style={{
            width: '100%',
            height: '100%',
            backgroundColor: 'var(--brown)',
            borderRadius: '12px',
            border: '2px solid rgba(223, 192, 98, 0.4)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '40px',
            textAlign: 'center',
            boxShadow: '0 15px 40px rgba(0,0,0,0.2)'
          }}>
            <div style={{ fontSize: '5rem', marginBottom: '20px' }}>🍯</div>
            <div className="like_h1" style={{ fontSize: '2.4rem', color: 'var(--primary)' }}>
              100% NATIVE GIR COW
            </div>
            <div className="base_txt" style={{ maxWidth: '30ch', marginTop: '12px', color: '#FFF' }}>
              Handcrafted via Traditional Two-Way Bilona Method in Saurashtra, Gujarat.
            </div>
            <button
              onClick={() => onOpenModal('ingredients')}
              className="button dark"
              style={{ marginTop: '24px' }}
            >
              <div className="button_txt">inspect ingredients</div>
            </button>
          </div>
        </div>

      </div>

      {/* Lower Split Screen (Hungry Tiger: No Fillers. No Shortcuts. just bold taste in every jar) */}
      <div className="flexbox_insides" style={{ borderTop: '1px solid rgba(223, 192, 98, 0.2)' }}>
        
        {/* Left Side */}
        <div className="left_side" style={{ padding: '60px 48px' }}>
          <div className="wrapper_side">
            <div className="md_txts">
              <div className="md_txt">No Fillers.</div>
              <div className="md_txt">No Shortcuts.</div>
            </div>
            <div className="bold_cap">
              <div className="bold_txt">
                just pure golden nectar in every jar
              </div>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="right_side" style={{ backgroundColor: 'var(--dark-brown)', color: 'var(--primary)' }}>
          <div style={{
            width: '100%',
            height: '100%',
            backgroundColor: '#FAF6EE',
            color: 'var(--dark-brown)',
            borderRadius: '12px',
            padding: '40px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}>
            <div>
              <span className="caption_txt" style={{ color: 'var(--dark-brown)' }}>
                GAUSHALA OPERATIONAL REALITY
              </span>
              <h4 style={{ fontSize: '1.8rem', marginTop: '10px', textTransform: 'uppercase' }}>
                Micro Small-Batch Integrity
              </h4>
              <p style={{ fontSize: '0.9rem', color: '#5C473A', marginTop: '12px', lineHeight: '1.5' }}>
                Nurtured from an authentic nucleus of 2 Gir cows producing ~50 litres of daily milk. We never blend or mass-aggregate milk from commercial collection centers.
              </p>
            </div>

            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '20px' }}>
              <span className="tag_one" style={{ backgroundColor: 'var(--dark-brown)', color: 'var(--primary)' }}>
                Zero Palm Oil
              </span>
              <span className="tag_one" style={{ backgroundColor: 'var(--dark-brown)', color: 'var(--primary)' }}>
                Calves Fed First
              </span>
              <span className="tag_one" style={{ backgroundColor: 'var(--dark-brown)', color: 'var(--primary)' }}>
                Vedic Milking
              </span>
            </div>
          </div>
        </div>

      </div>

    </section>
  );
}
