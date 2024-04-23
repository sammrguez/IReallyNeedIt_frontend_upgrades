import React from 'react';

function PopupForm({
  header,

  onClose,
  isOpen,

  children,

  logo,
}) {
  return (
    <div className={`popup popup_type_signin ${isOpen ? 'popup_opened' : ''}`}>
      <div className='overlay' onClick={onClose}></div>
      <div className='popup__container popup__container-sign'>
        <img className='popup__logo' src={logo} />
        <form className='form form_type_sign'>
          <h2 className='form__header form__header-sign'>{header}</h2>
          <fieldset className='form__fieldset'>{children}</fieldset>
        </form>
      </div>
    </div>
  );
}

export default PopupForm;
