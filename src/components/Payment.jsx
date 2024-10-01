import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";

function Payment() {
  const [searchParams] = useSearchParams();
  const preferenceId = searchParams.get("preferenceId");

  const [isInitialized, setIsInitialized] = useState(false);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (!isInitialized) {
      initMercadoPago("APP_USR-260a5971-e5bf-45e9-bc66-d37aafbdf1f2");
      setIsInitialized(true);
    }
  }, [isInitialized]);

  const handleOnReady = () => {
    setIsReady(true);
  };

  const renderCheckoutButton = () => {
    if (!preferenceId) return null;

    // Asegurarse de que el botón solo se renderiza una vez
    return (
      <Wallet
        initialization={{ preferenceId }}
        customization={{ texts: { payButton: "Paga con Mercado Pago" } }}
        locale="es-MX"
        onReady={handleOnReady}
      />
    );
  };

  return (
    <section id="payment" className="payment">
      <div className="payment__container">
        <h2 className="payment__header">Finaliza tu Pedido</h2>
        {/* <p>Preference ID: {preferenceId}</p> */}

        {renderCheckoutButton()}
      </div>
    </section>
  );
}

export default Payment;

// initMercadoPago("APP_USR-260a5971-e5bf-45e9-bc66-d37aafbdf1f2");
