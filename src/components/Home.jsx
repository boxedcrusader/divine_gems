import React, { useState } from "react";
<<<<<<< HEAD
import { Link } from "react-router-dom";

function Home() {
  const [activeValue, setActiveValue] = useState(null);

  const coreValues = [
    {
      key: "E1",
      label: "E",
      title: "Educationally",
      desc: "Fostering a love for learning and academic excellence.",
    },
    {
      key: "M",
      label: "M",
      title: "Morally",
      desc: "Upholding integrity and ethical standards.",
    },
    {
      key: "P",
      label: "P",
      title: "Physically",
      desc: "Encouraging healthy habits and lifestyles.",
    },
    {
      key: "E2",
      label: "E",
      title: "Emotionally",
      desc: "Fostering resilience and emotional intelligence.",
    },
    {
      key: "S1",
      label: "S",
      title: "Socially",
      desc: "Building strong relationships and communities.",
    },
    {
      key: "S2",
      label: "S",
      title: "Spiritually",
      desc: "Believing in a higher power and purpose.",
    },
  ];

  const positions = [
    { top: "-1rem", left: "50%", transform: "translateX(-50%)" },
    { top: "25%", right: 0, transform: "translateX(0%)" },
    { bottom: "25%", right: 0, transform: "translateX(0%)" },
    { bottom: "-1rem", left: "50%", transform: "translateX(-50%)" },
    { bottom: "25%", left: 0, transform: "translateX(0%)" },
    { top: "25%", left: 0, transform: "translateX(0%)" },
  ];

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
        style={{ backgroundColor: "rgba(54, 0, 0, 0.7)", color: "#FFF9CA" }}
      >
        <div className="max-w-xl flex flex-col gap-6">
          <h1 className="text-6xl sm:text-7xl font-bold leading-tight">
            Divine Gems <br /> School <br />
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
        <h2 className="text-3xl mb-4">
          About Us
          <hr className="border-t-4 border-yellow-200 w-20 mx-auto mt-2" />
        </h2>

        <div className="max-w-6xl mx-auto mt-12 px-4 md:px-8 flex flex-col md:flex-row items-center justify-center gap-12 text-left">
          <div className="md:w-1/2 flex flex-col justify-center">
            <h3 className="text-4xl font-semibold">
              Be a Part of Our <br /> Academic Success Story
            </h3>
            <p className="text-base leading-relaxed mt-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="md:w-1/2 flex gap-4">
            <div className="w-1/2 h-[400px] overflow-hidden rounded">
              <img
                src="/nice_images/student_walking.jpg"
                alt="Student Walking"
                className="w-full h-full object-cover"
              />
            </div>
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

      <div className="bg-[#360000] justify-center items-center text-center py-10 px-4 text-[#FFF9CA]">
        <h2 className="text-3xl text-center mt-8 mb-4">
          Our Core Values
          <hr className="border-t-2 border-yellow-200 w-20 mx-auto mt-2 rounded" />
        </h2>
        <p>To educate a child:</p>
        <div className="relative w-80 h-80 mx-auto mt-12">
          {coreValues.map((item, index) => (
            <div
              key={item.key}
              className="absolute cursor-pointer"
              style={{ ...positions[index] }}
              onMouseEnter={() => setActiveValue(item)}
              onMouseLeave={() => setActiveValue(null)}
            >
              <div className="w-12 h-12 flex items-center justify-center bg-[#FFF9CA] rounded-full text-[#360000] font-bold">
                {item.label}
              </div>
            </div>
          ))}

          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-48 h-48 bg-[#360000] border-2 border-yellow-200 rounded p-4 text-#360000 flex flex-col items-center justify-center text-center">
              {activeValue ? (
                <>
                  <h4 className="font-bold text-lg">{activeValue.title}</h4>
                  <p className="text-sm mt-2">{activeValue.desc}</p>
                </>
              ) : (
                <>
                  <p className="hidden md:block opacity-50 text-sm text-center">
                    Hover on a letter to learn more.
                  </p>
                  <p className="block md:hidden text-sm text-center">
                    Tap on a letter to learn more.
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white text-[#360000] py-8 text-center">
        <h2 className="text-3xl mb-4">
          Message from the Headmistress
          <hr className="border-t-4 border-yellow-200 w-72 mx-auto mt-2" />
        </h2>

        <div className="max-w-4xl mx-auto mt-12 px-4 md:px-8 text-center text-[#360000]">
          <p className="text-base leading-relaxed mt-6">
            Welcome to Divine Gems School! At Divine Gems School, we're
            dedicated to nurturing the next generation of leaders, innovators,
            and changemakers. Our commitment to academic excellence, character
            development, and holistic growth empowers our learners to shine in
            every aspect of life. We strive to create a supportive and inclusive
            environment that fosters creativity, curiosity, and a love for
            learning. <br />
            <br />
            Join us on this journey of discovery, growth, and excellence!
          </p>
        </div>
      </div>
    </div>
=======
import Testimonials from "./Testimonials";
import Address from "./Address";
import Home_About from "./Home-About";
import Core_Values from "./Core-Values";
import Join from "./Join";

function Home() {
  return (
    <>
      <div className="relative">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/nice_images/lie_down.jpg')",
            zIndex: -1,
          }}
        ></div>
        <Join />
      </div>
      <Home_About />
      <Core_Values />
      <Address />
      <Testimonials />
    </>
>>>>>>> 057d235 (Home page done)
  );
}

export default Home;
