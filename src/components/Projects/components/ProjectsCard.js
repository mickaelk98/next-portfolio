import { motion } from "framer-motion";
import Image from "next/image";

export default function ProjectsCard({ project }) {
  return (
    <motion.article
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 1 }}
      className="mb-10 text-text dark:text-darkHeading dark:bg-darkSecondary max-w-[400px] text-[15px] shadow-lg rounded-md"
    >
      <div className="max-h-48 overflow-hidden">
        <Image
          src={project.image}
          alt="image"
          width={420}
          height={420}
          priority={true}
        />
      </div>
      <div className="p-2">
        <h3 className="uppercase text-heading text-xl">{project.title}</h3>
        <ul className="my-2 flex flex-wrap gap-2 uppercase text-accent">
          {project.technologies.map((technologie) => (
            <li key={technologie}>{technologie}</li>
          ))}
        </ul>
        <p className="mb-4 dark:text-darkText">{project.description}</p>
        <div className="my-2 flex justify-between flex-wrap gap-y-4">
          <a href={project.siteLink} target="_blank">
            <button className="bg-accent hover:bg-accent/70 transition-all duration-300 uppercase text-heading p-2">
              Voir le projet
            </button>
          </a>
          <a href={project.codeLink} target="_blank">
            {project.codeLink && <button className="bg-accent hover:bg-accent/70 transition-all duration-300 uppercase text-heading p-2">
              Voir le code
            </button>}
          </a>
        </div>
      </div>
    </motion.article>
  );
}
