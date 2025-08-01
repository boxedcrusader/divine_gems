import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Gallery() {
  return (
    <>
      <Navbar />

      <div className="bg-white text-[#360000] px-4 md:px-16 py-20 text-center">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-6xl font-semibold">Gallery</h2>
          <hr className="border-t-4 border-yellow-200 w-36 mx-auto mt-4" />
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <img
            src="/nice_images/grad_pics.jpg"
            alt="Playground Fun"
            className="rounded-lg shadow-md w-full h-auto object-cover"
          />
          <img
            src="/nice_images/chess_club.jpg"
            alt="Chess Club"
            className="rounded-lg shadow-md w-full h-auto object-cover"
          />
          <img
            src="/nice_images/look_up.jpg"
            alt="Class Outdoors"
            className="rounded-lg shadow-md w-full h-auto object-cover"
          />
          <img
            src="/nice_images/3_kids_at_playground.jpg"
            alt="Graduation"
            className="rounded-lg shadow-md w-full h-auto object-cover"
          />
          <img
            src="/nice_images/music_class.jpg"
            alt="Relaxing Moment"
            className="rounded-lg shadow-md w-full h-auto object-cover"
          />
          <img
            src="/nice_images/class_in_playground.jpg"
            alt="Inquisitive Look"
            className="rounded-lg shadow-md w-full h-auto object-cover"
          />
          <img
            src="/nice_images/lie_down.jpg"
            alt="Music Class"
            className="rounded-lg shadow-md w-full h-auto object-cover"
          />
          <img
            src="/nice_images/red_cross.jpg"
            alt="Red Cross Activity"
            className="rounded-lg shadow-md w-full h-auto object-cover"
          />
          <img
            src="/nice_images/science_club.jpg"
            alt="Science Club"
            className="rounded-lg shadow-md w-full h-auto object-cover"
          />
          <img
            src="/nice_images/student_smilling.jpg"
            alt="Happy Student"
            className="rounded-lg shadow-md w-full h-auto object-cover"
          />
          <img
            src="/nice_images/student_smilling_2.jpg"
            alt="Smiling Student"
            className="rounded-lg shadow-md w-full h-auto object-cover"
          />
          <img
            src="/nice_images/student_walking.jpg"
            alt="Walking Student"
            className="rounded-lg shadow-md w-full h-auto object-cover"
          />
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Gallery;
