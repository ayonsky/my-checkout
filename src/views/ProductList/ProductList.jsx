import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import Item from "../../components/Item/Item";
import withHeader from "../../hocs/withHeader";
import useProducts from "../../hooks/useProducts";
import { pageNames } from "../../utils/constants";
import {
  ProductListContainer,
  ProductListFlexDiv,
  ProductListWrapper,
} from "./ProductList.style";

function ProductList() {
  const {
    products = [],
    getProducts,
    getMoreProducts,
    getFavoriteProducts,
  } = useProducts();
  const [page, setPage] = useState(2);
  const [toggle, setToggle] = useState(false);
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });

  useEffect(() => {
    if (toggle) {
      getFavoriteProducts();
    } else {
      getProducts();
    }
  }, [getProducts, getFavoriteProducts, toggle]);

  const handleScroll = (event) => {
    const element = event.target;
    if (element.scrollHeight - element.scrollTop === element.clientHeight) {
      getMoreProducts(page);
      setPage(page + 1);
    }
  };

  return (
    <ProductListContainer>
      <div
        className={"toggleSwitch"}
        onClick={() => {
          setToggle((prev) => !prev);
        }}
      >
        Show only favorite?
      </div>
      <ProductListWrapper isMobile={isMobile} onScroll={handleScroll}>
        <ProductListFlexDiv>
          {products.map((product) => (
            <Item key={product.id} item={product} />
          ))}
        </ProductListFlexDiv>
      </ProductListWrapper>
    </ProductListContainer>
  );
}

const ProductListView = withHeader(ProductList, {
  pageName: pageNames.PRODUCT_LIST,
});
export default ProductListView;
