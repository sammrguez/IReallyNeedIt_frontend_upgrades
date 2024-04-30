import React, { useContext } from 'react';
import texture from '../images/textura_IRNI.jpg';
import { UserContext } from '../contexts/UserContext';
import { CartContext } from '../contexts/CartContext';

import CartItem from './CartItem';

function OrderSummary() {
  const cart = useContext(CartContext);
  const user = useContext(UserContext);

  return (
    <section className='orderSummary'>
      <img className='decoration-band' src={texture} />
      <div className='orderSummary__container'>
        <h2 className='orderSummary__header'>Gracias por tu compra!</h2>
        <h3 className='orderSummary__orderNumber'> orden #123456 </h3>
        <ul className='orderSummary__items'>
          {cart.map((item, index) => {
            return (
              <CartItem
                item={item}
                key={index}
                quantity={item.quantity}
                selectedModel={item.selectedModel}
                extended={false}
              />
            );
          })}
        </ul>{' '}
        <div className='orderSummary__total'>
          <h3 className='orderSummary__total-header'>Total</h3>
          <p className='orderSummary__amount'>
            {`$ ${cart.reduce(
              (total, item) => total + item.price * item.quantity,
              0
            )}`}
          </p>
        </div>
        <div className='orderSummary__address-container'>
          <p className='orderSummary__address'>
            Direccion de envío:
            {user && user.address
              ? `  ${user.address.neighborhood}, ${user.address.municipality} ${user.address.state}, ${user.address.postalCode}`
              : ''}
          </p>
        </div>
      </div>
    </section>
  );
}

export default OrderSummary;
