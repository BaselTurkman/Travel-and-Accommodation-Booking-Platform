import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DialogState } from "./types";

const initialState: DialogState = {
  isOpen: false,
  isPending: false,
  title: "",
  message: "",
};

const dialogSlice = createSlice({
  name: "dialog",
  initialState,
  reducers: {
    openDialog: (
      state,
      action: PayloadAction<{
        title: string;
        message: string;
      }>
    ) => {
      state.isOpen = true;
      state.title = action.payload.title;
      state.message = action.payload.message;
      state.isPending = false;
    },
    setDialogPending: (state, action: PayloadAction<boolean>) => {
      state.isPending = action.payload;
    },
    closeDialog: (state) => {
      Object.assign(state, initialState);
    },
  },
});

export const { openDialog, closeDialog, setDialogPending } =
  dialogSlice.actions;
export default dialogSlice.reducer;
