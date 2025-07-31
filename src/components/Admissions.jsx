import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Admission() {
  return (
    <>
      <Navbar />

      {/* Hero Section with Background Image and Maroon Overlay */}
      <div className="relative text-white text-center py-24 px-4">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center z-[-2]"
          style={{
            backgroundImage: "url('/nice_images/grad_pics.jpg')",
          }}
        />
        {/* Maroon Overlay */}
        <div className="absolute inset-0 bg-[#360000]/60 z-[-1]" />

        <h2 className="text-4xl md:text-6xl font-semibold drop-shadow-md">
          Admission Process
        </h2>
        <hr className="border-t-4 border-yellow-200 w-36 mx-auto mt-4" />
      </div>

      {/* Content Section */}
      <div className="bg-white text-[#360000] px-4 md:px-16 py-20 text-center">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Overview */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Overview</h3>
            <p className="text-lg leading-relaxed">
              Admission into Divine Gems Nursery and Primary School is through
              an entrance examination. Interested applicants are required to
              purchase and complete an application form. Walk-in entrance
              examinations are also available.
            </p>
          </div>
          <hr className="border-t-2 border-yellow-300 w-24 mx-auto" />

          {/* Application Form */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Application Form</h3>
            <ul className="list-disc list-inside text-lg inline-block text-left">
              <li>Form cost: ₦5,000 (non-refundable)</li>
              <li>Forms must be submitted on or before the exam day</li>
              <li>Walk-in entrance exams are allowed</li>
            </ul>
          </div>
          <hr className="border-t-2 border-yellow-300 w-24 mx-auto" />

          {/* Admission Requirements */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Admission Requirements</h3>
            <ul className="list-disc list-inside text-lg inline-block text-left">
              <li>Completed application form</li>
              <li>Two (2) passport photographs of the child</li>
              <li>Birth certificate</li>
              <li>Last academic result (for Primary/Secondary admission)</li>
              <li>Valid ID card of parent/guardian</li>
              <li>One passport photograph of parent/guardian</li>
              <li>Writing materials</li>
            </ul>
          </div>
          <hr className="border-t-2 border-yellow-300 w-24 mx-auto" />

          {/* Entrance Exam */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Entrance Exam Scope</h3>
            <ul className="list-disc list-inside text-lg inline-block text-left">
              <li>
                <strong>Mathematics:</strong> Arithmetic and Logical Reasoning
              </li>
              <li>
                <strong>English:</strong> Comprehension and Oral Proficiency
              </li>
            </ul>
            <p className="text-lg leading-relaxed">
              The exam is designed to assess each child's academic strengths and
              weaknesses to ensure proper class placement and support.
            </p>
          </div>
          <hr className="border-t-2 border-yellow-300 w-24 mx-auto" />

          {/* Call to Action */}
          <div className="pt-8">
            <p className="text-xl font-medium">
              For more information, please contact the school office or visit
              during working hours.
            </p>
            <div>
              <Link
                to={"/contact"}
                className="inline-flex items-center gap-2 w-fit bg-[#360000] text-[#FFF9CA] px-4 py-2 my-2 font-semibold rounded shadow"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24c1.12.37 2.33.57 3.57.57c.55 0 1 .45 1 1V20c0 .55-.45 1-1 1c-9.39 0-17-7.61-17-17c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1c0 1.25.2 2.45.57 3.57c.11.35.03.74-.25 1.02z"
                  />
                </svg>
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Admission;
