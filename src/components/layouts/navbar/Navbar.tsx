import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import React from "react";
import { GoInbox, GoBell } from "react-icons/go";
import { IoAdd } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className="">
      <Container>
        <div className="flex-between py-5 border-b">
          <div className="">
            <h1 className="text-2xl font-semibold">Logo</h1>
          </div>
          <div className="flex justify-center items-center space-x-4">
            <div className="flex-center space-x-2">
              <Button variant={"hover"} size={"normal"}>
                <GoBell size={20} />
              </Button>
              <Button variant={"hover"} size={"normal"}>
                <GoInbox size={20} />
              </Button>
            </div>
            <div className="border-l px-3 flex-center space-x-2">
              <h1>Buat Pertanyaan</h1>
              <Button variant={"roundedFull"} size={"normal"}>
                <IoAdd size={20} />
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
