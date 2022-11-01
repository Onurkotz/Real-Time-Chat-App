import { useEffect } from "react";
import ChatList from "./chatlist/ChatList";
import Input from "./input/Input";
import { useChat } from "../context/ChatContext";

import { init, subscribeChat } from "../socketApi";

function HeadPage() {
  const { setMessages } = useChat();

  useEffect(() => {
    init();
    subscribeChat((message) => {
      setMessages((prevState) => [...prevState, { message }]);
    });
  }, [setMessages]);

  return (
    <div>
      <ChatList />
      <Input />
    </div>
  );
}

export default HeadPage;

// If you see any problem about hgetall function of redis, you shoul install redis 3.0.2.