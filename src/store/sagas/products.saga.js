import { put, takeEvery, call, all } from "redux-saga/effects";
import {
  loadFavoriteProductsAPI,
  loadMoreProductsAPI,
  loadProductsAPI,
  updateProductAPI,
} from "../api/products.api";
import {
  LOAD_FAVORITE_PRODUCTS,
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

export function* loadingMoreProductsAsync({ payload }) {
  try {
    const data = yield call(loadMoreProductsAPI, payload);
    const list = [...data];

    yield put({ type: LOAD_MORE_PRODUCTS_SUCCESS, payload: list });
  } catch (err) {
    yield put({ type: LOAD_MORE_PRODUCTS_ERROR, payload: err });
  }
}

export function* watchLoadingMoreProductsAsync() {
  yield takeEvery(LOAD_MORE_PRODUCTS, loadingMoreProductsAsync);
}

export function* loadingFavoriteProductAsync() {
  try {
    const data = yield call(loadFavoriteProductsAPI);
    const products = [...data];

    yield put({ type: LOAD_PRODUCTS_SUCCESS, payload: products });
  } catch (err) {
    yield put({ type: LOAD_PRODUCTS_ERROR, payload: err });
  }
}

export function* watchLoadingFavoriteProductsAsync() {
  yield takeEvery(LOAD_FAVORITE_PRODUCTS, loadingFavoriteProductAsync);
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

export function* productsSaga() {
  yield all([
    watchLoadingProductsAsync(),
    watchUpdatingProductAsync(),
    watchLoadingMoreProductsAsync(),
    watchLoadingFavoriteProductsAsync(),
  ]);
}
