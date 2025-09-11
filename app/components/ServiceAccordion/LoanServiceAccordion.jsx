import { getAService } from "@/app/data/service";
import ServiceAccoedionCard from "./ServiceAccoedionCard";

const LoanServiceAccordion = () => {
  const service = getAService("4");

  return (
    <div>
      {service?.serviceDetails?.map((service) => (
        <ServiceAccoedionCard key={service?.id} service={service} />
      ))}
    </div>
  );
};

export default LoanServiceAccordion;
