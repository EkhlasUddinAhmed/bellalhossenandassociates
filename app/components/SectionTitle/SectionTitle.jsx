import DownwardArrow from "../DownwardArrow/DownwardArrow";

const SectionTitle = ({ heading, subHeading, textColor }) => {
  return (
    <div className="mx-auto mb-5  w-[400px]">
      <p className="text-blue-900 font-bold text-center fst-italic">--------</p>
      <DownwardArrow width="24" height="30" />
      <h3
        className={`border-top border-bottom  text-center py-3 fs-4 text-4xl font-bold text-blue-900 italic
             
             ${textColor ? `textColor` : `text-secondary-emphasis`}
              `}
      >
        {heading}
      </h3>
    </div>
  );
};

export default SectionTitle;
