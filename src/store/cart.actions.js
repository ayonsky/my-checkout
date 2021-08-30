export const ADD_PRODUCT_TO_CART = "ADD_PRODUCT_TO_CART";
export const ADD_PRODUCT_TO_CART_SUCCESS = "ADD_PRODUCT_TO_CART_SUCCESS";
export const ADD_PRODUCT_TO_CART_ERROR = "ADD_PRODUCT_TO_CART_ERROR";

export const REMOVE_PRODUCT_FROM_CART = "REMOVE_PRODUCT_FROM_CART";
export const REMOVE_PRODUCT_FROM_CART_SUCCESS =
  "REMOVE_PRODUCT_FROM_CART_SUCCESS";
export const REMOVE_PRODUCT_FROM_CART_ERROR = "REMOVE_PRODUCT_FROM_CART_ERROR";

export const addProductToCartAction = (product) => ({
  type: ADD_PRODUCT_TO_CART,
  payload: product,
});

export const removeProductFromCartAction = (id) => ({
  type: REMOVE_PRODUCT_FROM_CART,
  payload: id,
});
