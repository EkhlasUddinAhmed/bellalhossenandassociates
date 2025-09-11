"use client";

import { useRouter } from "next/navigation";

const MemberDetailsButton = ({ id }) => {
  const router = useRouter();
  const handleOnClick = () => {
    router.push(`/memberprofile/${id}`);
  };
  return (
    <button onClick={handleOnClick} className="btn btn-primary  w-[300px] px-4">
      See Info
    </button>
  );
};

export default MemberDetailsButton;
