import React from 'react';
import { useState, useEffect, useContext } from 'react';
import InfoTooltip from './InfoTooltip';

function CardPopup({ selectedCard, onAddProductClick, onClose }) {
  const [selectedModel, setSelectedModel] = useState(null);
  const [shouldBeInfoOpen, setShouldBeInfoOpen] = useState(false);

  const handleModelSelection = (model) => {
    setSelectedModel(model);
  };

  const handleAddToCart = (event) => {
    event.preventDefault();
    if (selectedCard.models.length < 1 || selectedModel) {
      const productToAdd = { ...selectedCard, selectedModel: selectedModel };
      onAddProductClick(productToAdd);
      onClose();
    } else {
      setShouldBeInfoOpen(true);
    }
  };

  return (
    <>
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
        <button className='button button_type_shop' onClick={handleAddToCart}>
          <h3 className='button__text'> agregar a carrito </h3>
        </button>
      </div>
      <InfoTooltip
        shouldBeInfoOpen={shouldBeInfoOpen}
        header={'Parece que no has seleccionado un modelo'}
        messagge={'selecciona un modelo para agregar al carrito'}
        onClose={onClose}
      />
    </>
  );
}

export default CardPopup;
