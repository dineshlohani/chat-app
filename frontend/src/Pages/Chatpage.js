import React, { useEffect, useState } from "react";
import axios from "axios";

const Chatpage = () => {
  const [chats, setChats] = useState([])

  const fetchChat = async () => {
    const { data } = await axios.get("/api/chat")
    setChats(data);
  };
  useEffect(() => {
    fetchChat()
    
  }, []);
  console.log(chats[0]?.users[0]?.name)
  return (<div>
    <p>{ chats[0]?.users[0]?.name}</p>
    <h1>Hello</h1>
  </div>);
};

export default Chatpage;