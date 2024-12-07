import React from "react";
import { UserProfile } from "./User";
import { AiOutlineHome, AiOutlineFolderAdd } from "react-icons/ai";
import { LuMails } from "react-icons/lu";
import { TbFolderQuestion } from "react-icons/tb";
import { RiQuestionAnswerLine } from "react-icons/ri";
import { LuFolderHeart } from "react-icons/lu";
import { IoHelpBuoyOutline, IoSettingsOutline, IoInformationCircleOutline, IoBookmarkOutline } from "react-icons/io5";
import Link from "next/link";

const listMenu = [
  { title: "Beranda", href: "dashboard", icon: AiOutlineHome },
  { title: "Post", href: "post", icon: AiOutlineFolderAdd },
  { title: "Status", href: "status", icon: LuMails },
  { title: "Pertanyaan anda", href: "u/question", icon: TbFolderQuestion },
  { title: "Jawaban anda", href: "u/answer", icon: RiQuestionAnswerLine },
  { title: "Like", href: "u/like", icon: LuFolderHeart },
  { title: "Tersimpan", href: "u/saved", icon: IoBookmarkOutline },
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
            {listMenu.map(({ title, href, icon: Icon }, i) => (
              <Link href={href} className="menu-list" key={i}>
                <Icon size={20} />
                <p>{title}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-16">
        <h1 className="text-sm">INFO DAN DUKUNGAN</h1>
        <div className="mt-2">
          <Link href={"help"} className="menu-list">
            <IoHelpBuoyOutline size={20} />
            <p>Bantuan</p>
          </Link>
          <Link href={"about"} className="menu-list">
            <IoInformationCircleOutline size={20} />
            <p>Tentang</p>
          </Link>
          <Link href={"setting"} className="menu-list">
            <IoSettingsOutline size={20} />
            <p>Pengaturan</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
