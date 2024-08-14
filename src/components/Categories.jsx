import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ProductCategoryContext } from "../contexts/ProductCategoryContext";

import toteHeader from "../images/totebag_salchicha1.jpg";
import airpodsHeader from "../images/earpods_insta.jpg";
import casesHeader from "../images/case_dino.webp";
import thermoHeader from "../images/thermo-pretty.jpeg";
import homedecorHeader from "../images/portavelas.png";
import techHeader from "../images/audifonos_stand.jpg";

import api from "../utils/api";

function Categories({ handleFilter }) {
  const navigate = useNavigate();
  const categoryContext = useContext(ProductCategoryContext);

  function onHandleFilter(category) {
    handleFilter(category);
    navigate("/productos");
  }

  // async function filterByCategory(category) {
  //   console.log(category);
  //   console.log(categoryContext);
  //   try {
  //     const allProducts = await api.getProducts();
  //     if (category) {
  //       console.log(allProducts);
  //       const filteredProducts = allProducts.filter(
  //         (product) => product.category === category
  //       );

  //       console.log(filteredProducts);
  //       onFilterActive(filteredProducts);
  //       navigate("/productos");
  //     } else {
  //       onFilterActive(false);
  //     }
  //   } catch (error) {
  //     console.error("error al obtener productos");
  //   }
  // }

  return (
    <section className="categories">
      <div className="categories__container">
        <div className="categories__item item1">
          <img className="categories__image" src={casesHeader} />
          <div className="categories__overlay"></div>
          <h2
            className="categories__subtitle"
            onClick={() => onHandleFilter("phone_cases")}
          >
            phone Cases
          </h2>
        </div>
        <div className="categories__item item2">
          <img className="categories__image" src={airpodsHeader} />
          <div className="categories__overlay"></div>
          <h2
            className="categories__subtitle"
            onClick={() => onHandleFilter("airpods_cases")}
          >
            earpods cases
          </h2>
        </div>
        <div className="categories__item item3">
          <img className="categories__image" src={toteHeader} />
          <div className="categories__overlay"></div>
          <h2
            className="categories__subtitle"
            onClick={() => onHandleFilter("bags_textiles")}
          >
            bags y textiles
          </h2>
        </div>
        <div className="categories__item item4">
          <img className="categories__image" src={thermoHeader} />
          <div className="categories__overlay"></div>
          <h2
            className="categories__subtitle"
            onClick={() => onHandleFilter("mugs_thermos")}
          >
            thermos y tazas
          </h2>
        </div>
        <div className="categories__item item5">
          <img className="categories__image" src={homedecorHeader} />
          <div className="categories__overlay"></div>
          <h2
            className="categories__subtitle"
            onClick={() => onHandleFilter("home_decor")}
          >
            home decor
          </h2>
        </div>
        <div className="categories__item item6">
          <img className="categories__image" src={techHeader} />
          <div className="categories__overlay"></div>
          <h2
            className="categories__subtitle"
            onClick={() => onHandleFilter("tech")}
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
