const { setNewNotification } = require("../../redux/reducers/authUserSlice");

const newLikeNotification =
  ([notification]) =>
  (dispatch) => {
    dispatch(setNewNotification(notification));
  };

const newPostNotification =
  ([notification]) =>
  (dispatch) => {
    dispatch(setNewNotification(notification));
  };

export { newLikeNotification, newPostNotification };
