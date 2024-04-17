import React from 'react';
import PopupForm from './PopupForm';

function Payment({ onClose, isOpen }) {
  return (
    <section className='payment'>
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

export default Payment;
