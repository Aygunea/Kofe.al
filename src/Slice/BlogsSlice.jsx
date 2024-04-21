import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from 'axios';

const apiUrl = 'http://localhost:3005/blogs'

export const fetchBlogs = createAsyncThunk('blogs/fetchBlogs', async () => {
    const response = await axios.get(apiUrl)
    return response.data
})

const BlogsSlice = createSlice({
    name: 'blogs',
    initialState: {
        items: [],
        status: "nothing",
        loading: false
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchBlogs.pending, (state, action) => {
          state.status = "loading";
          state.loading = true;
        })
        .addCase(fetchBlogs.fulfilled, (state, action) => {
          state.status = "succeed";
          state.items = action.payload;
          state.loading = false;
        })
        .addCase(fetchBlogs.rejected, (state, action) => {
          state.status = "failed";
          state.loading = false;
        });
      
    }
})

export default BlogsSlice.reducer