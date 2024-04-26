import React, { useState } from 'react';

import trashIcon from '../images/trash.png';

function CartItem({
  item,
  onAddClick,
  onRemoveClick,
  onDeleteClick,
  quantity,
  selectedModel,
}) {
  function handleAdd() {
    onAddClick(item);
  }
  function handleRemove() {
    onRemoveClick(item);
  }
  function handleDelete() {
    onDeleteClick(item);
  }

  return (
    <li className='cartItem'>
      <div className='cart__image-container'>
        <img className='cartItem__image' src={item['photo-link']} />
      </div>
      <div className='cartItem__data'>
        <h3 className='cartItem__header'>{item.name}</h3>
        {selectedModel && (
          <h3 className='cartItem__sub-header'>
            {' '}
            {`modelo: ${selectedModel}`}{' '}
          </h3>
        )}

        <p className='cartItem__price'>{`$ ${item.price}`}</p>
        <div className='cartItem__quantityBox-container'>
          <div className='cartItem__quantityBox'>
            <button
              className='cartItem__quantitybox-button'
              onClick={handleRemove}
            >
              -
            </button>
            <div className='cartItem__quantitybox-button'>{quantity}</div>
            <button
              className='cartItem__quantitybox-button'
              onClick={handleAdd}
            >
              +
            </button>
          </div>
          <button
            className='cartItem__quantitybox-button cartItem__quantitybox-button_delete'
            onClick={handleDelete}
          >
            <img className='cartItem__delete-icon' src={trashIcon} />
          </button>
        </div>
      </div>
    </li>
  );
}

export default CartItem;
