import React, { useState } from 'react';

const ChatBot = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleChatBot = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={`fixed bottom-5 right-5 z-10 ${isActive ? 'block' : 'hidden'}`}>
      <div className="bg-blue-600 p-4 rounded-full shadow-lg">
        <button
          className="bg-blue-600 text-white rounded-full py-2 px-4 hover:bg-blue-700"
          onClick={toggleChatBot}
        >
          Chat With Us
        </button>
      </div>
    </div>
  );
};

export default ChatBot;
