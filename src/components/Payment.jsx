import React, { useState, useEffect } from 'react';

function Payment() {
  const [address, setAddress] = useState({
    street: '',
    exteriorNumber: '',
    interiorNumber: '',
    postalCode: '',
    municipality: '',
    neighborhood: '',
    state: '',
    specialInstructions: '',
  });
  function handleChange(evt) {
    const { name, value } = evt.target;
    setAddress((prevAddress) => ({
      ...prevAddress,
      [name]: value,
    }));
    console.log(address);
  }
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
              id='street'
              name='street'
              minLength='5'
              maxLength='50'
              required
              onChange={handleChange}
            ></input>
            <input
              className='form__input form__input_type_text short'
              type='text'
              placeholder='No. exterior'
              id='exteriorNumber'
              name='exteriorNumber'
              minLength='1'
              maxLength='50'
              required
              onChange={handleChange}
            ></input>
            <input
              className='form__input form__input_type_text short'
              type='text'
              placeholder='No. interior'
              id='interiorNumber'
              name='interiorNumber'
              minLength='1'
              maxLength='50'
              onChange={handleChange}
            ></input>
            <input
              className='form__input form__input_type_text'
              type='text'
              placeholder='Código postal'
              id='postalCode'
              name='postalCode'
              minLength='4'
              maxLength='10'
              required
              onChange={handleChange}
            ></input>
            <input
              className='form__input form__input_type_text'
              type='text'
              placeholder='Colonia'
              id='neighborhood'
              name='neighborhood'
              minLength='5'
              maxLength='50'
              required
              onChange={handleChange}
            ></input>
            <input
              className='form__input form__input_type_text'
              type='text'
              placeholder='Alcaldía o municipio'
              id='municipality'
              name='municipality'
              minLength='5'
              maxLength='50'
              required
              onChange={handleChange}
            ></input>{' '}
            <input
              className='form__input form__input_type_text'
              type='text'
              placeholder='Estado'
              id='state'
              name='state'
              minLength='5'
              maxLength='50'
              required
              onChange={handleChange}
            ></input>
            <textarea
              className='form__textarea'
              placeholder='Indicaciones especiales'
              name='specialInstructions'
              id='specialInstructions'
              cols='30'
              rows='10'
              minLength='5'
              maxLength='70'
              onChange={handleChange}
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
