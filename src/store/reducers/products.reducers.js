import {
  LOAD_MORE_PRODUCTS,
  LOAD_MORE_PRODUCTS_ERROR,
  LOAD_MORE_PRODUCTS_SUCCESS,
  LOAD_PRODUCTS,
  LOAD_PRODUCTS_ERROR,
  LOAD_PRODUCTS_SUCCESS,
  UPDATE_PRODUCT,
  UPDATE_PRODUCT_ERROR,
  UPDATE_PRODUCT_SUCCESS,
} from "../actions/products.actions";

let initialState = {
  loading: false,
  data: [],
  error: null,
};

export const productsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOAD_PRODUCTS:
      return { ...state, loading: true, error: null };
    case LOAD_PRODUCTS_SUCCESS:
      return { ...state, loading: false, data: payload };
    case LOAD_PRODUCTS_ERROR:
      return { ...state, loading: false, error: payload };
    case LOAD_MORE_PRODUCTS:
      return { ...state, loading: true, error: null };
    case LOAD_MORE_PRODUCTS_SUCCESS:
      return { ...state, loading: false, data: [...state.data, ...payload] };
    case LOAD_MORE_PRODUCTS_ERROR:
      return { ...state, loading: false, error: payload };
    case UPDATE_PRODUCT:
      return { ...state, loading: true, error: null };
    case UPDATE_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        data: state.data.map((product) =>
          product.id === payload.id ? payload : product
        ),
      };
    case UPDATE_PRODUCT_ERROR:
      return { ...state, loading: false, error: payload };
    default:
      return state;
  }
};
