import React, {useState} from "react";

function Core_Values({ activate }) {
  const [activeValue, setActiveValue] = useState(null);

  const coreValues = [
    {
      key: "E1",
      label: "E",
      title: "Educationally",
      desc: "Fostering a love for learning and academic excellence.",
    },
    {
      key: "M",
      label: "M",
      title: "Morally",
      desc: "Upholding integrity and ethical standards.",
    },
    {
      key: "P",
      label: "P",
      title: "Physically",
      desc: "Encouraging healthy habits and lifestyles.",
    },
    {
      key: "E2",
      label: "E",
      title: "Emotionally",
      desc: "Fostering resilience and emotional intelligence.",
    },
    {
      key: "S1",
      label: "S",
      title: "Socially",
      desc: "Building strong relationships and communities.",
    },
    {
      key: "S2",
      label: "S",
      title: "Spiritually",
      desc: "Believing in a higher power and purpose.",
    },
  ];
    const positions = [
    { top: "-1rem", left: "50%", transform: "translateX(-50%)" },
    { top: "25%", right: 0, transform: "translateX(0%)" },
    { bottom: "25%", right: 0, transform: "translateX(0%)" },
    { bottom: "-1rem", left: "50%", transform: "translateX(-50%)" },
    { bottom: "25%", left: 0, transform: "translateX(0%)" },
    { top: "25%", left: 0, transform: "translateX(0%)" },
  ];
  return (
    <div className="bg-[#360000] justify-center items-center text-center py-10 px-4 text-[#FFF9CA]">
      <h2 className="text-4xl text-center mt-8 mb-4">
        Our Core Values
        <hr className="border-t-2 border-yellow-200 w-20 mx-auto mt-2 rounded" />
      </h2>
      <p>To educate a child:</p>
      <div className="relative w-80 h-80 mx-auto mt-12">
        {coreValues.map((item, index) => (
          <div
            key={item.key}
            className="absolute cursor-pointer"
            style={{ ...positions[index] }}
            onMouseEnter={() => setActiveValue(item)}
            onMouseLeave={() => setActiveValue(null)}
          >
            <div className="w-12 h-12 flex items-center justify-center bg-[#FFF9CA] rounded-full text-[#360000] font-bold">
              {item.label}
            </div>
          </div>
        ))}

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-48 h-48 bg-[#360000] border-2 border-yellow-200 rounded p-4 text-#360000 flex flex-col items-center justify-center text-center">
            {activeValue ? (
              <>
                <h4 className="font-bold text-lg">{activeValue.title}</h4>
                <p className="text-sm mt-2">{activeValue.desc}</p>
              </>
            ) : (
              <>
                <p className="hidden md:block opacity-50 text-sm text-center">
                  Hover on a letter to learn more.
                </p>
                <p className="block md:hidden text-sm text-center">
                  Tap on a letter to learn more.
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Core_Values;
