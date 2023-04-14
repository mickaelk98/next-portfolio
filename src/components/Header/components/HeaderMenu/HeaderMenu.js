export default function HeaderMenu() {
  return (
    <nav className="hidden md:block">
      <ul className="flex items-center justify-between gap-7 cursor-pointer text-xl">
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
