import FaceBook from "./FaceBook";
import LinkedIn from "./LinkedIn";
import Twitter from "./Twitter";
import YouTube from "./YouTube";

const CombinedSocial = ({ footer }) => {
  return (
    <nav
      className={`grid-flow-col gap-4 md:place-self-center md:${
        footer ? "justify-self-center" : "justify-self-end"
      }`}
    >
      <Twitter />

      <LinkedIn />

      <FaceBook />
      <YouTube />
    </nav>
  );
};

export default CombinedSocial;
