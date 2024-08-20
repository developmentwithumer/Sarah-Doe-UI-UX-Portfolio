import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sarah Doe | UI/UX Designer",
  description: "Explore Sarah Doe's UI/UX design portfolio showcasing innovative and user-centric solutions. Discover expertly crafted interfaces, engaging visual designs, and effective user experiences tailored to meet your needs.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="epilogue text-black">
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
