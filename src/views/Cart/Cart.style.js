import styled from "styled-components/macro";

export const CartContainer = styled.div`
  display: flex;
  flex-flow: column;
  height: 100vh;
  overflow-y: auto;
  padding-left: 20px;
  min-width: 370px;
`;

export const CartRowsContainer = styled.div`
  flex: 1;
  overflow-y: auto;
`;

export const CartFooter = styled.div`
  display: flex;
  margin: 20px;
  justify-content: center;
`;
