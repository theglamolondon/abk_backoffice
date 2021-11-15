import React, { useState } from 'react';

export const ChatTextZone = ({sendMessage}) => {
  const [message,setMessage] = useState("")
  const handleSubmit = (event) => {
    event.preventDefault()
    sendMessage({author: 'BO', message: message, createdAt: null})
    setMessage("")
  }
  return (
    <div className="abk-chat-zone">
      <div className="card-footer chat-footer px-2 py-1 pb-0">
        <form className="" onSubmit={handleSubmit}>
          <div className="d-flex align-items-center">
            <input type="text" value={message} onChange={(e)=>{setMessage(e.target.value)}} className="form-control chat-message-send mx-1" placeholder="Saisir votre message ici..." />
            <button type="submit" className="btn btn-primary glow send d-lg-flex"><i className="feather icon-play"></i>
              <span className="d-none d-lg-block mx-50">Envoyer</span>
            </button>
          </div>
        </form>
      </div>
    </div>);
};
