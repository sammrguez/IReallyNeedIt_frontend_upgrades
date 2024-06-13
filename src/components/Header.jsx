import React from 'react';
import cover from '../images/portada2.jpg';

function Header() {
  return (
    <section className='header'>
      <div className='header__container'>
        <img src={cover} className='header__image-background'></img>
      </div>
    </section>
  );
}

export default Header;
