import MemberCard from "./MemberCard";
import SectionTitle from "../SectionTitle/SectionTitle";
import { getAllTeamMembers } from "@/app/data/teamMembersData";

const TeamMembers = () => {
  const teamMembers = getAllTeamMembers();
  return (
    <div className="my-56 ">
      <SectionTitle heading="MEET OUR TEAM" />
      <div className="flex flex-wrap justify-center items-center gap-10 mt-20">
        {teamMembers.map((member) => (
          <MemberCard key={member?.id} member={member} />
        ))}
      </div>
    </div>
  );
};

export default TeamMembers;
