import { getAService } from "@/app/data/service";
import ServiceAccoedionCard from "./ServiceAccoedionCard";

const RJSCServiceAccordion = () => {
  const service = getAService("3");

  return (
    <div>
      {service?.serviceDetails?.map((service) => (
        <ServiceAccoedionCard key={service?.id} service={service} />
      ))}
    </div>
  );
};

export default RJSCServiceAccordion;
