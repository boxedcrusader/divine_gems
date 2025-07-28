import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      className="sticky top-0 z-50 shadow-md"
      style={{ backgroundColor: "#FFF9C4"}}
    >
      <div className="w-full h-20 flex items-center justify-center px-4 sm:px-6 md:px-8">
        <div className="flex items-center h-full mr-30">
          <img src="/school_logo.png" alt="logo" className="h-56 w-auto mt-5" />
        </div>
        <div
          className="flex space-x-10 sm:gap-8 text-lg sm:text-base font-semibold mr-25"
          style={{ color: "#360000" }}
        >
          <div>
            <Link>Home</Link>
          </div>
          <div>
            <Link>About</Link>
          </div>
          <div>
            <Link>Admission</Link>
          </div>
          <div>
            <Link>Gallery</Link>
          </div>
          <div>
            <Link>Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
