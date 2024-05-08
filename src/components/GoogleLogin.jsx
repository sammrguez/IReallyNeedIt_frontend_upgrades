import React from 'react';
import google from '../images/google.png';
/* servicios de google */
import { GoogleLogin } from '@leecheuk/react-google-login';

import { gapi } from 'gapi-script';
const googleClientID =
  '652479721639-tg8gkt4avnr87qh751c4qst08h908gkj.apps.googleusercontent.com';
function start() {
  gapi.client.init({
    clientId: googleClientID,
    scope: 'profile',
  });
}
gapi.load('client:auth2', start);
function GoogleLoginComponent({ onSuccess, onFailure }) {
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
