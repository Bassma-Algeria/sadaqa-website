import { getAndSetAuthUserInfo } from "../redux/actions/userActions";
import axios from "axios";

export const checkForTokenAndSetAuthUser = (dispatch) => {
  const token = localStorage.getItem("jwt");
  if (token) {
    axios.defaults.headers.common["Authorization"] = token;
    dispatch(getAndSetAuthUserInfo());
  }
};
