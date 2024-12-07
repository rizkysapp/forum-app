import Container from "@/components/Container";
import Layout from "@/components/layouts/Layout";
import Navbar from "@/components/layouts/navbar/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { IoSearch } from "react-icons/io5";

export default function page() {
  return (
    <main>
      <Layout>
        <Navbar />
        <Container>
          <div className="mt-5 relative flex-center">
            <Input small placeholder="Search" />
            <button className="absolute right-3">
              <IoSearch className="text-gray-600 hover:text-gray-900" size={20} />
            </button>
          </div>
          <Button variant={"ghost"}>test</Button>
        </Container>
      </Layout>
    </main>
  );
}
