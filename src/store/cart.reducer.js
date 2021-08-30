import {
  ADD_PRODUCT_TO_CART,
  ADD_PRODUCT_TO_CART_ERROR,
  ADD_PRODUCT_TO_CART_SUCCESS,
  REMOVE_PRODUCT_FROM_CART,
  REMOVE_PRODUCT_FROM_CART_ERROR,
  REMOVE_PRODUCT_FROM_CART_SUCCESS,
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
              if (product.id === payload.id) {
                product.quantity += 1;
                product.stock = payload.stock;
              }
              return product;
            })
          : [...state.data, payload],
      };
    }
    case ADD_PRODUCT_TO_CART_ERROR:
      return { ...state, loading: false, error: payload };
    case REMOVE_PRODUCT_FROM_CART:
      return { ...state, loading: true, error: null };
    case REMOVE_PRODUCT_FROM_CART_SUCCESS:
      return {
        ...state,
        loading: false,
        data: state.data.filter((product) => product.id !== payload),
      };
    case REMOVE_PRODUCT_FROM_CART_ERROR:
      return { ...state, loading: false, error: payload };
    default:
      return state;
  }
};
