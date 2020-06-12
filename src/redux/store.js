import { createStore, applyMiddleware } from "redux";
import { reducerFunction } from "./reducers";
import logger from "redux-logger";

const store = createStore(reducerFunction, applyMiddleware(logger));

export default store;
