import styled from "styled-components/macro";

export const ProductListLayoutContainer = styled.div`
  display: flex;
  height: 100vh;
`;

export const ProductListWrapper = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  gap: 25px;
  height: 100vh;
  overflow-y: auto;
  justify-content: space-around;
  padding: ${({ isMobile }) => (isMobile ? `10px` : `30px`)};

  &:after {
    content: "";
    flex: auto;
  }
`;

export const ProductListContainer = styled.div`
  ${({ isMobile }) => !isMobile && `border-right: solid rgb(0 0 0 / 8%);`}
`;
