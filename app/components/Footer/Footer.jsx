import logo from "@/public/images/logo.jpeg";
import Image from "next/image";
import CombinedSocial from "../SocialIcon/CombinedSocial";

const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center bg-[#F7F7F7]/90 text-primary-content p-10">
      <aside>
        <Image src={logo} alt="Billal Hossain" width={100} height={100} />

        <p className="font-bold text-slate-800">
          Bellal Hossen & Associates VAT, Income Tax & Company Law Consultants.
          <br />
          Providing reliable service since 2004
        </p>
        {/* Contact Info */}
        <div className="text-center text-sm text-gray-600 pt-6 border-t">
          <p>
            <strong>Phone:</strong> +88 01937896468,01745309814
          </p>
          <p>
            <strong>Email:</strong> bellalhossen1978@gmail.com
          </p>
          <p>
            <strong>Location:</strong> Confidence Center, Suite-344(3rd Floor)
            Shahjadpur, Gulshan,Dhaka-1212
          </p>
        </div>
        <p className="text-slate-800">
          Copyright © {new Date().getFullYear()} - All right reserved
        </p>
      </aside>

      <CombinedSocial footer={true} />
    </footer>
  );
};

export default Footer;
