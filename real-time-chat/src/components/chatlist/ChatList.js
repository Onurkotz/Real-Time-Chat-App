import React from "react";
import style from "../style.module.css";
import ChatItem from "./ChatItem";
import { useChat } from "../../context/ChatContext";
import ScrollableFeed from "react-scrollable-feed";

function ChatList() {
  const { messages } = useChat();
  console.log(messages);

  // If the messages is listed two times on the list, you should write <React.Fragment> instead of <React.StrictMode> in the index.js
  return (
    
      <div className={style.chatList}>
        <ScrollableFeed forceScroll={true}>
          {messages.map((item, key) => {
            return <ChatItem key={key} item={item} />;
          })}
        </ScrollableFeed>
      </div>
    
  );
}

export default ChatList;
