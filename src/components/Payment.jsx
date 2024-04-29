import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import { useNavigate } from 'react-router-dom';

function Payment({ handleForm }) {
  const user = useContext(UserContext);
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
  const navigate = useNavigate();

  useEffect(() => {
    if (user.address) {
      setAddress(user.address);
    }
  }, [user]);

  function handleChange(evt) {
    const { name, value } = evt.target;
    setAddress((prevAddress) => ({
      ...prevAddress,
      [name]: value,
    }));
  }
  function handleSubmit(evt) {
    evt.preventDefault();
    console.log(user);
    handleForm(address);
    navigate('/resumen');
  }
  return (
    <section className='payment'>
      <div className='payment__container'>
        <form className='form' onSubmit={handleSubmit}>
          <h3 className='form__header form__header_type_address'>
            {' '}
            Dirección de envio
          </h3>
          <fieldset className='form__fieldset'>
            <input
              required
              value={address.street}
              className='form__input form__input_type_text'
              type='text'
              placeholder='calle'
              id='street'
              name='street'
              minLength='5'
              maxLength='50'
              onChange={handleChange}
            ></input>
            <input
              value={address.exteriorNumber}
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
              value={address.interiorNumber}
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
              value={address.postalCode}
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
              value={address.neighborhood}
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
              value={address.municipality}
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
              value={address.state}
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
              value={address.specialInstructions}
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
            <button className='button button_type_submit' type='submit'>
              <h3 className='button__text'> Guardar</h3>
            </button>
          </fieldset>
        </form>
      </div>
    </section>
  );
}

export default Payment;
