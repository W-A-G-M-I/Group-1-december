import { useState } from "react";

function ContactUsPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to backend or email
    console.log({ name, email, message });
    // Reset form fields
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div>
    

      <section className="max-w-2xl mx-auto my-12 bg-white p-8 border border-gray-300 rounded-lg shadow-lg">
        <h1 className="text-2xl text-center text-gray-800 mb-6">Contact Us</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          <input
            type="text"
            id="name"
            placeholder="Your Name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="p-3 border border-gray-300 rounded-lg text-lg"
          />
          <input
            type="email"
            id="email"
            placeholder="Your Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-3 border border-gray-300 rounded-lg text-lg"
          />
          <textarea
            id="message"
            placeholder="Your Message"
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="p-3 border border-gray-300 rounded-lg text-lg min-h-[150px]"
          />
          <button type="submit" className="bg-gray-800 text-white p-3 rounded-lg text-lg hover:bg-gray-600">
            Send Message
          </button>
        </form>
      </section>

      {/* Chatbot */}
      <div id="chatbot" className="fixed bottom-5 right-5 bg-gray-800 p-4 rounded-full shadow-lg cursor-pointer hover:scale-110 transition-transform duration-300">
        <button id="ChatButton" className="text-white text-xl font-bold">
          Chat
        </button>
      </div>
    </div>
  );
}

export default ContactUsPage;
