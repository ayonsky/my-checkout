import styled from "styled-components";
import { VerticalCenter } from "../../App.style";

export const NavBarContainer = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: ${({ isMobile }) => (isMobile ? "space-between" : "center")};
  padding: 20px;

  ${({ isMobile }) => !isMobile && `border-right: solid rgb(0 0 0 / 8%);`}
`;

export const NavBarLeft = styled.div`
  ${VerticalCenter}
`;

export const NavBarCenter = styled.div`
  ${VerticalCenter}
  font-weight: 400;
  font-size: 2em;
`;

export const NavBarRight = styled.div`
  ${VerticalCenter}
`;
