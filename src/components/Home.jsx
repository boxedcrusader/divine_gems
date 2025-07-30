import React, { useState } from "react";
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
  );
}

export default Home;
