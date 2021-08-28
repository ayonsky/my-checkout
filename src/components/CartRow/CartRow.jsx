import React from "react";
import {
  CartRowBody,
  CartRowContainer,
  CartRowImg,
  CartRowImgContainer,
  CartRowPrice,
} from "./CartRow.style";

function CartRow({ data }) {
  const { image_url } = data;
  return (
    <CartRowContainer>
      <CartRowImgContainer>
        <CartRowImg src={image_url} alt={""} />
      </CartRowImgContainer>
      <CartRowBody>
        <div className="cart-row__container__body__title">Lorem Ipsu</div>
        <div className="cart-row__container__body__counter">
          <button>-</button>
          <input type={"text"} value={1} style={{ width: "20px" }} />
          <button>+</button>
        </div>
      </CartRowBody>
      <CartRowPrice>30€</CartRowPrice>
    </CartRowContainer>
  );
}

export default CartRow;
