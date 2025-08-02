import React from "react";

function Home_About() {
  return (
    <div>
      <div className="bg-white text-[#360000] text-center py-16 px-4">
        <h2 className="text-4xl mb-4">
          About Us
          <hr className="border-t-4 border-yellow-200 w-20 mx-auto mt-2" />
        </h2>

        <div className="max-w-6xl mx-auto mt-12 px-4 md:px-8 flex flex-col md:flex-row items-center justify-center gap-12 text-left">
          <div className="md:w-1/2 flex flex-col justify-center">
            <h3 className="text-4xl font-semibold">
              Be a Part of Our <br /> Academic Success Story
            </h3>
            <p className="text-base leading-relaxed mt-6">
              Divine gems aims to build a strong academic foundation, guiding students from early stages to advanced studies. Our holistic approach ensures each student is ready for higher education and future careers.
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
    </div>
  );
}

export default Home_About;
