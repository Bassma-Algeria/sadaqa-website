// Action creators are generated for each case reducer function
import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

const initialState = {
  loading: false,
  isAuthenticated: false,
  profileInfo: {
    generalInfo: {},
    profilePic: {},
    socialAccounts: null,
  },
  likes: [],
  numOfUnreadMessages: 0,
  notifications: {
    isDataLoaded: false,
    numOfUnreadNotifications: 0,
    newNotification: null,
    data: [],
  },
};

const authUserSlice = createSlice({
  name: "authUser",
  initialState,
  reducers: {
    setUserLoading: (state) => {
      state.loading = true;
    },

    removeUserLoading: (state) => {
      state.loading = false;
    },

    setGeneralInfo: (state, { payload }) => {
      state.profileInfo.generalInfo = payload;
      state.isAuthenticated = true;
    },

    setProfileImage: (state, { payload }) => {
      state.profileInfo.profilePic = payload;
    },

    setSocialAccounts: (state, { payload }) => {
      state.profileInfo.socialAccounts = payload;
    },

    setLikes: (state, { payload }) => {
      state.likes = payload;
    },

    setNumOfUnreadNotifications: (state, { payload }) => {
      state.notifications.numOfUnreadNotifications = payload;
    },

    setNumOfUnreadMessages: (state, { payload }) => {
      state.numOfUnreadMessages = payload;
    },

    setIsNotificationsDataLoaded: (state) => {
      state.notifications.isDataLoaded = true;
    },

    removeIsNotificationsDataLoaded: (state) => {
      state.notifications.isDataLoaded = false;
    },

    setNotificationData: (state, { payload }) => {
      state.notifications.data = [...state.notifications.data, ...payload];
    },

    setNewNotification: (state, { payload: newNotif }) => {
      state.notifications.newNotification = newNotif;
      state.notifications.numOfUnreadNotifications += 1;
    },

    removeNewNotification: (state) => {
      state.notifications.newNotification = null;
    },

    clearNotifications: (state) => {
      state.notifications.data = [];
      state.notifications.isDataLoaded = false;
    },

    handleLikePostInAuthUserSlice: (state, { payload }) => {
      const { postId, isPostLiked } = payload;
      if (isPostLiked) {
        state.likes = state.likes.filter((like) => like.post_id !== postId);
      } else {
        state.likes.push({ post_id: postId });
      }
    },

    clearAuthUser: (state) => initialState,
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
  setGeneralInfo,
  setSocialAccounts,
  setNumOfUnreadNotifications,
  setProfileImage,
  setLikes,
  setNumOfUnreadMessages,
  setUserLoading,
  removeUserLoading,
  clearAuthUser,
  handleLikePostInAuthUserSlice,
  setIsNotificationsDataLoaded,
  removeIsNotificationsDataLoaded,
  setNotificationData,
  setNewNotification,
  removeNewNotification,
  clearNotifications,
} = authUserSlice.actions;

export default authUserSlice.reducer;
