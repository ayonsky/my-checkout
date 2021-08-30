import styled from "styled-components/macro";
import { VerticalCenter } from "../../App.style";

export const ItemContainer = styled.div`
  box-shadow: -10px 8px 25px rgb(0 0 0 / 8%);
  transition: 0.3s;
  width: 165px;
  border-radius: 10px;
  cursor: pointer;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  height: 262px;
`;

export const ItemImg = styled.img`
  width: 100%;
  border-radius: 10px 10px 0px 0px;
  display: inline-block;
  z-index: 1;
`;

export const ImageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  position: relative;
`;

export const ItemFavorite = styled.div`
  display: inline-block;
  position: absolute;
  z-index: 3;
  top: 10px;
  right: 10px;
`;

export const ContentWrapper = styled.div`
  padding: 10px;
`;

export const ItemTitle = styled.div`
  font-weight: 400;
  font-size: 14px;
  margin-bottom: 5px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

export const ItemDesc = styled.div`
  font-size: 12px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  margin-top: 5px;
`;

export const ItemBottomContent = styled.div`
  ${VerticalCenter}
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  padding: 0px 10px 10px 10px;
`;

export const ItemTopContent = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: space-between;
`;

export const ItemPrice = styled.div`
  color: cornflowerblue;
`;

export const ItemStock = styled.div`
  color: orangered;
  font-size: 14px;
`;
