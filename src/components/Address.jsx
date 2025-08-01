import React from 'react'

function Address() {
  return (
    <div>
        <div className="bg-white text-[#360000] py-8 text-center">
        <h2 className="text-4xl mb-4">
          Message from the Proprietress
          <hr className="border-t-4 border-yellow-200 w-72 mx-auto mt-2" />
        </h2>

        <div className="max-w-4xl mx-auto mt-12 px-4 md:px-8 text-center text-[#360000]">
          <p>
                Divine Gems School, is passionate about providing quality
                education in a safe, warm, and supportive environment. Our goal
                is to foster the social, emotional, and academic growth of each
                student—educating the total child.
              </p>
              <p>
                To our students, we offer our support and guidance to help you
                excel. To our parents, we assure you that your child's education
                is our top priority. To the community, we are committed to
                growing leaders who will make a positive impact.
              </p>
              <p>
                Thank you for considering Divine Gems School. We look forward to
                partnering with you in shaping the future.
              </p>
              <p className="font-semibold">Mrs. Faith Uzor</p>
        </div>
        <div>
          <img src="/school_logo" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Address