import {
  addNewOnlineUser,
  removeOnlineUser,
  setOnlineUsersIds,
} from '../../redux/reducers/usersSlice';

const setOnlineUsersHandler =
  ([usersIds]) =>
  dispatch => {
    dispatch(setOnlineUsersIds(usersIds));
  };

const newConnectionHandler =
  ([newUserId]) =>
  (dispatch, getState) => {
    const {
      users: { onlineUsersIds },
    } = getState();
    if (onlineUsersIds.find(userId => userId === newUserId)) return;

    dispatch(addNewOnlineUser(newUserId));
  };

const deconnectUser =
  ([userId]) =>
  dispatch => {
    dispatch(removeOnlineUser(userId));
  };

export { setOnlineUsersHandler, newConnectionHandler, deconnectUser };
