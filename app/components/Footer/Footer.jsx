import logo from "@/public/images/logo.jpeg";
import Image from "next/image";
import CombinedSocial from "../SocialIcon/CombinedSocial";

const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center bg-[#F7F7F7]/90 text-primary-content p-10">
      <aside>
        <Image src={logo} alt="Billal Hossain" width={100} height={100} />

        <p className="font-bold text-slate-800">
          Bellal Hossen & Associates Income Tax, VAT & Company Law Consultants.
          <br />
          Providing reliable service since 2010
        </p>
        <p className="text-slate-800">
          Copyright © {new Date().getFullYear()} - All right reserved
        </p>
      </aside>

      <CombinedSocial footer={true} />
    </footer>
  );
};

export default Footer;
