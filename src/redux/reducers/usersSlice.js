// Action creators are generated for each case reducer function
import { createSlice } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

const initialState = {
  onlineUsersIds: [],
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setOnlineUsersIds: (state, { payload }) => {
      state.onlineUsersIds = payload.sort();
    },

    addNewOnlineUser: (state, { payload }) => {
      state.onlineUsersIds = [...state.onlineUsersIds, payload].sort();
    },

    removeOnlineUser: (state, { payload: deconnectedUserId }) => {
      state.onlineUsersIds = state.onlineUsersIds.filter(userId => userId !== deconnectedUserId);
    },

    clearUsersState: state => initialState,
  },

  extraReducers: {
    [HYDRATE]: (state, action) => {
      console.log('HYDRATE', state, action.payload);
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const { addNewOnlineUser, clearUsersState, setOnlineUsersIds, removeOnlineUser } =
  usersSlice.actions;

export default usersSlice.reducer;
