import React from 'react';
import IRNIsticker from '../images/stickers_IRNI_purple.png';
import google from '../images/google.png';

function PopupForm({
  header,

  onClose,
  isOpen,

  children,
}) {
  return (
    <div className={`popup popup_type_signin ${isOpen ? 'popup_opened' : ''}`}>
      <div className='overlay' onClick={onClose}></div>
      <div className='popup__container popup__container-sign'>
        <img className='popup__logo' src={IRNIsticker} />
        <form className='form form_type_sign'>
          <h2 className='form__header form__header-sign'>{header}</h2>
          <fieldset className='form__fieldset'>{children}</fieldset>
        </form>
      </div>
    </div>
  );
}

export default PopupForm;
