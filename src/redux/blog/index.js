import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { API_URL } from "../../utils/api";
import Cookies from "universal-cookie";
const cookies = new Cookies();

const token=cookies.get("token")

export const BlogPost = createAsyncThunk("blog/post", async (body) => {
  return await axios.post(`${API_URL}/news`, body,{
    headers:{
     token:token
    }
  }).then((res) => res);
});
export const BlogGet = createAsyncThunk("blog/get", async () => {
  return await axios
    .get(`${API_URL}/news`)
    .then((response) => response.data);
});

export const BlogDelete = createAsyncThunk("blog/delete", async (id) => {
  return await axios
    .delete(`${API_URL}/news/${id}`,{
      headers:{
       token:token
      }
    })
    .then((response) => response.data);
});
export const BlogPut = createAsyncThunk(
  "blog/put",
  async ({ body, id }) => {
    return await axios
      .put(`${API_URL}/news/${id}`, body,{
        headers:{
         token:token
        }
      })
      .then((response) => console.log(response.data));
  }
);

export const UploadImage = createAsyncThunk("Product/upload", async (e) => {
  const formData = new FormData();
  formData.append("file", e.target.files[0]);
  formData.append("upload_preset", "esks1z3a");
  try {
    return await axios
      .post("https://api.cloudinary.com/v1_1/drtyuxect/upload", formData)
      .then((response) => response?.data.secure_url);
  } catch (error) {
    return error;
  }
});
const BlogSlice = createSlice({
  name: "blog",
  initialState: {
    blogGet: {
      loading: false,
      data: [],
      error: false,
      success: false,
    },
    blogPost: {
      Success: false,
      Error: false,
      loading: false,
    },
    blogDelete: {
      Success: false,
      Error: false,
      loading: false,
    },
    blogPut: {
      Error: false,
      Loading: false,
      Success: false,
    },
    uploadProjects: {
      Error: false,
      Loading: false,
      Success: false,
      data: "",
    },
  },
  extraReducers: {
    // get
    [BlogGet.pending]: (state, action) => {
      state.blogGet.loading = true;
    },
    [BlogGet.fulfilled]: (state, action) => {
      state.blogGet.loading = false;
      state.blogGet.success = true;
      state.blogGet.data = action.payload;
      state.blogGet.error = false;
    },
    [BlogGet.rejected]: (state, action) => {
      state.blogGet.loading = false;
      state.blogGet.error = true;
      state.blogGet.success = false;
    },
    // add
    [BlogPost.pending]: (state, action) => {
      state.blogPost.loading = true;
    },
    [BlogPost.fulfilled]: (state, action) => {
      state.blogPost.loading = false;
      state.blogPost.Success = true;
      state.blogPost.Error = false;
    },
    [BlogPost.rejected]: (state, action) => {
      state.blogPost.loading = false;
      state.blogPost.Error = true;
      state.blogPost.Success = false;
    },
    // delete
    [BlogDelete.pending]: (state, action) => {
      state.blogDelete.loadingDelete = true;
    },
    [BlogDelete.fulfilled]: (state, action) => {
      state.blogDelete.loading = false;
      state.blogDelete.Success = true;
      state.blogDelete.Error = false;
    },
    [BlogDelete.rejected]: (state, action) => {
      state.blogDelete.loading = false;
      state.blogDelete.Error = true;
      state.blogDelete.Success = false;
    },
    // put
    [BlogPut.pending]: (state, action) => {
      state.blogPut.loading = true;
    },
    [BlogPut.fulfilled]: (state, action) => {
      state.blogPut.Error = false;
      state.blogPut.Success = true;
      state.blogPut.Loading = false;
    },
    [BlogPut.rejected]: (state, action) => {
      state.blogPut.Error = true;
      state.blogPut.Success = false;
      state.blogPut.Loading = false;
    },

    [UploadImage.pending]: (state, action) => {
      state.uploadProjects.Loading = true;
    },
    [UploadImage.fulfilled]: (state, action) => {
      state.uploadProjects.Error = false;
      state.uploadProjects.Success = true;
      state.uploadProjects.Loading = false;
      state.uploadProjects.data = action.payload;
      // console.log( );
    },
    [UploadImage.rejected]: (state, action) => {
      state.uploadProjects.Error = true;
      state.uploadProjects.Success = false;
      state.uploadProjects.Loading = false;
    },
  },
});

export const {} = BlogSlice.actions;
export default BlogSlice.reducer;
