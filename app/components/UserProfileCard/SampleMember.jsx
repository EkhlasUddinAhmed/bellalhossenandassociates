import Image from "next/image";
import Link from "next/link";

const SampleUser2 = ({ member }) => {
  console.log("From SampleUser2: Member is:", member);

  return (
    <Link href={`/memberprofile/${member?.memberId}`}>
      <div className=" bg-gradient-to-br  py-6 px-4 transition-transform duration-300 ease-in-out hover:scale-105">
        {/* <SampleMemberCard user={user} /> */}
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 p-6">
          {/* Profile Image with Blinking Ring */}

          {member?.image && (
            <div className="relative w-32 h-32 mx-auto mb-4">
              <div className="absolute inset-0 rounded-full animate-pulse ring-4 ring-blue-400"></div>
              <div className="relative w-32 h-32 overflow-hidden rounded-full z-10">
                <Image
                  src={member?.image}
                  alt={`${member?.name}'s profile`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>
            </div>
          )}

          {/* User Info */}
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-800 uppercase tracking-wide">
              {member?.name}
            </h2>
            <p className="text-sm text-teal-600 font-medium">
              {member?.officialRank}
            </p>

            <div className="text-sm text-gray-700 mb-4">
              <p>
                <strong>Email:</strong> {member?.email}
              </p>
              <p>
                <strong>Mobile:</strong> {member?.mobile}
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SampleUser2;
