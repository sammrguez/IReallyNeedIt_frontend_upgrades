import React from "react";
import { useNavigate } from "react-router-dom";

import toteHeader from "../images/totebag_salchicha1.jpg";
import airpodsHeader from "../images/earpods_insta.jpg";
import casesHeader from "../images/case_dino.webp";
import thermoHeader from "../images/thermo-pretty.jpeg";
import homedecorHeader from "../images/portavelas.png";
import techHeader from "../images/audifonos_stand.jpg";
import api from "../utils/api";
import { useState } from "react";

function Categories({ onFilterActive }) {
  const navigate = useNavigate();

  async function filterByCategory(category) {
    console.log(category);

    try {
      const allProducts = await api.getProducts();
      if (category) {
        console.log(allProducts);
        const filteredProducts = allProducts.filter(
          (product) => product.category === category
        );

        console.log(filteredProducts);
        onFilterActive(filteredProducts);
        navigate("/productos");
      } else {
        onFilterActive(false);
      }
    } catch (error) {
      console.error("error al obtener productos");
    }
  }

  return (
    <section className="categories">
      <div className="categories__container">
        <div className="categories__item item1">
          <img className="categories__image" src={casesHeader} />
          <div className="categories__overlay"></div>
          <h2
            className="categories__subtitle"
            onClick={() => filterByCategory("phone_cases")}
          >
            phone Cases
          </h2>
        </div>
        <div className="categories__item item2">
          <img className="categories__image" src={airpodsHeader} />
          <div className="categories__overlay"></div>
          <h2
            className="categories__subtitle"
            onClick={() => filterByCategory("airpods_cases")}
          >
            earpods cases
          </h2>
        </div>
        <div className="categories__item item3">
          <img className="categories__image" src={toteHeader} />
          <div className="categories__overlay"></div>
          <h2
            className="categories__subtitle"
            onClick={() => filterByCategory("bags_textiles")}
          >
            bags y textiles
          </h2>
        </div>
        <div className="categories__item item4">
          <img className="categories__image" src={thermoHeader} />
          <div className="categories__overlay"></div>
          <h2
            className="categories__subtitle"
            onClick={() => filterByCategory("mugs_thermos")}
          >
            thermos y tazas
          </h2>
        </div>
        <div className="categories__item item5">
          <img className="categories__image" src={homedecorHeader} />
          <div className="categories__overlay"></div>
          <h2
            className="categories__subtitle"
            onClick={() => filterByCategory("home_decor")}
          >
            home decor
          </h2>
        </div>
        <div className="categories__item item6">
          <img className="categories__image" src={techHeader} />
          <div className="categories__overlay"></div>
          <h2
            className="categories__subtitle"
            onClick={() => filterByCategory("tech")}
          >
            {" "}
            Tech
          </h2>
        </div>
      </div>
    </section>
  );
}

export default Categories;
