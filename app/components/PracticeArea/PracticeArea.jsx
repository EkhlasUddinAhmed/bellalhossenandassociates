import { getAllServices } from "@/app/data/service";
import SectionTitle from "../SectionTitle/SectionTitle";
import ServiceCard from "./ServiceCard";


const PracticeArea = () => {
  const allService = getAllServices();
  console.log(allService);
  return (
    <div className="my-30 mt-48   ">
      <SectionTitle
        heading="Our Practice Area"
        subHeading="In Our Firm"
        textColor=""
      />

      <div className="mt-4  flex flex-wrap justify-center items-center gap-10 py-10">
        {allService?.map((service) => (
          <ServiceCard key={service?.id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default PracticeArea;
