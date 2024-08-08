import React from "react";
import toteHeader from "../images/totebag_salchicha1.jpg";
import earpodsHeader from "../images/earpods_insta.jpg";
import casesHeader from "../images/case_dino.webp";
import thermoHeader from "../images/thermo-pretty.jpeg";
import homedecorHeader from "../images/portavelas.png";
import techHeader from "../images/audifonos_stand.jpg";

function Categories() {
  return (
    <section class="categories">
      <div className="categories__container">
        <div className="categories__item item1">
          <img className="categories__image" src={casesHeader} />
          <div className="categories__overlay"></div>
          <h2 className="categories__subtitle">phone Cases</h2>
        </div>
        <div className="categories__item item2">
          <img className="categories__image" src={earpodsHeader} />
          <div className="categories__overlay"></div>
          <h2 className="categories__subtitle">earpods cases</h2>
        </div>
        <div className="categories__item item3">
          <img className="categories__image" src={toteHeader} />
          <div className="categories__overlay"></div>
          <h2 className="categories__subtitle">bags y textiles</h2>
        </div>
        <div className="categories__item item4">
          <img className="categories__image" src={thermoHeader} />
          <div className="categories__overlay"></div>
          <h2 className="categories__subtitle">thermos y tazas</h2>
        </div>
        <div className="categories__item item5">
          <img className="categories__image" src={homedecorHeader} />
          <div className="categories__overlay"></div>
          <h2 className="categories__subtitle">home decor</h2>
        </div>
        <div className="categories__item item6">
          <img className="categories__image" src={techHeader} />
          <div className="categories__overlay"></div>
          <h2 className="categories__subtitle">tech </h2>
        </div>
      </div>
    </section>
  );
}

export default Categories;
