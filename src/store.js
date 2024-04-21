import { configureStore } from "@reduxjs/toolkit";
import UsersSlice from "./Slice/UsersSlice";
import BlogsSlice from "./Slice/BlogsSlice";

export const store = configureStore({
    reducer: {
        users: UsersSlice,
        blogs: BlogsSlice
    }
})