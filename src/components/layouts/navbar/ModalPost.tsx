import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import { IoAdd } from "react-icons/io5";

const ModalPost = () => {
  return (
    <>
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <button className="inline-flex  items-center justify-center rounded-full bg-white p-[10px] font-medium leading-none text-gray-950 shadow-[0_2px_8px] shadow-blackA4 hover:bg-mauve2 focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none">
            <IoAdd size={20} />
          </button>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-blackA6 data-[state=open]:animate-overlayShow" />
          <Dialog.Content className="fixed left-1/2 top-1/2 max-h-[90vh] w-[90vw] max-w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-md bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none data-[state=open]:animate-contentShow">
            <Dialog.Title className="m-0 mb-3 text-[17px] font-medium text-mauve12">Buat Pertanyaan </Dialog.Title>
            <fieldset>
              <textarea
                className="box-border inline-flex w-full h-28 resize-none appearance-none items-center justify-center rounded bg-blackA2 p-2.5 text-[15px] leading-none text-black shadow-[0_0_0_1px] shadow-blackA6 outline-none selection:bg-blackA6 selection:text-white hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black]"
                required
              />
            </fieldset>
            <div className="flex justify-start items-center space-x-2 mt-1">
              {["agama", "dunia", "fiqah"].map((i) => (
                <button className="py-1 px-2 bg-gray-200 rounded-lg text-xs capitalize hover:shadow-md transition" key={i}>
                  {i}
                </button>
              ))}
            </div>
            <div className="mt-[25px] flex justify-end">
              <Dialog.Close asChild>
                <button className="inline-flex gap-1 h-[35px] items-center justify-center rounded bg-blackA2 px-[15px] font-medium leading-none text-gray-700 hover:bg-gray-900 focus:shadow-[0_0_0_2px] focus:shadow-gray-700 transition duration-300 hover:text-white focus:outline-none">
                  <IoAdd />
                  Post
                </button>
              </Dialog.Close>
            </div>
            <Dialog.Close asChild>
              <button
                className="absolute right-2.5 top-2.5 inline-flex size-[25px] appearance-none items-center justify-center rounded-full text-gray-800 hover:bg-blackA4 focus:shadow-[0_0_0_2px] focus:shadow-blackA8 focus:outline-none"
                aria-label="Close"
              >
                <Cross2Icon />
              </button>
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
};

export default ModalPost;
