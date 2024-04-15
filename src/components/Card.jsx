import { React, useState } from 'react';

function Card({ onClick, card }) {
  const handleClick = () => {
    onClick(card);
  };

  return (
    <>
      <div className='card' onClick={handleClick}>
        <img className='card__image' src={card['photo-link']} />
        <div className='card__data'>
          <h3 className='card__header'>{card.name}</h3>
          <p className='card__price'>{`$ ${card.price}`}</p>
        </div>
      </div>
    </>
  );
}

export default Card;
