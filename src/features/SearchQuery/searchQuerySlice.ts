import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState } from "./constants";
import { SearchQuery } from "@/types";

const searchQuerySlice = createSlice({
  name: "searchQuery",
  initialState,
  reducers: {
    setSearchQuery(state, action: PayloadAction<SearchQuery>) {
      state = { ...action.payload };
      return state;
    },
    clearSearchQuery(state) {
      state = initialState;
      return state;
    },
  },
});

export const {setSearchQuery, clearSearchQuery } = searchQuerySlice.actions
export default searchQuerySlice.reducer
