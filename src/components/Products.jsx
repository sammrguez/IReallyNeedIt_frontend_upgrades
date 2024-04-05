import React from 'react';
import Card from './Card';
import texture from '../images/textura_IRNI.jpg';
import PopupProduct from './PopupProduct';

function Products({
  products,
  selectedCard,
  onClose,
  onCardClick,
  onAddProductClick,
}) {
  return (
    <section className='products'>
      <img className='decoration-band' src={texture} />
      <div className='products__container'>
        {products.map((product) => {
          return (
            <Card onClick={onCardClick} card={product} key={product._id} />
          );
        })}
      </div>
      <PopupProduct
        name={'product'}
        selectedCard={selectedCard}
        onClose={onClose}
        onAddProductClick={onAddProductClick}
      />
    </section>
  );
}

export default Products;
