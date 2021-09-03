import styled from "styled-components/macro";
import { VerticalCenter } from "../../App.style";
import { ItemTitle } from "../Item/Item.style";

export const CartRowContainer = styled.div`
  margin: 20px 20px 0px 0px;
  min-width: 300px;
  display: flex;
  flex-direction: row;
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
  margin: 5px 40px 10px 10px;
`;

export const CartRowPrice = styled.div`
  ${VerticalCenter}
  color: cornflowerblue;
`;

export const CartRowTitle = styled(ItemTitle)`
  width: 150px;
`;
