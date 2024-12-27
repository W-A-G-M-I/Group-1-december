import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white text-center py-4 relative">
      <p>&copy; 2024 Phantom. All rights reserved.</p>
      <button className="absolute bottom-4 right-4 bg-blue-600 text-white rounded-full py-2 px-4 hover:bg-blue-700">
        Back to Top
      </button>
    </footer>
  );
};

export default Footer;
