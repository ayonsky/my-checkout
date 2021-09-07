import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
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
import CKTSwitch from "../../components/CKTSwitch/CKTSwitch";

function ProductList() {
  const {
    products = [],
    getProducts,
    getMoreProducts,
    getFavoriteProducts,
  } = useProduct();
  const [page, setPage] = useState(2);
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  const _handleScroll = (event) => {
    const element = event.target;
    if (element.scrollHeight - element.scrollTop === element.clientHeight) {
      getMoreProducts(page);
      setPage(page + 1);
    }
  };

  const _handleToggle = (toggle) => {
    if (toggle) {
      getFavoriteProducts();
    } else {
      getProducts();
    }
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
        <CKTSwitch onChange={_handleToggle} />
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
