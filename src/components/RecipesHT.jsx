import React, { useState } from 'react';
import { X, ArrowRight, ChefHat } from 'lucide-react';

export default function RecipesHT() {
  const [activeRecipe, setActiveRecipe] = useState(null);

  const recipeList = [
    {
      id: 'golden-milk',
      title: 'Easy Golden Ayurvedic Turmeric Milk',
      desc: 'Bold, comforting warm milk infused with turmeric, cracked black pepper, cardamom, and a rich spoonful of Samvardhan Bilona Ghee.',
      time: '10 min',
      prepTime: '5 min',
      cookTime: '5 min',
      serves: '2',
      total: '~10 min',
      emoji: '🥛',
      ingredients: [
        '2 cups whole milk (or oat/almond milk)',
        '1 tbsp Samvardhan A2 Gir Cow Ghee',
        '1 tsp pure turmeric powder',
        '1/4 tsp cracked black pepper',
        '1/4 tsp ground cardamom',
        '1 tbsp raw honey or jaggery',
      ],
      tip: 'The healthy bio-fats in Bilona Ghee bind with fat-soluble curcumin, increasing cellular absorption by over 300%.',
      instructions: [
        { step: 1, title: 'Heat the Milk', text: 'In a small pot, warm the milk over medium heat until gently simmering.' },
        { step: 2, title: 'Whisk in Ghee & Spices', text: 'Add turmeric, black pepper, cardamom, and 1 tbsp of Samvardhan Ghee. Whisk for 2 minutes.' },
        { step: 3, title: 'Simmer on Low', text: 'Reduce heat to low and let simmer for 3 minutes until aromatic and rich golden.' },
        { step: 4, title: 'Sweeten and Savor', text: 'Remove from heat, let cool slightly, stir in honey or jaggery, and enjoy warm.' },
      ],
    },
    {
      id: 'dal-tadka',
      title: 'Heritage Saurashtra Dal Tadka',
      desc: 'Slow-cooked yellow lentils topped with a sizzling, fragrant tadka of cumin seeds, garlic, curry leaves, and golden Samvardhan Ghee.',
      time: '25 min',
      prepTime: '10 min',
      cookTime: '15 min',
      serves: '4',
      total: '~25 min',
      emoji: '🍲',
      ingredients: [
        '1 cup washed toor or moong dal',
        '2 tbsp Samvardhan A2 Gir Cow Ghee',
        '1 tsp cumin seeds (jeera)',
        '4 cloves garlic, sliced',
        '1 green chili, slit',
        '8 fresh curry leaves',
        '1/2 tsp asafoetida (hing)',
        '1/2 tsp Kashmiri red chili powder',
      ],
      tip: 'Gentle heating blooms the whole spices in ghee without scorching, releasing authentic Saurashtra flavor.',
      instructions: [
        { step: 1, title: 'Cook Dal', text: 'Boil or pressure cook lentils with turmeric and salt until creamy and soft.' },
        { step: 2, title: 'Heat Ghee', text: 'In a tadka pan, gently melt 2 tbsp of Samvardhan Ghee over medium-low heat.' },
        { step: 3, title: 'Bloom Spices', text: 'Add cumin, garlic, chili, and curry leaves. Sauté until garlic turns golden.' },
        { step: 4, title: 'The Sizzle', text: 'Turn off heat, stir in chili powder, and pour sizzling ghee over dal. Cover for 2 minutes.' },
      ],
    },
    {
      id: 'snehan-ritual',
      title: 'Morning Warm Water Ghee Ritual (Snehan)',
      desc: 'The ancient Ayurvedic dawn ritual of warm water paired with half a spoonful of pure Bilona Ghee for gentle gut lining nourishment.',
      time: '5 min',
      prepTime: '2 min',
      cookTime: '3 min',
      serves: '1',
      total: '~5 min',
      emoji: '🪔',
      ingredients: [
        '1 cup lukewarm filtered water (~45°C)',
        '1/2 to 1 tsp Samvardhan A2 Gir Cow Ghee',
        'Pinch of rock salt (optional)',
      ],
      tip: 'Best taken first thing in the morning on an empty stomach to awaken digestive fire (Agni).',
      instructions: [
        { step: 1, title: 'Warm Water', text: 'Heat pure water until comfortably warm to drink.' },
        { step: 2, title: 'Melt Ghee', text: 'Stir in 1/2 tsp of Samvardhan Ghee until golden droplets dissolve.' },
        { step: 3, title: 'Mindful Sips', text: 'Sip slowly and allow the natural butyrate to nourish the gut.' },
      ],
    },
  ];

  return (
    <section className="recipes" id="recipes">
      <div className="wrapper_base">
        
        {/* Header (Hungry Tiger: .box_middle, let's get cooking, button) */}
        <div className="box_middle">
          <div className="circle_highlight">
            <ChefHat style={{ width: 24, height: 24 }} />
          </div>

          <h2 className="h2 middle_align" style={{ color: 'var(--primary)', textAlign: 'center' }}>
            let's get<br />cooking
          </h2>

          <div className="dotted_line" style={{ maxWidth: 300 }} />
        </div>

        {/* 3 Recipe Cards Grid (Hungry Tiger: .grid_recipes, .recipe_card) */}
        <div className="cms_recipes">
          <div className="grid_recipes">
            {recipeList.map((rcp) => (
              <div 
                key={rcp.id} 
                onClick={() => setActiveRecipe(rcp)}
                className="recipe_card"
              >
                <div>
                  <div className="recipe_image">
                    {rcp.emoji}
                  </div>

                  <div className="flex_tags">
                    <div className="tag_recipe">Ritual</div>
                    <div className="tag_recipe">{rcp.time}</div>
                  </div>

                  <div className="h_p">
                    <h3 className="h4 recipe_heading">{rcp.title}</h3>
                    <div className="desc_recipe">{rcp.desc}</div>
                  </div>
                </div>

                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginTop: '20px',
                  paddingTop: '12px',
                  borderTop: '1px solid rgba(36, 20, 13, 0.2)',
                  fontSize: '0.8rem',
                  fontWeight: 800,
                  textTransform: 'uppercase'
                }}>
                  <span>view recipe</span>
                  <ArrowRight style={{ width: 14, height: 14 }} />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Interactive Recipe Breakdown Modal (Hungry Tiger style) */}
      {activeRecipe && (
        <div className="modal_window" style={{ display: 'flex' }} onClick={() => setActiveRecipe(null)}>
          <div className="modal_box" style={{ maxWidth: 720 }} onClick={(e) => e.stopPropagation()}>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
              <div>
                <span className="tag_one" style={{ backgroundColor: 'var(--brown)', color: 'var(--primary)' }}>
                  {activeRecipe.time}
                </span>
                <h3 className="h3 dark_heading" style={{ fontSize: '2rem', marginTop: '10px' }}>
                  {activeRecipe.title}
                </h3>
              </div>
              <button 
                onClick={() => setActiveRecipe(null)}
                className="close_icon"
              >
                <X style={{ width: 16, height: 16 }} />
              </button>
            </div>

            {/* Breakdown Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              borderTop: '1px solid var(--dark-brown)',
              borderBottom: '1px solid var(--dark-brown)',
              margin: '20px 0',
              textAlign: 'center',
              padding: '10px 0'
            }}>
              <div>
                <span style={{ fontSize: '0.75rem', textTransform: 'uppercase' }}>prep time</span>
                <div style={{ fontWeight: 800, fontSize: '1rem' }}>{activeRecipe.prepTime}</div>
              </div>
              <div>
                <span style={{ fontSize: '0.75rem', textTransform: 'uppercase' }}>cook time</span>
                <div style={{ fontWeight: 800, fontSize: '1rem' }}>{activeRecipe.cookTime}</div>
              </div>
              <div>
                <span style={{ fontSize: '0.75rem', textTransform: 'uppercase' }}>serves</span>
                <div style={{ fontWeight: 800, fontSize: '1rem' }}>{activeRecipe.serves}</div>
              </div>
              <div>
                <span style={{ fontSize: '0.75rem', textTransform: 'uppercase' }}>total</span>
                <div style={{ fontWeight: 800, fontSize: '1rem' }}>{activeRecipe.total}</div>
              </div>
            </div>

            {/* Ingredients */}
            <div style={{ marginBottom: '20px' }}>
              <div style={{ fontSize: '1.2rem', fontWeight: 800, textTransform: 'uppercase', marginBottom: '10px' }}>
                ingredients
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                {activeRecipe.ingredients.map((ing) => (
                  <div key={ing} style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: '0.85rem' }}>
                    <div style={{ width: 6, height: 6, borderRadius: '100%', backgroundColor: 'var(--dark-brown)' }} />
                    <span>{ing}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tip note */}
            <div style={{
              backgroundColor: 'rgba(36, 20, 13, 0.1)',
              borderRadius: '8px',
              padding: '12px 16px',
              fontSize: '0.85rem',
              marginBottom: '20px'
            }}>
              <strong>Tip:</strong> {activeRecipe.tip}
            </div>

            {/* Instructions */}
            <div>
              <div style={{ fontSize: '1.2rem', fontWeight: 800, textTransform: 'uppercase', marginBottom: '12px' }}>
                instructions
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {activeRecipe.instructions.map((ins) => (
                  <div key={ins.step} style={{ display: 'flex', gap: '12px' }}>
                    <div style={{
                      width: 28,
                      height: 28,
                      borderRadius: '100%',
                      backgroundColor: 'var(--dark-brown)',
                      color: 'var(--primary)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontWeight: 800,
                      fontSize: '0.8rem',
                      flexShrink: 0
                    }}>
                      {ins.step}
                    </div>
                    <div>
                      <div style={{ fontWeight: 800, textTransform: 'uppercase', fontSize: '0.85rem' }}>{ins.title}</div>
                      <div style={{ fontSize: '0.85rem', lineHeight: '1.4' }}>{ins.text}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
