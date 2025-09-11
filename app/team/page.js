import SampleUser2 from "../components/UserProfileCard/SampleMember";
import { getAllDetailedMembersData, getShortInfoOfMembers } from "../data/teamMembersData";

const TeamPage = async () => {
  const shortInfo = await getShortInfoOfMembers();
  
  
  return (
    <main className="px-6 py-10 ">
      <h1 className="text-3xl font-bold mb-6">Our Team Members</h1>
      <div className="flex flex-wrap justify-center items-center gap-2">
        { shortInfo?.map((member) => (
          <SampleUser2 key={member.memberId} member={member} />
        ))}
      </div>
    </main>
  );
};

export default TeamPage;
