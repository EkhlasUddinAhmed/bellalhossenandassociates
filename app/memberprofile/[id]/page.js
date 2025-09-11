import MemberDetailsCard from "../../components/UserProfileCard/MemberDetailsCard";

import { getDetailedMemberData } from "../../data/teamMembersData";

const MemberProfile = async (props) => {
  const { id } = await props.params;
  const member = await getDetailedMemberData(id);

  console.log("From Member Profile page: Member is", member);
  return <MemberDetailsCard user={member} />;
};

export default MemberProfile;
