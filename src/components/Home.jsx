import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="relative">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/nice_images/lie_down.jpg')",
          zIndex: -1,
        }}
      ></div>
      <div
        className="flex items-center justify-center gap-16 px-8 py-16 flex-wrap"
        style={{
          backgroundColor: "rgba(54, 0, 0, 0.7)",
          color: "#FFFFFF",
        }}
      >
        <div className="max-w-xl flex flex-col gap-6">
          <h1 className="text-6xl sm:text-7xl font-bold leading-tight">
            Divine Gem <br /> School <br />
            <hr className="border-t-4 border-yellow-200 w-72" />
          </h1>

          <p className="text-xl sm:text-xl leading-relaxed">
            We create opportunities for academic growth in a supportive
            environment. Our goal is to build confident, disciplined, and
            self-reliant learners.
          </p>

          <Link
            to="/admission"
            className="inline-flex items-center gap-2 w-fit bg-white text-[#360000] px-4 py-2 font-semibold rounded shadow hover:bg-yellow-100 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
            >
              <g fill="none">
                <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></path>
                <path
                  fill="currentColor"
                  d="M16 14a5 5 0 0 1 5 5v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1a5 5 0 0 1 5-5zm4-6a1 1 0 0 1 1 1v1h1a1 1 0 1 1 0 2h-1v1a1 1 0 1 1-2 0v-1h-1a1 1 0 1 1 0-2h1V9a1 1 0 0 1 1-1m-8-6a5 5 0 1 1 0 10a5 5 0 0 1 0-10"
                ></path>
              </g>
            </svg>
            Join Us
          </Link>
        </div>

        <div className="max-w-sm w-full">
          <img
            src="/nice_images/lie_down.jpg"
            alt="student lying down"
            className="w-full h-auto rounded shadow-lg"
          />
        </div>
      </div>

      <div className="bg-white text-[#360000] text-center py-16 px-4">
        {/* Heading */}
        <h2 className="text-3xl mb-4">
          About Us
          <hr className="border-t-2 border-black w-20 mx-auto mt-2" />
        </h2>

        {/* Content Container */}
        <div className="max-w-6xl mx-auto mt-12 px-4 md:px-8 flex flex-col md:flex-row items-center justify-center gap-12 text-left">
          {/* Text Section */}
          <div className="md:w-1/2 flex flex-col justify-center">
            <h3 className="text-4xl font-semibold">
              Be a Part of Our <br /> Academic Success Story
            </h3>
            <p className="text-base leading-relaxed mt-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </p>
          </div>

          {/* Image Section */}
          <div className="md:w-1/2 flex gap-4">
            {/* Tall Image */}
            <div className="w-1/2 h-[400px] overflow-hidden rounded">
              <img
                src="/nice_images/student_walking.jpg"
                alt="Student Walking"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Two Stacked Images */}
            <div className="w-1/2 flex flex-col gap-4">
              <div className="h-[200px] overflow-hidden rounded">
                <img
                  src="/nice_images/student_smilling_2.jpg"
                  alt="Smiling Student"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="h-[200px] overflow-hidden rounded">
                <img
                  src="/nice_images/grad_pics.jpg"
                  alt="Graduation"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#360000] justify-center items-center text-center py-16 px-4"
      style={{ color: "#FFF9CA" }}>
        <div>
          <h2 className="text-3xl text-center mt-8 mb-4">
            Our core values
            <hr className="border-t-5 w-30 mx-auto mt-2 rounded"/>
          </h2>
        </div>
        <div>
          <div><p>E</p></div>
          <div><p>M</p></div>
          <div><p>P</p></div>
          <div><p>E</p></div>
          <div><p>S</p></div>
          <div><p>S</p></div>
        </div>
      </div>
    </div>
  );
}

export default Home;
