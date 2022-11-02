import React from 'react'
import style from "../style.module.css"


function ChatItem({item}) {
  return (
    <div className={`${style.chatItem} ${item.fromMe ? style.right : ""}`}>
        {item.message}
        <span>{item.when}</span>
    </div>
  )
}

export default ChatItem