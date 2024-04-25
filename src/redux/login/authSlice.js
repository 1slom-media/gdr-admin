import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Cookies from "universal-cookie";
const cookies = new Cookies();
let initialState = {
  verifyCodeSuccess: "",
  Success: false,
  Error: false,
  loading: false,
};
export let adminAuth = createAsyncThunk("admin", async (body) => {
  const res = await axios.post("https://api.gdr-product.uz/login", body);
  console.log(res);
  return {
    verifyCodeSuccess: res.data?.token,
  };
});
let authSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    token: (state, action) => {
      state.verifyCodeSuccess = cookies.get("token");
    },
  },
  extraReducers: {
    [adminAuth.pending]: (state, action) => {
      state.loading = true;
    },
    [adminAuth.fulfilled]: (state, action) => {
      state.loading = false;
      state.Success = true;
      state.verifyCodeSuccess = cookies.set(
        "token",
        action.payload.verifyCodeSuccess
      );
    },
    [adminAuth.rejected]: (state, action) => {
      state.loading = true;
      state.Error = true;
    },
  },
});

export const { addToken } = authSlice.actions;
export default authSlice.reducer;
