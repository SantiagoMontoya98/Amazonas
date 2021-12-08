import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { reducerLogin } from "../reducers/reducerLogin";
import { reducerProducts } from "../reducers/reducerProducts";
import { reducerRegister } from "../reducers/reducerRegister";

const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const reducers = combineReducers({
  products: reducerProducts,
  userRegister: reducerRegister,
  userLogin: reducerLogin,
});

export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thunk))
);
