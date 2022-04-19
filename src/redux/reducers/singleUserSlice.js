// Action creators are generated for each case reducer function
import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

const initialState = {
  isUserLoaded: false,
  user: {},
};

const singleUserSlice = createSlice({
  name: "single_user",
  initialState,
  reducers: {
    setIsUserLoaded: (state) => {
      state.isUserLoaded = true;
    },
    clearIsUserLoaded: (state) => {
      state.isUserLoaded = false;
    },
    setUser: (state, { payload }) => {
      state.user = payload;
    },
    clearSingleUser: (state) => initialState,
  },

  extraReducers: {
    [HYDRATE]: (state, action) => {
      console.log("HYDRATE", state, action.payload);
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const { clearIsUserLoaded, clearSingleUser, setIsUserLoaded, setUser } =
  singleUserSlice.actions;

export default singleUserSlice.reducer;
