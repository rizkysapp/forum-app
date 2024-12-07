import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";

const page = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <Card className="w-[550px]">
        <CardHeader className="text-center">
          <CardTitle>Buat Akun</CardTitle>
          <CardDescription className="text-gray-500 text-xs font-light">
            Sudah punya akun{" "}
            <Link className="text-gray-700 underline underline-offset-[3px] hover:text-gray-950" href={"/signup"}>
              Login sekarang
            </Link>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="pt-1">
            <Button type="submit" size={"full"} variant={"outline"}>
              <FcGoogle size={20} />
            </Button>
          </div>
          <div className="text-center py-4 text-sm text-gray-800">
            <p>Atau Daftar</p>
          </div>
          <form>
            <div className="flex flex-col space-y-3">
              <Input placeholder="Nama depan" type="text" />
              <Input placeholder="Nama belakang" type="text" />
              <Input placeholder="Email" type="email" />
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-center items-center">
          <Button type="submit" size={"full"}>
            Berikutnya
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default page;
