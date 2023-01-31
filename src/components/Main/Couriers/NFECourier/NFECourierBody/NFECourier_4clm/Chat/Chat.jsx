import React from "react";
import "./Chat.css";

import ChatHistory from "./ChatHistory";
import ChatNewMessage from "./ChatNewMessage";

const Chat = () => {

    return (
      <div className="chat">
        <ChatHistory/>
        <ChatNewMessage/>
      </div>
    );
    
}

export default Chat