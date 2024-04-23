import React, { useContext } from 'react';
import PopupForm from './PopupForm';
import addressIcon from '../images/address.png';
import logOutIcon from '../images/salir.png';
import IRNIstickerGreen from '../images/stickers_IRNI_green.png';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';

function Profile({ isOpen, onClose }) {
  const navigate = useNavigate();
  const user = useContext(UserContext);

  function handleLogOut(evt) {
    evt.preventDefault();
    console.log('aqui cierra sesion');
    console.log(user);
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
        <button className='button button_type_sign' onClick={handleAddress}>
          <img
            className='button__icon'
            src={addressIcon}
            alt='simbolo de mail'
          />
          <h3 className='button__text'>Direccion del usuario</h3>
        </button>
        <button className='button button_type_sign' onClick={handleLogOut}>
          <img
            className='button__icon'
            src={logOutIcon}
            alt='simbolo de mail'
          />
          <h3 className='button__text'>Cerrar sesión</h3>
        </button>
      </PopupForm>
    </section>
  );
}

export default Profile;
