import Link from "next/link";
import { motion, useCycle } from "framer-motion";
import { RxCross1 } from "react-icons/rx";

const mobileNavVariant = {
  animationOnEnter: {
    x: [-1000, 0],
    opacity: [0, 1],
    transition: {
      x: {
        duration: 0.4,
      },
    },
  },
  animationOnLeave: {
    x: [0, 1000],
    opacity: [1, 0],
    transition: {
      x: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  },
};

const liVariant = {
  initial: {
    x: "-100vh",
  },
  animate: {
    x: 0,

    transition: {
      delay: 0.5,
      duration: 0.5,
    },
  },
  hover: {
    scale: 1.2,
    color: "#004BA8",
  },
};

export default function HeaderMobileMenu({ hideHeaderMobileMenu }) {
  const [animation, cycleAnimation] = useCycle(
    "animationOnEnter",
    "animationOnLeave"
  );
  const liText = [
    ["Accueil", "/"],
    ["Projets", "/projects"],
    ["Contact", "/contact"],
  ];
  return (
    <motion.nav
      variants={mobileNavVariant}
      animate={animation}
      className="fixed top-0 left-0 h-screen w-full bg-primary text-black flex flex-col items-end"
    >
      <RxCross1
        className="text-5xl mt-5 mr-5 cursor-pointer hover:text-darkText transition-all duration-300"
        onClick={() => {
          cycleAnimation();
          setTimeout(() => {
            hideHeaderMobileMenu();
          }, 500);
        }}
      />
      <ul className="flex items-center justify-center flex-col gap-24 text-5xl h-screen w-full">
        {liText.map((item) => (
          <motion.li
            variants={liVariant}
            initial="initial"
            animate="animate"
            transition={{ stiffness: 300, type: "spring" }}
            whileHover="hover"
            key={item}
          >
            <Link href={item[1]}>{item[0]}</Link>
          </motion.li>
        ))}
      </ul>
    </motion.nav>
  );
}
