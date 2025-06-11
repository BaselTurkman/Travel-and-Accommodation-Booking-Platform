import { RootState } from "@/store/store";
import { createSelector } from "@reduxjs/toolkit";

export const selectUser = ({ user }: RootState) => user;

export const selectIsLoggedIn = createSelector(
  selectUser,
  (user) => user.user_id !== ""
);

export const selectUserRole = createSelector(
  selectUser,
  (user) => user.userType
);

export const selectUserId = createSelector(
  selectUser,
  (user) => user.user_id
)
