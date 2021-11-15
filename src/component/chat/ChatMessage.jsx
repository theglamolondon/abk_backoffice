import React from 'react';


export const ChatMessage = ({ author, message, time }) => {
  const classe = author === 'BO' ? 'abk-backoffice-msg' : 'abk-resto-msg';

  return (
    <div className="">
      <div className={`abk-msg ${classe}`}>
        <p>{message}</p>
        <span className="abk-chat-time">{time}</span>
      </div>
    </div>
  );
};
