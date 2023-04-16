import Link from "next/link";
import { BsGithub } from "react-icons/bs";
import { FcContacts } from "react-icons/fc";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="hero-section bg-[url(/dark-bg.jpg)] bg-center bg-cover "
    >
      <div className="max-w-7xl mx-auto px-2 xl:px-0 h-[calc(100vh_-_68px)] flex flex-col items-start justify-evenly text-center">
        <div className="lg:text-left">
          <h1 className="text-3xl mb-10 text-darkHeading">
            Salut, je suis
            <span className="text-darkAccent">Mickael Keita</span>
            développeur web.
          </h1>
          <p className="text-darkText leading-7 mb-10 text-xl">
            Ayant toujours été attiré par la programation et les nouvelles
            technologies, j&apos;ai donc suivi une formation sur OpenClassroom
            afin d&apos;acquérir de solides compétences. Sur ce site, vous
            verrez différents projets que j&apos;ai réalisés sur des
            technologies telles que JAVASCRIPT et REACT
          </p>
        </div>
        <div>
          <ul className="text-3xl flex items-center gap-2">
            <li className="text-darkText bg-darkSecondary p-2">
              <a href="https://github.com/mickaelk98" target="_blank">
                <BsGithub />
              </a>
            </li>
            <li className="bg-darkAccent w-[46px] h-[46px] flex items-center justify-center">
              <a
                href="https://www.linkedin.com/in/mickael-keita/"
                target="_blank"
              >
                <span className="font-bold text-darkHeading m-auto">in</span>
              </a>
            </li>
            <li className="bg-darkSecondary p-2">
              <Link href="/contact">
                <FcContacts />
              </Link>
            </li>
            <li className="bg-darkSecondary w-[46px] h-[46px] flex items-center justify-center cursor-pointer text-darkHeading font-bold p-2">
              cv
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
