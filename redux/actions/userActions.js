import axios from "axios";
import { checkForTokenAndSetAuthUser } from "../../utils/auth";

import {
  clearAuthUser,
  removeIsNotificationsDataLoaded,
  removeUserLoading,
  setGeneralInfo,
  setIsNotificationsDataLoaded,
  setLikes,
  setNotificationData,
  setNumOfUnreadMessages,
  setNumOfUnreadNotifications,
  setProfileImage,
  setSocialAccounts,
  setUserLoading,
  clearNotifications,
} from "../reducers/authUserSlice";
import {
  clearIsUserLoaded,
  setIsUserLoaded,
  setUser,
} from "../reducers/singleUserSlice";
import {
  clearErrors,
  removeUILoading,
  setErrors,
  setUILoading,
} from "../reducers/UISlice";

const getAndSetAuthUserInfo = () => (dispatch) => {
  dispatch(setUserLoading());

  axios
    .get("/users/getAuthUser")
    .then((res) => {
      return res.data.data;
    })
    .then((userInfo) => {
      dispatch(setGeneralInfo(userInfo.userInfo));
      dispatch(setProfileImage(userInfo.profilePic));
      dispatch(setSocialAccounts(userInfo.socialAccounts));
      dispatch(setLikes(userInfo.likes));
      dispatch(setNumOfUnreadNotifications(userInfo.numOfUnreadNotifications));
      dispatch(setNumOfUnreadMessages(userInfo.numOfUnreadMessages));

      dispatch(removeUserLoading());
    })
    .catch((error) => {
      dispatch(removeUserLoading());
      console.log(error);
      throw error;
    });
};

const setNewNumOfUnreadMessages = () => (dispatch) => {
  axios
    .get("/users/getNumOfUnreadMessages")
    .then((res) => {
      dispatch(setNumOfUnreadMessages(res.data.data));
    })
    .catch((error) => {
      console.log(error);
    });
};

const loginUserGetAuthTokenAndPushToHome =
  (loginInfo, router) => (dispatch) => {
    dispatch(setUILoading());
    dispatch(clearErrors());

    axios
      .post("/users/login", loginInfo)
      .then((res) => {
        const token = res.data.data.token;

        localStorage.setItem("jwt", token);
        checkForTokenAndSetAuthUser(dispatch);
        router.back();

        dispatch(clearErrors());
        dispatch(removeUILoading());
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

const signupUserGetAuthTokenAndPushToHome =
  (signupInfo, router) => (dispatch) => {
    dispatch(setUILoading());
    dispatch(clearErrors());

    axios
      .post("/users/signup", signupInfo)
      .then((res) => {
        const token = res.data.data.token;

        localStorage.setItem("jwt", token);
        checkForTokenAndSetAuthUser(dispatch);
        router.back();

        dispatch(clearErrors());
        dispatch(removeUILoading());
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

const logoutUser = () => (dispatch) => {
  localStorage.removeItem("jwt");
  delete axios.defaults.headers.common["Authorization"];
  dispatch(clearAuthUser());
};

const getUser = (userId) => (dispatch) => {
  dispatch(clearIsUserLoaded());

  axios
    .get(`/users/getUser/${userId}`)
    .then((res) => {
      dispatch(setUser(res.data.data));
      dispatch(setIsUserLoaded());
    })
    .catch((error) => {
      console.log(error);
    });
};

const getNotifications = (numOfElements) => (dispatch) => {
  dispatch(clearNotifications());

  axios
    .get(
      `/notifications/getAuthUserNotifications?numOfGroupe=1&numOfElementsPerGroupe=${
        numOfElements ? numOfElements : 20
      }`
    )
    .then((res) => {
      dispatch(setNotificationData(res.data.data.notificationsNeeded));
      dispatch(setIsNotificationsDataLoaded());
    })
    .catch((error) => {
      dispatch(setIsNotificationsDataLoaded());
      console.error(error);
    });
};

const getOldNotifications =
  (numOfGroupe, numOfElementsPerGroupe) => (dispatch) => {
    axios
      .get(
        `/notifications/getAuthUserNotifications?numOfGroupe=${numOfGroupe}&numOfElementsPerGroupe=${numOfElementsPerGroupe}`
      )
      .then((res) => {
        dispatch(setNotificationData(res.data.data.notificationsNeeded));
      })
      .catch((error) => {
        console.error(error);
      });
  };

const makeNotificationsRead = () => (dispatch) => {
  axios
    .put("/notifications/makeNotificationsRead")
    .then((res) => {
      dispatch(setNumOfUnreadNotifications(0));
    })
    .catch((error) => {
      console.error(error);
    });
};

const makeNotificationRead = (notificationId) => (dispatch, getState) => {
  axios
    .put(`/notifications/makeNotificationRead/${notificationId}`)
    .then((res) => {
      const {
        authUser: {
          notifications: { numOfUnreadNotifications },
        },
      } = getState();
      dispatch(setNumOfUnreadNotifications(numOfUnreadNotifications - 1));
    })
    .catch((error) => {
      console.log(error);
    });
};

const editGeneralInfo = (newData) => (dispatch) => {
  dispatch(setUILoading());
  dispatch(clearErrors());

  axios
    .put("/users/editGeneralInfo", newData)
    .then((res) => {
      dispatch(clearErrors());
      dispatch(removeUILoading());
      dispatch(setProfileImage(res.data.data));
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

const editCredentials = (newCredentials) => (dispatch) => {
  dispatch(setUILoading());
  dispatch(clearErrors());

  axios
    .put("/users/editCredentials", newCredentials)
    .then((res) => {
      dispatch(clearErrors());
      dispatch(removeUILoading());
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

const setPreferences = (preferences) => (dispatch) => {
  let queryString = "?";

  const preferencesNames = Object.keys(preferences);
  const numOfPreferencesToSet = Object.keys(preferences).length;
  for (const [key, value] of Object.entries(preferences)) {
    // * here make sure that the key name is the same as the column name in the DB
    if (preferencesNames.indexOf(key) !== numOfPreferencesToSet - 1) {
      queryString += `${key}=${value}&`;
    } else {
      queryString += `${key}=${value}`;
    }
  }

  axios.put(`/users/setPreferences${queryString}`).catch((error) => {
    console.log(error);
  });
};

export {
  loginUserGetAuthTokenAndPushToHome,
  signupUserGetAuthTokenAndPushToHome,
  getAndSetAuthUserInfo,
  setNewNumOfUnreadMessages,
  logoutUser,
  getUser,
  getNotifications,
  getOldNotifications,
  editGeneralInfo,
  editCredentials,
  setPreferences,
  makeNotificationsRead,
  makeNotificationRead,
};
