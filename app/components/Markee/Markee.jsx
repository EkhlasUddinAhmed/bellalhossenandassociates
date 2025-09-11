"use client";
import React, { useRef } from "react";

import Marquee from "react-fast-marquee";
import SectionTitle from "../SectionTitle/SectionTitle";
import { getComapanies, getComapanies2 } from "@/app/data/clientsData";
import Image from "next/image";

export default function CompanyMarquee() {
  const companies = getComapanies();
  const companies2 = getComapanies2();
  const marqueeRef = useRef(null);

  const pauseScroll = () => {
    marqueeRef.current.style.animationPlayState = "paused";
  };

  const resumeScroll = () => {
    marqueeRef.current.style.animationPlayState = "running";
  };

  // const handleClick = (id) => {
  //   router.push(`/company/${id}`);
  // };

  return (
    <div className="mt-48">
      <SectionTitle
        heading="OUR TRUSTED CLIENTS "
        subHeading="Helooo Ekhlas"
        textColor="text-red-400"
      />
      <div>
        <Marquee
          pauseOnHover
          speed="200"
          gradient
          gradientColor="white"
          gradientWidth={100}
        >
          <div className="flex my-4 gap-6">
            {companies.map((company) => (
              <div
                key={company?.id}
                // className="w-32 h-32 flex-shrink-0 rounded-lg overflow-hidden  border"
              >
                <Image
                  src={company?.logo}
                  alt={company.name}
                  width={128}
                  height={128}
                  // className="w-full h-full object-cover"
                  className="w-[150px]  m-auto p-4 object-cover rounded-md "
                />
              </div>
            ))}
          </div>
        </Marquee>
        <Marquee
          direction="right"
          pauseOnHover
          speed="200"
          gradient
          gradientColor="white"
          gradientWidth={100}
        >
          <div className="flex my-4">
            {companies2.map((company) => (
              <Image
                key={company?.id}
                src={company?.logo}
                alt={company.name}
                className="w-[150px]  m-auto p-4 object-cover rounded-md "
              />
            ))}
          </div>
        </Marquee>
      </div>
    </div>
  );
}
