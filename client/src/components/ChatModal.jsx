import React, { useContext } from "react";
import { IoIosSend } from "react-icons/io";
import { BsChat } from "react-icons/bs";
import axios from "axios";
import { useState } from "react";
import { AuthContext } from "../contexts/AuthContext";

const ChatModal = ({ user, setIsModalOpen }) => {
  const {loggedInUser} = useContext(AuthContext)
  const [messages, setMessages] = useState([
    {
      text: `Hi, here is ${user.fullName} , a ${user.niche} and an influencer. Thanks for reaching me out. Kindly leave your message for me...`,
      sender: user.fullName,
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const handleMessageSubmit = async (e) => {
    e.preventDefault();
    if (inputValue.trim() !== "") {
      // Update local state
      setMessages([...messages, { text: inputValue, sender: "You" }]);
      setInputValue("");

      // Send message to the endpoint
      try {
        const response = await axios.post(`http://localhost:3001/message/${user.username}`, {
          sender: loggedInUser.firstName,
          message: inputValue,
        });
        console.log(response.data);
      } catch (error) {
        console.error("Error sending message:", error);
      }
    }
  };


  return (
    <>
      <div className="fixed top-16 left-0 w-screen h-screen z-20 bg-gray-800 bg-opacity-50 flex">
        <div className="bg-white top-10 rounded-lg p-4  mx-auto w-[23%] h-[50%]">
          <div c lassName="chat flex">
            <div className="svg flex justify-between mt-1 mr-0.5">
              {" "}
              <BsChat size={20} />
            <p className="font-semibold text-xl">Chat with influencer!</p>
            <button onClick={()=>{setIsModalOpen(false)}} className="text-2xl ">X</button>
            </div>
          </div>
          <div className="">
            <div
              className="border-t-2 border-b-2 flex flex-col
                        w-[21vw] p-4 h-[35vh] overflow-y-auto"
            >
              {messages.map((message, index) => (
                <div key={index}  className={`mb-2 ${message.sender === "You" ? "self-end" :""}`}>
                  <span className="font-bold">
                    {message.sender}:
                  </span>
                  <div className="mymsg bottom-1">{message.text}</div>
                </div>
              ))}
            </div>
            <form onSubmit={handleMessageSubmit}>
              <div className="wrap flex justify-between">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  className="border-0 outline-none border-gray-300 rounded-md p-2 mr-2"
                  placeholder="Type your message..."
                />
                <button type="submit">
                  <div className="svg1 pt-2 ">
                    <IoIosSend size={20} />
                  </div>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatModal;
