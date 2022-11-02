import React from "react"
import HeadPage from "./components/HeadPage"
import {ChatProvider} from "./context/ChatContext";


function App() {
  return (
    <ChatProvider>
    <HeadPage />
    </ChatProvider>
  );
}

export default App;
