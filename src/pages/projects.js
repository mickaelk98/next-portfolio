import Header from "@/components/Header/Header";
import ProjectsList from "@/components/Projects/components/ProjectsList";

export default function Projects() {
  return (
    <>
      <Header />
      <section id="projects" className="bg-darkBg  min-h-[calc(100vh_-_68px)]">
        <div className="px-2 max-w-7xl mx-auto">
          <h2 className="text-darkHeading text-4xl uppercase pt-20 pb-10">
            Projets
          </h2>
          <ProjectsList />
        </div>
      </section>
    </>
  );
}
