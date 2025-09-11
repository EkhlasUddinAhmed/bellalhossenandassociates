import ClientShowcase from "./ClientShowcase";
import { getComapanies, getComapanies2 } from "@/app/data/clientsData";

const OurClients = () => {
  const companies1 = getComapanies();
  const companies2 = getComapanies2();
  return <ClientShowcase companies1={companies1} companies2={companies2} />;
};

export default OurClients;
