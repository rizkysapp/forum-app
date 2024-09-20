import { Button } from "@/components/ui/button";
import LinkButton from "@/components/ui/LinkButton";

export default function Home() {
  return (
    <main>
      <div className="flex flex-col justify-center items-center h-screen w-full px-10 bg-gradient-home">
        <div className="flex flex-col justify-center items-center">
          {/* Logo */}
          <div className="text-6xl font-Playfair text-center font-bold mb-3">
            Forum Tanya Jawab <h1>Seputaran Masalah Agama</h1>
          </div>
          <p className="text-sm text-gray-700 font-light text-center w-[60%]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum voluptates labore excepturi. Quos magni, repudiandae rem minus saepe pariatur nam iste perspiciatis sit optio suscipit odio
            fuga molestiae vitae libero.
          </p>
        </div>
        <div className="mt-5 flex flex-col justify-center items-center space-y-3 w-[60%]">
          <LinkButton href="/login" full>
            Masuk
          </LinkButton>
          <LinkButton href="/signup" outline full>
            Daftar
          </LinkButton>
        </div>
      </div>
    </main>
  );
}
