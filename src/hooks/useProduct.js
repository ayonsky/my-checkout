import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  loadFavoriteProductsAction,
  loadMoreProductsAction,
  loadProductsAction,
  updateProductAction,
} from "../store";

/** Custom hook for accessing "Product" state from redux store */
function useProduct() {
  const dispatch = useDispatch();

  return {
    // Selectors
    loading: useSelector((state) => state.products.loading),
    products: useSelector((state) => state.products.data),
    // Dispatchers
    getProducts: useCallback(() => dispatch(loadProductsAction()), [dispatch]),
    getMoreProducts: (page) => dispatch(loadMoreProductsAction(page)),
    getFavoriteProducts: useCallback(
      () => dispatch(loadFavoriteProductsAction()),
      [dispatch]
    ),
    updateProduct: (product) => dispatch(updateProductAction(product)),
  };
}

export default useProduct;
