import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: {},
    authorization:''
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    authorizationState:(state,action)=>{
        state.authorization = action.payload.payload;
    },
    logout: (state, action) => {
      state.user = {};
    },
  },
});

export const { login } = authSlice.actions;
export const { authorizationState } = authSlice.actions;
export const { logout } = authSlice.actions;

export default authSlice.reducer;
