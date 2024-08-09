import React from "react";
import Header from "./Header";
import HotToday from "./HotToday";
import Categories from "./Categories";

function Main({ onAddProductClick, promoProduct, onFilterActive }) {
  return (
    <main className="main">
      <Header />
      <Categories onFilterActive={onFilterActive} />
      <HotToday
        onAddProductClick={onAddProductClick}
        promoProduct={promoProduct}
      />
    </main>
  );
}

export default Main;
