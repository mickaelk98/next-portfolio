export default function HeaderMenu() {
  return (
    <nav className="hidden md:block">
      <ul className="flex items-center justify-between gap-7 cursor-pointer text-xl">
        <li className="hover:text-darkText transition-all duration-300">
          Accueil
        </li>
        <li className="hover:text-darkText transition-all duration-300">
          Projets
        </li>
        <li className="hover:text-darkText transition-all duration-300">
          Contact
        </li>
      </ul>
    </nav>
  );
}
