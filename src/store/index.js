import { combineReducers } from 'redux';
import { cartReducer } from './cart.reducer';
import { checkoutReducer } from './checkout.reducers';

export * from './checkout.actions';
export * from './checkout.reducers';
export * from './cart.actions';
export * from './cart.reducer';
export * from './store.saga';

const store = combineReducers({
  checkout: checkoutReducer,
  cart: cartReducer
});

export default store;