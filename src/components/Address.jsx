import React from 'react'

function Address() {
  return (
    <div>
        <div className="bg-white text-[#360000] py-8 text-center">
        <h2 className="text-4xl mb-4">
          Message from the Director
          <hr className="border-t-4 border-yellow-200 w-72 mx-auto mt-2" />
        </h2>

        <div className="max-w-4xl mx-auto mt-12 px-4 md:px-8 text-center text-[#360000]">
          <p className="text-base leading-relaxed mt-6">
            At Divine Gems School, we're not just building a foundation for learning – we're igniting a spark for life! As director, I'm thrilled to lead a team of passionate educators who share a common vision: to empower students to shine. Our nurturing environment, combined with academic rigour and moral guidance, sets our students up for success. From accelerated progress to external wins, our achievements speak for themselves. Join us on this journey of discovery and growth. <br />
            <br />
            Let's unlock your child's full potential and shape the leaders of tomorrow!
          </p>
          <p className="font-semibold">
            Nic Uzor
          </p>
        </div>
        <div>
          <img src="/school_logo" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Address