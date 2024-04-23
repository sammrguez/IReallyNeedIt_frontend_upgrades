import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logoMain from '../images/LOGO_IRNI.png';
import bag from '../images/bag.png';
import userIcon from '../images/usuario.png';
import { CartContext } from '../contexts/CartContext';

function NavBar({ onOpenProfile, loggedIn }) {
  const cart = useContext(CartContext);

  function handleProfile() {
    console.log(loggedIn);
    onOpenProfile();
  }

  return (
    <nav className='navBar'>
      <ul className='navBar__nav'>
        {loggedIn && (
          <li className='navBar__item' onClick={handleProfile}>
            <Link to='/perfil' className='navBar__link'>
              <img
                className='navBar__icon'
                src={userIcon}
                alt='icono tu perfil'
              />
            </Link>
          </li>
        )}

        <li className='navBar__item '>
          <Link to='/productos' className='navBar__link'>
            {' '}
            Productos
          </Link>
        </li>
        <li className='navBar__item '>
          <Link to='/' className='navBar__link'>
            <img className='navBar__logo' src={logoMain} alt='Logo IRNI' />
          </Link>
        </li>
        <li className='navBar__item '>
          <Link to='/carrito' className='navBar__link'>
            <img className='navBar__icon' src={bag} alt='Carrito' />
          </Link>
          <span className='navBar__bag-quantifier'>
            {cart.reduce((total, item) => total + item.quantity, 0)}
          </span>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
