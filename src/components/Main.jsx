import React from 'react';
import Header from './Header';
import HotToday from './HotToday';

function Main({ onAddProductClick, promoProduct }) {
  return (
    <main className='main'>
      <Header />
      <HotToday
        onAddProductClick={onAddProductClick}
        promoProduct={promoProduct}
      />
    </main>
  );
}

export default Main;
