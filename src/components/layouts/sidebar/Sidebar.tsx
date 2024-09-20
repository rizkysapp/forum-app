import React from "react";
import { UserMenu, UserProfile } from "./User";
import { AiOutlineHome, AiOutlineFolderAdd, AiOutlineHeart } from "react-icons/ai";
import { LuMails } from "react-icons/lu";
import { TbFolderQuestion } from "react-icons/tb";
import { RiQuestionAnswerLine } from "react-icons/ri";
import { LuFolderHeart } from "react-icons/lu";
import { IoHelpBuoyOutline, IoSettingsOutline, IoInformationCircleOutline } from "react-icons/io5";

const listMenu = [
  { title: "Beranda", icon: <AiOutlineHome size={20} /> },
  { title: "Post", icon: <AiOutlineFolderAdd size={20} /> },
  { title: "Status", icon: <LuMails size={20} /> },
  { title: "Tanya sekarang", icon: <TbFolderQuestion size={20} /> },
  { title: "Jawaban anda", icon: <RiQuestionAnswerLine size={20} /> },
  { title: "Like", icon: <LuFolderHeart size={20} /> },
];

const Sidebar = () => {
  return (
    <div className="py-2 px-3 border-r h-screen">
      <div>
        <div className="flex-center py-3">
          {/* image logo */}
          <h1 className="text-2xl font-semibold">Logo</h1>
        </div>
        <div className="py-4">
          <UserProfile />
        </div>
        <div className="mt-4">
          <h1 className="text-sm">MENU UTAMA</h1>
          <div className="mt-2">
            {listMenu.map((item, i) => (
              <button className="menu-list" key={i}>
                {item.icon}
                <p>{item.title}</p>
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-16">
        <h1 className="text-sm">INFO DAN DUKUNGAN</h1>
        <div className="mt-2">
          <button className="menu-list">
            <IoHelpBuoyOutline size={20} />
            <p>Bantuan</p>
          </button>
          <button className="menu-list">
            <IoInformationCircleOutline size={20} />
            <p>Tentang</p>
          </button>
          <button className="menu-list">
            <IoSettingsOutline size={20} />
            <p>Pengaturan</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
