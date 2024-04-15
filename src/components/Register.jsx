import React from 'react';
import PopupForm from './PopupForm';

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
        textButton={'registrarte con'}
        linkTo={'/login'}
        linkToText={'Inicia Sesión'}
        onLinkClick={openLogin}
      ></PopupForm>
    </section>
  );
}

export default Register;
