import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Switch } from "@material-ui/core";
import withHeader from "../../hocs/withHeader";
import Product from "./Product/Product";
import useProduct from "../../hooks/useProduct";
import { pageNames } from "../../utils/constants";
import {
  ProductListContainer,
  ProductListFlexDiv,
  ProductListWrapper,
  ToggleSwitchWrapper,
} from "./ProductList.style";

function ProductList() {
  const {
    products = [],
    getProducts,
    getMoreProducts,
    getFavoriteProducts,
  } = useProduct();
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

  const _handleScroll = (event) => {
    const element = event.target;
    if (
      !toggle &&
      element.scrollHeight - element.scrollTop === element.clientHeight
    ) {
      getMoreProducts(page);
      setPage(page + 1);
    }
  };

  const _handleToggle = (event) => {
    setToggle(event.target.checked);
  };

  const _productList = () => {
    return products.map((product) => (
      <Product key={product.id} product={product} />
    ));
  };
  
  return (
    <ProductListContainer>
      <ToggleSwitchWrapper>
        Show only favorite?
        <Switch
          checked={toggle}
          onChange={_handleToggle}
          value="toggleFavorite"
        />
      </ToggleSwitchWrapper>
      <ProductListWrapper isMobile={isMobile} onScroll={_handleScroll}>
        <ProductListFlexDiv isMobile={isMobile}>
          {_productList()}
        </ProductListFlexDiv>
      </ProductListWrapper>
    </ProductListContainer>
  );
}

const ProductListView = withHeader(ProductList, {
  pageName: pageNames.PRODUCT_LIST,
});
export default ProductListView;
