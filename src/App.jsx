// import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import {BrowserRouter} from "react-dom"
import AboutUsPage from './pages/AboutUsPage';
import LandingPage from './pages/LandingPage'; 
import Header from './components/Header';
import Footer from './components/Footer';
import ChatBot from './components/Chatbot';
import ContactUsPage from './pages/ContactUsPage';
import ServiceUsPage from './pages/ServiceUsPage';

function App() {
  return (
    <Router>
      <div className="relative">
        <Header />
        <LandingPage/>
        <AboutUsPage/>
        <ContactUsPage/>
        <ServiceUsPage/>
        <ChatBot />
        {/* <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/contact" element={<ContactUsPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
