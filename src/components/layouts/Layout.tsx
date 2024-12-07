import React from "react";
import Sidebar from "./sidebar/Sidebar";

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="grid grid-cols-5">
      <Sidebar />
      <div className="col-span-4">
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Layout;
