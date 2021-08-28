import React from "react";
import { useMediaQuery } from "react-responsive";
import Item from "../../components/Item/Item";
import withHeader from "../../hocs/withHeader";
import { pageNames } from "../../utils/constants";
import { ProductListContainer } from "./ProductList.style";

function ProductList(props) {
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });

  const itemData = {
    id: "af689e54-4137-4e0c-977d-bc959cf9bdc4",
    image_url:
      "https://dummyimage.com/400x400/b7dd15/000&text=Tasty Metal Bike",
    stock: 15,
    productName: "Tasty Metal Bike",
    price: 25,
    productDescription:
      "Dolore et quas in autem repellendus quisquam est. Pariatur est ut quibusdam et vel. Dolores consequatur ut ut quasi tempore. Corporis et dicta. Iure eum aut nostrum quam natus reprehenderit.",
    favorite: 0,
  };

  return (
    <ProductListContainer isMobile={isMobile}>
      <Item key={new Date().getTime()} item={itemData} />
      <Item key={new Date().getTime()} item={itemData} />
      <Item key={new Date().getTime()} item={itemData} />
      <Item key={new Date().getTime()} item={itemData} />
      <Item key={new Date().getTime()} item={itemData} />
      <Item key={new Date().getTime()} item={itemData} />
      <Item key={new Date().getTime()} item={itemData} />
      <Item key={new Date().getTime()} item={itemData} />
      <Item key={new Date().getTime()} item={itemData} />
      <Item key={new Date().getTime()} item={itemData} />
      <Item key={new Date().getTime()} item={itemData} />
      <Item key={new Date().getTime()} item={itemData} />
      <Item key={new Date().getTime()} item={itemData} />
      <Item key={new Date().getTime()} item={itemData} />
      <Item key={new Date().getTime()} item={itemData} />
      <Item key={new Date().getTime()} item={itemData} />
      <Item key={new Date().getTime()} item={itemData} />
      <Item key={new Date().getTime()} item={itemData} />
      <Item key={new Date().getTime()} item={itemData} />
      <Item key={new Date().getTime()} item={itemData} />
      <Item key={new Date().getTime()} item={itemData} />
      <Item key={new Date().getTime()} item={itemData} />
      <Item key={new Date().getTime()} item={itemData} />
      <Item key={new Date().getTime()} item={itemData} />
      <Item key={new Date().getTime()} item={itemData} />
      <Item key={new Date().getTime()} item={itemData} />
      <Item key={new Date().getTime()} item={itemData} />
    </ProductListContainer>
  );
}

const ProductListView = withHeader(ProductList, {
  pageName: pageNames.PRODUCT_LIST,
});
export default ProductListView;
