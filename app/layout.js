import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header/Header";
import SubHeader from "./components/Header/SubHeader";
import backGround from "@/public/images/backGround.jpeg";
import Footer from "./components/Footer/Footer";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Bellal Hossen & Associates",
  description: "Income Tax, VAT & Company Law Consultants",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning data-qb-installed>
      <body
        data-new-gr-c-s-check-loaded="14.1256.0"
        data-gr-ext-installed=""
        className={`bg-gray-50 text-gray-800 antialiased mx-auto max-w-[1280px]   `}
      >
        <SubHeader />
        <Header />
        <main className="max-w-[1540px] mx-auto  py-0">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
// className="hero h-screen bg-[url('/images/billal2.jpeg')] bg-top bg-cover "

//
