"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const CustomLink = ({ href, children }) => {
  const pathname = usePathname();

  const isActive = pathname === href;

  return (
    <Link
      className={`${isActive && "bg-slate-700 text-white"}`}
      href={`${href}`}
    >
      {children}
    </Link>
  );
};

export default CustomLink;
