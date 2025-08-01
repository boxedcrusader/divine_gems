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
            <div className="md:w-2/3 text-[#360000] text-lg leading-relaxed text-center md:text-left space-y-6">
              {/* Heading Section */}
              <div className="text-center md:text-left">
                <h3 className="text-3xl font-bold">Divine Gems School</h3>
                <div className="flex justify-center md:justify-start">
                  <hr className="border-t-4 border-yellow-200 w-36 mt-2" />
                </div>
              </div>

              {/* Subheading */}
              <div>
                <h4 className="text-2xl font-semibold mb-2">
                  Message from the Director
                </h4>
              </div>

              {/* Message Paragraph */}
              <p className="text-base leading-relaxed mt-6">
                At Divine Gems School, we're not just building a foundation for
                learning – we're igniting a spark for life! As director, I'm
                thrilled to lead a team of passionate educators who share a
                common vision: to empower students to shine. Our nurturing
                environment, combined with academic rigour and moral guidance,
                sets our students up for success. From accelerated progress to
                external wins, our achievements speak for themselves. Join us on
                this journey of discovery and growth. <br />
                <br />
                Let's unlock your child's full potential and shape the leaders
                of tomorrow!
              </p>
              
              {/* Signature */}
              <p className="font-bold mt-4 text-xl">Nic Uzor</p>
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
          <hr className="px-16 md:px-64 border-t-4 border-yellow-200" />
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
