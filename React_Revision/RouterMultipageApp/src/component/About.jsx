import React from 'react'

function About() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-4xl p-6 bg-white rounded-2xl shadow-md">
        <h2 className="text-3xl font-bold text-center text-gray-800">About Us</h2>
        <p className="mt-4 text-gray-600 text-lg text-center">
          Welcome to our platform! We are dedicated to providing top-notch solutions and 
          services to cater to your needs. Our team consists of experienced professionals 
          who are passionate about technology and innovation.
        </p>
        <p className="mt-4 text-gray-600 text-lg text-center">
          Our mission is to empower individuals and businesses with reliable and efficient 
          tools, ensuring seamless experiences and long-term satisfaction. Thank you for 
          trusting us as your go-to service provider.
        </p>
        <div className="mt-6 text-center">
          <button
            className="px-6 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}


export default About