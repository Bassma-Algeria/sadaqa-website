import { socket } from "..";
import { NEW_LIKE, NEW_POST } from "../eventsNames";

const newLikeSocketEmitter = (postId, likeId) => {
  socket.emit(NEW_LIKE, { postId, likeId });
};

const newPostSocketEmitter = (postId) => {
  socket.emit(NEW_POST, postId);
};

export { newLikeSocketEmitter, newPostSocketEmitter };
