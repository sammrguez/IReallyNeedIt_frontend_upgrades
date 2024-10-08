import React from "react";
import { auth } from "./firebase";
import api from "../utils/api";

function FireBaseLogin() {
  cons[(GuestUser, setGuesUser)] = {
    name: " ",
    user: " ",
    userId: " ",
  };
  // async function handleSuccess(res) {
  //     try {
  //       const user = await res.profileObj;
  //       auth.registerAndLogin(user).then((data) => {
  //         if (data && data.token) {
  //           handleLogin();
  //           navigate("/direccion");
  //         }
  //       });
  //     } catch (error) {
  //       console.error("error al iniciar sesion");
  //     }
  //   }

  function handleChange(evt) {
    const { name, value } = evt.target;
    setGuesUser((prevGuestUser) => ({
      ...prevGuestUser,
      [name]: value,
    }));
  }
  async function registerGuestUser() {
    try {
      const data = await auth.createUserWithEmailAndPassword(
        email,
        "passwordTemporal"
      );
      const userId = data.user.uid;
      return api.registerGuestUser(email);
    } catch (error) {
      console.error("error al registrar al usuario");
      throw error;
    }
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
