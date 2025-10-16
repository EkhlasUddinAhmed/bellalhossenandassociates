import Image from "next/image";
// import backImage from "@/public/images/1.jpg";
import VisionMissionStatement2 from "../VisionMissionSection/MissionVissionStatement2";
// components/Hero.tsx
export default function Hero() {
  return (
    <>
      <div className="hero h-screen bg-[url('/images/billal2.jpeg')] bg-top bg-cover ">
      
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="mt-96">
            <h1 className="mb-5 text-5xl font-bold md:text-6xl  drop-shadow-lg ">
              Bellal Hossen & Associates
            </h1>
            <p className="mb-5 text-xl md:text-2xl font-medium drop-shadow-md">
              VAT, Income Tax & Company Law Consultant
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </>
  );
}
