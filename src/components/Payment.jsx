import React from 'react';
import PopupForm from './PopupForm';

function Payment({ onClose, isOpen }) {
  return (
    <section className='payment'>
      <div className='payment__container'>
        <form className='form form_type_payment'>
          <h3 className='form__header'> Dirección de envio</h3>
          <fieldset className='form__fieldset'>
            <input
              className='form__input form__input_type_text'
              type='text'
              placeholder='calle'
              id='street-input'
              name='street-input'
              minLength='5'
              maxLength='50'
              required
            ></input>
            <input
              className='form__input form__input_type_text short'
              type='text'
              placeholder='No. exterior'
              id='no-exterior-input'
              name='no-exterior'
              minLength='1'
              maxLength='50'
              required
            ></input>
            <input
              className='form__input form__input_type_text short'
              type='text'
              placeholder='No. interior'
              id='no-interior-input'
              name='no-interior'
              minLength='1'
              maxLength='50'
            ></input>
            <input
              className='form__input form__input_type_text'
              type='text'
              placeholder='Código postal'
              id='postal-code-input'
              name='postal-code'
              minLength='4'
              maxLength='10'
              required
            ></input>
            <input
              className='form__input form__input_type_text'
              type='text'
              placeholder='Alcaldía o municipio'
              id='municipio-input'
              name='municipio'
              minLength='5'
              maxLength='50'
              required
            ></input>{' '}
            <input
              className='form__input form__input_type_text'
              type='text'
              placeholder='Colonia'
              id='colonia-input'
              name='colonia'
              minLength='5'
              maxLength='50'
              required
            ></input>
            <input
              className='form__input form__input_type_text'
              type='text'
              placeholder='Estado'
              id='street-input'
              name='street-input'
              minLength='5'
              maxLength='50'
              required
            ></input>
            <textarea
              className='form__textarea'
              placeholder='Indicaciones especiales'
              name='extra-info'
              id='extra-info-input'
              cols='30'
              rows='10'
              minLength='5'
              maxLength='70'
            ></textarea>
          </fieldset>
        </form>
      </div>
      {/* <PopupForm
        onClose={onClose}
        isOpen={isOpen}
        header={'pagina de pagos'}
        textButton={'iniciar sesión con'}
        linkTo={'/registro'}
        linkToText={'regístrate'}
      ></PopupForm> */}
    </section>
  );
}

export default Payment;
