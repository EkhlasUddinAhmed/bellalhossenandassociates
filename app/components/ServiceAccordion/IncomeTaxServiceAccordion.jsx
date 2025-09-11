import { getAService } from "@/app/data/service";
import ServiceAccoedionCard from "./ServiceAccoedionCard";

const IncomeTaxServiceAccordion = () => {
  const service = getAService("2");

  return (
    <div>
      {service?.serviceDetails?.map((service) => (
        <ServiceAccoedionCard key={service?.id} service={service} />
      ))}
    </div>
  );
};

export default IncomeTaxServiceAccordion;
