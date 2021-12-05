import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { authReducer } from "./Auth/reducer";
import Thunk from "redux-thunk";

const rootReducer = combineReducers({
  auth: authReducer,
});

export const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(Thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
