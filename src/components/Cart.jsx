import React, { useContext, useState } from 'react';
import texture from '../images/textura_IRNI.jpg';
import CartItem from './CartItem';
import { CartContext } from '../contexts/CartContext';

function Cart() {
  const cart = useContext(CartContext);

  function handlecart() {
    console.log(cart);
  }

  function onQuantifierChange(number) {
    console.log(`el total es: ${number}`);
  }
  return (
    <section className='cart'>
      <img className='decoration-band' src={texture} />
      <div className='cart__container'>
        <h2 className='cart__header'>Tus compras</h2>
        <ul className='cart__added-items'>
          {cart.map((item, index) => {
            return (
              <CartItem
                item={item}
                key={index}
                quantity={item.quantity}
                onQuantifierChange={onQuantifierChange}
              />
            );
          })}
        </ul>
        <div className='cart__total-container'>
          <div className='cart__total-data'>
            <h3 className='cart__total-header'>Total</h3>
            <p className='cart__amount'>
              {`$ ${cart.reduce((total, item) => total + item.price, 0)}`}
            </p>
          </div>

          <button className='button button_type_shop' onClick={handlecart}>
            <h3 className='button__text'>Ir al pago</h3>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Cart;
