import React, { useState } from 'react';
import PopupForm from './PopupForm';
import gmail from '../images/gmail.png';
import { Link } from 'react-router-dom';
import GoogleLoginComponent from './GoogleLogin';
import * as auth from '../utils/auth';

function Register({ onClose, isOpen, onOpenLogin }) {
  async function handleSuccess(res) {
    try {
      const user = await res.profileObj;
      auth.register(user);
    } catch (error) {
      console.error('error al iniciar sesion');
    }
  }

  function handleFailure(res) {
    console.log(res);
    console.log('algo salio mal');
  }

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
        <GoogleLoginComponent
          onSuccess={handleSuccess}
          onFailure={handleFailure}
        />
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
