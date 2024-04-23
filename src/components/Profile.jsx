import React from 'react';
import PopupForm from './PopupForm';

function Profile({ isOpen, handleProfile, onClose }) {
  return (
    <section className='register'>
      <PopupForm header={'hola comprador'} isOpen={isOpen} onClose={onClose} />
    </section>
  );
}

export default Profile;
