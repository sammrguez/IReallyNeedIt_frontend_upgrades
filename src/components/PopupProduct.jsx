import React from 'react';

import { useState, useEffect, useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import CardPopup from './CardPopup';

function PopupProduct({ selectedCard, name, onClose, onAddProductClick }) {
  const cart = useContext(CartContext);
  const [selectedModel, setSelectedModel] = useState(null);
  const [scrolling, setScrolling] = useState(true);

  useEffect(() => {
    selectedCard
      ? (document.body.style.overflow = 'hidden')
      : (document.body.style.overflow = 'auto');
  }, [selectedCard]);
  const handleMouseEnter = () => {
    setIsScrolling(true);
  };

  const handleMouseLeave = () => {
    setIsScrolling(false);
  };

  const handleMouseMove = (e) => {
    if (isScrolling) {
      window.scrollBy(0, e.movementY * 2);
    }
  };

  return (
    <div
      className={`popup popup_type_${name} ${
        selectedCard ? 'popup_opened' : ''
      } `}
    >
      <div className='overlay' onClick={onClose}></div>
      <div
        className='popup__container popup__container_type_product'
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
      >
        {selectedCard && (
          <CardPopup
            selectedCard={selectedCard}
            onAddProductClick={onAddProductClick}
            onClose={onClose}
          />
        )}
      </div>
    </div>
  );
}

export default PopupProduct;
