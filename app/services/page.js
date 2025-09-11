import IncomeTaxServiceAccordion from "../components/ServiceAccordion/IncomeTaxServiceAccordion";
import LoanServiceAccordion from "../components/ServiceAccordion/LoanServiceAccordion";
import OtherServiceAccordion from "../components/ServiceAccordion/OtherServiceAccordion";
import RJSCServiceAccordion from "../components/ServiceAccordion/RJSCServiceAccordion";
import VatServiceAccordion from "../components/ServiceAccordion/VatServiceAccordion";

export default function ServicesPage() {
  const services = [
    "Monthly VAT Return Submission [মাসিক ভ্যাট রিটার্ন দাখিল]",
    "VAT Registration & Advisory",
    "RJSC Documentation",
    "Feasibility Study Reports",
    "BMRE Planning",
    "Legal Compliance & Audit",
  ];

  return (
    <main className="px-6 py-10">
      <h1 className="text-3xl font-bold mb-6">Our Services</h1>

      <div className="tabs tabs-lift text-xl text-slate-700 h-screen">
        <input type="radio" name="my_tabs_3" className="tab" aria-label="VAT" />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          <VatServiceAccordion />
        </div>

        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label="INCOME TAX"
          defaultChecked
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          <IncomeTaxServiceAccordion />
        </div>

        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label="RJSC"
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          <RJSCServiceAccordion />
        </div>

        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label="LOAN"
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          <LoanServiceAccordion />
        </div>

        <input
          type="radio"
          name="my_tabs_3"
          className="tab"
          aria-label="OTHERS"
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          <OtherServiceAccordion />
        </div>
      </div>
    </main>
  );
}
