import React from "react";

import "./ChatMessage.css";

const ChatMessage = ({ messageObj }) => {
  const alignModificator =
    messageObj.user_role === "user"
      ? "chat-message_align-right"
      : "chat-message_align-left";

  return (
    <div className="chat-message">
      <div className="chat-message__author">
        <div className={alignModificator}>{messageObj.user_name}</div>
      </div>
      <div className="chat-message__text">
        <div className={alignModificator}>{messageObj.text}</div>
      </div>
    </div>
  );
};

export default ChatMessage;
