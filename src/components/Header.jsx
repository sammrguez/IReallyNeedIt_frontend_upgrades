import React from "react";
import cover from "../images/header.jpg";
import { Link } from "react-router-dom";

function Header({ onCleanFilter }) {
  function cleanFilter() {
    onCleanFilter();
  }
  return (
    <section className="header">
      <div className="header__container">
        <img src={cover} className="header__image-background"></img>
        {/* <h1 className="header__title"> Find your style </h1> */}
        <Link
          className="button button_place_header"
          to="/productos"
          onClick={cleanFilter}
        >
          <h3 className="button__text"> Explorar productos </h3>{" "}
        </Link>
      </div>
    </section>
  );
}

export default Header;
