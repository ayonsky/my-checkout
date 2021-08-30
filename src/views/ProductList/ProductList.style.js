import styled from "styled-components/macro";

export const ProductListLayoutContainer = styled.div`
  display: flex;
  height: 100vh;
`;

export const ProductListWrapper = styled.div`
  height: 100vh;
  overflow-y: auto;
  padding: ${({ isMobile }) => (isMobile ? `10px` : `30px`)};
`;

export const ProductListContainer = styled.div`
  ${({ isMobile }) => !isMobile && `border-right: solid rgb(0 0 0 / 8%);`}
`;

export const ProductListFlexDiv = styled.div`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 25px;
`;
