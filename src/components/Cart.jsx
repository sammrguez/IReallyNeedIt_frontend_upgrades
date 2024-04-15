import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import texture from '../images/textura_IRNI.jpg';
import CartItem from './CartItem';
import { CartContext } from '../contexts/CartContext';

function Cart({ onAddClick, onRemoveClick, onDeleteClick, onOpenRegister }) {
  const cart = useContext(CartContext);

  function handlecart() {
    console.log(cart);
    onOpenRegister();
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
                onAddClick={onAddClick}
                onRemoveClick={onRemoveClick}
                onDeleteClick={onDeleteClick}
                selectedModel={item.selectedModel}
              />
            );
          })}
        </ul>
        <div className='cart__total-container'>
          <div className='cart__total-data'>
            <h3 className='cart__total-header'>Total</h3>
            <p className='cart__amount'>
              {`$ ${cart.reduce(
                (total, item) => total + item.price * item.quantity,
                0
              )}`}
            </p>
          </div>

          <button className='button button_type_shop' onClick={handlecart}>
            <Link className='form__link' to='/registro '>
              <h3 className='button__text'>Ir al pago</h3>
            </Link>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Cart;
