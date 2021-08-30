export const ADD_PRODUCT_TO_CART = "ADD_PRODUCT_TO_CART";
export const ADD_PRODUCT_TO_CART_SUCCESS = "ADD_PRODUCT_TO_CART_SUCCESS";
export const ADD_PRODUCT_TO_CART_ERROR = "ADD_PRODUCT_TO_CART_ERROR";

export const UPDATE_CART_PRODUCT = "UPDATE_CART_PRODUCT";
export const UPDATE_CART_PRODUCT_SUCCESS = "UPDATE_CART_PRODUCT_SUCCESS";
export const UPDATE_CART_PRODUCT_ERROR = "UPDATE_CART_PRODUCT_ERROR";

export const addProductToCartAction = (product) => ({
    type: ADD_PRODUCT_TO_CART,
    payload: product,
});
export const updateCartProductAction = () => ({ type: UPDATE_CART_PRODUCT });
