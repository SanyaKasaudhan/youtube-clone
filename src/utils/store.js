import { configureStore } from "@reduxjs/toolkit";
import searchSlice from "./searchSlice";
import sidebarSlice from "./sidebarSlice";
import chatSlice from "./chatSlice";

const store=configureStore({
    reducer:{
        navSlice:sidebarSlice,
        search: searchSlice,
        chat: chatSlice,
    }
})

export default store