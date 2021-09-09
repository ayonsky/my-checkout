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
  CheckoutButton,
  TotalAmount,
  TotalAmountWrapper,
} from "./Cart.style";

function Cart() {
  const [amount, setAmount] = useState(0);
  const { cart = [], removeProduct } = useCart();
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });

  useEffect(() => {
    const removeFromCart = cart.filter((item) => item.quantity === 0);

    if (removeFromCart.length) {
      removeFromCart.forEach((item) => {
        removeProduct(item.id);
      });
    }

    setAmount(
      cart.reduce((total, item) => total + item.price * item.quantity, 0)
    );
  }, [cart, removeProduct]);

  const _cartList = () => {
    return cart.map((product) => (
      <CartRow key={`${product.id}`} data={product} />
    ));
  };

  return (
    <CartContainer isMobile={isMobile}>
      <CartRowsContainer isMobile={isMobile}>{_cartList()}</CartRowsContainer>
      <CartFooter>
        <TotalAmountWrapper>
          <span>Total Amount</span> <TotalAmount>{`${amount}€`}</TotalAmount>
        </TotalAmountWrapper>
        <CheckoutButton type={"submit"}>Checkout</CheckoutButton>
      </CartFooter>
    </CartContainer>
  );
}

const CartView = withHeader(Cart, { pageName: pageNames.CART });
export default CartView;
