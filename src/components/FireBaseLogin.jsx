import React from "react";
import api from "../utils/api";
import { Auth0Provider } from "@auth0/auth0-react";

function FireBaseLogin() {
  const [GuestUser, setGuesUser] = {
    name: " ",
    user: " ",
    userId: " ",
  };

  function handleChange(evt) {
    const { name, value } = evt.target;
    setGuesUser((prevGuestUser) => ({
      ...prevGuestUser,
      [name]: value,
    }));
  }

  return (
    <section className="fireBase">
      <div className="fireBase__container">
        <form className="form">
          <h3 className="form__header ">Inicio de sesión rápido</h3>
          <fieldset className="form__fieldset">
            <input
              className="form__input form__input_type_text"
              type="text"
              placeholder="email"
              id="email"
              name="email"
              onChange={handleChange}
            ></input>
          </fieldset>
        </form>
      </div>
    </section>
  );
}

export default FireBaseLogin;
