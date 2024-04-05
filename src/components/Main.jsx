import React from 'react';
import Header from './Header';
import HotToday from './HotToday';

function Main({ onAddProductClick, selectedCard }) {
  return (
    <main className='main'>
      <Header />
      <HotToday
        onAddProductClick={onAddProductClick}
        selectedCard={selectedCard}
      />
    </main>
  );
}

export default Main;
