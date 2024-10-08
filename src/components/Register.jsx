import React, { useState } from "react";
import PopupForm from "./PopupForm";
import gmail from "../images/gmail.png";
import { Link, useNavigate } from "react-router-dom";
import GoogleLoginComponent from "./GoogleLogin";
import * as auth from "../utils/auth";
import IRNIstickerPurple from "../images/stickers_IRNI_purple.png";

function Register({ onClose, isOpen, handleLogin }) {
  const navigate = useNavigate();

  async function handleSuccess(res) {
    try {
      const user = await res.profileObj;
      auth.registerAndLogin(user).then((data) => {
        if (data && data.token) {
          handleLogin();
          navigate("/direccion");
        }
      });
    } catch (error) {
      console.error("error al iniciar sesion");
    }
  }
  function handleBuyasGuest(evt) {
    evt.preventDefault();
    navigate("/registro/invitado");
  }

  function handleFailure(res) {
    console.log("algo salio mal");
  }

  return (
    <section className="register">
      <PopupForm
        onClose={onClose}
        isOpen={isOpen}
        header={"¿listo para adquirir increíbles productos?"}
        logo={IRNIstickerPurple}
        type={"sign"}
      >
        <GoogleLoginComponent
          onSuccess={handleSuccess}
          onFailure={handleFailure}
        />
        <button className="button button_type_sign">
          <h3 className="button__text" onClick={handleBuyasGuest}>
            comprar como invitado
          </h3>
        </button>
      </PopupForm>
    </section>
  );
}

export default Register;
