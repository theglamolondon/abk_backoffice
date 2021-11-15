import { useEffect, useState } from "react";

const withChat = (Component) => ({reference, handleChat, chatMessages}) => {

  const [messages, setMessages] = useState([]);

  useEffect(()=>{
    setMessages(chatMessages)
  }, [chatMessages])

  const handleNewMessage = (message) => {
    message.reference = reference
    messages.push(message)
    console.log("handler add message", message)
    handleChat(message)
    setMessages([...messages])
  }
  return <Component data={messages} addMessage={handleNewMessage} />
}

export default withChat