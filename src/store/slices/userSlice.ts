import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  email: string | null;
  loading: boolean;
  error: string | null;
}

const initialState: UserState = {
  email: null,
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    loginSuccess: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
      state.loading = false;
    },
    loginFailure: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = false;
    },
    logout: (state) => {
      state.email = null;
    },
  },
});

export const { loginStart, loginSuccess, loginFailure, logout } =
  userSlice.actions;
export default userSlice.reducer;
