import { put, takeEvery, call, all } from "redux-saga/effects";
import {
  updateProductAPI,
} from "../api/products.api";
import {
  ADD_PRODUCT_TO_CART,
  ADD_PRODUCT_TO_CART_ERROR,
  ADD_PRODUCT_TO_CART_SUCCESS,
  REMOVE_PRODUCT_FROM_CART,
  REMOVE_PRODUCT_FROM_CART_ERROR,
  REMOVE_PRODUCT_FROM_CART_SUCCESS,
  UPDATE_CART_PRODUCT,
  UPDATE_CART_PRODUCT_ERROR,
  UPDATE_CART_PRODUCT_SUCCESS,
} from "../actions/cart.actions";
import {
  UPDATE_PRODUCT_SUCCESS,
} from "../actions/products.actions";

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

export function* removingProductFromCartAsync({ payload }) {
  try {
    yield put({ type: REMOVE_PRODUCT_FROM_CART_SUCCESS, payload });
  } catch (err) {
    yield put({ type: REMOVE_PRODUCT_FROM_CART_ERROR, payload: err });
  }
}

export function* watchRemovingProductFromCartAsync() {
  yield takeEvery(REMOVE_PRODUCT_FROM_CART, removingProductFromCartAsync);
}

export function* updatingCartProductAsync({ payload }) {
  try {
    const cartProduct = { ...payload };

    delete payload.quantity;

    const data = yield call(updateProductAPI, payload);
    const updatedProduct = data;
    yield put({ type: UPDATE_PRODUCT_SUCCESS, payload: updatedProduct });
    yield put({ type: UPDATE_CART_PRODUCT_SUCCESS, payload: cartProduct });
  } catch (err) {
    yield put({ type: UPDATE_CART_PRODUCT_ERROR, payload: err });
  }
}

export function* watchUpdatingCartProductAsync() {
  yield takeEvery(UPDATE_CART_PRODUCT, updatingCartProductAsync);
}

export function* cartSaga() {
  yield all([
    watchAddingProductToCartAsync(),
    watchRemovingProductFromCartAsync(),
    watchUpdatingCartProductAsync(),
  ]);
}
