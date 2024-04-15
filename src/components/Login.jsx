import React from 'react';
import PopupForm from './PopupForm';

function Login({ onClose, isOpen, onOpenLogin }) {
  function openLogin() {
    onOpenLogin;
  }
  return (
    <section className='login'>
      <PopupForm
        onClose={onClose}
        isOpen={isOpen}
        header={'Hola de nuevo, !'}
        textButton={'iniciar sesión con'}
        linkTo={'/registro'}
        linkToText={'regístrate'}
        onLinkClick={openLogin}
      ></PopupForm>
    </section>
  );
}

export default Login;
