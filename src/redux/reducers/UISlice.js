// Action creators are generated for each case reducer function
import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

const initialState = {
  loading: false,
  errors: {},
  navMessage: {
    display: true,
    text: "",
  },
};

const UISlice = createSlice({
  name: "UI",
  initialState,
  reducers: {
    setUILoading: (state) => {
      state.loading = true;
    },

    removeUILoading: (state) => {
      state.loading = false;
    },

    setErrors: (state, { payload }) => {
      state.errors = payload;
    },

    setNavMessage: (state, { payload }) => {
      state.navMessage.display = true;
      state.navMessage.text = payload;
    },

    removeNavMessage: (state, { payload }) => {
      state.navMessage.display = false;
      state.navMessage.text = "";
    },

    clearErrors: (state) => {
      state.errors = {};
    },
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

export const {
  setUILoading,
  removeUILoading,
  setErrors,
  clearErrors,
  setNavMessage,
  removeNavMessage,
} = UISlice.actions;

export default UISlice.reducer;
