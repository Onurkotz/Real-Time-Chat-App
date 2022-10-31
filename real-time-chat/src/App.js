import React from "react"

import {ChatProvider} from "./context/ChatContext";

import './App.css';

function App() {
  return (
    <ChatProvider>
    <div className="App">
     Merhaba
    </div>
    </ChatProvider>
  );
}

export default App;
