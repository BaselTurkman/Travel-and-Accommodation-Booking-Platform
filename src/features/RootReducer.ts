import { combineReducers } from "@reduxjs/toolkit";
import snackbarReducer from "@/features/Snackbar/snackbarSlice";
import userReducer from "../features/User/userSlice";

const RootReducer = combineReducers({
  snackbar: snackbarReducer,
  user: userReducer,
});

export default RootReducer;
