import React from "react";
import Header from "./Header";
import HotToday from "./HotToday";
import Categories from "./Categories";

function Main({ onAddProductClick, promoProduct }) {
  return (
    <main className="main">
      <Header />
      <Categories />
      <HotToday
        onAddProductClick={onAddProductClick}
        promoProduct={promoProduct}
      />
    </main>
  );
}

export default Main;
