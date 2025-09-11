import { getAService } from "@/app/data/service";
import ServiceAccoedionCard from "./ServiceAccoedionCard";

const OtherServiceAccordion = () => {
  const service = getAService("5");

  return (
    <div>
      {service?.serviceDetails?.map((service) => (
        <ServiceAccoedionCard key={service?.id} service={service} />
      ))}
    </div>
  );
};

export default OtherServiceAccordion;
