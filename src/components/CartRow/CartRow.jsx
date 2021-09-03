import React from "react";
import useProducts from "../../hooks/useProducts";
import Counter from "../Counter/Counter";
import {
  CartRowBody,
  CartRowContainer,
  CartRowImg,
  CartRowImgContainer,
  CartRowPrice,
  CartRowTitle,
} from "./CartRow.style";

function CartRow({ data }) {
  const { updateCartProduct } = useProducts();

  const { image_url, stock, productName, price, quantity = 1 } = data;

  const counterOnChange = (counter) => {
    const productToUpdate = data;

    if (counter > quantity && stock > 0) {
      productToUpdate.quantity = counter;
      productToUpdate.stock -= 1;
      updateCartProduct(productToUpdate);
    } else if (counter < quantity && quantity > 0) {
      productToUpdate.quantity = counter;
      productToUpdate.stock += 1;
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
