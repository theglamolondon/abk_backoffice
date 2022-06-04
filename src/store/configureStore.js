import rootReducers from './index';
import { configureStore } from "@reduxjs/toolkit";
import { connectRouter } from "connected-react-router";
import { combineReducers } from "redux";
import { createBrowserHistory } from "history";

export const history = createBrowserHistory();

const createRootReducer = (history) => combineReducers({
  ...rootReducers,
  router : connectRouter(history)
});

const store = configureStore({
  reducer : createRootReducer(history)
})

export default store