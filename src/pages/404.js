import Link from "next/link";
import { AiOutlineArrowLeft } from "react-icons/ai";

export default function NotFound() {
  return (
    <main className="h-screen bg-[url(/404-bg.jpg)] bg-center bg-cover text-2xl text-darkHeading flex flex-col items-center justify-center">
      <span>404</span>
      <h1 className="font-bold text-5xl text-center">Page introuvable</h1>
      <span>
        <Link className="flex items-center gap-4 mt-10 cursor-pointer" href="/">
          <AiOutlineArrowLeft className="text-5xl" /> revenir a l&apos;accueil
        </Link>
      </span>
    </main>
  );
}
