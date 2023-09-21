import { createAction, createSlice } from "@reduxjs/toolkit";
import { ACCESS_TOKEN_KEY } from "../../config";

const initialState = {
  user: null,
  accessToken: localStorage.getItem(ACCESS_TOKEN_KEY) || null,
};

const slice = createSlice({
  name: "user",
  initialState,
  reducers: {
    authSuccess: (state, { payload }) => {
      const { accessToken, user } = payload;
      localStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
      state.accessToken = accessToken;
      state.user = user;
    },
    getAuthenticatedUser: (state, { payload }) => {
      state.user = payload;
    },
    logout: (state) => {
      localStorage.removeItem(ACCESS_TOKEN_KEY);
      state.accessToken = null;
      state.user = null;
    },
  },
});

const userReducer = slice.reducer;
const userActions = slice.actions;

export { userActions };

export default userReducer;
