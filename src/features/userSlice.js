import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
  },
  reducers: {
    loginn: (state, action) => {
      state.user = action.payload;
    },
    logOut: (state) => {
      state.user = null;
    }
  },
});

export const { loginn, logOut } = userSlice.actions;

// Selectors
export const selectUser = state => state.user.user;

export default userSlice.reducer;
