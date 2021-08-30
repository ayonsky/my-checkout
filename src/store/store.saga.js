import { put, takeEvery, call, all } from "redux-saga/effects";
import { loadProductsAPI, updateProductAPI } from "./api/checkout.api";
import {
  ADD_PRODUCT_TO_CART,
  ADD_PRODUCT_TO_CART_ERROR,
  ADD_PRODUCT_TO_CART_SUCCESS,
} from "./cart.actions";
import {
  LOAD_PRODUCTS,
  LOAD_PRODUCTS_ERROR,
  LOAD_PRODUCTS_SUCCESS,
  UPDATE_PRODUCT,
  UPDATE_PRODUCT_ERROR,
  UPDATE_PRODUCT_SUCCESS,
} from "./checkout.actions";

export function* loadingProductAsync() {
  try {
    const data = yield call(loadProductsAPI);
    const products = [...data];

    yield put({ type: LOAD_PRODUCTS_SUCCESS, payload: products });
  } catch (err) {
    yield put({ type: LOAD_PRODUCTS_ERROR, payload: err });
  }
}

export function* watchLoadingProductsAsync() {
  yield takeEvery(LOAD_PRODUCTS, loadingProductAsync);
}

export function* updatingProductAsync({ payload }) {
  try {
    const data = yield call(updateProductAPI, payload);
    const updatedProduct = data;
    yield put({ type: UPDATE_PRODUCT_SUCCESS, payload: updatedProduct });
  } catch (err) {
    yield put({ type: UPDATE_PRODUCT_ERROR, payload: err });
  }
}

export function* watchUpdatingProductAsync() {
  yield takeEvery(UPDATE_PRODUCT, updatingProductAsync);
}

export function* addingProductToCartAsync({ payload }) {
  try {
    const data = yield call(updateProductAPI, payload);
    const updatedProduct = data;
    yield put({ type: UPDATE_PRODUCT_SUCCESS, payload: updatedProduct });
    yield put({ type: ADD_PRODUCT_TO_CART_SUCCESS, payload: updatedProduct });
  } catch (err) {
    yield put({ type: ADD_PRODUCT_TO_CART_ERROR, payload: err });
  }
}

export function* watchAddingProductToCartAsync() {
  yield takeEvery(ADD_PRODUCT_TO_CART, addingProductToCartAsync);
}

export function* storeSaga() {
  yield all([
    watchLoadingProductsAsync(),
    watchUpdatingProductAsync(),
    watchAddingProductToCartAsync(),
  ]);
}
