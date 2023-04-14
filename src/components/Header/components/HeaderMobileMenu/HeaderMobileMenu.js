import { RxCross1 } from "react-icons/rx";

export default function HeaderMobileMenu({ hideHeaderMobileMenu }) {
  return (
    <nav className="fixed top-0 left-0 h-screen w-full bg-darkBg text-darkHeading flex flex-col items-end">
      <RxCross1
        className="text-5xl mt-5 mr-5 cursor-pointer hover:text-darkText transition-all duration-300"
        onClick={hideHeaderMobileMenu}
      />
      <ul className="flex items-center justify-center flex-col gap-24 text-5xl h-screen w-full">
        <li className="hover:text-darkText transition-all duration-300">
          <a href="#home">Accueil</a>
        </li>
        <li className="hover:text-darkText transition-all duration-300">
          <a href="#projects">Projets</a>
        </li>
        <li className="hover:text-darkText transition-all duration-300">
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}
