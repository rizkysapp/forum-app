import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import React, { useState } from "react";

const initialFromDataLogin = {
  email: "",
  password: "",
  rememberMe: false,
};

const FormLogin = () => {
  const [formdata, setFormdata] = useState(initialFromDataLogin);

  const handleChange = (e: any) => {
    setFormdata({ ...formdata, [e.target.email]: e.target.value });
  };

  return (
    <>
      <form>
        <div className="flex flex-col space-y-3">
          <Input value={formdata.email} placeholder="Email" type="email" />
          <Input value={formdata.password} placeholder="Password" type="password" />
        </div>
        <div className="flex justify-between items-center mt-2 ml-1">
          <div className="flex items-center space-x-1">
            <Checkbox id="reminder" />
            <label htmlFor="reminder" className="text-sm font-light text-gray-800 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
              Ingat saya
            </label>
          </div>
          <Link href={"/"} className="text-sm font-light text-gray-800 underline underline-offset-2">
            Lupa kata sandi
          </Link>
        </div>
        <div className="mt-5">
          <Button type="submit" size={"full"}>
            Login
          </Button>
        </div>
      </form>
    </>
  );
};

export default FormLogin;
