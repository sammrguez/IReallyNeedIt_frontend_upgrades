import React from "react";
import Header from "./Header";
import HotToday from "./HotToday";
import Categories from "./Categories";

function Main({
  onAddProductClick,
  promoProduct,
  handleFilter,
  onCleanFilter,
}) {
  return (
    <main className="main">
      <Header onCleanFilter={onCleanFilter} />
      <Categories handleFilter={handleFilter} />
      <HotToday
        onAddProductClick={onAddProductClick}
        promoProduct={promoProduct}
      />
    </main>
  );
}

export default Main;
