import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import { PayloadAction } from "@reduxjs/toolkit";

const appReducer = combineReducers({
  user: userReducer,
});

const rootReducer = (
  state: ReturnType<typeof appReducer>,
  action: PayloadAction
) => {
  return appReducer(state, action);
};

const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = (typeof store)["dispatch"];
export type AppState = ReturnType<typeof appReducer>;

export default store;
