const ServiceAccoedionCard = ({ service }) => {
  return (
    <div className="collapse collapse-plus bg-base-100 border border-base-300">
      <input type="radio" name="my-accordion-3" />
      <div className="collapse-title font-semibold text-xl">
        {service?.eTitle}[{service?.bTitle}]
      </div>
      <div className="collapse-content text-md">
        <h1 className="p-2">{service?.eDescription}</h1>
        <h1 className="p-2">{service?.bDescription}</h1>
      </div>
    </div>
  );
};

export default ServiceAccoedionCard;
