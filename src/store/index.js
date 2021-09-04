import { combineReducers } from 'redux';
import { cartReducer } from './reducers/cart.reducer';
import { productsReducer } from './reducers/products.reducers';

export * from './actions/products.actions';
export * from './reducers/products.reducers';
export * from './actions/cart.actions';
export * from './reducers/cart.reducer';
export * from './sagas/cart.saga';
export * from './sagas/products.saga'

const store = combineReducers({
  products: productsReducer,
  cart: cartReducer
});

export default store;