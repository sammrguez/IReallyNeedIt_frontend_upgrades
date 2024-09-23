import React from "react";
import { useParams } from "react-router-dom";

function TestComponent() {
  const { productId } = useParams();

  console.log("Product ID:", productId); // Debería imprimir el ID

  return <div>Product ID: {productId}</div>;
}

export default TestComponent;
