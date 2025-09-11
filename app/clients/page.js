import OurClients from "../components/OurClients/OurClients";

export default function ClientsPage() {
  const clients = [
    "BUCG",
    "Bashundhara Group",
    "DBL Group",
    "Confidence Group",
  ];

  return (
    // <main className="px-6 py-10">
    //   <h1 className="text-3xl font-bold mb-6">Our Clients</h1>
    //   <ul className="space-y-4">
    //     {clients.map((client, index) => (
    //       <li key={index} className="text-lg">
    //         {client}
    //       </li>
    //     ))}
    //   </ul>
    // </main>
    <OurClients />
  );
}
