import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { API_URL } from "../../utils/api";
import axios from "axios";
import Cookies from "universal-cookie";
const cookies = new Cookies();

const token=cookies.get("token")

export const GetContact = createAsyncThunk("contact/get", async () => {
  return await axios.get(`${API_URL}/form`).then((response) => response.data);
});
export const PostContact = createAsyncThunk("contact/post", async (body) => {
  return await axios.post(`${API_URL}/cform`, body,{
    headers:{
     token:token
    }
  }).then((res) => res);
});
export const DeleteContact = createAsyncThunk("contact/delete", async (id) => {
  return await axios
    .delete(`${API_URL}/form/${id}`,{
      headers:{
       token:token
      }
    })
    .then((response) => response.data);
});

const ContactSlice = createSlice({
  name: "Form",
  initialState: {
    getContact: {
      Error: false,
      Loading: false,
      Success: false,
      Data: [],
    },
    postContact: {
      Error: false,
      Loading: false,
      Success: false,
    },
    deleteContact: {
      Success: false,
      Error: false,
      loading: false,
    },
  },
  extraReducers: {
    [GetContact.pending]: (state, action) => {
      state.getContact.loading = true;
    },
    [GetContact.fulfilled]: (state, action) => {
      state.getContact.Error = false;
      state.getContact.Success = true;
      state.getContact.Loading = false;
      state.getContact.Data = action.payload;
    },
    [GetContact.rejected]: (state, action) => {
      state.getContact.Error = true;
      state.getContact.Success = false;
      state.getContact.Loading = false;
      state.getContact.Data = [];
    },
    [PostContact.pending]: (state, action) => {
      state.postContact.loading = true;
    },
    [PostContact.fulfilled]: (state, action) => {
      state.postContact.Error = false;
      state.postContact.Success = true;
      state.postContact.Loading = false;
    },
    [PostContact.rejected]: (state, action) => {
      state.postContact.Error = true;
      state.postContact.Success = false;
      state.postContact.Loading = false;
    },
    // delete
    [DeleteContact.pending]: (state, action) => {
      state.deleteContact.loadingDelete = true;
    },
    [DeleteContact.fulfilled]: (state, action) => {
      state.deleteContact.loading = false;
      state.deleteContact.Success = true;
      state.deleteContact.Error = false;
    },
    [DeleteContact.rejected]: (state, action) => {
      state.deleteContact.loading = false;
      state.deleteContact.Error = true;
      state.deleteContact.Success = false;
    },
  },
});

export const {} = ContactSlice.actions;
export default ContactSlice.reducer;
