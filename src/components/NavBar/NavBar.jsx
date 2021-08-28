import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { RiArrowLeftSLine } from "react-icons/ri";
import { useMediaQuery } from "react-responsive";
import {
  NavBarCenter,
  NavBarContainer,
  NavBarLeft,
  NavBarRight,
} from "./NavBar.style";

function NavBar(props) {
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });
  const { pageName = "" } = props;
  return (
    <NavBarContainer isMobile={isMobile}>
      {isMobile && (
        <NavBarLeft>
          <RiArrowLeftSLine size={30} />
        </NavBarLeft>
      )}
      <NavBarCenter>{pageName}</NavBarCenter>
      {isMobile && (
        <NavBarRight>
          <FaShoppingCart size={20} />
        </NavBarRight>
      )}
    </NavBarContainer>
  );
}

export default NavBar;
