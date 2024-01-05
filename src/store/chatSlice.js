import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    messages: [],
  },
  reducers: {
    addMessages: (state, action) => {
      state.messages.splice(20, 1);
      state.messages.unshift(action.payload);
    },
    enterMessage: (state, action) => {
      state.messages.unshift(action.payload);
    },
  },
});

export const { addMessages, enterMessage } = chatSlice.actions;
export default chatSlice.reducer;
