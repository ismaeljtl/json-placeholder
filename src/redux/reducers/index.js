import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import userReducer from "./userReducer";
import postReducer from "./postReducer";
import commentReducer from "./commentReducer";

const rootReducer = combineReducers({
  userReducer,
  postReducer,
  commentReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancer(applyMiddleware(thunk)));
export default store;
