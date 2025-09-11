import Image from "next/image";
import MemberDetailsButton from "./MemberDetailsButton";

const MemberCard = ({ member }) => {
  return (
    <div className="card bg-base-100 w-96 h-[486px] md:w-80 shadow-sm transition duration-300 hover:translate-y-[-5px] hover:scale-[1.02] hover:shadow-[0_12px_32px_rgba(0,0,0,0.12)]">
      <figure className="relative ">
        <Image
          src={member?.photo}
          alt={member?.name}
          height={200}
          width={320}
          className="rounded-xl object-cover object-top"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{member?.name}</h2>
        <p className="text-blue-800 my-2">{member?.role}</p>
        <p className="text-blue-800 my-2">{member?.bio}</p>
        <div className="card-actions">
          <MemberDetailsButton id={member.id}/>

        </div>
      </div>
    </div>
  );
};

export default MemberCard;
