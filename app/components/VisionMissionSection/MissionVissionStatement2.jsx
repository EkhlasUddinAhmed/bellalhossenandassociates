import React from "react";
// bg-gradient-to-b from-white to-gray-100 
const VisionMissionStatement2 = () => {
  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="max-w-4xl mx-auto ">
        <blockquote className="mb-16">
          <h2 className="text-xl font-bold text-blue-800 mb-4 border-l-4 border-blue-500 pl-4 italic">
            Our Vision
          </h2>
          <p className="italic text-gray-700 leading-relaxed pl-4">
            To provide our clients with professional legal guidance proficiently
            and in a timely manner.
          </p>
        </blockquote>

        <blockquote>
          <h2 className="text-xl font-bold text-green-800 mb-4 border-l-4 border-green-500 pl-4 italic">
            Our Mission
          </h2>
          <p className="italic text-gray-700 leading-relaxed pl-4">
            We go deep to unlock insight and have the courage to act. We work
            with our clients to build the capabilities that enable organizations
            to achieve sustainable advantage. We are shaping the future.
            Together.
          </p>
        </blockquote>
      </div>
    </section>
  );
};

export default VisionMissionStatement2;
