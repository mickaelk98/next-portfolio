import ProjectsList from "@/components/Projects/components/ProjectsList";

export default function Projects() {
  return (
    <section className="bg-darkBg min-h-screen">
      <div className="px-2 max-w-7xl mx-auto">
        <h2 className="text-darkHeading text-4xl uppercase pt-20 pb-10">
          Projets
        </h2>
        <ProjectsList />
      </div>
    </section>
  );
}
