import React from 'react';


export const ChatMessage = ({ autor, message, time }) => {
  const classe = autor === 'BO' ? 'abk-backoffice-msg' : 'abk-resto-msg';

  return (
    <div className="">
      <div className={`abk-msg ${classe}`}>
        <p>{message}</p>
        <span className="abk-chat-time">{time}</span>
      </div>
    </div>
  );
};
