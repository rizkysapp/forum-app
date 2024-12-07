"use client";

import Container from "@/components/Container";
import { useParams } from "next/navigation";
import React from "react";
import { GoInbox, GoBell } from "react-icons/go";
import ModalPost from "./ModalPost";
import DropdownNotice from "./DropdownNotice";

const navMenu = [{ icon: GoBell }, { icon: GoInbox }];

const Navbar = () => {
  const param = useParams();

  return (
    <div className="">
      <Container>
        <div className="flex-between py-5 border-b">
          <div className="">
            <h1 className="text-2xl font-semibold">Logo</h1>
          </div>
          <div className="flex justify-center items-center space-x-4">
            <div className="flex-center space-x-2">
              <DropdownNotice alt="icon name" name="Name user" fallbackImg="" textNotice="hi" srcImage="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80" />
            </div>
            <div className="border-l px-3 flex-center space-x-2">
              <h1>Buat Pertanyaan</h1>
              <ModalPost />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
