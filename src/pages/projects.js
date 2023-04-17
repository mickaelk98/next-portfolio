import Header from "@/components/Header/Header";
import ProjectsList from "@/components/Projects/components/ProjectsList";

export default function Projects() {
  return (
    <>
      <Header />
      <section
        id="projects"
        className="min-h-[calc(100vh_-_68px)] flex items-center justify-center dark:bg-darkPrimary"
      >
        <div className="px-2 max-w-7xl mx-auto lg:px-0 py-10">
          <ProjectsList />
        </div>
      </section>
    </>
  );
}
