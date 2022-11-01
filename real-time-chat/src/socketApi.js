import io from "socket.io-client";

let socket;

export const init = () => {
  console.log("Connecting...");
  socket = io("http://localhost:3000", {
    transports: ["websocket"],
  });

  socket.on("connect", () => {
    console.log("Connected!");
  });
};

// for send message to redis
export const sendMessage = (message) => {
  if (socket) socket.emit("new-message", message);
};

//for send messages to other users
export const subscribeChat = (cb) => {
  if (!socket) return;
  socket.on("receive-message", (message) => {
    console.log("A new message", message);
    cb(message);
  });
};
