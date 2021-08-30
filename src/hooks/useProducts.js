import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  addProductToCartAction,
  loadFavoriteProductsAction,
  loadMoreProductsAction,
  loadProductsAction,
  removeProductFromCartAction,
  updateCartProductAction,
  updateProductAction,
} from "../store";

/** Custom hook for accessing redux store */
function useProducts() {
  const dispatch = useDispatch();

  return {
    // Selectors
    loading: useSelector(
      (state) => state.checkout.loading || state.cart.loading
    ),
    products: useSelector((state) => state.checkout.data),
    cart: useSelector((state) => state.cart.data),
    // Dispatchers
    getProducts: useCallback(() => dispatch(loadProductsAction()), [dispatch]),
    getMoreProducts: (page) => dispatch(loadMoreProductsAction(page)),
    getFavoriteProducts: useCallback(
      () => dispatch(loadFavoriteProductsAction()),
      [dispatch]
    ),
    addProduct: (product) => dispatch(addProductToCartAction(product)),
    updateProduct: (product) => dispatch(updateProductAction(product)),
    updateCartProduct: (product) => dispatch(updateCartProductAction(product)),
    removeProduct: (id) => dispatch(removeProductFromCartAction(id)),
  };
}

export default useProducts;
