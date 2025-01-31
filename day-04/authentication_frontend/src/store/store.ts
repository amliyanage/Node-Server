import {configureStore} from "@reduxjs/toolkit";
import UserSlice from "../reducers/user-slice.ts";

export const store = configureStore({
    reducer : {
        userReducer : UserSlice
    }
})