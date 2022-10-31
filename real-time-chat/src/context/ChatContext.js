import {createContext, useState} from "react";

const ChatContext = createContext();

export const ChatProvider = ({children}) => {
    const [message, setMessage] = useState([])
    const values = {
        message,
        setMessage
    }
    
    
    return <ChatContext.Provider value={values}>{children}</ChatContext.Provider>
}

export default ChatContext;