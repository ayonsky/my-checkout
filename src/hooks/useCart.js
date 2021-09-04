import { useDispatch, useSelector } from "react-redux";
import {
  addProductToCartAction,
  removeProductFromCartAction,
  updateCartProductAction,
} from "../store";

/** Custom hook for accessing "Cart" state from redux store */
function useCart() {
  const dispatch = useDispatch();

  return {
    // Selectors
    loading: useSelector((state) => state.cart.loading),
    cart: useSelector((state) => state.cart.data),
    // Dispatchers
    addProduct: (product) => dispatch(addProductToCartAction(product)),
    updateCartProduct: (product) => dispatch(updateCartProductAction(product)),
    removeProduct: (id) => dispatch(removeProductFromCartAction(id)),
  };
}

export default useCart;
