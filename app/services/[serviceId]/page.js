import AccountingAccordion from "@/app/components/ServiceAccordion/AccountingAccordion";
import AuditAccordion from "@/app/components/ServiceAccordion/AuditAccordion";
import IncomeTaxServiceAccordion from "@/app/components/ServiceAccordion/IncomeTaxServiceAccordion";
import LoanServiceAccordion from "@/app/components/ServiceAccordion/LoanServiceAccordion";
import ManagementAccordion from "@/app/components/ServiceAccordion/ManagementAccordion";
import OtherServiceAccordion from "@/app/components/ServiceAccordion/OtherServiceAccordion";
import ProjectProfileAccordion from "@/app/components/ServiceAccordion/ProjectProfileAccordion";
import RJSCServiceAccordion from "@/app/components/ServiceAccordion/RJSCServiceAccordion";
import VatServiceAccordion from "@/app/components/ServiceAccordion/VatServiceAccordion";
import VATTrainingAccordion from "@/app/components/ServiceAccordion/VATTrainingAccordion";
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
        {serviceId === "6" && <AccountingAccordion />}
        {serviceId === "7" && <AuditAccordion />}
        {serviceId === "8" && <ManagementAccordion />}
        {serviceId === "9" && <ProjectProfileAccordion />}
        {serviceId === "10" && <VATTrainingAccordion />}
      </div>
    </div>
  );
};

export default ServiceDetailsPage;
