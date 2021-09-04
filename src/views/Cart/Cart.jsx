import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import withHeader from "../../hocs/withHeader";
import useCart from "../../hooks/useCart";
import CartRow from "./CartRow/CartRow";
import { pageNames } from "../../utils/constants";
import {
  CartContainer,
  CartFooter,
  CartRowsContainer,
  TotalAmount,
  TotalAmountWrapper,
} from "./Cart.style";
import { Button } from "../../components/Button/Button.style";

function Cart() {
  const [amount, setAmount] = useState(0);
  const { cart = [], removeProduct } = useCart();
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });

  useEffect(() => {
    const cartInstance = [...cart];
    const removeFromCart = cartInstance.filter((item) => item.quantity === 0);

    if (removeFromCart.length) {
      removeFromCart.forEach((item) => {
        removeProduct(item.id);
      });
    }

    setAmount(
      cart.reduce((total, item) => total + item.price * item.quantity, 0)
    );
  }, [cart, removeProduct]);

  return (
    <CartContainer isMobile={isMobile}>
      <CartRowsContainer isMobile={isMobile}>
        {cart.map((product) => (
          <CartRow key={`${product.id}`} data={product} />
        ))}
      </CartRowsContainer>
      <CartFooter>
        <TotalAmountWrapper>
          <span>Total Amount</span> <TotalAmount>{`${amount}€`}</TotalAmount>
        </TotalAmountWrapper>
        <Button width={"100%"} type={"submit"} fontSize={"18px"}>
          Checkout
        </Button>
      </CartFooter>
    </CartContainer>
  );
}

const CartView = withHeader(Cart, { pageName: pageNames.CART });
export default CartView;
