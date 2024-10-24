/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface UserState {
  userInfo: any | null;
  accessToken: string | null;

}


const initialState: UserState = {
  userInfo: null,
  accessToken: null,

};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(_state, action: PayloadAction<UserState>) {
      return action.payload;
    },
    clearUser(state) {
      state.userInfo = null;
      state.accessToken = null;

    },
  },
});

export const { setUser, clearUser } = userSlice.actions;

export default userSlice.reducer;
