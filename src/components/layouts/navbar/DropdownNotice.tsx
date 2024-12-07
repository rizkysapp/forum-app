import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import * as Avatar from "@radix-ui/react-avatar";
import { BellIcon } from "lucide-react";
import React from "react";

interface Props {
  srcImage: string;
  name: string;
  alt?: string;
  fallbackImg?: string;
  textNotice: string;
}

const DropdownNotice: React.FC<Props> = ({ srcImage, name, alt, fallbackImg, textNotice }) => {
  return (
    <div>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger className="focus:ring-black" asChild>
          <button className="flex-center p-1" aria-label="Customise options">
            <BellIcon size={20} />
          </button>
        </DropdownMenu.Trigger>
        <DropdownMenu.Portal>
          <DropdownMenu.Content className="min-w-[350px] pb-4 rounded-lg bg-white py-[5px] px-3 shadow-[0px_10px_30px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade data-[side=right]:animate-slideLeftAndFade data-[side=top]:animate-slideDownAndFade">
            <DropdownMenu.Label className="p-2 font-semibold text-gray-800">Notifikasi</DropdownMenu.Label>
            <DropdownMenu.Item className="group relative flex flex-col justify-start select-none rounded-[3px] px-[12px] py-2 leading-none text-blackA11 outline-none data-[disabled]:pointer-events-none data-[highlighted]:bg-blackA2 data-[disabled]:text-mauve8 data-[highlighted]:text-blackA11">
              <div className="flex items-center gap-2">
                <Avatar.Root className="inline-flex size-[30px] select-none items-center justify-center overflow-hidden rounded-full bg-blackA1 align-middle">
                  <Avatar.Image className="size-full rounded-[inherit] object-cover" src={srcImage} alt={alt} />
                  <Avatar.Fallback className="leading-1 flex size-full items-center justify-center bg-white text-[15px] font-medium text-violet11" delayMs={600}>
                    CT
                  </Avatar.Fallback>
                </Avatar.Root>
                <h1 className="text-[15px]">{name}</h1>
              </div>
              <p className="pl-[5px] text-sm text-mauve11 group-data-[disabled]:text-mauve11 group-data-[highlighted]:text-blackA8 mt-3">{textNotice}</p>
              <div className="border-b-2 border-gray-600 mt-3"></div>
            </DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Portal>
      </DropdownMenu.Root>
    </div>
  );
};

export default DropdownNotice;
