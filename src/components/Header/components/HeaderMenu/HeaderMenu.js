import Link from "next/link";

export default function HeaderMenu() {
  return (
    <nav className="hidden md:block">
      <ul className="flex items-center justify-between gap-7 cursor-pointer text-xl">
        <li className="hover:text-darkText transition-all duration-300">
          <Link href="/">Accueil</Link>
        </li>
        <li className="hover:text-darkText transition-all duration-300">
          <Link href="/projects">Projets</Link>
        </li>
        <li className="hover:text-darkText transition-all duration-300">
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
