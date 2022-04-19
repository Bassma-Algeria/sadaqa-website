import { io } from "socket.io-client";
import { registerSocketEventsListeners } from "./eventsListeners";

const socket = io(process.env.NEXT_PUBLIC_BACK_DOMAIN, {
  autoConnect: false,
});

const connectSocket = (userId, dispatch) => {
  socket.auth = { userId };
  socket.connect();

  registerSocketEventsListeners(dispatch);
};

export { socket, connectSocket };
