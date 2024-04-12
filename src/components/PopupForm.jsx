import React from 'react';
import IRNIsticker from '../images/stickers_IRNI_purple.png';
import google from '../images/google.png';
import gmail from '../images/gmail.png';
import { Link } from 'react-router-dom';

function PopupForm({ header }) {
  return (
    <div className='popup popup_type_signin popup_opened'>
      <div className='overlay'></div>
      <div className='popup__container popup__container-sign'>
        <img className='popup__logo' src={IRNIsticker} />
        <form className='form form_type_sign'>
          <h2 className='form__header form__header-sign'>{header}</h2>
          <fieldset className='form__fieldset'>
            <button className='button button_type_sign'>
              <h3 className='button__text'> registrar con </h3>
              <img
                className='button__icon'
                src={google}
                alt='simbolo de google'
              />
            </button>
            <button className='button button_type_sign'>
              <img />
              <h3 className='button__text'> registrar con </h3>
              <img src={gmail} alt='simbolo de mail' />
            </button>
            <Link className='form__link' to='/login'>
              Inicia Sesion
            </Link>
          </fieldset>
        </form>
      </div>
    </div>
  );
}

export default PopupForm;
