import Link from "next/link";
import Image from "next/image";
import comLogo from "@/public/images/logo.jpeg"
import CustomLink from "./CustomLink";

const Header = () => {
  const navItems = (
    <>
      <li>
        {/* <Link href="/">Home</Link> */}
        <CustomLink href="/">Home</CustomLink>
      </li>

      <li>
        <CustomLink href="/about">About Us</CustomLink>
      </li>
      <li>
        <CustomLink href="/services">Services</CustomLink>
      </li>
      <li>
        <CustomLink href="/team">Team</CustomLink>
      </li>
      <li>
        <CustomLink href="/clients">Clients</CustomLink>
      </li>
      <li>
        <CustomLink href="/contact">Contact Us</CustomLink>
      </li>
    </>
  );

  return (
    <div className="navbar sticky top-0 z-50  bg-[#F7F7F7] text-blue-900  text-xl shadow-sm max-w-[1540px] mx-auto py-1 px-8">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-white rounded-box z-1 mt-3 w-52 p-2 shadow md:hidden"
          >
            {navItems}
          </ul>
        </div>
        <Link href="/" >
          {/* daisyUI */}
          <Image
          src={comLogo}
          alt="Logo"
          width={150}
          height={150}
          />
        </Link>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal   px-1">{navItems}</ul>
      </div>
    </div>
  );
};

export default Header;
