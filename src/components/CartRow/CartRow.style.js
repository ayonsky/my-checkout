import styled from "styled-components";
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
