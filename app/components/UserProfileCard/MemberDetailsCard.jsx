import Image from "next/image";

const MemberDetailsCard = ({ user }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-100 via-teal-100 to-white text-gray-800 px-6 py-12">
      {/* Header Section */}
      <div className="flex flex-col items-center text-center mb-10">
        <div className="relative w-40 h-40 mb-6">
          <div className="absolute inset-0 rounded-full animate-pulse ring-4 ring-blue-400"></div>
          <div className="relative w-40 h-40 overflow-hidden rounded-full z-10">
            <Image
              src={user.image}
              alt={`${user.name}'s profile`}
              layout="fill"
              objectFit="cover"
              className="rounded-full"
            />
          </div>
        </div>
        <h1 className="text-4xl font-bold uppercase tracking-wide">
          {user.name2}
        </h1>
        <p className="text-lg text-teal-600 font-medium mt-1">
          {user.officialRank2}
        </p>
        <p className="max-w-xl mt-4 text-gray-600 text-sm">
          {user.description}
        </p>
        <p className="max-w-xl mt-4 text-gray-600 text-sm">
          {user.description2}
        </p>
      </div>

      {/* Contact Info */}
      <div className="max-w-xl mx-auto mb-10 text-center text-sm text-gray-700">
        <p>
          <strong>Email:</strong> {user.email}
        </p>
        <p>
          <strong>Mobile:</strong> {user.mobile}
        </p>
      </div>

      {/* Career Highlights */}
      <div className="max-w-3xl mx-auto mb-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
          Career Highlights
        </h2>
        <ul className="space-y-4">
          {user.careerHighlights.map((job, index) => (
            <li
              key={index}
              className="bg-white rounded-lg shadow-sm p-4 border-l-4 border-teal-500"
            >
              <h3 className="text-lg font-bold text-gray-700">
                {job.organization}
              </h3>
              <p className="text-sm text-gray-600">{job.role}</p>
              <p className="text-xs text-gray-500 italic">{job.period}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* Qualifications Section */}
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-md p-6">
        <h2 className="text-xl font-semibold text-gray-700 mb-4 text-center">
          Qualifications
        </h2>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          {user.qualifications.map((q, index) => (
            <li key={index}>{q}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MemberDetailsCard;
