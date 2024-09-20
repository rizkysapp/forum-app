import React from "react";
import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";
import Sidebar from "./sidebar/Sidebar";

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="grid grid-cols-5">
      <Sidebar />
      <div className="col-span-4">
        <Navbar />
        <div>{children}</div>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
