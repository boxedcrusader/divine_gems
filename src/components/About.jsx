import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function About() {
  return (
    <>
      <Navbar />

      {/* Header Section */}
      <div className="relative">
        <div className="absolute inset-0 bg-cover bg-center" style={{}}></div>
        <div
          className="relative flex items-center justify-center px-4 md:px-16 py-28"
          style={{
            backgroundImage: "url('/nice_images/class_in_playground.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-[#360000]/70 z-0"></div>

          {/* Content */}
          <div className="relative z-10 text-center text-[#FFF9CA]">
            <h2 className="text-5xl md:text-8xl">About us</h2>
          </div>
        </div>

        {/* Intro Section */}
        <div className="bg-white text-3xl text-[#360000] py-5 px-4 md:px-16">
          {/* About Paragraph + Image */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 py-16">
            <div className="md:w-2/3 text-[#360000] text-lg leading-relaxed text-center md:text-left">
              <div className="text-center md:text-left">
                <h3 className="font-bold">Divine Gems School</h3>
                <div className="flex justify-center md:justify-start">
                  <hr className="border-t-4 border-yellow-200 w-36 mt-2" />
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                vulputate, eros nec bibendum vestibulum, metus ipsum malesuada
                ligula, vel tincidunt nulla nulla at erat. Ut vitae sapien nec
                elit luctus malesuada. Nunc imperdiet, nibh non eleifend
                egestas, nulla arcu laoreet purus, a tincidunt lorem leo sed
                quam. Aliquam erat volutpat. Vivamus sed orci eget lorem dapibus
                faucibus. Etiam et velit vel arcu commodo convallis. Suspendisse
                id feugiat magna, ac accumsan nisl. Sed pretium, felis at
                iaculis dictum, metus diam volutpat purus, sed convallis nisi
                risus nec justo.
              </p>
            </div>

            <div className="md:w-1/3">
              <img
                src="/profile.jpg"
                alt="Director"
                className="w-full max-w-sm rounded-md shadow-md"
              />
            </div>
          </div>
        </div>

        {/* Divider */}
        <div>
          <hr className="px-4 md:px-16 border-[#360000]" />
        </div>

        {/* Vision Statement Section */}
        <div className="bg-white text-3xl text-[#360000] py-16 px-4 md:px-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Image Section */}
            <div className="md:w-1/2">
              <img
                src="/nice_images/chess_club.jpg"
                alt="Chess Club"
                className="w-full rounded-md shadow-md"
              />
            </div>

            {/* Text Section */}
            <div className="md:w-1/2 text-center md:text-right">
              <h3 className="font-semibold">Vision Statement</h3>
              <div className="flex justify-center md:justify-end">
                <hr className="border-t-4 border-yellow-200 w-36 mt-2 mb-4" />
              </div>
              <p className="text-lg leading-relaxed">
                To provide education in a safe, warm, and supportive atmosphere
                and to foster individuals' social, emotional, and academic
                growth, we create an environment where every learner feels
                valued, respected, and empowered. Our classrooms are designed to
                nurture curiosity and creativity, with educators who are not
                only passionate about teaching but also committed to
                understanding each student’s unique needs. Beyond academics, we
                prioritize emotional well-being through mentorship, open
                communication, and inclusive practices that help build
                confidence and resilience. By cultivating a culture of kindness,
                collaboration, and high expectations, we prepare students to
                thrive both in school and in life.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default About;
