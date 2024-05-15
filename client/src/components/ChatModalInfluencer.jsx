import React, { useState, useEffect } from "react";
import axios from "axios";

const ChatModalInfluencer = ({ username, onClose }) => {
  const [messages, setMessages] = useState([]);
  
  const [inputValue, setInputValue] = useState("");
  const [selectedUser, setSelectedUser] = useState(null)

  const fetchMessages = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/messages/${username}`);
      console.log(response.data)
      setMessages(response.data.messages);
    } catch (error) {
      console.error("Error fetching messages:", error);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, [username]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`http://localhost:3001/message/${username}`, {
        sender: selectedUser.sender, // Assuming sender is the current user
        message: inputValue,
      });

      setInputValue("");
      // Update messages after sending the message
      fetchMessages();
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <div className="fixed top-1/2 z-20 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded-lg shadow-lg w-96 h-96 flex">
      <div className="w-1/3 pr-4 overflow-y-auto">
        <h2 className="text-xl font-bold mb-4">Users</h2>
        {/* Render list of users here */}
        
        <ul>
        {messages.map((message, index) => (
             <li onClick={()=>{setSelectedUser(message)}} key={index} className="mb-2 cursor-pointer">{message.sender}</li>
        ))}
        </ul>
      </div>
      <div className="w-2/3 pl-4 overflow-y-auto">
        <div className="flex justify-end">
          <button onClick={()=>{onClose(false)}} className="text-xl font-bold">
            X
          </button>
        </div>
        <h2 className="text-xl font-bold mb-4">Messages</h2>
        {/* Render messages for selected user here */}
        {selectedUser &&
             <div>
             { selectedUser.messages.map((msg, index) => (
               <div key={index} className="mb-4">
                 <p className="font-semibold">{msg.sender}</p>
                 <p>{msg.message}</p>
               </div>
             ))}
             </div>
        }
       
        {/* Input field and button to send messages */}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Type your message..."
            className="border border-gray-300 rounded-md p-2 w-full mb-2"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 font-semibold rounded-md"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatModalInfluencer;
