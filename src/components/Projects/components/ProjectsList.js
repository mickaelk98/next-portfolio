import ProjectsCard from "@/components/Projects/components/ProjectsCard";
import projects from "@/data/projects";

export default function ProjectsList() {
  return (
    <ul className="flex flex-wrap justify-center lg:justify-between gap-5">
      {projects.map((project) => (
        <li key={project.id}>
          <ProjectsCard project={project} />
        </li>
      ))}
    </ul>
  );
}
