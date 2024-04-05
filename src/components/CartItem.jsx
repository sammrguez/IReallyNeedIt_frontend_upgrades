import React from 'react';
import itemphoto from '../images/snoopy-airpods.png';
import trashIcon from '../images/trash.png';

function CartItem({ item }) {
  return (
    <li className='cartItem'>
      <div className='cart__image-container'>
        <img className='cartItem__image' src={itemphoto} />
      </div>
      <div className='cartItem__data'>
        <h3 className='cartItem__header'>{item.name}</h3>
        <p className='cartItem__price'>{`$ ${item.price}`}</p>
        <div className='cartItem__quantityBox-container'>
          <div className='cartItem__quantityBox'>
            <div className='cartItem__quantitybox-item'>-</div>
            <div className='cartItem__quantitybox-item'>1</div>
            <div className='cartItem__quantitybox-item'>+</div>
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
