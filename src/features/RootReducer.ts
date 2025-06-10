import { combineReducers } from "@reduxjs/toolkit";
import snackbarReducer from "@/features/Snackbar/snackbarSlice";

const RootReducer = combineReducers({ snackbar: snackbarReducer });

export default RootReducer;
