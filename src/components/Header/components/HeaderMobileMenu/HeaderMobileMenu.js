import { RxCross1 } from "react-icons/rx";

export default function HeaderMobileMenu({ hideHeaderMobileMenu }) {
  return (
    <nav className="fixed top-0 left-0 h-screen w-full bg-darkBg text-darkHeading flex flex-col items-end">
      <RxCross1
        className="text-5xl mt-5 mr-5 cursor-pointer hover:text-darkText transition-all duration-300"
        onClick={hideHeaderMobileMenu}
      />
      <ul className="flex items-center justify-center flex-col gap-24 text-5xl h-screen w-full">
        <li className="cursor-pointer hover:text-darkText transition-all duration-300">
          Accueil
        </li>
        <li className="cursor-pointer hover:text-darkText transition-all duration-300">
          Projets
        </li>
        <li className="cursor-pointer hover:text-darkText transition-all duration-300">
          Contact
        </li>
      </ul>
    </nav>
  );
}
