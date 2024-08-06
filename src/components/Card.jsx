import { React, useState, useEffect, useRef } from 'react';
import {motion, useInView, useAnimation }from "framer-motion";

function Card({ onClick, card }) {
  const handleClick = () => {
    onClick(card);
  };
  const scrollRef = useRef(null);
  const isInView= useInView(scrollRef);
  const mainControls= useAnimation();

  useEffect(()=>{
    if(isInView){
      mainControls.start("visible");
    }
  },[isInView, mainControls]);

  return (
    <motion.div  ref={scrollRef}
    variants={{
      hidden:{opacity:0, y: 70},
      visible:{opacity:1, y:0},
    }}
    initial="hidden"
    animate={mainControls}
    transition={{duration:.5, delay:.20}}
    >
      <div className='card' onClick={handleClick}>
        <img className='card__image' src={card['photo-link']} />
        <div className='card__data'>
        <h3 className='card__footer'> Nuevo!</h3>
          <h3 className='card__header'>{card.name}</h3>
          <p className='card__price'>{`$ ${card.price}`}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default Card;
