import React, { useState } from 'react';

const ChatBot = () => {
  const [isActive, setIsActive] = useState(false);
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState('');

  const responses = {
    hello: "Hi there! How can I help you?",
    help: "Sure! Please tell me more about what you need help with.",
    services: "We offer web design, branding, and digital marketing. Which one interests you?",
    default: "I'm not sure about that. Can you rephrase or ask something else?",
  };

  // Toggle chatbot visibility
  const toggleChatBot = () => {
    setIsActive((prev) => {
      if (!prev) {
        setMessages([{ sender: 'bot', text: 'Hi! Welcome to our support. How can I assist you today?' }]);
      }
      return !prev;
    });
  };

  // Handle sending a message
  const sendMessage = () => {
    if (userInput.trim()) {
      const userMessage = userInput.toLowerCase().trim();
      const botResponse = responses[userMessage] || responses.default;

      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: 'user', text: userInput },
        { sender: 'bot', text: botResponse },
      ]);

      setUserInput('');
    }
  };

  return (
    <div className="fixed bottom-5 right-5 z-10">
      {/* Chatbot toggle button */}
      <div className={`bg-blue-600 p-4 rounded-full shadow-lg ${isActive ? 'hidden' : 'block'}`}>
        <button
          className="text-white rounded-full py-2 px-4 hover:bg-blue-700"
          onClick={toggleChatBot}
        >
          Chat
        </button>
      </div>

      
      {isActive && (
        <div className="bg-white w-96 p-4 rounded-lg shadow-lg border border-gray-300">
          {/* Chatbot Header */}
          <div className="flex justify-between items-center border-b pb-2 mb-2">
            <h3 className="text-lg font-semibold">Chatbot</h3>
            <button
              className="text-gray-500 hover:text-red-500"
              onClick={toggleChatBot}
            >
              ✖
            </button>
          </div>

          {/* Chatbot Messages */}
          <div className="chatbot-messages h-64 overflow-y-auto p-2 bg-gray-100">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`mb-2 p-2 rounded-lg ${
                  message.sender === 'user' ? 'bg-blue-600 text-white self-end' : 'bg-gray-300 text-black'
                }`}
                style={{
                  alignSelf: message.sender === 'user' ? 'flex-end' : 'flex-start',
                }}
              >
                {message.text}
              </div>
            ))}
          </div>

          {/* Chatbot Input */}
          <div className="mt-2 flex">
            <input
              type="text"
              placeholder="Type your message..."
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              className="flex-1 p-2 border rounded-lg"
              onKeyDown={(e) => {
                if (e.key === 'Enter') sendMessage();
              }}
            />
            <button
              className="bg-blue-600 text-white px-4 py-2 rounded-lg ml-2"
              onClick={sendMessage}
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBot;
