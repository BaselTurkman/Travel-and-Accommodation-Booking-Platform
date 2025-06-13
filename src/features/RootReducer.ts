import { combineReducers } from "@reduxjs/toolkit";
import snackbarReducer from "@/features/Snackbar/snackbarSlice";
import userReducer from "@/features/User/userSlice";
import searchQueryReducer from "@/features/SearchQuery/searchQuerySlice"

const RootReducer = combineReducers({
  snackbar: snackbarReducer,
  user: userReducer,
  searchQuery: searchQueryReducer
});

export default RootReducer;
