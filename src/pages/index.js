import Head from "next/head";
import Header from "@/components/Header/Header";
import HeroSection from "@/components/HeroSection/HeroSection";
import TransitionEffect from "@/components/TransitionEffect/TransitionEffect";

export default function Home() {
  return (
    <>
      <Head>
        <title>Mickael Keita - Portfolio - Développeur web</title>
        <meta
          name="description"
          content="Bienvenue sur mon portfolio, je suis mickael keita jeune développeur web formé chez openclassroom sur ce site vous verrez différents projets que j'ai réalisé et vous pourrez me contacter directement, alors n'hésitez pas."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/logo.png" />
      </Head>
      <TransitionEffect />
      <Header />
      <main>
        <HeroSection />
      </main>
    </>
  );
}
