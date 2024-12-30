// import React from 'react'
import Service1 from '../assets/service1.jpg';
import Service2 from '../assets/service2.jpg';
import Service3 from '../assets/service3.jpg';

const ServiceUsPage = () => {
  return (
    <div>
         {/* Services Section */}
      <section id="services" className="services max-w-screen-xl mx-auto py-16 px-4 text-center">
        <h2 className="text-3xl font-bold text-blue-600 mb-8">Our Services</h2>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="service-item bg-white p-8 rounded-lg shadow-md transition-transform duration-300 hover:transform hover:translate-y-4">
            <img src={Service1} alt="Service 1" className=" mb-6 mx-auto " />
            <h3 className="text-2xl font-semibold mb-4">Service One</h3>
            <p className="text-lg text-gray-600">Here in Phantom, we have the best visual brand designers.</p>
          </div>
          <div className="service-item bg-white p-8 rounded-lg shadow-md transition-transform duration-300 hover:transform hover:translate-y-4">
            <img src={Service2} alt="Service 2" className=" mb-6 mx-auto" />
            <h3 className="text-2xl font-semibold mb-4">Service Two</h3>
            <p className="text-lg text-gray-600">Description of the second service offered by Phantom.</p>
          </div>
          <div className="service-item bg-white p-8 rounded-lg shadow-md transition-transform duration-300 hover:transform hover:translate-y-4">
            <img src={Service3} alt="Service 3" className=" mb-6 mx-auto" />
            <h3 className="text-2xl font-semibold mb-4">Service Three</h3>
            <p className="text-lg text-gray-600">Description of the third service offered by Phantom.</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ServiceUsPage