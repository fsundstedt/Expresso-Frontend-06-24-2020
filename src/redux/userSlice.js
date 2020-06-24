import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user_id: null,
    logged_in: 0,
  },
  reducers: {
    changeUser: (state, action) => {
      state.user_id = action.payload;
    },
    changeLogin: (state, action) => {
        state.logged_in = action.payload;
      },
  },
});

export const { changeUser, changeLogin } = userSlice.actions;

export const selectUser = state => state.user.user_id;

export const selectLogin = state => state.user.logged_in;

export default userSlice.reducer;