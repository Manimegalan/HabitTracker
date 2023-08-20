// store/authSlice.js
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_BASE_URL = "https://dummyjson.com";

export const loginAsync = createAsyncThunk(
  "auth/login",
  async ({ username, password }) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/auth/login`, {
        username,
        password,
      });
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);
