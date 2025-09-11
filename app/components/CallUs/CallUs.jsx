import { MdOutlineWifiCalling3 } from "react-icons/md";

const CallUs = () => {
  return (
    <div className="h-96 bg-slate-800 flex flex-wrap justify-center items-center ">
      <MdOutlineWifiCalling3
        className="text-white text-7xl"
        width="200"
        height="200"
      />
      <span className="text-white text-7xl">-</span>
      <span className="text-7xl  oldstyle-nums font-serif text-teal-50">
        01937896468,
      </span>
      <span className="text-7xl oldstyle-nums font-serif text-teal-50">
        01745309814
      </span>
    </div>
  );
};

export default CallUs;
