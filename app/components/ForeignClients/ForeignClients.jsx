import { getAllServices } from "@/app/data/service";
import SectionTitle from "../SectionTitle/SectionTitle";
import ClientEngagementShowcase from "./ClientEngagementShowcase";



const ForeignClients = () => {
  const allService = getAllServices();
  console.log(allService);
  return (
    <section className="my-30 mt-48   ">
      <SectionTitle
        heading="Our Foreign Clients"
        subHeading="In Our Firm"
        textColor=""
      />

      <div className="mt-4  flex flex-wrap justify-center items-center ">
        {/* Paste SomeThing */}
        <ClientEngagementShowcase/>
      </div>
    </section>
  );
};

export default ForeignClients;
