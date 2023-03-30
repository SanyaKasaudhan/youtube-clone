import { configureStore } from "@reduxjs/toolkit";
import searchSlice from "./searchSlice";
import sidebarSlice from "./sidebarSlice";

const store=configureStore({
    reducer:{
        navSlice:sidebarSlice,
        search: searchSlice,
    }
})

export default store