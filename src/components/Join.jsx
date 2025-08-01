import React from "react";
import { Link } from "react-router-dom";

function Join() {
  return (
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
        <div>
          
        </div>
      </div>
      <div className="max-w-sm w-full">
        <img
          src="/nice_images/lie_down.jpg"
          alt="student lying down"
          className="w-full h-auto rounded shadow-lg"
        />
      </div>
    </div>
  );
}

export default Join;
