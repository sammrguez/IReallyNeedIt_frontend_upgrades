import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import api from "../utils/api";
import InfoTooltip from "./InfoTooltip";

function Product({ onAddProductClick, onClose }) {
  const [selectedModel, setSelectedModel] = useState(null);
  const [shouldBeInfoOpen, setShouldBeInfoOpen] = useState(false);
  const [product, setProduct] = useState({});

  const { productId } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
      if (productId) {
        try {
          const fetchedProduct = await api.getProductById(productId);
          setProduct(fetchedProduct);
        } catch (error) {
          console.error("Error al obtener el producto:", error);
        }
      } else {
        console.error("productId is undefined or null");
      }
    };

    fetchProduct();
  }, [productId]);

  const handleModelSelection = (model) => {
    setSelectedModel(model);
  };
  function test() {
    console.log(product);
  }

  const handleAddToCart = (event) => {
    event.preventDefault();
    if (product.models.length < 1 || selectedModel) {
      const productToAdd = { ...product, selectedModel: selectedModel };
      onAddProductClick(productToAdd);
    } else {
      setShouldBeInfoOpen(true);
    }
  };

  return (
    <>
      {" "}
      <section id="product" className="product">
        <div className="product__container">
          <div className="product__image-container">
            <img className="product__image " src={product["photo-link"]} />
          </div>
          <div className="product__data">
            <h2 className="product__header" onClick={test}>
              {product.name}
            </h2>
            <h4 className="product__price"> ${product.price}</h4>
            <p className="product__description">{product.description}</p>

            {product.models && product.models.length > 0 ? (
              <>
                <h3 className="popup__sub-header">Modelo:</h3>
                <ul className="popup__sizes">
                  {product.models.map((model, index) => {
                    return (
                      <li
                        className={`popup__size ${
                          selectedModel === model ? "size-selected" : ""
                        }`}
                        key={index}
                        onClick={() => handleModelSelection(model)}
                      >
                        {model}
                      </li>
                    );
                  })}
                </ul>
              </>
            ) : (
              ""
            )}

            <button
              className="button button_type_shop"
              onClick={handleAddToCart}
            >
              <h3 className="button__text"> agregar a carrito </h3>
            </button>
            <p className="popup__paragraph-disclaimer">
              Los gastos de envío se calculan en la pantalla de pago
            </p>
          </div>
        </div>
      </section>
      <InfoTooltip
        shouldBeInfoOpen={shouldBeInfoOpen}
        header={"Parece que no has seleccionado un modelo"}
        messagge={"selecciona un modelo para agregar al carrito"}
        onClose={onClose}
      />
    </>
  );
}

export default Product;
