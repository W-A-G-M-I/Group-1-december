// import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/ph-logo.webp'

const Header = () => {
  return (
    <header className="bg-white text-black flex justify-between items-center px-20">
      <div>
        <img src={Logo} alt="" className='w-16 h-14'/>
      </div>
      <nav>
        <ul className="flex justify-center space-x-6 font-bold">
          <li><Link to="/" className="hover:text-gray-500">Home</Link></li>
          <li><Link to="/about" className="hover:text-gray-500">About</Link></li>
          <li><Link to="/contact" className="hover:text-gray-500">Contact</Link></li>
          <li><Link to="/contact" className="hover:text-gray-500">Service</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
