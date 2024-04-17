import React from 'react';
import PopupForm from './PopupForm';

function Login({ onClose, isOpen }) {
  console.log(isOpen);

  return (
    <section className='login'>
      <PopupForm
        onClose={onClose}
        isOpen={isOpen}
        header={'pagina de pagos'}
        textButton={'iniciar sesión con'}
        linkTo={'/registro'}
        linkToText={'regístrate'}
      ></PopupForm>
    </section>
  );
}

export default Login;
