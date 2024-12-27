import React from 'react';

const LandingPage = () => {
  // Scroll to section function
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-gray-50">
      {/* Header */}
      

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
      <div id="chatbot" className="fixed bottom-5 right-5 bg-blue-600 p-4 rounded-full shadow-lg cursor-pointer transition-transform duration-300 hover:scale-110">
        <button className="text-white text-xl font-semibold">Chat With Us</button>
      </div>

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
