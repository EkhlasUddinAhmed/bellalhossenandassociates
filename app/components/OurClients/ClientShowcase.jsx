import Image from "next/image";

export default function ClientShowcase({ companies1, companies2 }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-stone-100 px-6 py-16">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-12 uppercase tracking-wide">
        Our Trusted Clients
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {/* Column 1 */}
        <div className="space-y-6">
          {companies1.map((company) => (
            <div
              key={company.id}
              className="flex items-center bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition duration-300"
            >
              <div className="w-20 h-20 rounded-md overflow-hidden border border-gray-200 flex-shrink-0">
                <Image
                  src={company.logo}
                  alt={company.name}
                  width={80}
                  height={80}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="ml-4 text-base font-semibold text-gray-700">
                {company.name}
              </p>
            </div>
          ))}
        </div>

        {/* Column 2 */}
        <div className="space-y-6">
          {companies2.map((company) => (
            <div
              key={company.id}
              className="flex items-center bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition duration-300"
            >
              <div className="w-20 h-20 rounded-md overflow-hidden border border-gray-200 flex-shrink-0">
                <Image
                  src={company.logo}
                  alt={company.name}
                  width={80}
                  height={80}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="ml-4 text-base font-semibold text-gray-700">
                {company.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
