"use client";
import Image from "next/image";
// import "./TrustedBySection.css";
import comLogo from "@/public/images/8.jpg";
const companies = [
  { id: "alpha", name: "AlphaTech", logo: comLogo },
  { id: "beta", name: "BetaSoft", logo: comLogo },
  { id: "gamma", name: "GammaCorp", logo: comLogo },
  { id: "delta", name: "DeltaWorks", logo: comLogo },
  { id: "epsilon", name: "EpsilonX", logo: comLogo },
];

export default function TrustedBySection() {
  return (
    <section className="trustedWrapper">
      <h2 className="trustedTitle">
        Trusted by <span>Leading Brands</span> <br />
        <span className="bengali">বিশ্বস্ত ব্র্যান্ডগুলোর আস্থা</span>
      </h2>

      <div className="marqueeWrapper">
        <div className="fadeLeft" />
        <div className="fadeRight" />
        <div className="marquee">
          {companies.map((company) => (
            <div key={company.id} className="logoContainer">
              <Image
                src={company.logo}
                alt={company.name}
                fill
                className="logo"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
