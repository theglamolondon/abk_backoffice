import React, { useEffect } from 'react';
import { ChatMessage } from "./ChatMessage";

export const ChatListView = ({ messages }) => {
  useEffect(() => {
    const bodyDoc = document.getElementsByClassName("abk-chat-body")[0]
    bodyDoc.scrollBy(0,bodyDoc.scrollHeight)
  });

  return (
    <div className="abk-chat-body">
      {messages.map((message, k) => <ChatMessage key={k} author={message.author} time={message.createdAt} message={message.message} />)}
    </div>
  );
};