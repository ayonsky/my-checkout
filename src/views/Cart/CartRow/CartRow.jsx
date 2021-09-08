import React from "react";
import useCart from "../../../hooks/useCart";
import Counter from "../../../components/Counter/Counter";
import {
  CartRowBody,
  CartRowContainer,
  CartRowImg,
  CartRowImgContainer,
  CartRowPrice,
  CartRowTitle,
} from "./CartRow.style";

function CartRow({ data }) {
  const { updateCartProduct } = useCart();

  const { image_url, stock, productName, price, quantity = 1 } = data;

  const counterOnChange = (counter) => {
    const isIncrementing = counter > quantity;
    const productToUpdate = data;

    productToUpdate.quantity = counter;
    productToUpdate.stock += isIncrementing ? -1 : 1;

    if ((isIncrementing && stock > 0) || (!isIncrementing && quantity > 0)) {
      updateCartProduct(productToUpdate);
    }
  };

  return (
    <CartRowContainer>
      <CartRowImgContainer>
        <CartRowImg src={image_url} alt={""} />
      </CartRowImgContainer>
      <CartRowBody>
        <CartRowTitle>{productName}</CartRowTitle>
        <Counter onChange={counterOnChange} actual={quantity} max={stock} />
      </CartRowBody>
      <CartRowPrice>{`${price * quantity}€`}</CartRowPrice>
    </CartRowContainer>
  );
}

export default CartRow;
