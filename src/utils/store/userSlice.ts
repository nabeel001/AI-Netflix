import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface User {
  uid: string;
  name: string;
  email: string;
}

export interface UserState {
  user: User | null;
}

const initialState: UserState = {
  user: null,
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    addUser: (
      state,
      action: PayloadAction<{ uid: string; name: string; email: string }>
    ) => {
      const user: User = {
        uid: action.payload.uid,
        name: action.payload.name,
        email: action.payload.email,
      };
      state.user = user;
    },
    removeUser: (state) => {
      state.user = null;
    },
  },
});

export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
