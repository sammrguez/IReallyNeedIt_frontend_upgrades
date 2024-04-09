import React, { useState } from 'react';

import trashIcon from '../images/trash.png';

function CartItem({ item, onAddClick, onRemoveClick, quantity }) {
  function handleAdd() {
    onAddClick(item);
  }
  function handleRemove() {
    onRemoveClick(item);
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
            <button
              className='cartItem__quantitybox-item'
              onClick={handleRemove}
            >
              -
            </button>
            <div className='cartItem__quantitybox-item'>{quantity}</div>
            <button className='cartItem__quantitybox-item' onClick={handleAdd}>
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
