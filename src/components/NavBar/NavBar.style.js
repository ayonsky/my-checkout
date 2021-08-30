import styled from "styled-components/macro";
import { VerticalCenter } from "../../App.style";

export const NavBarContainer = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: ${({ isMobile }) => (isMobile ? "space-between" : "center")};
  padding: 20px;

  ${({ isMobile }) => !isMobile && `border-right: solid rgb(0 0 0 / 8%);`}
`;

export const NavBarCenter = styled.div`
  ${VerticalCenter}
  font-weight: 400;
  font-size: 2em;
`;

export const NavBarIcon = styled.div`
  ${VerticalCenter}
  position: relative;
`;

export const CartIconBadge = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  font-size: 10px;
  color: #fff;
  text-align: center;
  background: orangered;
  line-height: 15px;
  position: absolute;
  top: 0;
  right: 0;
`;
