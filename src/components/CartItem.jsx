import React, { useState } from 'react';

import trashIcon from '../images/trash.png';

function CartItem({ item }) {
  const [quantifier, setQuantifier] = useState(1);

  function addOneToCart() {
    setQuantifier((prevQuantifier) => prevQuantifier + 1);
  }
  function removeOne() {
    setQuantifier((prevQuantifier) => prevQuantifier - 1);
  }
  return (
    <li className='cartItem'>
      <div className='cart__image-container'>
        <img className='cartItem__image' src={item['photo-link']} />
      </div>
      <div className='cartItem__data'>
        <h3 className='cartItem__header'>{item.name}</h3>
        <p className='cartItem__price'>{`$ ${item.price}`}</p>
        <div className='cartItem__quantityBox-container'>
          <div className='cartItem__quantityBox'>
            <button className='cartItem__quantitybox-item' onClick={removeOne}>
              -
            </button>
            <div className='cartItem__quantitybox-item'>{quantifier}</div>
            <button
              className='cartItem__quantitybox-item'
              onClick={addOneToCart}
            >
              +
            </button>
          </div>
          <div className='cartItem__delete-box'>
            <img className='cartItem__delete-icon' src={trashIcon} />
          </div>
        </div>
      </div>
    </li>
  );
}

export default CartItem;
