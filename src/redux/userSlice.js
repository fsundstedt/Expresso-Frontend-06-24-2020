import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    user_id: null,
    user_name: null,
    logged_in: 0,
  },
  reducers: {
    changeUserId: (state, action) => {
      state.user_id = action.payload;
    },
    changeUserName: (state, action) => {
      state.user_name = action.payload;
    },
    changeLogin: (state, action) => {
      state.logged_in = action.payload;
    },
  },
});

export const { changeUserId, changeUserName, changeLogin } = userSlice.actions;

export const selectUserId = state => state.user.user_id;
export const selectUserName = state => state.user.user_name;

export const selectLogin = state => state.user.logged_in;

export default userSlice.reducer;