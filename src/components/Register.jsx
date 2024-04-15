import React from 'react';
import PopupForm from './PopupForm';

import gmail from '../images/gmail.png';
import { Link } from 'react-router-dom';
import GoogleLoginCoomponent from './GoogleLogin';

function Register({ onClose, isOpen, onOpenLogin }) {
  function openLogin() {
    onOpenLogin();
  }
  return (
    <section className='register'>
      <PopupForm
        onClose={onClose}
        isOpen={isOpen}
        header={'¿listo para adquirir increíbles productos?'}
      >
        {/* <button className='button button_type_sign'>
          <h3 className='button__text'> registrarte con</h3>
          <img className='button__icon' src={google} alt='simbolo de google' />
        </button> */}
        <GoogleLoginCoomponent />
        <button className='button button_type_sign'>
          <h3 className='button__text'> registrarte con</h3>
          <img src={gmail} alt='simbolo de mail' />
        </button>
        <Link className='form__link' to='/login' onClick={openLogin}>
          Inicia Sesión
        </Link>
      </PopupForm>
    </section>
  );
}

export default Register;
