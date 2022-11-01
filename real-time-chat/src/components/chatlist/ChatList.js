import React from 'react'
import style from "../style.module.css"
import ChatItem from "./ChatItem"
import {useChat} from "../../context/ChatContext";

function ChatList() {
  const {messages} = useChat();
  console.log(messages)
  
  // If the messages is listed two times on the list, you should write <React.Fragment> instead of <React.StrictMode> in the index.js
  return (
    <div className={style.chatList}>
      <div>
      {
        messages.map((item, key) => {
          return  <ChatItem key={key} item={item} /> 
        })
      }  
      </div>
    </div>
  )
}

export default ChatList