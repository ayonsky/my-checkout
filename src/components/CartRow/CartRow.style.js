import styled from "styled-components/macro";
import { VerticalCenter } from "../../App.style";

export const CartRowContainer = styled.div`
  margin: 20px 20px 0px 0px;
  min-width: 300px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const CartRowImgContainer = styled.div`
  width: 100px;
`;

export const CartRowImg = styled.img`
  width: 100%;
  border-radius: 6px;
`;

export const CartRowBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 5px 40px 10px 0px;
`;

export const CartRowPrice = styled.div`
  ${VerticalCenter}
  color: cornflowerblue;
`;

export const CartRowCounterButton = styled.button`
  text-align: center;
  font-size: 18px;
  color: grey;
  width: 25px;
  height: 25px;
  border: none;
  background-color: transparent;
  border-top: 1px solid gainsboro;
  border-bottom: 1px solid gainsboro;
  cursor: pointer;

  ${({ counter }) =>
    counter === "decrement"
      ? `border-left: 1px solid gainsboro`
      : `border-right: 1px solid gainsboro;`};
`;

export const CartRowCounterInput = styled.input`
  width: 20px;
  text-align: center;
  font-size: 18px;
  font-weight: 300;
  color: grey;
  height: 23px;
  outline: none;
  border: none;
  border-top: 1px solid gainsboro;
  border-bottom: 1px solid gainsboro;
`;
