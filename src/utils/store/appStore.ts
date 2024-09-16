import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./moviesSlice";
import gptReducer from "./gptSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

const appStore = configureStore({
  reducer: { user: userReducer, movies: moviesReducer, gpt: gptReducer },
});

export const useAppDispatch: () => typeof appStore.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof appStore.getState>
> = useSelector;
export default appStore;
