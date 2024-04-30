import React from 'react';

function PopupForm({
  header,

  onClose,
  isOpen,

  children,

  logo,
  type,
}) {
  return (
    <div className={`popup popup_type_signin ${isOpen ? 'popup_opened' : ''}`}>
      <div className='overlay' onClick={onClose}></div>
      <div className={`popup__container popup__container_type_${type}`}>
        <img className='popup__logo rotate-animation' src={logo} />
        <form className={`form form_type_${type}`}>
          <h2 className={`form__header form__header_type_${type}`}>{header}</h2>
          <fieldset className='form__fieldset'>{children}</fieldset>
        </form>
      </div>
    </div>
  );
}

export default PopupForm;
