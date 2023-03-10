import React from "react";
import ProductDetail from "./ProductDetail";
function ProductList({ list }) {
  return (
    <>
      
      {list.map((item) => (
        <ProductDetail product={item} key={item.id} />
      ))}
    </>
  );
}
export default ProductList;
