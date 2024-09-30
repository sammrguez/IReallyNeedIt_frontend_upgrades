import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react"; // Importar correctamente

function Payment() {
  const [searchParams] = useSearchParams();
  const preferenceId = searchParams.get("preferenceId"); // Obtener preferenceId de la URL

  const [isInitialized, setIsInitialized] = useState(false); // Estado para controlar la inicialización
  const [isReady, setIsReady] = useState(false); // Para verificar cuándo el botón está listo

  useEffect(() => {
    if (!isInitialized) {
      // Inicializar Mercado Pago solo una vez
      initMercadoPago("APP_USR-260a5971-e5bf-45e9-bc66-d37aafbdf1f2"); // Reemplaza con tu clave pública de Mercado Pago
      setIsInitialized(true);
    }
  }, [isInitialized]);

  const handleOnReady = () => {
    setIsReady(true); // Marcar el botón como listo
  };

  const renderCheckoutButton = () => {
    if (!preferenceId) return null;

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
        <h2 className="payment__header">Esta es la sección de pagos</h2>
        <p>Preference ID: {preferenceId}</p>

        {/* Mostrar un mensaje mientras se carga el botón */}
        {!isReady && <p>Cargando botón de pago...</p>}

        {/* Renderizar el botón solo si el preferenceId está disponible */}
        <div id="wallet_container" className="payment__wallet-container">
          {renderCheckoutButton()}
        </div>
      </div>
    </section>
  );
}

export default Payment;
// initMercadoPago("APP_USR-260a5971-e5bf-45e9-bc66-d37aafbdf1f2");
