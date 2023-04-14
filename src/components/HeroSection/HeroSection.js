import { BsGithub, BsLinkedin } from "react-icons/bs";

export default function HeroSection() {
  return (
    <section className="hero-section bg-darkBg bg-[url(/dark-bg.jpg)] bg-center bg-cover ">
      <div className="lg:relative max-w-7xl mx-auto px-2 xl:px-0 h-[calc(100vh_-_68px)] flex flex-col items-center justify-center text-center lg:flex-row-reverse">
        <div>
          <h1 className="text-3xl mb-10 text-darkHeading">
            Salut, je suis{" "}
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
          <div className="mb-40">
            <button className="bg-darkAccent hover:bg-darkAccent/70 transition-all duration-300 uppercase text-darkHeading p-2 mr-4">
              Me contacter
            </button>
            <button className="bg-darkAccent hover:bg-darkAccent/70 transition-all duration-300 uppercase text-darkHeading p-2">
              telechager cv
            </button>
          </div>
        </div>
        <div className="w-full text-white flex items-center lg:w-[100px] lg:flex-col">
          <div className="w-5 h-5 bg-darkAccent rounded-full lg:absolute lg:top-[10px] lg:left-2"></div>
          <div className="w-2/5 h-1 bg-gradient-to-l from-darkHeading to-darkAccent lg:bg-gradient-to-t lg:absolute lg:top-6 lg:left-4 lg:w-1 lg:h-[200px]"></div>
          <ul className="flex gap-5 lg:my-5 mx-5 text-2xl lg:flex-col lg:justify-start lg:absolute lg:top-[220px] lg:-left-4">
            <li className="cursor-pointer hover:scale-110">
              <BsGithub />
            </li>
            <li className="cursor-pointer hover:scale-110">
              <BsLinkedin />
            </li>
          </ul>
          <div className="w-2/5 h-1 bg-gradient-to-r from-darkHeading to-darkAccent lg:bg-gradient-to-b lg:absolute lg:top-[330px] lg:left-4 lg:w-1 lg:h-[200px]"></div>
        </div>
      </div>
    </section>
  );
}
