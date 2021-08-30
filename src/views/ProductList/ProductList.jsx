import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import Item from "../../components/Item/Item";
import withHeader from "../../hocs/withHeader";
import useProducts from "../../hooks/useProducts";
import { pageNames } from "../../utils/constants";
import { ProductListContainer, ProductListWrapper } from "./ProductList.style";

function ProductList() {
  const { products = [], getProducts } = useProducts();
  const [list, setList] = useState([]);
  const [toggle, setToggle] = useState(false);
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });

  useEffect(() => {
    if (products.length) {
      setList(products);
    } else {
      getProducts();
    }

    if (toggle) {
      setList(products.filter((item) => item.favorite === true));
    } else {
      setList(products);
    }
  }, [getProducts, products, toggle]);

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
      <ProductListWrapper isMobile={isMobile}>
        {list.map((product) => (
          <Item key={product.id} item={product} />
        ))}
      </ProductListWrapper>
    </ProductListContainer>
  );
}

const ProductListView = withHeader(ProductList, {
  pageName: pageNames.PRODUCT_LIST,
});
export default ProductListView;
