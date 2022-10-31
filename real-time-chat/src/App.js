import React from "react"
import HeadPage from "./components/HeadPage"
import {ChatProvider} from "./context/ChatContext";

import './App.css';

function App() {
  return (
    <ChatProvider>
    <HeadPage />
    </ChatProvider>
  );
}

export default App;
