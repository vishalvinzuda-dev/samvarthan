import React from 'react';
import { Wind, Droplet, ShieldCheck } from 'lucide-react';

export default function WhyTheJarMattersHT() {
  const jarPoints = [
    {
      title: 'Freshness',
      icon: <Wind style={{ width: 22, height: 22 }} />,
      desc: 'Sealed tight to keep every spoonful fragrant and rich. The heavy non-reactive glass preserves the vibrant granular crystals of each small batch, ensuring the last spoonful is just as flavorful as the first.',
      tag: 'sealed in',
    },
    {
      title: 'Aroma & Flavor',
      icon: <Droplet style={{ width: 22, height: 22 }} />,
      desc: 'By locking in every volatile aromatic note, our jars preserve the depth and nutty warmth of cultured curd simmered slowly over wood-fire embers. True Ayurvedic taste and aroma in every bite.',
      tag: 'locked freshness',
    },
    {
      title: 'Nutrients Locked In',
      icon: <ShieldCheck style={{ width: 22, height: 22 }} />,
      desc: 'The airtight glass locks in not just taste and aroma, but the natural richness of every lipid. From fat-soluble Vitamins A & E to conjugated linoleic acid (CLA), each batch stays vibrant and wholesome without microplastic leaching.',
      tag: 'pure aroma',
    },
  ];

  return (
    <section className="special_jar">
      <div className="wrapper_base special_jar">
        
        {/* Header with Floating Tags (Hungry Tiger: .middle_matters, .tags_abs) */}
        <div className="middle_matters">
          
          <div className="tags_abs" style={{ position: 'static', marginBottom: '20px' }}>
            <div className="tag_one" style={{ backgroundColor: 'var(--brown)', color: 'var(--primary)' }}>sealed in</div>
            <div className="tag_one" style={{ backgroundColor: 'var(--brown)', color: 'var(--primary)' }}>locked freshness</div>
            <div className="tag_one" style={{ backgroundColor: 'var(--brown)', color: 'var(--primary)' }}>pure aroma</div>
          </div>

          <h2 className="h2 dark_heading middle">
            why the jar<br />matters
          </h2>

          <div className="box_ch" style={{ marginTop: '16px' }}>
            <div className="base_txt dark_paragraph" style={{ fontSize: '1rem', maxWidth: '40ch' }}>
              The sturdy airtight glass jar keeps the sacred ghee safe, fresh, and ready to use, whenever you open it.
            </div>
          </div>
        </div>

        {/* 3 Grid Items (Hungry Tiger: .cms_grid, .jar_grid, .cms_item) */}
        <div className="cms_grid">
          <div className="jar_grid">
            {jarPoints.map((item) => (
              <div key={item.title} className="cms_item">
                <div>
                  <div className="title_flex">
                    <div className="circle_inside dark_brown">
                      {item.icon}
                    </div>
                    <div>
                      <div className="base_txt dark_paragraph" style={{ fontSize: '1.2rem', fontWeight: 800 }}>
                        {item.title}
                      </div>
                    </div>
                  </div>

                  <div className="p_why">
                    <div className="base_txt dark_paragraph" style={{ fontSize: '0.9rem', lineHeight: '1.5' }}>
                      {item.desc}
                    </div>
                  </div>
                </div>

                <div style={{
                  height: '140px',
                  backgroundColor: 'var(--brown)',
                  borderRadius: '8px',
                  marginTop: '32px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--primary)',
                  fontSize: '2.5rem',
                  border: '1px solid rgba(223, 192, 98, 0.3)'
                }}>
                  🍯
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
