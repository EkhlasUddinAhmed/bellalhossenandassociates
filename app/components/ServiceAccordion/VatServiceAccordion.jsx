import { getAService } from "@/app/data/service";
import ServiceAccoedionCard from "./ServiceAccoedionCard";

const VatServiceAccordion = () => {
  const service = getAService("1");

  return (
    <div>
      {service?.serviceDetails?.map((service) => (
        <ServiceAccoedionCard key={service?.id} service={service} />
      ))}
    </div>
  );
};

export default VatServiceAccordion;
