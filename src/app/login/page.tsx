"use client";

import FormLogin from "@/components/layouts/login/FormLogin";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const router = useRouter();

  return (
    <div className="flex justify-center items-center h-screen">
      <Card className="w-[550px]">
        <CardHeader className="text-center">
          <CardTitle>Selamat datang kembali</CardTitle>
          <CardDescription className="text-gray-500 text-xs font-light">
            Baru di Name?{" "}
            <Link className="text-gray-700 underline underline-offset-[3px] hover:text-gray-950" href={"/signup"}>
              Daftar sekarang
            </Link>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="pt-1">
            <Button type="button" onClick={() => router.push("")} size={"full"} variant={"outline"}>
              <FcGoogle size={20} />
            </Button>
          </div>
          <div className="text-center py-4 text-sm text-gray-800">
            <p>Atau masuk</p>
          </div>
          <FormLogin />
        </CardContent>
        <CardFooter className="flex flex-col justify-center items-center">
          <div className="mt-5 py-2 border-t text-sm font-light text-gray-700">
            Dengan melanjutkan, Kamu menerima{" "}
            <Link className="text-gray-950 underline underline-offset-2" href={"/"}>
              Syarat Penggunaan
            </Link>{" "}
            dan{" "}
            <Link className="text-gray-950 underline underline-offset-2" href={"/"}>
              Kebijakan Privasi
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Login;
