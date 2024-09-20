import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import React from "react";

const page = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <Card className="w-[550px]">
        <CardHeader>
          <CardTitle>Buat Akun</CardTitle>
        </CardHeader>
        <CardContent>
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
