import { createSlice } from "@reduxjs/toolkit";

interface sidebarState {
  value: boolean
}

const initialState: sidebarState = {
  value: false
}

const sidebarSlice = createSlice({
  name: "toggleIsOpen",
  initialState,
  reducers: {
    toggleReducer: state => {
      state.value = !state.value
    },
    closeMenuReducer: state => {
      state.value = false
    }
  },

})



export const { toggleReducer, closeMenuReducer } = sidebarSlice.actions

export default sidebarSlice.reducer

