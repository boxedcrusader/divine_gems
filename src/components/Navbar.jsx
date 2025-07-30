import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className="sticky top-0 border-b-4 border-b-yellow-200 z-50"
      style={{ backgroundColor: "#360000" }}
    >
      <div className="flex items-center justify-between px-4 sm:px-6 md:px-8 h-20 gap-12 md:gap-20">
        {/* Logo */}
        <div className="flex items-center gap-4">
          <img
            src="/logo.jpg"
            alt="logo"
            className="h-16 md:h-20 w-auto object-contain mr-4 rounded-xl"
          />
        </div>

        {/* Nav links for desktop */}
        <div
          className="hidden md:flex space-x-10 text-lg font-semibold"
          style={{ color: "#FFF9CA" }}
        >
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/admission">Admission</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/contact">Contact</Link>
        </div>

        {/* Hamburger menu for mobile */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
            {isOpen ? (
              <X size={32} color="#FFF9CA" />
            ) : (
              <Menu size={32} color="#FFF9CA" />
            )}
          </button>
        </div>
      </div>

      {/* Dropdown menu for mobile */}
      {isOpen && (
        <div
          className="md:hidden px-4 pb-4 flex flex-col gap-3 text-lg font-semibold"
          style={{ color: "#FFF9CA" }}
        >
          <Link to="/" onClick={() => setIsOpen(false)}>
            Home
          </Link>
<<<<<<< HEAD
          <hr className="border-t-2 border-yellow-200"/>
          <Link to="/about" onClick={() => setIsOpen(false)}>
            About
          </Link>
          <hr className="border-t-2 border-yellow-200"/>
          <Link to="/admission" onClick={() => setIsOpen(false)}>
            Admission
          </Link>
          <hr className="border-t-2 border-yellow-200"/>
          <Link to="/gallery" onClick={() => setIsOpen(false)}>
            Gallery
          </Link>
          <hr className="border-t-2 border-yellow-200"/>
=======
          <hr className="border-t-2 border-yellow-200" />
          <Link to="/about" onClick={() => setIsOpen(false)}>
            About
          </Link>
          <hr className="border-t-2 border-yellow-200" />
          <Link to="/admission" onClick={() => setIsOpen(false)}>
            Admission
          </Link>
          <hr className="border-t-2 border-yellow-200" />
          <Link to="/gallery" onClick={() => setIsOpen(false)}>
            Gallery
          </Link>
          <hr className="border-t-2 border-yellow-200" />
>>>>>>> 057d235 (Home page done)
          <Link to="/contact" onClick={() => setIsOpen(false)}>
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}

<<<<<<< HEAD
export default Navbar;
=======
export default Navbar;
>>>>>>> 057d235 (Home page done)
