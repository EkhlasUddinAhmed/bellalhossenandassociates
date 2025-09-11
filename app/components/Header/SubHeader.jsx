import { MdEmail } from "react-icons/md";
import { MdOutlineWifiCalling3 } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
import Link from "next/link";
import Twitter from "../SocialIcon/Twitter";
import LinkedIn from "../SocialIcon/LinkedIn";
import FaceBook from "../SocialIcon/FaceBook";
import YouTube from "../SocialIcon/YouTube";
import CombinedSocial from "../SocialIcon/CombinedSocial";
const SubHeader = () => {
  return (
    <footer className="footer sm:footer-horizontal bg-gradient-to-r from-[#F5F5F4] to-[#d9d6d6] text-neutral-content items-center py-2 px-8">
      <aside className="flex flex-wrap justify-start items-center">
        <div className="flex items-center">
          <MdEmail className="bg-blue-900 text-xl" width="20" height="20" />
          <p className="text-blue-900 text-xl font-semibold ml-2">
            : bellalhossen1978@gmail.com
          </p>
        </div>
        <div className="flex items-center">
          <MdOutlineWifiCalling3
            className="text-blue-900 text-xl"
            width="20"
            height="20"
          />
          <p className="text-blue-900 text-xl font-semibold ml-2">
            : 01937896468,01745309814
          </p>
        </div>
      </aside>
      {/* <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <Twitter />

        <LinkedIn />

        <FaceBook />
        <YouTube />
      </nav> */}
      <CombinedSocial footer={false} />
    </footer>
  );
};

export default SubHeader;
