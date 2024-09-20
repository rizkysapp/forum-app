import React from "react";

interface Props {
  children: React.ReactNode;
}

const Container: React.FC<Props> = ({ children }) => {
  return (
    <div
      className="
        max-w-[2520px]
        mx-auto 
        xl:px-18
        lg:px-16 
        md:px-12 
        sm:px-4
        px-4"
    >
      {children}
    </div>
  );
};

export default Container;
