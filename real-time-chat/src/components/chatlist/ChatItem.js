import React from 'react'
import style from "../style.module.css"


function ChatItem({item}) {
  return (
    <div className={style.chatItem}>
        {item.message}
    </div>
  )
}

export default ChatItem