// Action creators are generated for each case reducer function
import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

const initialState = {
  isDataLoaded: false,
  post: {},
};

const singlePostSlice = createSlice({
  name: "single_post",
  initialState,
  reducers: {
    setPost: (state, { payload }) => {
      state.post = { ...payload };
    },
    setPostDataLoaded: (state) => {
      state.isDataLoaded = true;
    },
    removePostDataLoaded: (state) => {
      state.loading = false;
    },
    handleLikePostInSinglePostSlice: (state, { payload }) => {
      const { isPostLiked, likesCount } = payload;

      if (isPostLiked) {
        if (state.post.postInfo) {
          state.post.postInfo.likes_count = likesCount - 1;
        }
      } else {
        if (state.post.postInfo) {
          state.post.postInfo.likes_count = likesCount + 1;
        }
      }
    },
    clearSinglePost: (state) => initialState,
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
  setPost,
  setPostDataLoaded,
  removePostDataLoaded,
  clearSinglePost,
  handleLikePostInSinglePostSlice,
} = singlePostSlice.actions;

export default singlePostSlice.reducer;
