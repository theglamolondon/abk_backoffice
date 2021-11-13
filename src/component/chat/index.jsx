import React, { useState } from 'react';
import { ChatListView } from './ChatListView';
import { ChatTextZone } from './ChatTextZone';
import withChat from './withChat';

const ChatManager = ({data, addMessage}) => {
  const [isOpenChat, setOpenChat] = useState(false);
  
  return(<div className="abk-chat-manager card border-info text-center bg-transparent">
    <div className="abk-chat-title" onClick={(e) => {setOpenChat(!isOpenChat)}}><h4>Discussion Resto</h4></div>
    <div className="abk-chat-content" style={{display: isOpenChat ? "block" : "none"}}>
      <ChatListView messages={data} />   
      <ChatTextZone sendMessage={addMessage}/>
    </div>
  </div> )
}
export default withChat(ChatManager)