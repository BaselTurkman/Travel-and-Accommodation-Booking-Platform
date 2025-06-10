import { clearSession } from "@/lib/session";
import { User } from "@/types/User";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: User = {
  user_id: "",
  family_name: "",
  given_name: "",
  userType: "User",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (_state, action: PayloadAction<User>) => {
      return { ...action.payload };
    },
    updateUserSession: (state, action: PayloadAction<User>) => {
      state = { ...action.payload };
      return state;
    },
    logout: (state) => {
      state = initialState;
      clearSession();
      return state;
    },
  },
});

export const { login, updateUserSession, logout } = userSlice.actions;

export default userSlice.reducer;

