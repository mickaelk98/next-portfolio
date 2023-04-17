import { motion } from "framer-motion";

export default function TransitionEffect() {
  return (
    <>
      <motion.div
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        exit={{ x: ["0%", "100%"], width: ["0%", "100%"] }}
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-30 dark:bg-darkSecondary bg-accent"
      ></motion.div>
      <motion.div
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        transition={{ delay: 0.2, duration: 0.8, ease: "easeInOut" }}
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-20 dark:bg-accent bg-primary"
      ></motion.div>
      <motion.div
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        transition={{ delay: 0.4, duration: 0.8, ease: "easeInOut" }}
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-10 bg-darkPrimary"
      ></motion.div>
    </>
  );
}
