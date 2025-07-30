import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#360000] text-[#FFF9CA] px-6 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left: About */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Divine Gems School</h4>
          <p className="text-sm leading-relaxed">
            Building confident, disciplined, and self-reliant learners in a
            nurturing academic environment.
          </p>
        </div>

        {/* Middle: Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:underline hover:text-yellow-200">
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:underline hover:text-yellow-200"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/admission"
                className="hover:underline hover:text-yellow-200"
              >
                Admission
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:underline hover:text-yellow-200"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Right: Contact */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Contact</h4>
          <ul className="text-sm space-y-2">
            <li>📍 123 School Road, Abuja, Nigeria</li>
            <li>📞 +234 812 345 6789</li>
            <li>✉️ info@divinegems.sch.ng</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center border-t border-yellow-200 mt-10 pt-4 text-sm opacity-75">
        © {year} Divine Gems School. All rights reserved.
        <div className="text-xs mt-2 opacity-50">
          Developed by{" "}
          <a
            href="https://my-site-7lef.vercel.app/"
            className="hover:underline text-yellow-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            Bashir Muhammed N.
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
