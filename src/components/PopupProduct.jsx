import React from 'react';

import { useState, useEffect, useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import CardPopup from './CardPopup';

function PopupProduct({ selectedCard, name, onClose, onAddProductClick }) {
  const cart = useContext(CartContext);
  const [selectedModel, setSelectedModel] = useState(null);

  const handleAddToCart = (event) => {
    event.preventDefault();
    if (selectedCard.models.length < 1 || selectedModel) {
      const productToAdd = { ...selectedCard, selectedModel: selectedModel };
      onAddProductClick(productToAdd);
      onClose();
    } else {
      console.log('no has seleccionado ningun modelo');
    }
  };

  const handleModelSelection = (model) => {
    setSelectedModel(model);
  };

  return (
    <div
      className={`popup popup_type_${name} ${
        selectedCard ? 'popup_opened' : ''
      } `}
    >
      <div className='overlay' onClick={onClose}></div>
      <div className='popup__container popup__container_type_product'>
        {selectedCard && <CardPopup selectedCard={selectedCard} />}
        <button className='button button_type_shop' onClick={handleAddToCart}>
          <h3 className='button__text'> agregar a carrito </h3>
        </button>
      </div>
    </div>
  );
}

export default PopupProduct;
