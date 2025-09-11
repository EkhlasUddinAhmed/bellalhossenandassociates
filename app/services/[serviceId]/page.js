import IncomeTaxServiceAccordion from "@/app/components/ServiceAccordion/IncomeTaxServiceAccordion";
import LoanServiceAccordion from "@/app/components/ServiceAccordion/LoanServiceAccordion";
import OtherServiceAccordion from "@/app/components/ServiceAccordion/OtherServiceAccordion";
import RJSCServiceAccordion from "@/app/components/ServiceAccordion/RJSCServiceAccordion";
import VatServiceAccordion from "@/app/components/ServiceAccordion/VatServiceAccordion";
import { getAService } from "@/app/data/service";

const ServiceDetailsPage = async (props) => {
  const { serviceId } = await props.params;

  const service = getAService(serviceId);

  console.log("ServiceDetailsPage: Service is:", service);
  return (
    <div className="bg-gray-50 h-screen ">
      <div className="h-28 w-full bg-gradient-to-br from-gray-400 via-gray-100 to-stone-300  p-8 rounded-xl shadow-md flex justify-center items-center ">
        <h1 className=" uppercase text-3xl text-blue-900 font-semibold practiceHeading">
          {service?.name}
        </h1>
      </div>
      <div className="mt-10 px-10">
        {serviceId === "1" && <VatServiceAccordion />}
        {serviceId === "2" && <IncomeTaxServiceAccordion />}
        {serviceId === "3" && <RJSCServiceAccordion />}
        {serviceId === "4" && <LoanServiceAccordion />}
        {serviceId === "5" && <OtherServiceAccordion />}
      </div>
    </div>
  );
};

export default ServiceDetailsPage;
