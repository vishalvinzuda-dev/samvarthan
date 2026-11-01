import React, { useState } from 'react';
import HeaderHT from './components/HeaderHT';
import ShowcaseStageHT from './components/ShowcaseStageHT';
import WhatsInsideHT from './components/WhatsInsideHT';
import TraditionsHT from './components/TraditionsHT';
import WhyTheJarMattersHT from './components/WhyTheJarMattersHT';
import FullsizeCTAHT from './components/FullsizeCTAHT';
import RecipesHT from './components/RecipesHT';
import FooterHT from './components/FooterHT';
import FixedIconsHT from './components/FixedIconsHT';
import CartDrawerHT from './components/CartDrawerHT';
import ModalSacredHT from './components/ModalSacredHT';
import ScrollJarCanvas3D from './components/ScrollJarCanvas3D';
import StickyBotanicalBackground from './components/StickyBotanicalBackground';

export default function App() {
  const [cart, setCart] = useState([
    {
      id: 'ghee-1000',
      title: 'A2 Gir Cow Ghee (1 Litre)',
      volume: '1000ml',
      price: 3000,
      quantity: 1,
    },
  ]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalInitialTab, setModalInitialTab] = useState('ingredients');

  const handleAddToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (id, newQuantity) => {
    if (newQuantity <= 0) {
      handleRemoveItem(id);
      return;
    }
    setCart((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity: newQuantity } : item))
    );
  };

  const handleRemoveItem = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const handleOpenModal = (tabName = 'ingredients') => {
    setModalInitialTab(tabName);
    setIsModalOpen(true);
  };

  const cartTotalCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="site_wrapper" style={{ overflowX: 'hidden', minHeight: '100vh', backgroundColor: 'transparent' }}>
      
      {/* Permanent Fixed Sticky Artisanal Background with Sacred Vedic Botanical Patterns */}
      <StickyBotanicalBackground />

      {/* Hungry Tiger Scroll-Driven 3D Jar Canvas: Navigates across Negative Space */}
      <ScrollJarCanvas3D maxScrollElementId="about" />

      {/* 1. Header (Hungry Tiger Header with Gold Dotted Line) */}
      <HeaderHT
        cartCount={cartTotalCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenModal={handleOpenModal}
      />

      <main>
        {/* 2. Pinned Showcase Stage: Hero & Multi-Angle Sensory Journey with In-Out Motion */}
        <ShowcaseStageHT
          onAddToCart={handleAddToCart}
          onOpenModal={handleOpenModal}
        />

        {/* 3. What's Inside (Side-by-Side Split: 3 Ingredients & No Fillers) */}
        <WhatsInsideHT
          onOpenModal={handleOpenModal}
        />

        {/* 5. Tradition & Creation (Numbered Cards with Devanagari १, २, ३) */}
        <TraditionsHT />

        {/* 6. Why The Jar Matters (Floating Tags & 3 Glass Benefit Columns) */}
        <WhyTheJarMattersHT />

        {/* 7. Fullsize CTA (Unlock the Magic Inside the Jar) */}
        <FullsizeCTAHT
          onAddToCart={handleAddToCart}
        />

        {/* 8. Let's Get Cooking (Culinary Rituals with Interactive Recipe Modals) */}
        <RecipesHT />
      </main>

      {/* 9. Footer (Dotted Line, Menus, Saurashtra Location) */}
      <FooterHT
        onOpenModal={handleOpenModal}
      />

      {/* 10. Fixed Floating Circular Action Icons (Jar Details + Basket Bag) */}
      <FixedIconsHT
        cartCount={cartTotalCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenModal={handleOpenModal}
      />

      {/* 11. Cart Drawer (Right Dropdown Slide-Over) */}
      <CartDrawerHT
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        updateQuantity={handleUpdateQuantity}
        removeItem={handleRemoveItem}
        clearCart={handleClearCart}
      />

      {/* 12. What Makes It Sacred Modal (Ingredients & Nutrition Facts) */}
      <ModalSacredHT
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialTab={modalInitialTab}
      />

    </div>
  );
}
