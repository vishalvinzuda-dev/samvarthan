import React from 'react';

export default function TraditionsHT() {
  const traditionItems = [
    {
      num: '१',
      title: 'Rooted in Indian Gaushala traditions',
      desc: 'Indigenous to the coastal hills of Saurashtra, Gujarat. Free-grazing Gir cows raised on chemical-free grass with love and unconditional reverence.',
    },
    {
      num: '२',
      title: 'Carefully prepared in small batches',
      desc: 'Produced from an artisanal nucleus of 2 Gir cows generating ~50 litres of rich whole milk. We never blend or compromise quality for mass volume.',
    },
    {
      num: '३',
      title: 'Bringing the warmth of home to your table',
      desc: 'Milking occurs in an atmosphere of tranquil silence while sacred Vedic Shlokas and classical flute music resonate in the shelter.',
    },
  ];

  return (
    <section className="traditions" id="tradition">
      <div className="wrapper_base tradition_creation">
        
        <div>
          <h2 className="h2 dark_heading">
            tradition<br />&amp; creation
          </h2>
          <div className="dark_paragraph" style={{ marginTop: '16px' }}>
            <div className="base_txt dark_paragraph" style={{ fontSize: '1.05rem', maxWidth: '38ch' }}>
              From chemical-free pasture grass to small-batch wooden churning, we capture the real taste of tradition in every spoonful.
            </div>
          </div>
        </div>

        {/* 3 Traditional Numbered Stages (१, २, ३) */}
        <div className="cms_traditions">
          <div className="flex_traditions">
            {traditionItems.map((item) => (
              <div key={item.num} className="item_tradition">
                <div className="traditional_number">
                  <div className="number_txt">{item.num}</div>
                </div>
                <div className="title_tradition">
                  <div className="ch_tradition">
                    <div className="base_txt dark_paragraph" style={{ fontSize: '1.15rem', fontWeight: 800 }}>
                      {item.title}
                    </div>
                  </div>
                  <div className="base_txt dark_paragraph" style={{ fontSize: '0.9rem', color: '#4A2A1A', maxWidth: '42ch', marginTop: '4px' }}>
                    {item.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
