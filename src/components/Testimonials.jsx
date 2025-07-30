import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function Testimonials() {
  const testimonials = [
    {
      name: "Mrs. Amina Lawal",
      text: "Divine Gems has been a blessing. My child is more confident and happy to go to school every day.",
    },
    {
      name: "Mr. Tunde Adeyemi",
      text: "We’ve seen great improvement in our son’s academics and character.",
    },
    {
      name: "Fatima Yusuf (Student)",
      text: "I love how the teachers care about us. It feels like family.",
    },
    {
      name: "Mrs. Ifeoma Okeke",
      text: "The environment is so nurturing. I’m truly impressed with their approach to education.",
    },
    {
      name: "Mr. Bello Hassan",
      text: "Discipline and love — Divine Gems has struck the perfect balance.",
    },
  ];

  return (
    <div className="relative">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/nice_images/look_up.jpg')",
          zIndex: -1,
        }}
      />

      {/* Overlay & Swiper Content */}
      <div
        className="flex flex-col items-center justify-center px-4 py-64"
        style={{ backgroundColor: "rgba(54, 0, 0, 0.7)", color: "#FFF9CA" }}
      >
        <h2 className="text-4xl font-bold text-center mb-8">Testimonials</h2>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3000 }}
          className="w-full max-w-3xl"
        >
          {testimonials.map((t, index) => (
            <SwiperSlide key={index}>
              <div className="bg-[#FFF9CA] text-[#360000] rounded-xl shadow-lg p-6 text-center">
                <p className="italic mb-4 text-lg">"{t.text}"</p>
                <h4 className="font-bold text-md">{t.name}</h4>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Testimonials;
