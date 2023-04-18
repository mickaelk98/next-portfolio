import Head from "next/head";
import Header from "@/components/Header/Header";
import HeroSection from "@/components/HeroSection/HeroSection";
import TransitionEffect from "@/components/TransitionEffect/TransitionEffect";

export default function Home() {
  return (
    <>
      <Head>
        <title>Mickael Keita - Portfolio - Développeur web</title>
      </Head>
      <TransitionEffect />
      <Header />
      <main>
        <HeroSection />
      </main>
    </>
  );
}
