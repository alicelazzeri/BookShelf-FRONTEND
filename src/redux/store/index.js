import { combineReducers, configureStore } from "@reduxjs/toolkit";
import loadingReducer from "../reducers/loadingReducer";
import userReducer from "../reducers/userReducer";
import bookReducer from "../reducers/bookReducer";

const rootReducer = combineReducers({
  loading: loadingReducer,
  user: userReducer,
  books: bookReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
