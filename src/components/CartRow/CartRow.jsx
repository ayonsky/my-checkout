import React from "react";
import useProducts from "../../hooks/useProducts";
import { ItemTitle } from "../Item/Item.style";
import {
  CartRowBody,
  CartRowContainer,
  CartRowCounterButton,
  CartRowCounterInput,
  CartRowImg,
  CartRowImgContainer,
  CartRowPrice,
} from "./CartRow.style";

function CartRow({ data }) {
  const { updateProduct, removeProduct } = useProducts();
  const { image_url, stock, productName, price, quantity = 1 } = data;

  const handleCounter = (action, product) => {
    const productToUpdate = product;
    if (action === "increment" && stock > 0) {
      productToUpdate.quantity += 1;
      productToUpdate.stock -= 1;
      updateProduct(productToUpdate);
    } else if (action === "decrement" && quantity > 0) {
      productToUpdate.quantity -= 1;
      productToUpdate.stock += 1;
      updateProduct(productToUpdate);

      if (productToUpdate.quantity === 0) {
        removeProduct(productToUpdate.id);
      }
    }
  };

  return (
    <CartRowContainer>
      <CartRowImgContainer>
        <CartRowImg src={image_url} alt={""} />
      </CartRowImgContainer>
      <CartRowBody>
        <ItemTitle>{productName}</ItemTitle>
        <div className="cart-row__container__body__counter">
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
