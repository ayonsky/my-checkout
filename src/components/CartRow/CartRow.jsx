import React from "react";
import useProducts from "../../hooks/useProducts";
import {
  CartRowBody,
  CartRowContainer,
  CartRowCounterButton,
  CartRowCounterInput,
  CartRowImg,
  CartRowImgContainer,
  CartRowPrice,
  CartRowTitle,
} from "./CartRow.style";

function CartRow({ data }) {
  const { updateCartProduct } = useProducts();
  const { image_url, stock, productName, price, quantity = 1 } = data;

  const handleCounter = (action, product) => {
    const productToUpdate = product;
    if (action === "increment" && stock > 0) {
      productToUpdate.quantity += 1;
      productToUpdate.stock -= 1;
      updateCartProduct(productToUpdate);
    } else if (action === "decrement" && quantity > 0) {
      productToUpdate.quantity -= 1;
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
        <div>
          <CartRowCounterButton
            counter={"decrement"}
            stock={stock}
            quantity={quantity}
            onClick={(e) => {
              e.stopPropagation();
              handleCounter("decrement", data);
            }}
          >
            -
          </CartRowCounterButton>
          <CartRowCounterInput
            type={"text"}
            value={quantity}
            onChange={() => {}}
            style={{ width: "20px" }}
          />
          <CartRowCounterButton
            counter={"increment"}
            stock={stock}
            quantity={quantity}
            onClick={(e) => {
              e.stopPropagation();
              handleCounter("increment", data);
            }}
          >
            +
          </CartRowCounterButton>
        </div>
      </CartRowBody>
      <CartRowPrice>{`${price * quantity}€`}</CartRowPrice>
    </CartRowContainer>
  );
}

export default CartRow;
