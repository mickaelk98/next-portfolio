import { Montserrat } from "next/font/google";
import "@/styles/globals.css";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import Head from "next/head";
import Header from "@/components/Header/Header";
import ThemeProvider from "@/components/ThemeProvider/ThemeProvider";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function App({ Component, pageProps }) {
  const router = useRouter();
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Bienvenue sur mon portfolio, je suis mickael keita jeune développeur web formé chez openclassroom sur ce site vous verrez différents projets que j'ai réalisé et vous pourrez me contacter directement, alors n'hésitez pas."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/images/logo.png" />
      </Head>
      <ThemeProvider>
        <main
          className={`${montserrat.className} text-text dark:text-darkHeading dark:bg-darkPrimary dark:bg-none bg-gradient-to-b from-[#D6DBDC] to-white`}
        >
          <AnimatePresence mode="wait">
            <Component key={router.asPath} {...pageProps} />;
          </AnimatePresence>
        </main>
      </ThemeProvider>
    </>
  );
}
