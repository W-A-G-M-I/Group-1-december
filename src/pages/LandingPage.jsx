// import React from 'react';
// import bgImage from "../assets/background-image.jpg"

const LandingPage = () => {
  // Scroll to section function
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="">
      {/* Header */}
      

      {/* Hero Section */}
      <section className=" bg-[url('/assets/background-image.jpg')] bg-center bg-cover bg-no-repeat text-black text-center w-full h-screen">
        <div className="pt-48">
        <h1 className="text-6xl text-white font-bold  mb-4">Welcome to Phantom</h1>
        <p className="text-2xl text-white mb-16">At Phantom, we help businesses grow and thrive with tailored solutions that drive results. Our team of experts is dedicated to delivering exceptional services that empower your business to reach new heights.</p>
        <button
          className="bg-yellow-400 text-gray-800 px-8 py-3 font-semibold rounded-lg transition-all duration-300 hover:bg-yellow-500"
          onClick={() => scrollToSection('services')}
        >
          Learn More
        </button>
        </div>
      </section>

    </div>
  );
};

export default LandingPage;