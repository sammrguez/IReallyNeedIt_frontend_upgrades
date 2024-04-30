import React, { useContext } from 'react';
import PopupForm from './PopupForm';
import addressIcon from '../images/address.png';
import logOutIcon from '../images/cerrar-sesion.png';
import IRNIstickerGreen from '../images/stickers_IRNI_green.png';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';

function Profile({ isOpen, onClose, onLogOut, trackId }) {
  const navigate = useNavigate();
  const user = useContext(UserContext);

  function handleLogOut(evt) {
    evt.preventDefault();
    onLogOut();
    navigate('/');
  }
  function handleAddress(evt) {
    evt.preventDefault();
    navigate('/pago');
  }

  return (
    <section className='profile'>
      <PopupForm
        header={user ? user.name : 'comprador'}
        isOpen={isOpen}
        onClose={onClose}
        logo={IRNIstickerGreen}
        type={'profile'}
      >
        {trackId && (
          <h3 className='form__header_type_profile'>{`Compra en proceso con orden de compra: ${trackId}`}</h3>
        )}
        <button className='button button_type_profile' onClick={handleAddress}>
          <img
            className='button__icon'
            src={addressIcon}
            alt='simbolo de mail'
          />
          <h3 className='button__text button__text_type_profile'>
            Direccion del usuario
          </h3>
        </button>
        <button className='button button_type_profile' onClick={handleLogOut}>
          <img
            className='button__icon'
            src={logOutIcon}
            alt='simbolo de mail'
          />
          <h3 className='button__text button__text_type_profile'>
            Cerrar sesión
          </h3>
        </button>
      </PopupForm>
    </section>
  );
}

export default Profile;
