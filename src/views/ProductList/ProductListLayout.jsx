import React from "react";
import { useMediaQuery } from "react-responsive";
import CartView from "../Cart/Cart";
import ProductListView from "./ProductList";
import { ProductListLayoutContainer } from "./ProductList.style";

function ProductListLayout(props) {
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });
  return (
    <ProductListLayoutContainer>
      {isMobile ? (
        <ProductListView />
      ) : (
        <>
          <ProductListView />
          <CartView />
        </>
      )}
    </ProductListLayoutContainer>
  );
}
export default ProductListLayout;
