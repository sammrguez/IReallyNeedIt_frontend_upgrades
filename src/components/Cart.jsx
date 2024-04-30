import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import texture from '../images/textura_IRNI.jpg';
import CartItem from './CartItem';
import InfoTooltip from './InfoTooltip';
import { CartContext } from '../contexts/CartContext';

function Cart({
  onAddClick,
  onRemoveClick,
  loggedIn,
  onDeleteClick,
  onOpenRegister,
  onClose,
}) {
  const cart = useContext(CartContext);

  const navigate = useNavigate();

  const [shouldBeInfoOpen, setShouldBeInfoOpen] = useState(false);

  function handlecart(evt) {
    evt.preventDefault();

    if (loggedIn) {
      if (cart.length === 0) {
        setShouldBeInfoOpen(true);
      } else {
        navigate('/pago');
      }
    } else {
      if (cart.length === 0) {
        setShouldBeInfoOpen(true);
      } else {
        onOpenRegister();
        navigate('/registro');
      }
    }
  }

  return (
    <>
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
              <h3 className='button__text'>Continuar</h3>
            </button>
          </div>
        </div>
      </section>
      <InfoTooltip
        header={'¡Tu carrito está vacío!'}
        messagge={
          'Parece que tu carrito está un poco solitario ¡Es hora de llenarlo con cosas increíbles! '
        }
        shouldBeInfoOpen={shouldBeInfoOpen}
        onClose={onClose}
      />
    </>
  );
}

export default Cart;
