import styled from "styled-components/macro";

export const CartContainer = styled.div`
  display: flex;
  flex-flow: column;
  height: 100vh;
  overflow-y: auto;
  min-width: 370px;

  ${({ isMobile }) => !isMobile && `padding-left: 20px`};
`;

export const CartRowsContainer = styled.div`
  flex: 1;
  overflow-y: auto;

  ${({ isMobile }) => isMobile && `padding: 10px`};
`;

export const CartFooter = styled.div`
  display: flex;
  margin: 20px;
  justify-content: center;
  flex-flow: column;
`;

export const TotalAmountWrapper = styled.div`
  margin-bottom: 50px;
  margin-left: 50px;
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  font-size: 18px;
  font-weight: 500;
`;

export const TotalAmount = styled.a`
  background: linear-gradient(
    90deg,
    rgba(232, 221, 17, 1) 0%,
    rgba(205, 182, 10, 1) 0%,
    rgba(242, 162, 16, 1) 0%,
    rgba(222, 138, 57, 1) 94%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 600;
`;
