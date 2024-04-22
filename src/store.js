import { configureStore } from "@reduxjs/toolkit";
import UsersSlice from "./Slice/UsersSlice";
import BlogsSlice from "./Slice/BlogsSlice";
import FilterSlice from "./Slice/FilterSlice";

export const store = configureStore({
    reducer: {
        users: UsersSlice,
        blogs: BlogsSlice,
        filter:FilterSlice
    }
})