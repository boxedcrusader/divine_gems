import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Contact() {
  return (
    <>
    < Navbar/>
      {/* Hero Section */}
      <div className="relative text-white text-center py-24 px-4">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/nice_images/student_smilling.jpg')",
            zIndex: -2,
          }}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#360000]/70 z-[-1]" />
        <h2 className="text-4xl md:text-6xl font-semibold drop-shadow-md">
          Contact Us
        </h2>
        <hr className="border-t-4 border-yellow-200 w-36 mx-auto mt-4" />
      </div>

      {/* Contact Section */}
      <div className="bg-white text-[#360000] px-4 md:px-16 py-20">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Contact Form */}
          <form className="space-y-6">
            <h3 className="text-2xl font-bold text-center">Send a Message</h3>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-300"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-300"
            />
            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-300"
            />
            <button
              type="submit"
              className="bg-[#360000] text-[#FFF9CA] px-6 py-3 rounded shadow-md hover:bg-[#4d1a1a]"
            >
              Send
            </button>
          </form>

          {/* Contact Info */}
          <div className="space-y-6 text-center md:text-left">
            <h3 className="text-2xl font-bold">Get in Touch</h3>
            <p>
              <strong>Phone:</strong> +234 801 234 5678
            </p>
            <p>
              <strong>Email:</strong> info@divinegems.com
            </p>
            <p>
              <strong>Address:</strong> 123 Education Avenue, Abuja, Nigeria
            </p>
            <div className="mt-6">
              <iframe
                title="Google Map"
                src="https://maps.google.com/maps?q=lagos&t=&z=13&ie=UTF8&iwloc=&output=embed"
                className="w-full h-64 rounded-md shadow-md"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
