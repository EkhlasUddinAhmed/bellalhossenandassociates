import Link from "next/link";

const TrainingCard = ({ service, vat }) => {
  return (
    <div className={`hero bg-white h-[500px] rounded-2xl shadow-xl  border-l-5 border-red-900 transition-transform duration-300 ease-in-out hover:-translate-y-1`}>
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-3xl font-bold text-red-900">{service?.title}</h1>
          <p className="py-2">[ {service?.bTitle} ]</p>
          <p className="py-6 text-blue-900 font-semibold ">
            {service?.description}
          </p>
          <p>{service?.bDescription}</p>
          {/* <button className="btn btn-primary mt-5">Get Started</button> */}
          <Link href="#" className="text-blue-500 mt-5 inline-block underline">
            Go To Our Training FaceBook Page
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TrainingCard;
