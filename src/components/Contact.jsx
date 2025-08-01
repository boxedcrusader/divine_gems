import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Contact() {
  return (
    <>
      <Navbar />

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
              <strong>Contact our Infodesk:</strong> <a href="https://chat.whatsapp.com/IWdegKOk0z426qh8x0xIwN?mode=ac_t">Infodesk</a>
            </p>
            <p>
              <strong>Email:</strong> <a href="mailto:divinegemsschool@gmail.com">divinegemsschool@gmail.com</a>
            </p>
            <p>
              <strong>Address:</strong> 12, Ado-odo Street, Cement Bus-stop,
              Onilekere Ikeja Lagos
            </p>
            <div className="mt-6">
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1984.3969789854144!2d3.3172123!3d6.6029221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b9116112c99c3%3A0x11851d0a5a38e8d!2sDivine%20Gems%20Nursery%20and%20Primary%20School!5e0!3m2!1sen!2sng!4v1713360543907!5m2!1sen!2sng"
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
