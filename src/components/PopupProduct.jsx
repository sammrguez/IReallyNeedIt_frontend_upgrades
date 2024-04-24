import React from 'react';

import { useState, useEffect, useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

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
        {selectedCard && (
          <>
            <div className='popup__image-container'>
              <img className='popup__image' src={selectedCard['photo-link']} />
            </div>
            <div className='popup__data'>
              <h2 className='popup__header'>{selectedCard.name}</h2>
              <p className='popup__paragraph'>{selectedCard.description}</p>

              {selectedCard.models.length > 0 && (
                <>
                  <h3 className='popup__sub-header'>Modelo:</h3>
                  <ul className='popup__sizes'>
                    {selectedCard.models.map((model, index) => {
                      return (
                        <li
                          className={`popup__size ${
                            selectedModel === model ? 'size-selected' : ''
                          }`}
                          key={index}
                          onClick={() => handleModelSelection(model)}
                        >
                          {model}
                        </li>
                      );
                    })}
                  </ul>
                </>
              )}
              <h4 className='popup__price'>{`$ ${selectedCard.price}`}</h4>
              <p className='popup__paragraph-disclaimer'>
                Los gastos de envío se calculan en la pantalla de pago
              </p>
            </div>
            <button
              className='button button_type_shop'
              onClick={handleAddToCart}
            >
              <h3 className='button__text'> agregar a carrito </h3>
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default PopupProduct;
