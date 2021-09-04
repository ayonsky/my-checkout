import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { RiArrowLeftSLine } from "react-icons/ri";
import { useMediaQuery } from "react-responsive";
import {
  CartIconBadge,
  NavBarCenter,
  NavBarContainer,
  NavBarIcon,
} from "./NavBar.style";
import { pageNames } from "../../utils/constants";
import useCart from "../../hooks/useCart";

function NavBar(props) {
  const { cart } = useCart();
  const [badge, setBadge] = useState(0);
  const isMobile = useMediaQuery({ query: `(max-width: 760px)` });
  const { pageName = "" } = props;
  const isHomePage = pageName === pageNames.PRODUCT_LIST;

  useEffect(() => {
    setBadge(handleTotalCartItems(cart));
  }, [cart]);

  const handleTotalCartItems = (cart) => {
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    return totalItems;
  };
  return (
    <NavBarContainer isMobile={isMobile}>
      <NavBarIcon>
        {isMobile && !isHomePage && (
          <Link to="/">
            <RiArrowLeftSLine size={30} />
          </Link>
        )}
      </NavBarIcon>
      <NavBarCenter>{pageName}</NavBarCenter>
      <NavBarIcon>
        {isMobile && isHomePage && (
          <Link to="/cart">
            {badge > 0 && <CartIconBadge>{badge}</CartIconBadge>}
            <FaShoppingCart size={20} />
          </Link>
        )}
      </NavBarIcon>
    </NavBarContainer>
  );
}

export default NavBar;
