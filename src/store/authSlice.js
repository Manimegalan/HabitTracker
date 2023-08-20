import { createSlice } from "@reduxjs/toolkit";
import { loginAsync } from "../api/auth";

const initialState = {
  isLoading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(loginAsync.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(loginAsync.fulfilled, (state, action) => {
      state.isLoading = false;
    });
    builder.addCase(loginAsync.rejected, (state, action) => {
      state.isLoading = false;
    });
  },
});

export default authSlice.reducer;
