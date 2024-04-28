import React from 'react';
import { Link } from 'react-router-dom';
import texture from '../images/textura_IRNI.jpg';
import mug from '../images/overthinker.jpg';

function HotToday({ onAddProductClick, promoProduct }) {
  const handleAddToCart = (event) => {
    event.preventDefault();
    onAddProductClick(promoProduct);
  };

  return (
    <section className='hotToday'>
      <img className='decoration-band' src={texture} />
      <h2 className='hotToday__header'>Presentando el Producto del Mes</h2>
      <div className='hotToday__content'>
        <div className='hotToday__images'>
          <div className='hotToday__image-container'>
            <img className='hotToday__image' src={promoProduct['photo-link']} />
          </div>

          <button className='button button_type_shop' onClick={handleAddToCart}>
            <h3 className='button__text'> agregar a carrito </h3>
          </button>
        </div>
        <div className='hotToday__data'>
          <h3 className='hotToday__text'>
            ¡Los imprescindibles de la temporada están aquí! Explora lo más
            destacado de hoy en
            <span className='hotToday__highlight'>I Really Need It</span>
          </h3>
          <Link className='button button_type_hotToday' to='/productos'>
            <h3 className='button__text'>más productos </h3>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HotToday;
