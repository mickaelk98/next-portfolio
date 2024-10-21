import Link from "next/link";
import { motion } from "framer-motion";
import { FcContacts } from "react-icons/fc";
import SocialNetWork from "../SocialNetwork/SocialNetWork";

const presentationVariant = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 1,
      delay: 0.8,
    },
  },
};

const socialNetworkVariant = {
  initial: {
    x: "-100vh",
  },
  animate: {
    x: 0,
  },
  hover: {
    scale: 1.1,
    transition: {
      repeatType: "mirror",
      repeat: Infinity,
    },
  },
};

export default function HeroSection() {
  return (
    <section id="home" className="hero-section dark:bg-darkPrimary">
      <div className="max-w-7xl mx-auto px-2 xl:px-0 h-[calc(100vh_-_68px)] flex flex-col items-start justify-evenly text-center">
        <motion.div
          variants={presentationVariant}
          initial="initial"
          animate="animate"
          className="lg:text-left"
        >
          <h1 className="text-3xl mb-10 text-heading dark:text-darkHeading font-bold">
            Salut, je suis
            <span className="text-accent">Mickael Keita</span>
            développeur web.
          </h1>
          <p className="text-text dark:text-darkText leading-7 mb-10 text-xl">
            Depuis toujours attiré par la programmation et les nouvelles technologies, j&apos;ai décidé de transformer cette passion en
            compétences en suivant une formation sur OpenClassrooms, et je poursuis désormais un Bachelor Développeur Web chez myDigitalSchool.
            Sur mon site web, vous trouverez plusieurs projets dynamiques et performants que j&apos;ai réalisés, tant dans le cadre de ma formation que lors de projets personnels. Ceux-ci vont de la création de sites vitrines à des sites e-commerce, en passant par des réseaux sociaux.
          </p>
        </motion.div>
        <div>
          <ul className="text-3xl flex items-center gap-2">
            <SocialNetWork />
            <motion.li
              variants={socialNetworkVariant}
              transition={{ duration: 2, delay: 0.1 }}
              initial="initial"
              animate="animate"
              whileHover="hover"
              className="bg-darkSecondary p-2"
            >
              <Link href="/contact">
                <FcContacts />
              </Link>
            </motion.li>
            <motion.li
              variants={socialNetworkVariant}
              transition={{ duration: 2 }}
              initial="initial"
              animate="animate"
              whileHover="hover"
              className="bg-darkSecondary text-primary w-[46px] h-[46px] flex items-center justify-center cursor-pointer text-heading font-bold p-2"
            >
              <a href="/images/cv.pdf" download>
                cv
              </a>
            </motion.li>
          </ul>
        </div>
      </div>
    </section>
  );
}
