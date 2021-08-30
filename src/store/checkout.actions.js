export const LOAD_FAVORITE_PRODUCTS = "LOAD_FAVORITE_PRODUCTS";
export const LOAD_PRODUCTS = "LOAD_PRODUCTS";
export const LOAD_PRODUCTS_SUCCESS = "LOAD_PRODUCTS_SUCCESS";
export const LOAD_PRODUCTS_ERROR = "LOAD_PRODUCTS_ERROR";

export const LOAD_MORE_PRODUCTS = "LOAD_MORE_PRODUCTS";
export const LOAD_MORE_PRODUCTS_SUCCESS = "LOAD_MORE_PRODUCTS_SUCCESS";
export const LOAD_MORE_PRODUCTS_ERROR = "LOAD_MORE_PRODUCTS_ERROR";

export const UPDATE_PRODUCT = "UPDATE_PRODUCT";
export const UPDATE_PRODUCT_SUCCESS = "UPDATE_PRODUCT_SUCCESS";
export const UPDATE_PRODUCT_ERROR = "UPDATE_PRODUCT_ERROR";

export const loadProductsAction = () => ({ type: LOAD_PRODUCTS });

export const loadFavoriteProductsAction = () => ({
  type: LOAD_FAVORITE_PRODUCTS,
});

export const loadMoreProductsAction = (list) => ({
  type: LOAD_MORE_PRODUCTS,
  payload: list,
});

export const updateProductAction = (product) => ({
  type: UPDATE_PRODUCT,
  payload: product,
});
