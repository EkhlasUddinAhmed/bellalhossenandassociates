import VisionMissionStatement from "../components/VisionMissionSection/MissionVissionStatement";
import VisionMissionStatement2 from "../components/VisionMissionSection/MissionVissionStatement2";
import VisionMissionSection from "../components/VisionMissionSection/VisionMissionSection";
import VisionMissionSplit from "../components/VisionMissionSection/VisionMissionSplit";

export default function AboutPage() {
  return (
    <main className="px-6 py-10 space-y-6 bg-gray-50 ">
      <h1 className="text-3xl font-bold text-center vm-title">About Us</h1>
      <p className="px-10 text-xl text-center">
        Bellal Hossen & Associates is a certified tax consultancy firm with over 20 years of experience. Led by Mr. Bellal Hossen (CMA Aus, M.Com, CA Part, ITP).We are providing expert guidance in VAT,IncomeTax,& company
        law matters since 2004.
      </p>

      <VisionMissionSection />
    </main>
  );
}
