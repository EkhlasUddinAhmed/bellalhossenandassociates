"use client";

import { useRouter } from "next/navigation";

const ServiceButton = ({ serviceId }) => {
  const router = useRouter();

  const handleShowDetails = () => {
    router.push(`/services/${serviceId}`);
  };

  return (
    <button onClick={handleShowDetails} className="btn  ">
      Show Details
    </button>
  );
};

export default ServiceButton;
