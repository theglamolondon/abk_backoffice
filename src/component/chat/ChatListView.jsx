import React from 'react';
import { ChatMessage } from "./ChatMessage";

export const ChatListView = ({ messages }) => {
  return (
    <div className="abk-chat-body">
      {messages.map((message, k) => <ChatMessage autor={message.autor} time={message.time} message={message.message} />)}
    </div>
  );
};
