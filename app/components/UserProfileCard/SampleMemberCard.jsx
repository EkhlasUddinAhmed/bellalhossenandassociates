import Image from "next/image";

const SampleMemberCard = ({ user }) => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 p-6">
      {/* Profile Image with Blinking Ring */}
      <div className="relative w-32 h-32 mx-auto mb-4">
        <div className="absolute inset-0 rounded-full animate-pulse ring-4 ring-blue-400"></div>
        <div className="relative w-32 h-32 overflow-hidden rounded-full z-10">
          <Image
            src={user.image}
            alt={`${user.name}'s profile`}
            layout="fill"
            objectFit="cover"
            className="rounded-full"
          />
        </div>
      </div>

      {/* User Info */}
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-800 uppercase tracking-wide">
          {user.name}
        </h2>
        <p className="text-sm text-teal-600 font-medium">{user.officialRank}</p>
        {/* <p className="text-gray-600 text-sm mt-2 mb-4">{user.description}</p> */}

        {/* Contact Info */}
        <div className="text-sm text-gray-700 mb-4">
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <p>
            <strong>Mobile:</strong> {user.mobile}
          </p>
        </div>

        {/* Qualifications */}
        {/* <div className="bg-gray-50 p-4 rounded-lg shadow-inner">
          <h3 className="text-md font-semibold text-gray-700 mb-2">
            Qualifications
          </h3>
          <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
            {user.qualifications.map((q, index) => (
              <li key={index}>{q}</li>
            ))}
          </ul>
        </div> */}
      </div>
    </div>
  );
};

export default SampleMemberCard;
