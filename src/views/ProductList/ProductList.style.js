import styled from "styled-components/macro";

export const ProductListLayoutContainer = styled.div`
  display: flex;
  height: 100vh;
`;

export const ProductListContainer = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  gap: 25px;
  height: 100vh;
  overflow-y: auto;
  justify-content: space-around;
  padding: ${({ isMobile }) => (isMobile ? `10px` : `30px`)};

  ${({ isMobile }) => !isMobile && `border-right: solid rgb(0 0 0 / 8%);`}

  &:after {
    content: "";
    flex: auto;
  }
`;
