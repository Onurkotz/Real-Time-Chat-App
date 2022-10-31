import React from 'react'
import style from "../style.module.css"
import ChatItem from "./ChatItem"
import {useChat} from "../../context/ChatContext";

function ChatList() {
  const {message} = useChat();
  console.log(message)
  
  
  return (
    <div className={style.chatList}>
      <div>
      {
        message.map((item, key) => {
          return <ChatItem key={key} item={item} />
        })
      }  
      </div>
    </div>
  )
}

export default ChatList