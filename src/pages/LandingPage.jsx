import React from 'react';

const LandingPage = () => {

  const [ischatOpen, setIsChatOpen] = React.useState(false);
  const [messages, setMessages] = React.useState([]);
  const [userInput, setUserInput] = React.useState('');


  const responses = {
    hello: "Hi there! How can I help you?",
    help: "Sure! Please tell me more about what you need help with.",
    services: "We offer web design, branding, and digital marketing. Which one interests you?",
    default: "I'm not sure about that. Can you rephrase or ask something else?",
  };

  // Function to handle toggling the chatbot and adding an initial message
  const toggleChatbot = () => {
    setIsChatOpen((prev) => {
      if (!prev) {
        // Add an initial message when opening the chatbot
        setMessages([{ sender: 'bot', text: 'Hi! Welcome to Phantom. How can I assist you today?' }]);
      }
      return !prev;
    });
  };

  // Function to handle sending a message
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
  // Scroll to section function
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-gray-50">
      

      {/* Hero Section */}
      <section className="hero bg-gradient-to-r from-blue-800 to-blue-600 text-white text-center py-20 px-4 clip-path-polygon">
        <h1 className="text-4xl font-bold mb-4">Welcome to Phantom</h1>
        <p className="text-xl mb-6">Your trusted partner in [business/service]</p>
        <button
          className="bg-yellow-400 text-gray-800 px-8 py-3 font-semibold rounded-lg transition-all duration-300 hover:bg-yellow-500"
          onClick={() => scrollToSection('services')}
        >
          Learn More
        </button>
      </section>

      {/* Services Section */}
      <section id="services" className="services max-w-screen-xl mx-auto py-16 px-4 text-center">
        <h2 className="text-3xl font-bold text-blue-600 mb-8">Our Services</h2>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="service-item bg-white p-8 rounded-lg shadow-md transition-transform duration-300 hover:transform hover:translate-y-4">
            <img src="./assets/profile pic-png.png" alt="Service 1" className="w-32 h-32 mb-6 mx-auto" />
            <h3 className="text-2xl font-semibold mb-4">Service One</h3>
            <p className="text-lg text-gray-600">Here in HELIX, we have the best visual brand designers.</p>
          </div>
          <div className="service-item bg-white p-8 rounded-lg shadow-md transition-transform duration-300 hover:transform hover:translate-y-4">
            <img src="./assets/WhatsApp Image 2024-12-27 at 01.26.45_ceb677fb.jpg" alt="Service 2" className="w-32 h-32 mb-6 mx-auto" />
            <h3 className="text-2xl font-semibold mb-4">Service Two</h3>
            <p className="text-lg text-gray-600">Description of the second service offered by Phantom.</p>
          </div>
          <div className="service-item bg-white p-8 rounded-lg shadow-md transition-transform duration-300 hover:transform hover:translate-y-4">
            <img src="./assets/WhatsApp Image 2024-12-27 at 01.26.46_552352b3.jpg" alt="Service 3" className="w-32 h-32 mb-6 mx-auto" />
            <h3 className="text-2xl font-semibold mb-4">Service Three</h3>
            <p className="text-lg text-gray-600">Description of the third service offered by Phantom.</p>
          </div>
        </div>
      </section>

     
       {/* Chatbot */}
       <div
        className="fixed bottom-5 right-5 bg-blue-600 p-4 rounded-full shadow-lg cursor-pointer transition-transform duration-300 hover:scale-110"
        onClick={() => setIsChatOpen(!ischatOpen)}
      >
        <button className="text-white text-xl font-semibold">Chat With Us</button>
      </div>

      {ischatOpen && (
        <div className="fixed bottom-16 right-5 bg-white w-96 p-4 rounded-lg shadow-lg border border-gray-300">
          <div className="flex justify-between items-center border-b pb-2 mb-2">
            <h3 className="text-lg font-semibold">Chatbot</h3>
            <button
              className="text-gray-500 hover:text-red-500"
              onClick={() => setIsChatOpen(false)}
            >
              ✖
            </button>
          </div>
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

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="footer-content max-w-screen-xl mx-auto flex justify-between items-center flex-wrap gap-8">
          <div className="footer-links">
            <h3 className="text-2xl font-semibold mb-4">Quick Links</h3>
            <ul>
              <li><a href="index.html" className="text-yellow-400 hover:text-white">Home</a></li>
              <li><a href="about.html" className="text-yellow-400 hover:text-white">About Us</a></li>
              <li><a href="contact.html" className="text-yellow-400 hover:text-white">Contact Us</a></li>
            </ul>
          </div>
          <div className="social-media">
            <h3 className="text-2xl font-semibold mb-4">Follow Us</h3>
            <a href="#" className="text-yellow-400 hover:text-white mr-6">Facebook</a>
            <a href="#" className="text-yellow-400 hover:text-white mr-6">Twitter</a>
            <a href="#" className="text-yellow-400 hover:text-white">Instagram</a>
          </div>
        </div>
        <p className="text-center mt-6">&copy; 2024 Phantom. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
