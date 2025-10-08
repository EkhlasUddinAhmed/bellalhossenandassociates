import { BuildingOfficeIcon } from "@heroicons/react/24/outline";

const ClientEngagementShowcase = () => {
  return (
    <section className="bg-gradient-to-br from-white via-slate-50 to-blue-50 p-8 rounded-xl shadow-xl max-w-7xl mx-4 my-10 border border-blue-100">
      <div className="flex items-center gap-3 mb-6">
       
        <h2 className="text-3xl font-extrabold text-blue-800 tracking-tight text-center">
          Our Notable Client Engagements
        </h2>
      </div>

      <div className="bg-white rounded-lg p-6 shadow-md border-l-4 border-blue-500 hover:shadow-lg transition duration-300">
        <div className="flex items-center gap-2 mb-2">
          <BuildingOfficeIcon className="h-6 w-6 text-blue-700" />
          <h3 className="text-xl font-semibold text-blue-700">
            Foreign Companies (MNC)
          </h3>
        </div>
        <p className="text-gray-700 leading-relaxed text-[17px]">
          Consultant to{" "}
          <span className="font-semibold text-gray-900">
            Beijing Urban Construction Group Co. Ltd. (BUCG)
          </span>{" "}
          — ranked{" "}
          <span className="text-blue-600 font-medium">
            13th among ENR's Top 250 Global Contractors in 2024
          </span>
          . BUCG has led transformative projects in Bangladesh, including the{" "}
          <em className="text-blue-700 font-medium">
            Osmani International Airport Expansion Project
          </em>{" "}
          in Sylhet, the{" "}
          <em className="text-blue-700 font-medium">BRAC University Campus</em>{" "}
          in Merul Badda, Dhaka, and several other high-impact infrastructure
          initiatives.
        </p>
      </div>
    </section>
  );
};

export default ClientEngagementShowcase;
