import { configureStore } from "@reduxjs/toolkit";
import sidebarSlice from "./sidebarSlice";

const store=configureStore({
    reducer:{
        navSlice:sidebarSlice,
    }
})

export default store