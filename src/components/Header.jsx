import React from 'react';
import cover from '../images/caseBack.jpeg';
import back from '../images/Happy Days Clear Sticker.jpeg';

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
