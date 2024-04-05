import React from 'react';
import snoopy from '../images/snoopy-airpods.png';
import thermo from '../images/thermo-pretty.jpeg';

function Header() {
  return (
    <section className='header'>
      <div className='header__data'>
        <p className='header__info'>
          ¿Alguna vez has sentido ese impulso irresistible de añadir un toque
          especial a tu vida cotidiana?
        </p>
        <h2 className='header__phrase'>
          ¡Entonces has llegado al lugar correcto!
        </h2>
      </div>
      <div className='header__images'>
        <div className='header__hexagon'>
          <img className='header__image-hexagon' src={thermo} alt='Snoopy' />
        </div>
        <img className='header__image-png' src={snoopy} alt='Snoopy' />
      </div>
    </section>
  );
}

export default Header;
