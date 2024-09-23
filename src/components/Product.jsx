import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import api from "../utils/api";

function Product() {
  const [selectedModel, setSelectedModel] = useState(null);
  const [product, setProduct] = useState({});

  console.log("Product component rendered en product");

  const { productId } = useParams();
  console.log(productId);

  useEffect(() => {
    console.log("Product component rendered en effect");
    console.log("Product ID:", productId); // Verifica si productId tiene un valor

    const fetchProduct = async () => {
      if (productId) {
        console.log(productId);
        try {
          const fetchedProduct = await api.getProductById(productId);
          console.log(fetchProduct);
          setProduct(fetchedProduct);
          console.log("Fetched Product:", fetchedProduct);
        } catch (error) {
          console.error("Error al obtener el producto:", error);
        }
      } else {
        console.error("productId is undefined or null");
      }
    };

    fetchProduct();
  }, [productId]);

  //   const handleModelSelection = (model) => {
  //     setSelectedModel(model);
  //   };

  //   const handleAddToCart = (event) => {
  //     event.preventDefault();
  //     if (selectedCard.models.length < 1 || selectedModel) {
  //       const productToAdd = { ...selectedCard, selectedModel: selectedModel };
  //       onAddProductClick(productToAdd);
  //       onClose();
  //     } else {
  //       setShouldBeInfoOpen(true);
  //     }
  //   };

  return (
    <section id="product" className="product">
      <div className="product__container">
        <div className="product__swiper">
          <img className="card__image" src={product["photo-link"]} />
        </div>
        <div className="product__data">
          <h2 className="product__header">{product.name}</h2>
          <h4 className="product__price"> ${product.price}</h4>
          <p className="product__description">{product.description}</p>
          <p className="popup__paragraph-disclaimer">
            Los gastos de envío se calculan en la pantalla de pago
          </p>
          <button className="button button_type_shop">
            <h3 className="button__text"> agregar a carrito </h3>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Product;
