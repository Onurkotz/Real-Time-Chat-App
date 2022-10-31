import { createContext, useState, useContext } from "react";

const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
  const [message, setMessage] = useState([
    {
      message: "React",
    },
    {
      message: "Real-Time",
    },
    {
      message: "Chat App",
    },
  ]);
  const values = {
    message,
    setMessage,
  };

  return <ChatContext.Provider value={values}>{children}</ChatContext.Provider>;
};

export const useChat = () => useContext(ChatContext);
