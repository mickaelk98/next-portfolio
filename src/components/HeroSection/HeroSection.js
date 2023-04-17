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

// const socialNetworkContainerVariant = {
//   initial: {
//     y: "100vh",
//   },
//   animate: {
//     y: 0,
//     transition: {
//       duration: 1,
//       delay: 1,
//     },
//   },
// };

const socialNetworkVariant = {
  initial: {
    y: "100vh",
  },
  animate: {
    y: 0,
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
    <section
      id="home"
      className="hero-section bg-[url(/dark-bg.jpg)] bg-center bg-cover "
    >
      <div className="max-w-7xl mx-auto px-2 xl:px-0 h-[calc(100vh_-_68px)] flex flex-col items-start justify-evenly text-center">
        <motion.div
          variants={presentationVariant}
          initial="initial"
          animate="animate"
          className="lg:text-left"
        >
          <h1 className="text-3xl mb-10 text-darkHeading">
            Salut, je suis
            <span className="text-darkAccent">Mickael Keita</span>
            développeur web.
          </h1>
          <p className="text-darkText leading-7 mb-10 text-xl">
            Ayant toujours été attiré par la programation et les nouvelles
            technologies, j&apos;ai donc suivi une formation sur OpenClassroom
            afin d&apos;acquérir de solides compétences. Sur ce site, vous
            verrez différents projets que j&apos;ai réalisés sur des
            technologies telles que JAVASCRIPT et REACT
          </p>
        </motion.div>
        <div>
          <ul className="text-3xl flex items-center gap-2">
            <SocialNetWork />
            <motion.li
              variants={socialNetworkVariant}
              transition={{ duration: 2, delay: 0.2 }}
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
              transition={{ duration: 2, delay: 0.3 }}
              initial="initial"
              animate="animate"
              whileHover="hover"
              className="bg-darkSecondary w-[46px] h-[46px] flex items-center justify-center cursor-pointer text-darkHeading font-bold p-2"
            >
              cv
            </motion.li>
          </ul>
        </div>
      </div>
    </section>
  );
}
