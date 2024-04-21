import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from 'axios';

const apiUrl = 'http://localhost:3005/users'

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    const response = await axios.get(apiUrl)
    return response.data
})

const UsersSlice = createSlice({
    name: 'users',
    initialState: {
        items: [],
        status: "nothing",
        loading: false
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchUsers.pending, (state, action) => {
          state.status = "loading";
          state.loading = true;
        })
        .addCase(fetchUsers.fulfilled, (state, action) => {
          state.status = "succeed";
          state.items = action.payload;
          state.loading = false;
        })
        .addCase(fetchUsers.rejected, (state, action) => {
          state.status = "failed";
          state.loading = false;
        });
      
    }
})

export default UsersSlice.reducer