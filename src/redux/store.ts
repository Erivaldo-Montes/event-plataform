import { configureStore } from "@reduxjs/toolkit";
import sidebarSlice from "./sidebarSlice";

export const store = configureStore({
  reducer: {
    toggleIsOpen: sidebarSlice,
    closeMenuReducer: sidebarSlice
  }
})

// tipagem do RootState do argumento state do UseSelector
export type RootState = ReturnType<typeof store.getState>

// infirido os tipos do UseDispatch
export type AppDispatch = typeof store.dispatch