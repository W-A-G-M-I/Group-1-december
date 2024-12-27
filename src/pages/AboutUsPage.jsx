import React from 'react';

const AboutUsPage = () => {
  return (
    <div>
      <section className="bg-blue-100 py-8 text-center">
        <h1 className="text-4xl font-semibold mb-4">About Us</h1>
        <p className="text-lg max-w-2xl mx-auto">
          We are a company dedicated to providing the best service. Our mission is to help you achieve your goals with top-notch service and support.
        </p>
      </section>

      <section className="py-8 text-center">
        <h2 className="text-3xl font-semibold mb-4">Meet Our Team</h2>
        <div className="flex justify-center gap-8 flex-wrap">
          <div className="bg-white border border-gray-300 rounded-lg p-4 max-w-xs text-center shadow-lg hover:shadow-xl transition-shadow">
            <img src="team-member1.jpg" alt="Team Member 1" className="w-24 h-24 rounded-full mx-auto mb-4" />
            <h3 className="text-xl font-semibold">John Doe</h3>
            <p>CEO & Founder</p>
            <div className="mt-4 hidden group-hover:block">
              <p>John has over 20 years of experience in the industry and is passionate about innovation.</p>
              <a href="#" className="text-blue-600">LinkedIn</a>
            </div>
          </div>

          <div className="bg-white border border-gray-300 rounded-lg p-4 max-w-xs text-center shadow-lg hover:shadow-xl transition-shadow">
            <img src="team-member2.jpg" alt="Team Member 2" className="w-24 h-24 rounded-full mx-auto mb-4" />
            <h3 className="text-xl font-semibold">Jane Smith</h3>
            <p>Chief Marketing Officer</p>
            <div className="mt-4 hidden group-hover:block">
              <p>Jane specializes in brand strategy and customer engagement.</p>
              <a href="#" className="text-blue-600">LinkedIn</a>
            </div>
          </div>

          <div className="bg-white border border-gray-300 rounded-lg p-4 max-w-xs text-center shadow-lg hover:shadow-xl transition-shadow">
            <img src="team-member3.jpg" alt="Team Member 3" className="w-24 h-24 rounded-full mx-auto mb-4" />
            <h3 className="text-xl font-semibold">Michael Brown</h3>
            <p>Lead Developer</p>
            <div className="mt-4 hidden group-hover:block">
              <p>Michael is a tech enthusiast and has led the development of multiple successful projects.</p>
              <a href="#" className="text-blue-600">GitHub</a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-blue-600 text-white py-8 text-center">
        <h2 className="text-3xl font-semibold mb-4">What Our Clients Say</h2>
        <div className="max-w-2xl mx-auto">
          <div className="bg-white bg-opacity-20 text-lg p-4 rounded-lg mb-4">
            <p>"This company transformed our business! Their service is outstanding."</p>
            <p>- Client A</p>
          </div>
          <div className="bg-white bg-opacity-20 text-lg p-4 rounded-lg mb-4">
            <p>"Excellent support and great results. Highly recommended!"</p>
            <p>- Client B</p>
          </div>
        </div>
      </section>

      <section className="py-8 text-center">
        <h2 className="text-3xl font-semibold mb-4">Frequently Asked Questions</h2>
        <div className="max-w-2xl mx-auto">
          <div className="faq-item mb-4">
            <h3 className="cursor-pointer text-xl text-blue-600">What services do you offer?</h3>
            <p className="answer hidden text-lg">We offer a variety of services to help you reach your goals. Visit our Home page for more details.</p>
          </div>
          <div className="faq-item mb-4">
            <h3 className="cursor-pointer text-xl text-blue-600">How can I get in touch?</h3>
            <p className="answer hidden text-lg">You can contact us via the Contact Us page.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsPage;
