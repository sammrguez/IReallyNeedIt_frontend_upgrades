import React from 'react';
import google from '../images/google.png';
/* servicios de google */
import GoogleLogin from '@leecheuk/react-google-login';

function GoogleLoginComponent({ onSuccess, onFailure }) {
  const googleClientID =
    '652479721639-js5e822qra9t7okm6slpeghi2p43dh0a.apps.googleusercontent.com';
  return (
    <GoogleLogin
      clientId={googleClientID}
      render={(renderProps) => (
        <button
          className='button button_type_sign'
          onClick={renderProps.onClick}
          disabled={renderProps.disabled}
        >
          <h3 className='button__text'> Inicio rapido con </h3>
          <img className='button__icon' src={google} alt='simbolo de google' />
        </button>
      )}
      buttonText='Inicia sesion'
      onSuccess={onSuccess}
      onFailure={onFailure}
      cookiePolicy={'single_host_origin'}
    />
  );
}

export default GoogleLoginComponent;
