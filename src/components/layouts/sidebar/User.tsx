"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React from "react";

const UserMenu = () => {
  const param = useRouter();

  return (
    <div>
      <div className="flex flex-col justify-center items-center space-y-2 px-2">
        <Button onClick={() => param.push("/masuk")} variant={"outline"} size={"full"}>
          Masuk
        </Button>
        <Button onClick={() => param.push("/daftar")} variant={"default"} size={"full"}>
          Daftar
        </Button>
      </div>
    </div>
  );
};

const UserProfile = () => {
  const param = useRouter();

  return (
    <div role="button" onClick={() => param.push("/u/profile")} className="border rounded-md p-2 w-full flex justify-start items-center space-x-2 hover:shadow transition">
      <div className="rounded-full w-[50px] h-[50px] bg-gray-300">{/* image */}</div>
      <div>
        <h1 className="font-medium">Nickname</h1>
        <h3 className="text-xs font-light">Status</h3>
      </div>
    </div>
  );
};

export { UserMenu, UserProfile };
