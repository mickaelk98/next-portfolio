import Image from "next/image";

export default function ProjectsCard({ project }) {
  return (
    <article className="mb-10 text-darkText max-w-[400px] bg-darkSecondary rounded-md">
      <div className="max-h-44 overflow-hidden">
        <Image src={project.image} alt="image" width={400} height={400} />
      </div>
      <div className="p-2">
        <h3 className="uppercase text-darkHeading text-xl">{project.title}</h3>
        <ul className="my-2 flex flex-wrap gap-4 uppercase text-darkAccent">
          {project.technologies.map((technologie) => (
            <li key={technologie}>{technologie}</li>
          ))}
        </ul>
        <p className="mb-4">{project.description}</p>
        <div className="my-2">
          <a className="mr-4" href={project.siteLink} target="_blank">
            <button className="bg-darkAccent hover:bg-darkAccent/70 transition-all duration-300 uppercase text-darkHeading p-2 mr-4">
              Voir le projet
            </button>
          </a>
          <a href={project.codeLink} target="_blank">
            <button className="bg-darkAccent hover:bg-darkAccent/70 transition-all duration-300 uppercase text-darkHeading p-2 mr-4">
              Voir le code
            </button>
          </a>
        </div>
      </div>
    </article>
  );
}
