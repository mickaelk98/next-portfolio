import Head from "next/head";
import Header from "@/components/Header/Header";
import ProjectsList from "@/components/Projects/components/ProjectsList";
import TransitionEffect from "@/components/TransitionEffect/TransitionEffect";

export default function Projects() {
  return (
    <>
      <Head>
        <title>Mickael Keita - Portfolio | Projets</title>
      </Head>
      <TransitionEffect />
      <Header />
      <section className="min-h-[calc(100vh_-_68px)] px-2 lg:px-0 max-w-7xl mx-auto flex xl:px-0 items-center justify-center">
        <ProjectsList />
      </section>
    </>
  );
}
