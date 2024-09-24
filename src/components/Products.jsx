import React from "react";
import { useNavigate } from "react-router-dom";
import Card from "./Card";
import texture from "../images/textura_IRNI.jpg";

function Products({
  products,
  selectedCard,
  onClose,
  onCardClick,
  onAddProductClick,
  productsFiltered,
}) {
  return (
    <section className="products">
      <img className="decoration-band" src={texture} />
      <div className="products__container">
        {productsFiltered
          ? productsFiltered.map((product) => {
              return (
                <Card onClick={onCardClick} card={product} key={product._id} />
              );
            })
          : products.map((product) => {
              return (
                <Card onClick={onCardClick} card={product} key={product._id} />
              );
            })}
      </div>
    </section>
  );
}

export default Products;
