import React from 'react';

const Footer = () => {
  return (
    <div>
    {/* // <footer className="bg-gray-800 text-white text-center py-4 relative">
    //   <p>&copy; 2024 Phantom. All rights reserved.</p>
    //   <button className="absolute bottom-4 right-4 bg-blue-600 text-white rounded-full py-2 px-4 hover:bg-blue-700">
    //     Back to Top
    //   </button>
    // </footer> */}

    {/* Footer */}
       <footer className="bg-gray-900 text-white py-12">
        <div className="footer-content max-w-screen-xl mx-auto flex justify-between items-center flex-wrap gap-8">
          <div className="footer-links">
            <h3 className="text-2xl font-semibold mb-4">Quick Links</h3>
            <ul>
              <li><a href="index.html" className="text-blue-400 leading-5 hover:text-white">Home</a></li>
              <li><a href="about.html" className="text-blue-400 leading-5 hover:text-white">About</a></li>
              <li><a href="contact.html" className="text-blue-400 hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div className="social-media">
            <h3 className="text-2xl font-semibold mb-4">Follow Us</h3>
            <a href="#" className="text-blue-400 hover:text-white mr-6">Facebook</a>
            <a href="#" className="text-blue-400 hover:text-white mr-6">Twitter</a>
            <a href="#" className="text-blue-400 hover:text-white">Instagram</a>
          </div>
        </div>
        <p className="text-center mt-6">&copy; 2024 Phantom. All rights reserved.</p>
      </footer>
     </div>
  );
};

export default Footer;
