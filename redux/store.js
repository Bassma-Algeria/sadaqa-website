import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import authUserReducer from "./reducers/authUserSlice";
import messagesSlide from "./reducers/messagesSlice";
import postsReducer from "./reducers/postsSlice";
import singlePostReducer from "./reducers/singlePostSlice";
import singleUserReducer from "./reducers/singleUserSlice";
import UIReducer from "./reducers/UISlice";
import usersSlice from "./reducers/usersSlice";

const makeStore = () =>
  configureStore({
    reducer: {
      authUser: authUserReducer,
      singleUser: singleUserReducer,
      posts: postsReducer,
      singlePost: singlePostReducer,
      UI: UIReducer,
      messages: messagesSlide,
      users: usersSlice,
    },
  });

export const wrapper = createWrapper(makeStore);
