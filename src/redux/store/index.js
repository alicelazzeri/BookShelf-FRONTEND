import { combineReducers, configureStore } from "@reduxjs/toolkit";
import loadingReducer from "../reducers/loadingReducer";

const rootReducer = combineReducers({
  loading: loadingReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
