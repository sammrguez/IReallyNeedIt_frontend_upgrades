import React from 'react';
import iphoneCase from '../images/case.png';
import { useState, useEffect, useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

function PopupProduct({ selectedCard, name, onClose, onAddProductClick }) {
  const cart = useContext(CartContext);
  const [selectedModel, setSelectedModel] = useState('');

  const handleAddToCart = (event) => {
    event.preventDefault();

    onAddProductClick(selectedCard);

    onClose();
  };

  const handleModelSelection = (model) => {
    setSelectedModel(model);
    console.log(`seleccionaste el modelo ${model}`);
  };
  return (
    <div
      className={`popup popup_type_${name} ${
        selectedCard ? 'popup_opened' : ''
      } `}
    >
      <div className='overlay' onClick={onClose}></div>
      <div
        className='popup__container popup__container-product
      '
      >
        <form className=' form form_type_product'>
          {selectedCard && (
            <>
              <div className='form__image-container'>
                <img className='form__image' src={selectedCard['photo-link']} />
              </div>

              <div className='form__data'>
                <h2 className='form__header'>{selectedCard.name}</h2>
                <p className='form__paragraph'>{selectedCard.description}</p>
                {selectedCard.models.length > 0 && (
                  <>
                    <h3 className='form__sub-header'>Modelo</h3>

                    <ul className='form__sizes'>
                      {selectedCard.models.map((model, index) => {
                        return (
                          <li
                            className='form__size'
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

                <h4 className='form__price'>{`$ ${selectedCard.price}`}</h4>
                <p className='form__paragraph form__paragraph-disclaimer'>
                  Los gastos de envío se calculan en la pantalla de pago
                </p>
                <button
                  className='button button_type_shop'
                  onClick={handleAddToCart}
                >
                  <h3 className='button__text'> agregar a carrito </h3>
                </button>
              </div>
            </>
          )}
        </form>
      </div>
    </div>
  );
}

export default PopupProduct;
