import {
  ADD_PRODUCT_TO_CART,
  ADD_PRODUCT_TO_CART_ERROR,
  ADD_PRODUCT_TO_CART_SUCCESS,
  UPDATE_CART_PRODUCT,
  UPDATE_CART_PRODUCT_ERROR,
  UPDATE_CART_PRODUCT_SUCCESS,
} from "./cart.actions";

let initialState = {
  loading: false,
  data: [],
  error: null,
};

export const cartReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_PRODUCT_TO_CART:
      return { ...state, loading: true, error: null };
    case ADD_PRODUCT_TO_CART_SUCCESS: {
      const existInCart = state.data.find(
        (product) => product.id === payload.id
      );
      return {
        ...state,
        loading: false,
        data: existInCart
          ? state.data.map((product) => {
              if (product.id === existInCart.id) {
                product.quantity += 1;
                product.stock = existInCart.stock;
              }
              return product;
            })
          : [...state.data, payload],
      };
    }
    case ADD_PRODUCT_TO_CART_ERROR:
      return { ...state, loading: false, error: payload };
    case UPDATE_CART_PRODUCT:
      return {};
    case UPDATE_CART_PRODUCT_SUCCESS:
      return {};
    case UPDATE_CART_PRODUCT_ERROR:
      return {};
    default:
      return state;
  }
};
