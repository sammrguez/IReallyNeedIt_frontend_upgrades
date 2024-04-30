import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import texture from '../images/textura_IRNI.jpg';
import CartItem from './CartItem';
import { CartContext } from '../contexts/CartContext';

function Cart({
  onAddClick,
  onRemoveClick,
  loggedIn,
  onDeleteClick,
  onOpenRegister,
}) {
  const cart = useContext(CartContext);
  const navigate = useNavigate();

  function handlecart(evt) {
    evt.preventDefault();
    if (loggedIn) {
      navigate('/pago');
    } else if (cart.length === 0) {
      console.log('no hay nada en el carrito');
    } else {
      console.log(cart);
      onOpenRegister();
      navigate('/registro');
    }
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
                extended={true}
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

          <button className='button button_type_pay' onClick={handlecart}>
            <h3 className='button__text'>Ir al pago</h3>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Cart;
