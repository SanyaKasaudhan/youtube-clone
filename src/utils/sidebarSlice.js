import { createSlice } from "@reduxjs/toolkit";

const sidebarSlice = createSlice({
  name: "navSlice",
  initialState: {
    isMenuOpen: true,
  },
  reducers: {
    toggleSidebar: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    closeMenu: (state) => {
      state.isMenuOpen = false;
    },
  },
});

export const { toggleSidebar, closeMenu } = sidebarSlice.actions;
export default sidebarSlice.reducer;
