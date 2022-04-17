// Action creators are generated for each case reducer function
import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

const initialState = {
  totalNumOfPostsOfType: 0,
  peopleNeedHelp: {
    call_for_help: {
      isDataLoaded: false,
      data: [],
    },
    family_in_need: {
      isDataLoaded: false,
      data: [],
    },
    donation_request: {
      isDataLoaded: false,
      data: [],
    },
  },

  donation: {
    "Clothes / Accessories": {
      isDataLoaded: false,
      data: [],
    },
    Food: {
      isDataLoaded: false,
      data: [],
    },
    Services: {
      isDataLoaded: false,
      data: [],
    },
    "Electronics / Appliances": {
      isDataLoaded: false,
      data: [],
    },
    "Home / Furnitures": {
      isDataLoaded: false,
      data: [],
    },
    "Books / Magazines": {
      isDataLoaded: false,
      data: [],
    },
    Sports: {
      isDataLoaded: false,
      data: [],
    },
    "Cosmetics / Hygiene": {
      isDataLoaded: false,
      data: [],
    },
    "Animals / Accessories": {
      isDataLoaded: false,
      data: [],
    },
    "Games / Toys": {
      isDataLoaded: false,
      data: [],
    },
    Tools: {
      isDataLoaded: false,
      data: [],
    },
    "Health / Medicines": {
      isDataLoaded: false,
      data: [],
    },
    "Cars Accessories": {
      isDataLoaded: false,
      data: [],
    },
    Others: {
      isDataLoaded: false,
      data: [],
    },
  },
  searchedPosts: {
    isDataLoaded: false,
    data: [],
  },
  authUserPosts: {
    isDataLoaded: false,
    data: [],
  },
};

const posts = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setPeopleNeedHelpPostsDataLoaded: (state, { payload }) => {
      state.peopleNeedHelp[payload.subType].isDataLoaded = true;
    },

    removePeopleNeedHelpPostsDataLoaded: (state, { payload }) => {
      state.peopleNeedHelp[payload.subType].isDataLoaded = false;
    },

    setPeopleNeedHelpPostsData: (state, { payload }) => {
      state.peopleNeedHelp[payload.subType].data = payload.data;
    },

    setDonationsPostsDataLoaded: (state, { payload }) => {
      state.donation[payload.subType].isDataLoaded = true;
    },

    removeDonationsPostsDataLoaded: (state, { payload }) => {
      state.donation[payload.subType].isDataLoaded = false;
    },

    setDonationsPostsData: (state, { payload }) => {
      state.donation[payload.subType].data = payload.data;
    },

    handleLikePostInPostsSlice: handleLikePost,

    setTotalNumOfPostsOfType: (state, { payload }) => {
      state.totalNumOfPostsOfType = payload.totalNumOfPosts;
    },

    setSearchedPostsDataLoaded: (state) => {
      state.searchedPosts.isDataLoaded = true;
    },
    removeSearchedPostsDataLoaded: (state) => {
      state.searchedPosts.isDataLoaded = false;
    },
    setSearchedPostsData: (state, { payload }) => {
      state.searchedPosts.data = payload;
    },

    setAuthUserPostsDataLoaded: (state) => {
      state.authUserPosts.isDataLoaded = true;
    },
    removeAuthUserPostsDataLoaded: (state) => {
      state.authUserPosts.isDataLoaded = false;
    },
    setAuthUserPostsData: (state, { payload }) => {
      state.authUserPosts.data = [...state.authUserPosts.data, ...payload];
    },

    inactivePostInAuthUserPosts: (state, { payload }) => {
      state.authUserPosts.data.find(
        (post) => post.post_id === payload
      ).active = false;
    },

    deletePostInAuthUserPosts: (state, { payload }) => {
      state.authUserPosts.data = state.authUserPosts.data.filter(
        (post) => post.post_id !== payload
      );
    },

    clearPosts: (state) => initialState,
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
  clearPosts,
  setPeopleNeedHelpPostsData,
  setDonationsPostsData,
  handleLikePostInPostsSlice,
  setPeopleNeedHelpPostsDataLoaded,
  removeDonationsPostsDataLoaded,
  setDonationsPostsDataLoaded,
  removePeopleNeedHelpPostsDataLoaded,
  setTotalNumOfPostsOfType,
  setSearchedPostsData,
  setSearchedPostsDataLoaded,
  removeSearchedPostsDataLoaded,
  setAuthUserPostsData,
  setAuthUserPostsDataLoaded,
  removeAuthUserPostsDataLoaded,
  inactivePostInAuthUserPosts,
  deletePostInAuthUserPosts,
} = posts.actions;

function handleLikePost(state, { payload }) {
  const {
    postId,
    isPostLiked,
    type,
    subType,
    likesCount,
    isSearchedPost,
    isAuthUserPost,
  } = payload;

  if (isSearchedPost) {
    if (isPostLiked) {
      state.searchedPosts.data.find(
        (post) => post.post_id === postId
      ).likes_count = likesCount - 1;
    } else {
      state.searchedPosts.data.find(
        (post) => post.post_id === postId
      ).likes_count = likesCount + 1;
    }
  } else if (isAuthUserPost) {
    if (isPostLiked) {
      state.authUserPosts.data.find(
        (post) => post.post_id === postId
      ).likes_count = likesCount - 1;
    } else {
      state.authUserPosts.data.find(
        (post) => post.post_id === postId
      ).likes_count = likesCount + 1;
    }
  } else if (type === "donation") {
    if (isPostLiked) {
      state.donation[subType].data.find(
        (post) => post.post_id === postId
      ).likes_count = likesCount - 1;
    } else {
      state.donation[subType].data.find(
        (post) => post.post_id === postId
      ).likes_count = likesCount + 1;
    }
  } else {
    if (isPostLiked) {
      state.peopleNeedHelp[subType].data.find(
        (post) => post.post_id === postId
      ).likes_count = likesCount - 1;
    } else {
      state.peopleNeedHelp[subType].data.find(
        (post) => post.post_id === postId
      ).likes_count = likesCount + 1;
    }
  }
}

export default posts.reducer;
