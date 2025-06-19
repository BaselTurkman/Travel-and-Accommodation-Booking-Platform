import { combineReducers } from "@reduxjs/toolkit";
import snackbarReducer from "@/features/Snackbar/snackbarSlice";
import userReducer from "@/features/User/userSlice";
import searchQueryReducer from "@/features/SearchQuery/searchQuerySlice";
import cartReducer from "@/features/Cart/cartSlice";
import confirmationDialogReducer from "@/features/ConfirmationDialog/confirmationDialogSlice";

const RootReducer = combineReducers({
  snackbar: snackbarReducer,
  user: userReducer,
  searchQuery: searchQueryReducer,
  cart: cartReducer,
  confirmationDialog: confirmationDialogReducer,
});

export default RootReducer;
