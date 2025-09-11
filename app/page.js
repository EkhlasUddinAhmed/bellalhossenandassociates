import CallUs from "./components/CallUs/CallUs";
import Home from "./components/Home/Home";
import CompanyMarquee from "./components/Markee/Markee";

import PracticeArea from "./components/PracticeArea/PracticeArea";

import TeamMembers2 from "./components/TeamMembers/TeamMembers";
import TrainingService from "./components/TrainingService/TrainingService";

import SampleUser2 from "./components/UserProfileCard/SampleMember";

import VisionMissionStatement2 from "./components/VisionMissionSection/MissionVissionStatement2";

export default function HomePage() {
  return (
    <>
      <Home />

      <VisionMissionStatement2 />
      <PracticeArea />
      <CompanyMarquee />
      <TrainingService />

      <TeamMembers2 />
      <CallUs />
    </>
  );
}

{
  /* <div className="my-32">
        <h1>OUR VISSION</h1>
        <p>
          Our vission is to provide our clients with professional legal guidance
          profeciently and in timely
        </p>
        <h1>OUR MISSION</h1>
        <p>
          We go deep to unlock insight and have the courage to act. We work with
          our clients to build the capabilities that enable organizations to
          achieve sustainable advantage. We are shaping the future. Together.
        </p>
      </div> */
}
