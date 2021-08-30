import React from "react";
import { Button } from "../../App.style";
import CartRow from "../../components/CartRow/CartRow";
import withHeader from "../../hocs/withHeader";
import useProducts from "../../hooks/useProducts";
import { pageNames } from "../../utils/constants";
import { CartContainer, CartFooter, CartRowsContainer } from "./Cart.style";

function Cart() {
  const { cart = [] } = useProducts();

  return (
    <CartContainer>
      <CartRowsContainer>
        {cart.map((product) => (
          <CartRow key={`${product.id}`} data={product} />
        ))}
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
