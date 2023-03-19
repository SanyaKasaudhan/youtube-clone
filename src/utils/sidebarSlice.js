import { createSlice } from "@reduxjs/toolkit";

const sidebarSlice=createSlice({
    name:"navSlice",
    initialState:{
        isMenuOpen:true
    },
    reducers:{
        toggleSidebar:(state)=>{
            state.isMenuOpen= !state.isMenuOpen;
        }
    }
})

export const {toggleSidebar}=sidebarSlice.actions;
export default sidebarSlice.reducer;