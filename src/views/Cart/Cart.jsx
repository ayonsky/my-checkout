import React from "react";
import { Button } from "../../App.style";
import CartRow from "../../components/CartRow/CartRow";
import withHeader from "../../hocs/withHeader";
import { pageNames } from "../../utils/constants";
import { CartContainer, CartFooter, CartRowsContainer } from "./Cart.style";

function Cart(props) {
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
    <CartContainer>
      <CartRowsContainer>
        <CartRow key={new Date().getTime()} data={itemData}/>
        <CartRow key={new Date().getTime()} data={itemData}/>
        <CartRow key={new Date().getTime()} data={itemData}/>
        <CartRow key={new Date().getTime()} data={itemData}/>
        <CartRow key={new Date().getTime()} data={itemData}/>
        <CartRow key={new Date().getTime()} data={itemData}/>
        <CartRow key={new Date().getTime()} data={itemData}/>
        <CartRow key={new Date().getTime()} data={itemData}/>
        <CartRow key={new Date().getTime()} data={itemData}/>
        <CartRow key={new Date().getTime()} data={itemData}/>
        <CartRow key={new Date().getTime()} data={itemData}/>
        <CartRow key={new Date().getTime()} data={itemData}/>
        <CartRow key={new Date().getTime()} data={itemData}/>
        <CartRow key={new Date().getTime()} data={itemData}/>
        <CartRow key={new Date().getTime()} data={itemData}/>
        <CartRow key={new Date().getTime()} data={itemData}/>
        <CartRow key={new Date().getTime()} data={itemData}/>
        <CartRow key={new Date().getTime()} data={itemData}/>
      </CartRowsContainer>
      <CartFooter>
        <Button width={"100%"} type={"submit"} fontSize={"18px"}>
          Checkout
        </Button>
      </CartFooter>
    </CartContainer>
  );
}

const CartView = withHeader(Cart, { pageName: pageNames.CART });
export default CartView;
