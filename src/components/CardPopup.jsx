import React from 'react';
import { useState, useEffect, useContext } from 'react';

function CardPopup({ selectedCard }) {
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

  return (
    <div className='cardPopup'>
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
    </div>
  );
}

export default CardPopup;
