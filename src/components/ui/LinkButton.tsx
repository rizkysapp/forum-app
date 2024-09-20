import Link from "next/link";
import React from "react";

interface Props {
  children: React.ReactNode;
  href: string;
  outline?: boolean;
  full?: boolean;
}

const LinkButton: React.FC<Props> = ({ children, href, outline, full }) => {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background duration-300 transition  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ${
        outline
          ? "bg-transparent text-gray-950 outline outline-primary hover:bg-primary hover:text-gray-300"
          : "bg-primary text-gray-300 hover:text-gray-950 outline outline-primary hover:bg-transparent"
      } 
      ${full && "w-full py-2"}`}
    >
      {children}
    </Link>
  );
};

export default LinkButton;
