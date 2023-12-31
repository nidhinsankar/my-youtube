import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {},
  reducers: {
    addCacheResults: (state, action) => {
      return { ...action.payload, ...state };
    },
  },
});

export const { addCacheResults } = searchSlice.actions;
export default searchSlice.reducer;
