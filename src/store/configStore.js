import { applyMiddleware, compose, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";
import reducers, { cartSaga, productsSaga } from "./";

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

middlewares.push(logger);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const newStore = createStore(
  reducers,
  composeEnhancers(applyMiddleware(...middlewares))
);

sagaMiddleware.run(productsSaga);
sagaMiddleware.run(cartSaga);

export default newStore;
