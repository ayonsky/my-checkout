import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { RiArrowLeftSLine } from "react-icons/ri";
import { useMediaQuery } from "react-responsive";
import {
  NavBarCenter,
  NavBarContainer,
  NavBarLeft,
  NavBarRight,
} from "./NavBar.style";
import { pageNames } from "../../utils/constants";

function NavBar(props) {
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });
  const { pageName = "" } = props;
  const isHomePage = pageName === pageNames.PRODUCT_LIST;
  return (
    <NavBarContainer isMobile={isMobile}>
      {isMobile && !isHomePage && (
        <NavBarLeft>
          <Link to="/">
            <RiArrowLeftSLine size={30} />
          </Link>
        </NavBarLeft>
      )}
      <NavBarCenter>{pageName}</NavBarCenter>
      {isMobile && isHomePage && (
        <NavBarRight>
          <Link to="/cart">
            <FaShoppingCart size={20} />
          </Link>
        </NavBarRight>
      )}
    </NavBarContainer>
  );
}

export default NavBar;
