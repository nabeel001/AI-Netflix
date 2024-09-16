import { createSlice } from "@reduxjs/toolkit";

export interface GPTState {
  showAskGpt: boolean;
  isAskGptLoading: boolean;
}

const initialState: GPTState = {
  showAskGpt: false,
  isAskGptLoading: false,
};

const gptSlice = createSlice({
  name: "gpt",
  initialState: initialState,
  reducers: {
    toggleAskGptView: (state) => {
      state.showAskGpt = !state.showAskGpt;
    },
    toggleAskGptLoading: (state) => {
      state.isAskGptLoading = !state.isAskGptLoading;
    },
  },
});

export const { toggleAskGptView, toggleAskGptLoading } = gptSlice.actions;
export default gptSlice.reducer;
