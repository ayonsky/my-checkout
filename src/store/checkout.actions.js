export const LOAD_PRODUCTS = "LOAD_PRODUCTS";
export const LOAD_PRODUCTS_SUCCESS = "LOAD_PRODUCTS_SUCCESS";
export const LOAD_PRODUCTS_ERROR = "LOAD_PRODUCTS_ERROR";

export const UPDATE_PRODUCT = "UPDATE_PRODUCT";
export const UPDATE_PRODUCT_SUCCESS = "UPDATE_PRODUCT_SUCCESS";
export const UPDATE_PRODUCT_ERROR = "UPDATE_PRODUCT_ERROR";

export const loadProductsAction = () => ({ type: LOAD_PRODUCTS });
export const updateProductAction = (product) => ({
  type: UPDATE_PRODUCT,
  payload: product,
});
