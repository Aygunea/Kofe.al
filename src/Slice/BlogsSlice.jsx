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
  reducers: {
    filterUsersByCategory: (state, action) => {
      const category = action.payload;
      if (category === 'hamısı') {
        state.filteredUsers = state.items;
      } else {
        state.filteredUsers = state.items.filter(user => user.category === category);
      }
    },
    filterUsersBySearchText: (state, action) => {
      const searchText = action.payload.toLowerCase();
      state.filteredUsers = state.items.filter(user =>
        user.title.toLowerCase().includes(searchText)
      );
    },
    clearFilters: (state) => {
      state.filteredUsers = state.items;
    }
  },
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