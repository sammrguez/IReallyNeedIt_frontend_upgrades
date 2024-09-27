import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { useNavigate, useSearchParams } from "react-router-dom";
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";

function Payment({ trackId }) {
  const [searchParams] = useSearchParams(); // Obtén los parámetros de consulta
  const preferenceId = searchParams.get("preferenceId"); // Obtén el valor de preferenceId

  console.log("Preference ID:", preferenceId); //

  initMercadoPago("APP_USR-260a5971-e5bf-45e9-bc66-d37aafbdf1f2");
  return (
    <section id="payment" className="payment">
      <div className="payment__container">
        <h2 className="payment__header"> esta es la seccion de pagos </h2>
        <p>{trackId}</p>
        <p>{preferenceId}</p>
        <div className="payment__wallet-container">
          <Wallet
            initialization={{ preferenceId: preferenceId }}
            customization={{
              texts: { payButton: "paga con mercado pago" },
              width: "40%",
            }}
            locale="es-MX"
          />
        </div>
      </div>
    </section>
  );
}

export default Payment;
