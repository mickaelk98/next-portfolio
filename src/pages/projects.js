import Head from "next/head";
import Header from "@/components/Header/Header";
import ProjectsList from "@/components/Projects/components/ProjectsList";
import TransitionEffect from "@/components/TransitionEffect/TransitionEffect";

export default function Projects() {
  return (
    <>
      <Head>
        <title>Mickael Keita - Portfolio | Projets</title>
        <meta
          name="description"
          content="Bienvenue sur mon portfolio, je suis mickael keita jeune développeur web formé chez openclassroom sur ce site vous verrez différents projets que j'ai réalisé et vous pourrez me contacter directement, alors n'hésitez pas."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/logo.png" />
      </Head>
      <TransitionEffect />
      <Header />
      <section
        id="projects"
        className="min-h-[calc(100vh_-_68px)] flex px-2 xl:px-0 items-center justify-center dark:bg-darkPrimary"
      >
        <div className="px-2 max-w-7xl mx-auto lg:px-0 py-10">
          <ProjectsList />
        </div>
      </section>
    </>
  );
}
