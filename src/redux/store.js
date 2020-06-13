import { createStore } from "redux";
import { reducerFunction } from "./reducers";

const store = createStore(reducerFunction);

export default store;
