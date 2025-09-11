import ServiceButton from "./ServiceButton";

const ServiceCard = ({ service }) => {
  return (
    <div className="card bg-gradient-to-r from-[#F5F5F4] to-[#f6f4f4] text-slate-00 w-96 shadow-xl">
      <div className="card-body">
        <h2 className="card-title ">{service?.name}</h2>
        <p>{service?.description}</p>
        <div className="card-actions justify-end">
          <ServiceButton serviceId={service.id} />
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
