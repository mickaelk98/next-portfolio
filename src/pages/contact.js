import Head from "next/head";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { send } from "@emailjs/browser";
import { BsFillTelephoneFill } from "react-icons/bs";
import { AiFillMail, AiFillCheckCircle } from "react-icons/ai";
import { useState } from "react";
import Header from "@/components/Header/Header";
import SocialNetWork from "@/components/SocialNetwork/SocialNetWork";
import TransitionEffect from "@/components/TransitionEffect/TransitionEffect";
import { motion, AnimatePresence } from "framer-motion";

export default function Conatct() {
  const [isLoading, setIsLoading] = useState(false);
  const [messageHasBeenSent, setMessagehasBeenSent] = useState(false);

  const schema = yup.object({
    name: yup
      .string()
      .required("Ce champ est obligatoire")
      .matches(
        /^([a-zéèà]+(( |')[a-zéèà]+)*)+([-]([a-zéèà]+(( |')[a-zéèà]+)*)+)*$/,
        "Vous devez mettre un nom"
      ),
    email: yup
      .string()
      .required("Ce champ est obligatoire")
      .email("Votre saisie ne correspond pas a une adresse email"),
    subject: yup
      .string()
      .required("Ce champ est obligatoire")
      .max(30, "votre sujet est trop long"),
    message: yup
      .string()
      .required("Ce champ est obligatoire")
      .max(1000, "votre message ne doit pas depasser 1000 caractères"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    resolver: yupResolver(schema),
  });

  const sendMessage = async (formValue) => {
    try {
      setIsLoading(true);
      console.log(formValue);
      const templateParams = {
        name: formValue.name,
        email: formValue.email,
        subject: formValue.subject,
        message: formValue.message,
      };

      const templateID = "template_s55k1eg";
      const serviceID = "service_nkh4tr2";
      const publicKey = `${process.env.NEXT_PUBLIC_EMAILJS_PUBLICKEY}`;

      const result = await send(
        serviceID,
        templateID,
        templateParams,
        publicKey
      );

      if (result.status === 200) {
        reset();
        setIsLoading(false);
        setMessagehasBeenSent(true);

        setTimeout(() => {
          setMessagehasBeenSent(false);
        }, 3000);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <Head>
        <title>Mickael Keita - Portfolio | Contact</title>
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
        id="contact"
        className="text-text dark:bg-darkPrimary text-lg py-10 min-h-[calc(100vh_-_68px)] flex flex-col items-center justify-center lg:justify-around"
      >
        <AnimatePresence>
          {messageHasBeenSent && (
            <motion.div
              initial={{ x: "-100vh" }}
              animate={{ x: 0 }}
              transition={{ duration: 1.5 }}
              exit={{ x: "-100vh", transition: { duration: 1.5, delay: 1.6 } }}
              className="flex items-center justify-center w-full"
            >
              <div className="flex flex-col items-center gap-5 bg-success text-text dark:text-secondary w-11/12 max-w-xs rounded-md">
                <div className="flex items-center justify-between pl-2 py-2">
                  <AiFillCheckCircle /> Votre message a bien été envoyé.
                </div>
                <motion.div
                  initial={{ width: "100%", backgroundColor: "#ffffff" }}
                  animate={{ width: "0%", backgroundColor: "ffffff" }}
                  transition={{ duration: 3, delay: 1.6 }}
                  className="h-1 w-full"
                ></motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <div className="px-2 max-w-7xl mx-auto">
          <div className="w-ful flex flex-col lg:flex-row lg:items-start lg:justify-center gap-5">
            <div className="text-left dark:text-darkText px-4 mb-10 w-11/12 lg:max-w-[600px]">
              <h2 className="text-heading dark:text-darkHeading text-3xl uppercase mb-5 lg:mb-20">
                Contact
              </h2>
              <p className="mb-4 lg:mb-10">
                N&apos;hésitez pas à me contacter, je vous répondrai le plus tôt
                possible.
              </p>
              <p className="mb-4 flex gap-3 lg:ml-0">
                <BsFillTelephoneFill /> 06 23 76 91 51
              </p>
              <p className="mb-4 flex gap-3 lg:ml-0 lg:mb-20">
                <AiFillMail /> keitamickaelpro@gmail.com
              </p>
              <SocialNetWork />
            </div>
            <div className="flex items-center justify-center w-full lg:max-w-[600px]">
              <form
                className="w-11/12 max-w-[600px] bg-primary dark:bg-darkSecondary rounded-md p-5 flex flex-col gap-8"
                onSubmit={handleSubmit(sendMessage)}
              >
                <div className="flex flex-col gap-2">
                  <input
                    {...register("name")}
                    className={`outline-none p-2 text-text dark:text-darkText border border-tertiary rounded-md dark:bg-darkSecondary dark:border-darkText ${
                      errors.name ? "border border-error" : ""
                    }`}
                    type="text"
                    placeholder="votre nom"
                  />
                  {errors.name && (
                    <small className="text-error text-lg text-center">
                      {errors.name.message}
                    </small>
                  )}
                </div>

                <div className="flex flex-col gap-2">
                  <input
                    {...register("email")}
                    className={`outline-none p-2 text-text dark:text-darkText border border-tertiary rounded-md dark:bg-darkSecondary dark:border-darkText ${
                      errors.email ? "border border-error" : ""
                    }`}
                    type="email"
                    placeholder="votre email"
                  />
                  {errors.email && (
                    <small className="text-error text-lg text-center">
                      {errors.email.message}
                    </small>
                  )}
                </div>

                <div className="flex flex-col gap-2">
                  <input
                    {...register("subject")}
                    className={`outline-none p-2 text-text dark:text-darkText border border-tertiary rounded-md dark:bg-darkSecondary dark:border-darkText ${
                      errors.subject ? "border border-error" : ""
                    }`}
                    type="text"
                    placeholder="Le sujet de votre message"
                  />
                  {errors.subject && (
                    <small className="text-error text-lg text-center">
                      {errors.subject.message}
                    </small>
                  )}
                </div>

                <div className="flex flex-col gap-2">
                  <textarea
                    {...register("message")}
                    className={`outline-none p-2 text-text h-40 dark:text-darkText border border-tertiary rounded-md dark:bg-darkSecondary dark:border-darkText ${
                      errors.message ? "border border-error" : ""
                    }`}
                    placeholder="votre message"
                  ></textarea>
                  {errors.message && (
                    <small className="text-error text-lg text-center">
                      {errors.message.message}
                    </small>
                  )}
                </div>

                {isLoading ? (
                  <button
                    className="bg-accent/50 transition-all rounded-md duration-300 uppercase text-heading p-2 flex items-center justify-center gap-5"
                    disabled
                  >
                    <div className="w-5 h-5 border-2 border-l-0 border-white rounded-full animate-spin"></div>
                  </button>
                ) : (
                  <button className="bg-accent rounded-md  hover:bg-accent/70 transition-all duration-300 uppercase text-heading p-2">
                    Envoyer
                  </button>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
