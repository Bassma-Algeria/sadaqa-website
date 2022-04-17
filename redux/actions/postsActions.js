import axios from "axios";
import {
  newLikeSocketEmitter,
  newPostSocketEmitter,
} from "../../socket/eventsEmitters/postsEmitters";
import { handleLikePostInAuthUserSlice } from "../reducers/authUserSlice";
import {
  clearPosts,
  deletePostInAuthUserPosts,
  handleLikePostInPostsSlice,
  inactivePostInAuthUserPosts,
  removeAuthUserPostsDataLoaded,
  removeDonationsPostsDataLoaded,
  removePeopleNeedHelpPostsDataLoaded,
  removeSearchedPostsDataLoaded,
  setAuthUserPostsData,
  setAuthUserPostsDataLoaded,
  setDonationsPostsData,
  setDonationsPostsDataLoaded,
  setPeopleNeedHelpPostsData,
  setPeopleNeedHelpPostsDataLoaded,
  setSearchedPostsData,
  setSearchedPostsDataLoaded,
  setTotalNumOfPostsOfType,
} from "../reducers/postsSlice";
import {
  handleLikePostInSinglePostSlice,
  removePostDataLoaded,
  removePostLoading,
  setPost,
  setPostDataLoaded,
  setPostLoading,
} from "../reducers/singlePostSlice";
import {
  clearErrors,
  removeUILoading,
  setErrors,
  setUILoading,
} from "../reducers/UISlice";

const publishNewPost = (newAddInformations) => (dispatch) => {
  dispatch(setUILoading());
  dispatch(clearErrors());

  return axios
    .post("/posts/createPost", newAddInformations)
    .then((res) => {
      dispatch(clearErrors());
      dispatch(removeUILoading());
      newPostSocketEmitter(res.data.data.postId);
      return res.data.data.postId;
    })
    .catch((error) => {
      dispatch(removeUILoading());
      if (error.response) {
        dispatch(setErrors(error.response.data.errors));
      } else {
        console.error(error);
      }
    });
};

const getPeopleNeedHelpData =
  (subType, numOfPage, numOfPostsPerPage) => (dispatch) => {
    dispatch(removePeopleNeedHelpPostsDataLoaded({ subType }));

    axios
      .get(
        `/posts/?adType=${subType}&numOfPage=${numOfPage}&numOfAdsPerPage=${numOfPostsPerPage}&active=true`
      )
      .then((res) => {
        dispatch(
          setPeopleNeedHelpPostsData({
            data: res.data.data,
            subType,
          })
        );
        dispatch(setPeopleNeedHelpPostsDataLoaded({ subType }));
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

const getDonationsData =
  (subType, numOfPage, numOfPostPerPage) => (dispatch) => {
    dispatch(removeDonationsPostsDataLoaded({ subType }));

    axios
      .get(
        `/posts/?category=${subType}&numOfPage=${numOfPage}&numOfAdsPerPage=${numOfPostPerPage}&active=true`
      )
      .then((res) => {
        dispatch(setDonationsPostsData({ data: res.data.data, subType }));
        dispatch(setDonationsPostsDataLoaded({ subType }));
      })
      .catch((error) => {
        console.log(error);
      });
  };

const likePost =
  (
    postId,
    likesCount,
    isPostLiked,
    type,
    subType,
    isSearchedPost,
    isAuthUserPost
  ) =>
  (dispatch) => {
    return axios
      .put(`/posts/likePost/${postId}`)
      .then((res) => {
        newLikeSocketEmitter(postId, res.data.data.likeId);
        dispatch(handleLikePostInAuthUserSlice({ postId, isPostLiked }));
        dispatch(handleLikePostInSinglePostSlice({ likesCount, isPostLiked }));
        dispatch(
          handleLikePostInPostsSlice({
            postId,
            likesCount,
            isPostLiked,
            type,
            subType,
            isSearchedPost,
            isAuthUserPost,
          })
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };

const sharePost = (postId) => (dispatch) => {
  axios.put(`/posts/sharePost/${postId}`).catch((error) => {
    console.log(error);
  });
};

const getTotalNumOfPostsOfType = (postsType) => (dispatch) => {
  axios
    .get(`/posts/numOfPosts?adType=${postsType}&active=true`)
    .then((res) => {
      dispatch(
        setTotalNumOfPostsOfType({
          totalNumOfPosts: res.data.data.totalNumOfPosts,
        })
      );
    })
    .catch((error) => {
      console.log(error);
    });
};

const getTotalNumOfDontationsOfCategory = (category) => (dispatch) => {
  axios
    .get(`/posts/numOfPosts?category=${category}&active=true`)
    .then((res) => {
      dispatch(
        setTotalNumOfPostsOfType({
          totalNumOfPosts: res.data.data.totalNumOfPosts,
        })
      );
    })
    .catch((error) => {
      console.log(error);
    });
};

const getPost = (postId) => (dispatch) => {
  dispatch(removePostDataLoaded());

  axios
    .get(`/posts/getPost/${postId}`)
    .then((res) => {
      dispatch(setPost(res.data.data));
      dispatch(setPostDataLoaded());
    })
    .catch((error) => {
      console.log(error);
    });
};

const getSearchedPosts = (searchPhrase) => (dispatch) => {
  dispatch(clearPosts());
  dispatch(removeSearchedPostsDataLoaded());

  axios
    .get(`/posts/search/${searchPhrase}`)
    .then((res) => {
      dispatch(setSearchedPostsData(res.data.data));
      dispatch(setSearchedPostsDataLoaded());
    })
    .catch((error) => {
      if (error.response.data.success) {
        dispatch(setSearchedPostsDataLoaded());
      }
      console.log(error);
    });
};

const getAuthUserPosts = () => (dispatch, getState) => {
  dispatch(clearPosts());
  dispatch(removeAuthUserPostsDataLoaded());

  const { user_id } = getState().authUser.profileInfo.generalInfo;

  axios
    .get(`/posts/?numOfPage=1&numOfAdsPerPage=20&userId=${user_id}`)
    .then((res) => {
      dispatch(setAuthUserPostsData(res.data.data));
      dispatch(setAuthUserPostsDataLoaded());
    })
    .catch((error) => {
      if (error.response.data.success) {
        dispatch(setAuthUserPostsDataLoaded());
      }
      console.log(error);
    });
};

const getOldAuthUserPosts = (numOfPage) => (dispatch, getState) => {
  const { user_id } = getState().authUser.profileInfo.generalInfo;

  axios
    .get(`/posts/?numOfPage=${numOfPage}&numOfAdsPerPage=20&userId=${user_id}`)
    .then((res) => {
      dispatch(setAuthUserPostsData(res.data.data));
    })
    .catch((error) => {
      console.log(error);
    });
};

const makePostInactive = (postId) => (dispatch) => {
  axios
    .put(`/posts/makeInactive/${postId}`)
    .then((res) => {
      dispatch(inactivePostInAuthUserPosts(postId));
    })
    .catch((error) => {
      console.log(error);
    });
};

const deletePost = (postId) => (dispatch) => {
  axios
    .delete(`/posts/deletePost/${postId}`)
    .then((res) => {
      dispatch(deletePostInAuthUserPosts(postId));
    })
    .catch((error) => {
      console.log(error);
    });
};

export {
  publishNewPost,
  getPeopleNeedHelpData,
  likePost,
  sharePost,
  getDonationsData,
  getTotalNumOfPostsOfType,
  getTotalNumOfDontationsOfCategory,
  getPost,
  getSearchedPosts,
  getAuthUserPosts,
  makePostInactive,
  deletePost,
  getOldAuthUserPosts,
};
